export const createFilePreview = (file) =>
  Object.assign(file, { preview: URL.createObjectURL(file) });

export const revokeFilePreviews = (files) => {
  files.forEach((file) => URL.revokeObjectURL(file.preview));
};

export const turkishToEnglishMap = {
  ç: 'c',
  ğ: 'g',
  ı: 'i',
  ö: 'o',
  ş: 's',
  ü: 'u',
  Ç: 'C',
  Ğ: 'G',
  İ: 'I',
  Ö: 'O',
  Ş: 'S',
  Ü: 'U',
};

export function replaceTurkishCharacters(file) {
  let newName = file.name
    .split('')
    .map((char) => turkishToEnglishMap[char] || char)
    .join('');
  return new File([file], newName, { type: file.type });
}
