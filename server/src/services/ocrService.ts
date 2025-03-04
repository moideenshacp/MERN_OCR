import Tesseract from "tesseract.js";

export const performOCR = async (imagePath: string) => {
  try {
    const { data } = await Tesseract.recognize(imagePath, "eng");
    
    return data.text;
  } catch (error) {
    console.error("OCR Error:", error);
  }
};
