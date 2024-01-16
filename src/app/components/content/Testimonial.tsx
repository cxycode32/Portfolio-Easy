import { Title } from "./components/Title"
import 'swiper/css';
import "../Content.css"
import "./Testimonial.css"
import { SwiperComponent, SwiperPagination } from "./components/SwiperComponent";

export const Testimonial: React.FC = () => {
    return (
        <section className='services__area pt-[60px]'>
            <Title title="Testimonial" />
            <div className='container-area'>
                <div className='testimonial__wrapper'>
                    <div className='wcf__slider-wrapper wcf__testimonial-2'>
                        <SwiperComponent />
                        <div className='ts-pagination'>
                            <SwiperPagination />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}