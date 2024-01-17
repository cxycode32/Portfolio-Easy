import Image from 'next/image'
import { SwiperSlide } from 'swiper/react';
import "./Slide.css"
import 'swiper/css';
import 'swiper/css/bundle';

interface SlideProps {
    image: string;
    feedback: string
    name: string
    designation: string
}

export const Slide: React.FC<SlideProps> = ({ image, feedback, name, designation}) => {
    return (
        <SwiperSlide className="swiper-slide mr-[20px]">
            <div className="slide">
                <div className="picture">
                    <Image
                        src={image}
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
                        {feedback}
                    </p>
                    <h3 className='name text-xl font-medium text-blue-950'>
                        {name}
                    </h3>
                    <p className='designation text-sm font-normal'>
                        {designation}
                    </p>
                </div>
            </div>
        </SwiperSlide>
    )
}