import { useCallback, useState, useEffect } from 'react';
import {
  createFilePreview,
  revokeFilePreviews,
  replaceTurkishCharacters,
} from '@/utils/fileHelpers';

const useDropzoneHandlers = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [fileInputs, setFileInputs] = useState({});

  const handleInputChange = (fileName, inputName, value) => {
    setFileInputs((prev) => ({
      ...prev,
      [fileName]: {
        ...prev[fileName],
        [inputName]: value,
      },
    }));
  };

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const existingFilesCount = files.length;
      const totalAcceptedFilesCount = existingFilesCount + acceptedFiles.length;
      let finalAcceptedFiles = [];
      let finalRejectedFiles = [];

      if (totalAcceptedFilesCount > 10) {
        const remainingSlots = 10 - existingFilesCount;
        finalAcceptedFiles = acceptedFiles
          .slice(0, remainingSlots)
          .map((file) => replaceTurkishCharacters(file));
        finalRejectedFiles = acceptedFiles.slice(remainingSlots);
      } else {
        finalAcceptedFiles = acceptedFiles.map((file) => replaceTurkishCharacters(file));
      }

      setFiles((previousFiles) => [...previousFiles, ...finalAcceptedFiles.map(createFilePreview)]);

      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      }

      if (finalRejectedFiles.length) {
        setRejected((previousFiles) => [
          ...previousFiles,
          ...finalRejectedFiles.map((file) => ({ file })),
        ]);
      }
    },
    [files]
  );

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
    setFileInputs((inputs) => {
      const newInputs = { ...inputs };
      delete newInputs[name];
      return newInputs;
    });
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
    setFileInputs({});
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  useEffect(() => {
    return () => revokeFilePreviews(files);
  }, [files]);

  return {
    files,
    rejected,
    fileInputs,
    handleInputChange,
    onDrop,
    removeFile,
    removeAll,
    removeRejected,
  };
};

export default useDropzoneHandlers;
