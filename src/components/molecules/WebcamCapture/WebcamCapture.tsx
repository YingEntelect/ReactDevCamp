import { useRef, useState, type FC } from "react";
import Webcam from "react-webcam";

import type { WebcamCaptureProps } from "./types";

const dataUrlToFile = async (
  dataUrl: string,
  fileName: string,
): Promise<File> => {
  const response = await fetch(dataUrl);
  const blob = await response.blob();

  return new File([blob], fileName, { type: blob.type });
};

export const WebcamCapture: FC<WebcamCaptureProps> = ({
  onCapture,
  onSendingChange,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [mediaError, setMediaError] = useState<string | null>(null);
  const isBusy = isSending || !!mediaError;

  const handleCapture = async () => {
    if (isBusy) return;

    const screenshot = webcamRef.current?.getScreenshot();

    if (!screenshot) return;

    setCapturedImage(screenshot);
    setIsSending(true);
    onSendingChange?.(true);

    try {
      const file = await dataUrlToFile(screenshot, `capture-${Date.now()}.jpg`);

      await onCapture(file);
    } finally {
      setIsSending(false);
      setCapturedImage(null);
      onSendingChange?.(false);
    }
  };

  const handleUserMediaError = () => {
    setMediaError(
      "Couldn't access your camera. Check your browser's camera permission, or choose a file instead.",
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      {mediaError && (
        <p role="alert" className="text-sm text-red-600">
          {mediaError}
        </p>
      )}
      <div
        role="group"
        aria-label="Live camera preview"
        className="w-full overflow-hidden rounded-lg bg-black"
      >
        {capturedImage ? (
          <img
            src={capturedImage}
            alt="Captured preview"
            className="w-full"
          />
        ) : (
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            onUserMediaError={handleUserMediaError}
            className="w-full"
          />
        )}
      </div>
      <p id="capture-instructions" className="text-sm text-gray-500">
        Position your document in the frame, then press Capture.
      </p>
      <button
        autoFocus
        type="button"
        onClick={handleCapture}
        aria-disabled={isBusy}
        aria-describedby="capture-instructions"
        className={`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 ${
          isBusy ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        {isSending ? "Sending…" : "Capture photo"}
      </button>
    </div>
  );
};
