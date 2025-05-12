// components/LandingPage.jsx
"use client";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Parallax,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/parallax";

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

export default function LandingPage() {
  useEffect(() => {
    AOS.init({ once: false, mirror: false, duration: 1000 });
  }, []);

  const bannerSlides = [
    "/assets/LandingPage/movil.png",
    "/assets/LandingPage/laptop.png",
  ];

  // Imágenes para el collage (marquee)
  const marqueeImages = [
    "/assets/LandingPage/reporte1.png",
    "/assets/LandingPage/reporte2.png",
    "/assets/LandingPage/fondo.png",
    "/assets/LandingPage/movil.png",
    "/assets/LandingPage/laptop.png",
  ];

  const fashionSlides = [
    { title: "card1", img: "/assets/LandingPage/fondo.png", bg: "#9FA051" },
    { title: "card2", img: "/assets/LandingPage/fondo.png", bg: "#9B89C5" },
    { title: "card3", img: "/assets/LandingPage/fondo.png", bg: "#D7A594" },
    { title: "card4", img: "/assets/LandingPage/fondo.png", bg: "#7AB894" },
    { title: "card5", img: "/assets/LandingPage/fondo.png", bg: "#C57A94" },
  ];

  const infoCards = [
    { img: "/coffee/mid1.png", label: "Podcasts", title: "Información Médica" },
    { img: "/coffee/mid2.png", label: "Videos", title: "Información Médica" },
    { img: "/coffee/mid3.png", label: "Reportes", title: "Información Médica" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div
        className="w-full bg-cover bg-center bg-fixed text-white"
        style={{ backgroundImage: "url('/assets/LandingPage/fondo.png')" }}
      >
        {/* ===== Banner Slider ===== */}
        <div className="max-w-screen-xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            centeredSlides
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-screen"
          >
            {bannerSlides.map((src, idx) => (
              <SwiperSlide key={idx} className="cursor-pointer">
                <div className="h-full flex items-center">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                      <h1
                        className="md:text-8xl text-5xl font-bold py-4"
                        data-aos="fade-right"
                      >
                        MEDxPro APP
                      </h1>
                      <p className="py-4" data-aos="fade-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-center"
                      data-aos="fade-left"
                    >
                      <Image src={src} width={600} height={600} alt="App view" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== Scroll-Triggered Sections ===== */}
        <section className="max-w-screen-xl mx-auto px-4 my-20">

          {/* ===== Collage Marquee ===== */}
          <div data-aos="fade-up" className="overflow-hidden py-8">
            <div className="inline-flex marquee gap-4">
              {/* duplicamos el array para scroll infinito */}
              {[...marqueeImages, ...marqueeImages].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-72 relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`Collage ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Vídeo ===== */}
          <div data-aos="fade-up" className="mb-12">
            <h2 className="text-4xl font-bold mb-4">MEDxPro</h2>
            <video
              src="/assets/LandingPage/Videos/medx-texto_cambios.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* ===== Fashion Slider ===== */}
          <div data-aos="fade-up" className="mb-12 relative">
            <h2 className="text-4xl font-bold mb-4">Informacion</h2>
            <Swiper
              modules={[EffectCoverflow, Parallax, Pagination, Navigation, Autoplay]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              parallax
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              speed={1300}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="fashion-slider py-8"
            >
              {fashionSlides.map((slide, idx) => (
                <SwiperSlide
                  key={idx}
                  data-slide-bg-color={slide.bg}
                  style={{ width: 1000, backgroundColor: slide.bg }}
                >
                  <div
                    className="fashion-slider-title"
                    data-swiper-parallax="-130%"
                  >
                    <div
                      className="fashion-slider-title-text"
                      data-swiper-parallax="-100%"
                    >
                      {slide.title}
                    </div>
                  </div>
                  <div
                    className="fashion-slider-scale"
                    data-swiper-parallax="-165%"
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* botones personalizados */}
            <div
              ref={prevRef}
              className="fashion-slider-button-prev fashion-slider-button"
            />
            <div
              ref={nextRef}
              className="fashion-slider-button-next fashion-slider-button"
            />
          </div>
        </section>

        {/* ===== Info Cards ===== */}
        <section className="max-w-screen-xl mx-auto px-4 py-20" data-aos="fade-up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold">
              Todo sobre MEDxPro APP
            </h1>
            <p className="py-4 md:w-2/4 mx-auto text-gray-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              optio quisquam dicta maxime, perferendis veniam!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="relative bg-white text-black shadow-lg hover:shadow-xl px-8 md:px-12 py-8 rounded-lg hover:scale-105 transition-all"
                data-aos="fade-left"
                data-aos-duration={1200 + i * 200}
                data-aos-easing="ease-in-out-back"
              >
                <div className="grid grid-cols-2 gap-6 items-end">
                  <Image
                    src={card.img}
                    width={280}
                    height={280}
                    alt={card.title}
                    className="absolute -right-8 bottom-0"
                  />
                  <div>
                    <p className="text-gray-500 text-lg">{card.label}</p>
                    <h3 className="text-3xl py-2 font-semibold text-gray-700">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="py-3 text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                  dicta alias id, nostrum rerum cum ducimus omnis sequi cumque nam.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ==== estilos globales override ==== */}
      <style jsx global>{`
        /* Marquee */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }

        /* Fashion slider buttons */
        .fashion-slider-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          z-index: 10;
          cursor: pointer;
        }
        .fashion-slider-button-prev {
          left: 16px;
        }
        .fashion-slider-button-next {
          right: 16px;
        }
        .fashion-slider-button svg {
          display: block;
          width: 100%;
          height: 100%;
          fill: white;
          stroke: white;
        }
        .fashion-slider-button-next .fashion-slider-svg-circle-wrap circle {
          fill: none;
          stroke: white;
          stroke-width: 2;
        }
      `}</style>
    </>
  );
}
