export type FileUploadModalProps = {
  show?: boolean;
  onClose?: () => void;
  onFileSelected: (file: File) => void;
  progress?: number | null;
  error?: string | null;
  initialFile?: {
    previewUrl: string;
    fileName: string;
    /**The size of this file in bytes */
    fileSize: number;
  };
};
