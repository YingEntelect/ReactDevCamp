export type FileUploadModalProps = {
  show?: boolean;
  onClose?: () => void;
  onFileSelected: (file: File) => void;
  accept?: string;
  progress?: number | null;
  error?: string | null;
};
