import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchImage(pagination) {
  const [images, setImages] = useState([]);
  const link = process.env.REACT_APP_IMAGE_API;
  useEffect(() => {
    axios.get(`${link}?page=${pagination}&limit=10`).then((res) => {
      console.log(res.data);
      setImages(res.data);
    });
  }, [pagination]);
  return [images, setImages];
}
