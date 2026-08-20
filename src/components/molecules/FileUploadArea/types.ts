export type FileUploadAreaProps = {
  onFileSelected: (file: File) => void | Promise<unknown>;
};
