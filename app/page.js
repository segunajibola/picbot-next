"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`[ERROR ${res.status}] ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="bg-red-300 h-screen">
      <Navbar />
      <Input updateTerm={text => {setTerm(text)}}/>
      {isLoading && (
        <div className="flex items-center justify-center my-10">
          <p className="text-xl">Loading...</p>
        </div>
      )}
      {images &&
        images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.webformatURL}
              alt={image.tags}
              priority={true}
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        ))}
    </div>
  );
}
