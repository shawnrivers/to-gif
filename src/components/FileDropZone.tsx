import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { joinClassNames } from 'utils/class';

const VALID_FILE_TYPES = ['video/mp4'];

export type FileDropZoneProps = {
  className?: string;
  onFileLoaded(file: File): void;
  onFileLoadFailed(message: string): void;
};

export const FileDropZone: React.FC<FileDropZoneProps> = props => {
  const { onFileLoaded, onFileLoadFailed } = props;

  const handleDrop = React.useCallback(
    (files: File[]) => {
      if (files.length !== 1) {
        onFileLoadFailed('Please only upload one file at a time.');
        return;
      }

      const file = files[0];

      if (!VALID_FILE_TYPES.includes(file.type)) {
        onFileLoadFailed('Invalid file type.');
        return;
      }

      onFileLoaded(file);
    },
    [onFileLoadFailed, onFileLoaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: false,
  });

  return (
    <div
      className={joinClassNames(
        `${
          isDragActive
            ? 'bg-gray-200 border-gray-500 border-dashed'
            : 'bg-gray-400 border-gray-900 border-solid'
        } max-w-4xl min-h-full px-8 py-16 rounded-lg border-2 flex items-center justify-center cursor-pointer`,
        props.className
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <p className="text-xl">Drop file or click to upload file</p>
    </div>
  );
};