import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pause, Play } from 'lucide-react';

const Slider = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handlePlayPause = () => {
        if (swiperInstance) {
            if (isPlaying) {
                swiperInstance.autoplay.stop();
            } else {
                swiperInstance.autoplay.start();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const images = [

        '/Img/img1.jpeg',
        '/Img/img2.jpeg',
        '/Img/img3.jpeg',
        '/Img/img4.jpeg',

    ];

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-96  object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                onClick={handlePlayPause}
                className="absolute bottom-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
                {isPlaying ? (
                    <>
                        <Play />
                    </>
                ) : (
                    <>
                        <Pause />
                    </>
                )}
            </button>
        </div>
    );
};

export default Slider;