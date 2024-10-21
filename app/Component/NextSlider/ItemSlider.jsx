"use client";
import React from 'react';
import { assets } from "@/assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Image from 'next/image';
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

function ItemSlider() {
  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        className=""
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}  
        slidesPerGroup={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1.15,
          },
          768: {
            slidesPerView: 1.15,
          },
          1024: {
            slidesPerView: 1.15,
          },
        }}>
        <SwiperSlide className=''>
          <div className="relative w-full h-[400px]">
            <Image
              src={assets.Rectangle2}
              alt="Room 1"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src={assets.Rectangle2}
              alt="Room 2"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <Image
              src={assets.Rectangle2}
              alt="Room 3"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </SwiperSlide>

        <div className="swiper-button-next custom-swiper-button-next"></div>
        <div className="swiper-button-prev custom-swiper-button-prev"></div>
      </Swiper>

      <style jsx>{`
        .custom-swiper-button-next,
        .custom-swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: #fff;
          color:red;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
        }

        .custom-swiper-button-next::after,
        .custom-swiper-button-prev::after {
          content: '';
          border: 1px solid #c19a55; 
          border-width: 0 3px 3px 0;
          padding: 5px;
          display: inline-block;
        }

        .custom-swiper-button-next {
          right: 10px;
        }

        .custom-swiper-button-next::after {
          transform: rotate(-45deg); 
        }

        .custom-swiper-button-prev {
          left: 10px;
        }

        .custom-swiper-button-prev::after {
          transform: rotate(135deg); 
        }

      
        
      
      `}</style>
    </div>
  );
}

export default ItemSlider;
