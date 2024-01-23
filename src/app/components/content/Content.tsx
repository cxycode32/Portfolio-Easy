import { Sidebar } from './components/Sidebar'
import { Biography } from './components/Biography'
import { Services } from './components/Services'
import { Testimonial } from './components/Testimonial'
import { Clients } from './components/Clients'
import { Awards } from './components/Awards'
import { Experiences } from './components/Experiences'
import { Coding } from './components/Coding'
import { Skills } from './components/Skills'
import { Knowledge } from './components/Knowledge'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import './Content.css'

export const Content: React.FC = () => {
    return (
        <div id='contentContainer' className='content-container'>
            <div className='content-sub-container'>
                <div id='pinSpacer'>
                    <Sidebar />
                </div>
                <div className='content-wrapper'>
                    <Biography />
                    <Services />
                    <Testimonial />
                    <Clients />
                    <Awards />
                    <div className='container-area'>
                        <Experiences />
                    </div>
                    <Coding />
                    <div className='container-area'>
                        <Skills />
                    </div>
                    <Knowledge />
                    <Work />
                    <Contact />
                </div>
            </div>
        </div>
    )
}