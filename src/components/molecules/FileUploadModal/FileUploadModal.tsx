import { useState, type FC } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { Link } from "react-router";

import {
  FileUploadArea,
  ProgressBar,
  WebcamCapture,
} from "@project/components";

import cameraIcon from "@project/assets/camera-icon.svg";
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
  const [mode, setMode] = useState<Mode>("upload");
  const [prevShow, setPrevShow] = useState(show);
  const [isCaptureSending, setIsCaptureSending] = useState(false);
  const isUploading = progress !== null;

  const handleToggleMode = () => {
    if (isCaptureSending) return;
    setMode(mode === "upload" ? "camera" : "upload");
  };

  if (show !== prevShow) {
    setPrevShow(show);

    if (!show) {
      setMode("upload");
    }
  }

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
          <ProgressBar progress={progress} />
        ) : (
          <>
            <button
              type="button"
              onClick={handleToggleMode}
              aria-pressed={mode === "camera"}
              aria-disabled={isCaptureSending}
              className={`mx-auto flex items-center gap-2 rounded-full border border-blue-600 px-4 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 ${
                isCaptureSending
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <img src={cameraIcon} />
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
              <FileUploadArea onFileSelected={onFileSelected} />
            )}
          </>
        )}
      </ModalBody>
    </Modal>
  );
};
