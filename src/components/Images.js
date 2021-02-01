import React, { useState, useEffect, useRef } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
export default function Images() {
  const [pagination, setPagination] = useState(1);
  const [images, setImages] = useFetchImage(pagination);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  function handleChange(event) {
    setNewImageUrl(event.target.value);
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setImages([...images, newImageUrl]);
      setNewImageUrl("");
    }
  }

  function handleRemove(index) {
    //1st way
    //setImages(images.filter((image, i) => i !== index));

    //2nd way
    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.length),
    ]);
  }

  const inputRef = useRef(null);
  useEffect(() => {
    //const inputBox = document.getElementById("inputBox");
    //inputBox.focus();
    inputRef.current.focus();
  }, []);

  const imageCount = useRef(images.length);
  useEffect(() => {
    imageCount.current = imageCount.current - 1;
  });

  function handleLeft() {
    if (pagination !== 0) {
      setPagination(pagination - 1);
      console.log(pagination);
    }
  }

  function handleRight() {
    setPagination(pagination + 1);
    console.log(pagination);
  }

  //map is similar to foreach loop, but creates JSX on each iteration
  return (
    <div className="py-5 my-5">
      <div className="my-4" style={{ columnCount: 5 }}>
        <div className="text-center justify-center my-2">
          {/* <p>Number Of Images: {imageCount.current}</p> */}
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setIsHovering(index)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative my-4">
              <i
                className={`fa fa-times absolute right-5 cursor-pointer opacity-25 hover:opacity-200 ${
                  isHovering === index ? "" : "hidden"
                }`}
                onClick={() => handleRemove(index)}
              ></i>
            </div>
            <img
              className="p-1 m-1 border"
              src={image.download_url}
              width="250"
              height="230"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex my-2 justify-center flex-wrap">
        <div className="flex">
          <button
            disabled={newImageUrl === null}
            className="btn btn-primary"
            onClick={handleLeft}
          >
            <i class="fas fa-chevron-circle-left"></i>
          </button>
          <button
            disabled={newImageUrl === null}
            className="btn btn-primary ml-2"
            onClick={handleRight}
          >
            <i class="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>
      <div className="flex my-2 justify-center flex-wrap">
        <div className="flex">
          <input
            className="form-control"
            id="inputBox"
            ref={inputRef}
            type="text"
            value={newImageUrl}
            onChange={handleChange}
          />
          <button
            disabled={newImageUrl === null}
            className={`btn mx-3 ${
              newImageUrl !== "" ? "btn-success" : "btn-danger"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
