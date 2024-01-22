import { Title } from './components/Title'
import { ContactBox } from './components/ContactBox'
import { ContactInputComponent } from './components/ContactInputComponent'
import Image from 'next/image'
import './Contact.css'

export const Contact: React.FC = () => {
    return (
        <section className='contact__area pt-[60px] pb-[60px]'>
            <Title title="Get in touch" />
            <div className='container-area mb-[60px]'>
                <div className='contact-links__wrapper grid gap-[15px]'>
                    <ContactBox
                        img="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-4.png"
                        title="Address"
                        desc="New York, USA"
                    />
                    <ContactBox
                        img="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-3.png"
                        title="Email"
                        desc="info@example.com"
                    />
                    <ContactBox
                        img="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-5.png"
                        title="Phone"
                        desc="+(8) 257 698 321"
                    />
                </div>
            </div>
            <div className='container-area mb-[70px]'>
                <form action="#" className='contact-form'>
                    <ContactInputComponent
                        label="Name"
                        name="cName"
                        id="cName"
                        placeholder="Your name"
                    />
                    <ContactInputComponent
                        label="Email"
                        name="cEmail"
                        id="cEmail"
                        placeholder="Your email"
                    />
                    <ContactInputComponent
                        label="Subject"
                        name="cSubject"
                        id="cSubject"
                        placeholder="Subject"
                    />
                    <ContactInputComponent
                        label="Message"
                        name="cMessage"
                        id="cMessage"
                        placeholder="Write your text ..."
                    />
                    <div className='input-field mt-[10px]'>
                        <button className='btn-hover-divide'>
                            Submit Now
                        </button>
                    </div>
                </form>
            </div>
            <div className='location__map'>
                <a
                    href='https://www.google.com/maps/@23.7985427,90.3641058,15z?entry=ttu'
                    target='_blank'
                >
                    <Image
                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/map.png"
                        alt="map location"
                        width={500}
                        height={500}
                        className='map'
                    />
                </a>
            </div>
        </section>
    )
}