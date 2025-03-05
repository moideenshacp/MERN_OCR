import { Request, Response } from "express";
import { performOCR } from "../services/ocrService";
import ImageModel from "../models/ImageModel";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { imageUrl } = req.body;
    console.log("imageeeeeeeeeeeeeeeeeeeeeeeeeeee",imageUrl);
    
    if (!imageUrl)
      return res.status(400).json({ message: "No image URL provided." });

    const extractedText = await performOCR(imageUrl);
  console.log("textttttttttttttttttttttttttttttttttttttttttttttttt",extractedText);
  
    const image = await ImageModel.create({
      imageUrl,
      extractedText,
    });

    res
      .status(200)
      .json({ message: "Image saved and extracted successfully...", image });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
