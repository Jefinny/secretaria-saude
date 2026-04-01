"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./carousel.module.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    { id: 1, content: "Editais", imgSrc: "/img/banner-paginas/saude-mulher.jpg" },
    { id: 2, content: "Atendimento médico", imgSrc: "/img/banner-paginas/tuberculose.jpg" },
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", position: "absolute" }),
    center: { x: 0, position: "absolute" },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", position: "absolute" }),
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <AnimatePresence custom={direction}>
          <motion.img
            key={slides[currentSlide].id}
            src={slides[currentSlide].imgSrc}
            alt={slides[currentSlide].content}
            className={styles.carouselImage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`${styles.dot} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
