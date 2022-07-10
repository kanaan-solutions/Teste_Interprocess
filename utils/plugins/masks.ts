export const birthDate = (data: string) => {
  if (data.length <= 10) {
    return data
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  }

  return "";
};

export const completeName = (data: string) => {
  if (data.length > 0) {
    return data
      .replace(/\d/g, "")
      .replace(/[\@#=+,.:;!$%¨&?/'"*()]+/g, "");
  }

  return "";
};

export const cpfMask = (data: string) => {
  if (data?.length <= 14) {
    return data
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return "";
};
