import { Sidebar } from './content/Sidebar'
import { Biography } from './content/Biography'
import { Services } from './content/Services'
import { Testimonial } from './content/Testimonial'
import { Clients } from './content/Clients'
import { Awards } from './content/Awards'
import { Experiences } from './content/Experiences'
import './Content.css'

export const Content: React.FC = () => {
    return (
        <div id='contentContainer' className='content-container'>
            <div className='content-sub-container'>
                <div id='pinSpacer'>
                    <Sidebar />
                </div>
                <div className='col-start-2 col-end-3'>
                    <Biography />
                    <Services />
                    <Testimonial />
                    <Clients />
                    <Awards />
                    <div className='container-area'>
                        <Experiences />
                    </div>
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