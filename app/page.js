"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import React, { useState, useEffect } from "react";

export default function Home() {

  const [images, setImages] = useState([])
  const [term, setTerm] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="bg-red-300 h-screen">
      <Navbar />
      <Input />
      {images && images?.map(image => (
          <div>
            <img src={image.src} />
          </div>
        ))}
    </div>
  );
}
