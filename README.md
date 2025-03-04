# 🖼️ OCR Image Text Extraction App

An **AI-powered** OCR (Optical Character Recognition) application that allows users to upload images and extract text from them. Built using **React**, **Node.js**, **Express**, **Cloudinary**, and **Tesseract.js** for text recognition.

---

## 🚀 Features
- 📸 **Upload images** and extract text from them
- ☁️ **Cloudinary Integration** for image storage
- 🔄 **Real-time text extraction** using Tesseract.js
- 🎨 **Responsive UI** with Tailwind CSS
- 📜 **View extracted text** beautifully formatted

---

## 🛠️ Tech Stack
### **Frontend:**
- React (TypeScript)
- Axios (API Calls)
- Tailwind CSS (Styling)
- Cloudinary (Image Upload)
- Lucide React (Icons)

### **Backend:**
- Node.js & Express.js
- Tesseract.js (OCR Processing)
- Cloudinary API (Image Storage)
- MongoDB & Mongoose (Database)
- CORS & dotenv (Configuration)

---

## 🎯 Project Structure
```
📂 ocr-app
 ├── 📂 client (Frontend)
 │   ├── src/components (React Components)
 │   ├── src/shared (Reusable UI)
 │   ├── src/App.tsx (Main Component)
 │   ├── src/index.tsx (Entry Point)
 │   ├── package.json
 │   └── ...
 │
 ├── 📂 server (Backend)
 │   ├── 📂 config (Database & Cloudinary Config)
 │   ├── 📂 controllers (OCR & Image Handling)
 │   ├── 📂 models (Mongoose Models)
 │   ├── 📂 routes (Express Routes)
 │   ├── 📂 services (OCR Processing)
 │   ├── app.ts (Main Server File)
 │   ├── package.json
 │   └── ...
 │
 ├── .gitignore
 ├── README.md
 └── package.json
```

---

## 🏗️ Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/moideenshacp/MERN_OCR
cd ocr-app
```

### **2️⃣ Install Dependencies**
#### **Backend**
```sh
cd server
npm install
```

#### **Frontend**
```sh
cd client
npm install
```

### **3️⃣ Set up Environment Variables**
Create a **.env** file in the `server/` folder and add:
```
PORT=your_port
MONGO_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### **4️⃣ Run the Application**
#### **Start Backend**
```sh
cd server
npm start
```
#### **Start Frontend**
```sh
cd client
npm run dev
```

---

## 🖼️ How It Works
1️⃣ **Upload an Image** (JPG, PNG, etc.)
2️⃣ **Image gets stored on Cloudinary**
3️⃣ **OCR extracts text using Tesseract.js**
4️⃣ **Text is displayed in the UI**

---

## 📜 API Endpoints
### **Upload Image & Extract Text**
```http
POST /api/ocr/extract-text
```
#### **Request Body:**
```json
{
  "imageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg"
}
```
#### **Response:**
```json
{
  "message": "Image saved and extracted successfully...",
  "image": {
    "imageUrl": "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    "extractedText": "Hello World! This is extracted text."
  }
}
```

---

## 🤝 Contributing
Feel free to **fork** this repository and submit a **pull request** with enhancements, bug fixes, or feature improvements!


🚀 **Happy Coding!** 🎉

