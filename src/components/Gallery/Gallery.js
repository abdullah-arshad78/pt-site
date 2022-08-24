import React from "react";
import "./Gallery.scss";
import galleryImg1 from "../../assets/gallery-1.jpg";
import galleryImg2 from "../../assets/gallery-2.jpg";
import galleryImg3 from "../../assets/gallery-3.jpg";
import galleryImg4 from "../../assets/gallery-4.jpg";
import galleryImg5 from "../../assets/gallery-5.jpg";
import galleryImg7 from "../../assets/gallery-7.jpg";
import galleryImg6 from "../../assets/gallery-6.jpg";
import galleryImg8 from "../../assets/gallery-8.jpg";
import galleryImg9 from "../../assets/gallery-9.jpg";
import galleryImg10 from "../../assets/gallery-10.jpg";
import galleryImg11 from "../../assets/gallery-11.jpg";
import galleryImg12 from "../../assets/gallery-12.jpg";
import galleryImg13 from "../../assets/gallery-13.jpg";
import galleryImg14 from "../../assets/gallery-14.jpg";

const Gallery = () => {
  const galleryData = [
    {
      image: galleryImg1,
      altText: "Image 1",
      Id: "img1",
      figureClass: "gallery__item--1",
    },
    {
      image: galleryImg2,
      altText: "Image 2",
      Id: "img2",
      figureClass: "gallery__item--2",
    },
    {
      image: galleryImg3,
      altText: "Image 3",
      Id: "img3",
      figureClass: "gallery__item--3",
    },
    {
      image: galleryImg4,
      altText: "Image 4",
      Id: "img4",
      figureClass: "gallery__item--4",
    },
    {
      image: galleryImg5,
      altText: "Image 5",
      Id: "img5",
      figureClass: "gallery__item--5",
    },
    {
      image: galleryImg6,
      altText: "Image 6",
      Id: "img6",
      figureClass: "gallery__item--6",
    },
    {
      image: galleryImg7,
      altText: "Image 7",
      Id: "img7",
      figureClass: "gallery__item--7",
    },
    {
      image: galleryImg8,
      altText: "Image 8",
      Id: "img8",
      figureClass: "gallery__item--8",
    },
    {
      image: galleryImg9,
      altText: "Image 9",
      Id: "img9",
      figureClass: "gallery__item--9",
    },
    {
      image: galleryImg10,
      altText: "Image 10",
      Id: "img10",
      figureClass: "gallery__item--10",
    },
    {
      image: galleryImg11,
      altText: "Image 11",
      Id: "img11",
      figureClass: "gallery__item--11",
    },
    {
      image: galleryImg12,
      altText: "Image 12",
      Id: "img12",
      figureClass: "gallery__item--12",
    },
    {
      image: galleryImg13,
      altText: "Image 13",
      Id: "img13",
      figureClass: "gallery__item--13",
    },
    {
      image: galleryImg14,
      altText: "Image 14",
      Id: "img14",
      figureClass: "gallery__item--14",
    },
  ];

  const galleryContent = galleryData.map((item) => (
    <figure key={item.Id} className={`gallery__item ${item.figureClass}`}>
      <img src={item.image} alt={item.altText} className="gallery__img" />
    </figure>
  ));
  return <section className="gallery">{galleryContent}</section>;
};

export default Gallery;
