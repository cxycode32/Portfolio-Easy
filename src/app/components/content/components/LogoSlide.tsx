import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/bundle';
import './LogoSlide.css'

interface LogoSlideProps {
    img: string;
}

export const LogoSlide: React.FC<LogoSlideProps> = ({ img }) => {
    return (
        <div className="logo-slide swiper-slide">
            <Image
                src={img}
                alt=""
                width={50}
                height={50}
            />
        </div>
    )
}