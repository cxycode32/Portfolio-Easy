"use client"

import React from 'react';
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';
import './SwiperComponent.css';
import 'swiper/css';
import 'swiper/css/bundle';

export const SwiperComponent: React.FC = () => {

    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <div className="slide">
                            <div className="picture">
                                <Image
                                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
                                    alt="Client Image"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="content">
                                <div className='image mb-[45px]'>
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
                                        alt="Client Image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <p className='feedback text-lg font-normal pb-[25px]'>
                                    Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
                                </p>
                                <h3 className='name text-xl font-medium text-blue-950'>
                                    Cindy Sim 1
                                </h3>
                                <p className='designation text-sm font-normal'>
                                    Dreamer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="slide">
                            <div className="picture">
                                <Image
                                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
                                    alt="Client Image"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="content">
                                <div className='image mb-[45px]'>
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
                                        alt="Client Image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <p className='feedback text-lg font-normal pb-[25px]'>
                                    Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
                                </p>
                                <h3 className='name text-xl font-medium text-blue-950'>
                                    Cindy Sim 2
                                </h3>
                                <p className='designation text-sm font-normal'>
                                    Dreamer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="embla__slide">
                        <div className="slide">
                            <div className="picture">
                                <Image
                                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
                                    alt="Client Image"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="content">
                                <div className='image mb-[45px]'>
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
                                        alt="Client Image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <p className='feedback text-lg font-normal pb-[25px]'>
                                    Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
                                </p>
                                <h3 className='name text-xl font-medium text-blue-950'>
                                    Cindy Sim 3
                                </h3>
                                <p className='designation text-sm font-normal'>
                                    Dreamer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="swiper wcf__slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        //     <Swiper pagination={true} modules={[Pagination]} className="swiper-wrapper" aria-live='polite'>
        //         <SwiperSlide className="swiper-slide mr-[20px]">
        // <div className="slide">
        //     <div className="picture">
        //         <Image
        //             src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
        //             alt="Client Image"
        //             width={400}
        //             height={400}
        //         />
        //     </div>
        //     <div className="content">
        //         <div className='image mb-[45px]'>
        //             <Image
        //                 src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
        //                 alt="Client Image"
        //                 width={40}
        //                 height={40}
        //             />
        //         </div>
        //         <p className='feedback text-lg font-normal pb-[25px]'>
        //             Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
        //         </p>
        //         <h3 className='name text-xl font-medium text-blue-950'>
        //             1Cindy Sim
        //         </h3>
        //         <p className='designation text-sm font-normal'>
        //             Dreamer
        //         </p>
        //     </div>
        // </div>
        //         </SwiperSlide>
        //         <SwiperSlide className="swiper-slide mr-[20px]">
        //             <div className="slide">
        //                 <div className="picture">
        //                     <Image
        //                         src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
        //                         alt="Client Image"
        //                         width={400}
        //                         height={400}
        //                     />
        //                 </div>
        //                 <div className="content">
        //                     <div className='image mb-[45px]'>
        //                         <Image
        //                             src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
        //                             alt="Client Image"
        //                             width={40}
        //                             height={40}
        //                         />
        //                     </div>
        //                     <p className='feedback text-lg font-normal pb-[25px]'>
        //                         Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
        //                     </p>
        //                     <h3 className='name text-xl font-medium text-blue-950'>
        //                         2Cindy Sim
        //                     </h3>
        //                     <p className='designation text-sm font-normal'>
        //                         Dreamer
        //                     </p>
        //                 </div>
        //             </div>
        //         </SwiperSlide>
        //         <SwiperSlide className="swiper-slide mr-[20px]">
        //             <div className="slide">
        //                 <div className="picture">
        //                     <Image
        //                         src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
        //                         alt="Client Image"
        //                         width={400}
        //                         height={400}
        //                     />
        //                 </div>
        //                 <div className="content">
        //                     <div className='image mb-[45px]'>
        //                         <Image
        //                             src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
        //                             alt="Client Image"
        //                             width={40}
        //                             height={40}
        //                         />
        //                     </div>
        //                     <p className='feedback text-lg font-normal pb-[25px]'>
        //                         Simply put, I am a full-stack developer where front-end is my stronger forte. Occasionally, I seek support from senior developers when the code.
        //                     </p>
        //                     <h3 className='name text-xl font-medium text-blue-950'>
        //                         3Cindy Sim
        //                     </h3>
        //                     <p className='designation text-sm font-normal'>
        //                         Dreamer
        //                     </p>
        //                 </div>
        //             </div>
        //         </SwiperSlide>
        //     </Swiper>
        //     <span className='swiper-notification' aria-live="assertive" aria-atomic="true"></span>
        // </div>
    );
};