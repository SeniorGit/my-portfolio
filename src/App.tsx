'use client'
import './App.css'
import Home from './pages/home'
import AllProject from './pages/allproject'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
function App() {

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alfito Nur Fadhila",
      "jobTitle": "Fullstack Developer",
      "url": "https://alfitodev.my.id",
      "image": "https://alfitodev.my.id/og-image.png",
      "sameAs": [
        "https://linkedin.com/in/alfitofadhil",
        "https://github.com/SeniorGit"
      ],
      "knowsAbout": ["JavaScript", "React", "Node.js", "Next.js", "Web Development"],
      "description": "Fresh graduate Computer Scientist specializing in Frontend and Backend development"
    };

    const oldScript = document.getElementById('structured-data');
    if (oldScript) {
      oldScript.remove();
      console.log('Hapus structured data lama');
    }

    const newScript = document.createElement('script');
    newScript.type = 'application/ld+json';
    newScript.id = 'structured-data'; 
    newScript.text = JSON.stringify(structuredData);
    document.head.appendChild(newScript);
    
    console.log('Tambah structured data baru');
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<AllProject/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
