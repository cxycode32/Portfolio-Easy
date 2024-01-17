import { Title } from './components/Title'
import { ServicesBox } from './components/ServicesBox'
import "../Content.css"
import "./Services.css"

export const Services: React.FC = () => {
    return (
        <section className='services__area pt-[60px]'>
            <Title title="My Services" />
            <div className='container-area'>
                <div className='services__wrapper grid gap-[15px] grid-cols-3'>
                    <ServicesBox
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/service-icon-1.png"
                        title="Design"
                        desc="Creative interaction design for my client who done work"
                        delay=".65"
                    />
                    <ServicesBox
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/service-icon-2.png"
                        title="Development"
                        desc="Creative interaction design for my client who done work"
                        delay=".8"
                    />
                    <ServicesBox
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/service-icon-3.png"
                        title="Marketing"
                        desc="Creative interaction design for my client who done work"
                        delay=".95"
                    />
                </div>
            </div>
        </section>
    )
}