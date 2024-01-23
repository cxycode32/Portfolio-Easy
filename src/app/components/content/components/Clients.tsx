import { Title } from "./components/Title"
import { LogoSlide } from "./components/LogoSlide"
import 'swiper/css';
import 'swiper/css/bundle';
import './Clients.css'

export const Clients: React.FC = () => {
    return (
        <section className='clients__area pt-[60px]'>
            <Title title="My Clients" />
            <div className="clients__wrapper">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/1.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/2.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/3.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/4.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/5.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/1.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/2.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/3.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/4.png"
                        />
                        <LogoSlide
                            img="https://crowdytheme.com/html/info/info-demo/assets/imgs/brand/5.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}