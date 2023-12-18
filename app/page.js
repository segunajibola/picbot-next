"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState("");
  const [currentImg, setCurrentImg] = useState([]);

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
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  function handleImageClick(index) {
    setCurrentImg(images[index]);
    setModal(true);
  }

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

      {term && images.length === 0 && (
        <h1 className="text-xl text-center mx-auto my-10">
          No Images found, please enter a valid picture name.
        </h1>
      )}

      <div className="grid grid-cols-3 m-3 gap-2">
        {images &&
          images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(index)}
              className="h-[200px] w-full"
            >
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

      {modal && (
        <div className="fixed inset-8 bg-green-100 z-10 m-auto w-[24rem] md:w-[60rem] h-[25rem] md:h-[30rem] justify-center items-center flex rounded-lg">
          <Modal
            key={currentImg.id}
            setModal={setModal}
            images={images}
            currentImg={currentImg}
            term={term}
          />
        </div>
      )}
    </div>
  );
}
