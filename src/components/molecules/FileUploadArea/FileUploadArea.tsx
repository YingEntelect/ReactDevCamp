import {
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FC,
} from "react";

import type { FileUploadAreaProps } from "./types";

export const FileUploadArea: FC<FileUploadAreaProps> = ({ onFileSelected }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (file) {
      onFileSelected(file);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-10 text-center transition-colors ${
        isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"
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
        autoFocus
        type="button"
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Browse files
      </button>
    </div>
  );
};
