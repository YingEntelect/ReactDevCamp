export type WebcamCaptureProps = {
  onCapture: (file: File) => void | Promise<unknown>;
  onSendingChange?: (isSending: boolean) => void;
};
