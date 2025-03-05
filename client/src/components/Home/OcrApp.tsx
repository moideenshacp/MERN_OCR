import React, { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import TextResult from "./TextResult";
import Header from "./Header";
import Button from "../../shared/Button";
import axios from "axios";
import { message } from "antd";

const OcrApp: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageText, setSelectedImageText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);



  //handle image upload function
  
  const handleUpload = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files?.length) return;
    
    const file = fileInputRef.current.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", (import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string));
      
    try {
      setIsLoading(true);
      //uploading image to cloudinary
      const cloudinaryRes  = await axios.post( `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,formData);
      const imageUrl = cloudinaryRes.data.secure_url;

      //sending image for extracting text to backend
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/ocr/extract-text`, {
        imageUrl
      });

      setSelectedImageText(res.data.image.extractedText);
    } catch (error) {
      console.log(error);
      message.error("Error uploading image");
      setSelectedImageText(null);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        // Reset text when a new image is selected
        setSelectedImageText(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setSelectedImage(null);
    setSelectedImageText(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mt-14 mx-auto">
        {/* Header */}
        <Header />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Upload and Image Preview */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div
              className="border-2 border-dashed rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer border-gray-300 overflow-hidden"
              onClick={!selectedImage ? handleSelect : undefined}
            >
              {selectedImage ? (
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Uploaded preview"
                    className="h-56  object-cover rounded-lg"
                  />
                  <button
                    onClick={resetForm}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-500 mb-2">Click to browse an image</p>
                  <p className="text-gray-400 text-sm">
                    Supports JPG, PNG
                  </p>
                </>
              )}
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                label="Extract Text"
                onClick={handleUpload}
                disabled={!selectedImage || isLoading}
              />
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Right Column - Results */}
          <TextResult text={selectedImageText} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default OcrApp;