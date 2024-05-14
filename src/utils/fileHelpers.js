export const createFilePreview = (file) =>
  Object.assign(file, { preview: URL.createObjectURL(file) });

export const revokeFilePreviews = (files) => {
  files.forEach((file) => URL.revokeObjectURL(file.preview));
};
