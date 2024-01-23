import { Title } from "./components/Title"
import { SwiperComponent } from "./components/SwiperComponent";
import "../Content.css"

export const Testimonial: React.FC = () => {
    return (
        <section className='services__area pt-[60px]'>
            <Title title="Testimonial" />
            <div className='container-area'>
                <div className='testimonial__wrapper'>
                    <div className='wcf__slider-wrapper wcf__testimonial-2'>
                        <SwiperComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}