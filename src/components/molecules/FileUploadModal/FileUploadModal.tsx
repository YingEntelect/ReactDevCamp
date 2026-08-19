import {
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FC,
} from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

import type { FileUploadModalProps } from "./types";
import { Link } from "react-router";

export const FileUploadModal: FC<FileUploadModalProps> = ({
  show = true,
  onClose,
  onFileSelected,
  progress = null,
  error = null,
  initialFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isUploading = progress !== null;

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
      <ModalBody className="bg-white rounded-b-sm">
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
            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}
            <p className="text-gray-500">Drag and drop a file here</p>
            <input
              ref={inputRef}
              type="file"
              onChange={handleChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Browse files
            </button>
          </div>
        )}
      </ModalBody>
    </Modal>
  );
};
