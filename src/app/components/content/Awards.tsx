import { Title } from "./components/Title"
import './Awards.css'

export const Awards: React.FC = () => {
    return (
        <section className='awards__area pt-[60px]'>
            <Title title="Awards" />
            <div className="clients__wrapper">
                <div className="swiper brand_logo_slider swiper-initialized swiper-horizontal swiper-pointer-events"></div>
            </div>
        </section>
    )
}