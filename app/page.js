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
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className={`bg-gray-300 ${isLoading ? "h-screen" : "h-auto"}`}>
      <Navbar />
      <Input
        updateTerm={(text) => {
          setTerm(text);
        }}
      />
      {isLoading && (
        <div className="flex items-center justify-center my-10">
          <p className="text-xl">Loading...</p>
        </div>
      )}
      <div className="grid grid-cols-3 m-3 gap-2">
        {images &&
          images.map((image) => (
            <div key={image.id} className="h-[200px] w-full">
              <Image
                src={image.webformatURL}
                alt={image.tags}
                priority={true}
                width={300}
                height={300}
                className="rounded-md h-full w-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
