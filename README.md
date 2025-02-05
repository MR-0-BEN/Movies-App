# 🎬 Movies App

**🎥 Live Demo:**  
[![🚀 Visit Demo](https://img.shields.io/badge/Visit%20Demo-%F0%9F%9A%80%20Movies%20App-blueviolet?style=for-the-badge&logo=vercel&logoColor=white&labelColor=000000)](https://movies-app-gamma-sable.vercel.app/)  

Welcome to the Movies App project! This is a React-based web application that allows users to search and explore a vast collection of movies. The project leverages modern web technologies and optimizations to provide a seamless and engaging user experience.

---

## 🛠 Technologies Used

- **⚛️ React**: A JavaScript library for building user interfaces.
- **🎨 Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **🗄 Appwrite**: A backend server for web, mobile, and flutter developers.
- **⚡ Vite**: A fast build tool and development server.
- **🔤 Google Fonts**: For custom typography.
- **🎥 The Movies Database (TMDb) API**: To fetch Movies data.

---

## ✨ Features

- **📱 Responsive Design**: The application is fully responsive and works seamlessly on all devices.
- **🔍 Search Functionality**: Users can search through thousands of movies using the search bar.
- **🔥 Trending Movies**: Displays a list of trending movies based on search counts.
- **🎬 Movies Details**: Each Movies card shows detailed information including title, rating, language, and release year.
- **⏳ Optimized Loading**: Uses a spinner component to indicate loading states.

---

## 🚀 Optimizations

- **🖼 Lazy Loading**: Images are lazy-loaded to improve performance and reduce initial load time.
- **⌛ Debounce in Search**: The search input uses a debounce function to limit the number of API calls, improving performance and reducing unnecessary load on the server.
- **🎨 Tailwind CSS**: Utilizes utility classes for efficient and maintainable styling.
- **🗄 Appwrite Integration**: Efficiently manages search counts and trending movies data.
- **⚡ Vite**: Ensures fast development and build processes.

---

## 📈 Trending Movies

Trending movies are determined by counting how many times a Movies has been searched. Each time a user searches for a Movies, the search count is updated in the Appwrite database. The movies with the highest search counts are displayed as trending.

---

## 🏁 Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MR-0-BEN/Movies-App
   cd Movies-App
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Appwrite project details:

   ```env
   VITE_TMDB_API_KEY=your_TMDB_API_KEY
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Folder Structure

```
📦Movies-App
├── 📂public
└── 📂src
    ├── 📂assets
    ├── 📂components
    │   ├── 📄MovieCard.jsx
    │   ├── 📄Search.jsx
    │   └── 📄Spinner.jsx
    ├── 📄App.jsx
    ├── 📄appwrite.js
    ├── 📄index.css
    └── 📄main.jsx
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## 📜 License

This project is licensed under the MIT License.

---

Thank you for checking out the Movies App project! We hope you enjoy using it as much as we enjoyed building it. 🎉
