import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FC,
} from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { Link } from "react-router";

import { WebcamCapture } from "@project/components";

import type { FileUploadModalProps } from "./types";

type Mode = "upload" | "camera";

export const FileUploadModal: FC<FileUploadModalProps> = ({
  show = true,
  onClose,
  onFileSelected,
  progress = null,
  error = null,
  initialFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const browseButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstModeRenderRef = useRef(true);
  const [isDragging, setIsDragging] = useState(false);
  const [mode, setMode] = useState<Mode>("upload");
  const [prevShow, setPrevShow] = useState(show);
  const [isCaptureSending, setIsCaptureSending] = useState(false);
  const isUploading = progress !== null;

  if (show !== prevShow) {
    setPrevShow(show);

    if (!show) {
      setMode("upload");
    }
  }

  useEffect(() => {
    if (isFirstModeRenderRef.current) {
      isFirstModeRenderRef.current = false;
      return;
    }

    if (mode === "upload") {
      browseButtonRef.current?.focus();
    }
  }, [mode]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (file) {
      onFileSelected(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      onFileSelected(file);
    }
  };

  return (
    <Modal dismissible={!isUploading} show={show} onClose={onClose}>
      <ModalHeader className="bg-white">
        <h1 className="text-black">File upload</h1>
      </ModalHeader>
      <ModalBody className="bg-white rounded-b-sm flex flex-col gap-4">
        {initialFile && (
          <div>
            <Link
              to={initialFile.previewUrl}
              className="text-blue-500 underline"
            >
              {initialFile.fileName}
            </Link>
          </div>
        )}
        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}
        {isUploading ? (
          <div className="flex flex-col items-center justify-center gap-3 p-10">
            <div
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 w-full overflow-hidden rounded-full bg-gray-200"
            >
              <div
                className="h-full rounded-full bg-blue-600 transition-[width]"
                style={{ width: `${Math.round(progress)}%` }}
              />
            </div>
            <p className="text-gray-500">Uploading… {Math.round(progress)}%</p>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                if (isCaptureSending) return;
                setMode(mode === "upload" ? "camera" : "upload");
              }}
              aria-pressed={mode === "camera"}
              aria-disabled={isCaptureSending}
              className={`mx-auto flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 ${
                isCaptureSending
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              {mode === "upload"
                ? "Take a photo instead"
                : "Choose a file instead"}
            </button>
            {mode === "camera" ? (
              <WebcamCapture
                onCapture={onFileSelected}
                onSendingChange={setIsCaptureSending}
              />
            ) : (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-gray-50"
                }`}
              >
                <p className="text-gray-500">Drag and drop a file here</p>
                <input
                  ref={inputRef}
                  type="file"
                  onChange={handleChange}
                  className="hidden"
                />
                <button
                  ref={browseButtonRef}
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Browse files
                </button>
              </div>
            )}
          </>
        )}
      </ModalBody>
    </Modal>
  );
};
