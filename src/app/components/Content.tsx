import './Content.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Biography } from './content/Biography'
import { Services } from './content/Services'
import { Sidebar } from './content/Sidebar'
import { Testimonial } from './content/Testimonial'

export const Content: React.FC = () => {

    // gsap.registerPlugin(ScrollTrigger)

    // useEffect(() => {
    //     ScrollTrigger.create({
    //         trigger: document.querySelector('.pin-spacer'),
    //         start: 'top top',
    //         endTrigger: 'html',
    //         end: 'bottom top',
    //         pin: true,
    //         pinSpacing: false,
    //         toggleClass: 'pinned',
    //         markers: true
    //     })
    // })

    return (
        <div className='content-container'>
            <div className='content-sub-container'>
                <div className='pin-spacer'>
                    <Sidebar />
                </div>
                <div>
                    <Biography />
                    <Services />
                    <Testimonial />
                    <section className='clients__area pt-[60px]'></section>
                    <section className='awards__area pt-[60px]'></section>
                    <div className='container-area'></div>
                    <section className='coding__area pt-[60px]'></section>
                    <div className='container-area'></div>
                    <section className='knowledge__area pt-[60px]'></section>
                    <section className='work__area pt-[60px]'></section>
                    <section className='pricing__area pt-[60px]'></section>
                    <section className='blog__area pt-[60px]'></section>
                    <section className='contact__area pt-[60px] pb-[60px]'></section>
                </div>
            </div>
        </div>
    )
}