"use client";

import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {

  const [isCreated, setIsCreated] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    setIsButtonDisabled(true); 

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
  
    };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();

    if (collection.isCreated) {
      setIsCreated(true);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } else {
      setIsButtonDisabled(false); 
    }

    return;
  };

  return (
    <>
      {isCreated ? (
        <p
          className={`text-color-accent px-2 pt-1 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
          Anime Berhasil Ditambahkan ke Koleksi!
        </p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-accent my-3 mx-2 rounded"
          disabled={isButtonDisabled}>
          Add to Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
