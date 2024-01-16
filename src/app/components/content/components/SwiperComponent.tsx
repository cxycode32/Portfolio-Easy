"use client"

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Slide } from './Slide';
import 'swiper/css';
import { Bullet } from './Bullet';

export const SwiperComponent: React.FC = () => {

    useEffect(() => {
        const swiper = new Swiper('swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: 'swiper-pagination',
            },
            navigation: {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev',
            },
            scrollbar: {
                el: 'swiper-scrollbar',
            },
        });
    }, []);

    return (
        <div className="swiper wcf__slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div className="swiper-wrapper" aria-live='polite'>
                <Slide
                    index="2"
                    ariaLabel="3 / 3"
                    feedback="Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code."
                    name="Cindy Sim"
                    designation="Dreamer"
                />
                <Slide
                    index="0"
                    ariaLabel="1 / 3"
                    feedback="Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code."
                    name="Cindy Sim"
                    designation="Dreamer"
                />
                <Slide
                    index="1"
                    ariaLabel="2 / 3"
                    feedback="Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code."
                    name="Cindy Sim"
                    designation="Dreamer"
                />
                <Slide
                    index="2"
                    ariaLabel="3 / 3"
                    feedback="Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code."
                    name="Cindy Sim"
                    designation="Dreamer"
                />
                <Slide
                    index="0"
                    ariaLabel="1 / 3"
                    feedback="Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code."
                    name="Cindy Sim"
                    designation="Dreamer"
                />
            </div>
            <span className='swiper-notification' aria-live="assertive" aria-atomic="true"></span>
        </div>
    );
};

export const SwiperPagination: React.FC = () => {
    return (
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <Bullet
                ariaLabel="Go to slide 1"
            />
            <Bullet
                ariaLabel="Go to slide 2"
            />
            <Bullet
                ariaLabel="Go to slide 3"
            />
        </div>
    )
}