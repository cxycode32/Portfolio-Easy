import { Title } from './components/Title'
import { ContactBox } from './components/ContactBox'
import { ContactInputComponent } from './components/ContactInputComponent'
import Image from 'next/image'
import './Contact.css'

export const Contact: React.FC = () => {
    return (
        <section id="contactContainer" className='contact__area pt-[60px] pb-[60px]'>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.760228883299!2d101.69796545!3d3.0436824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4ab0b838cf87%3A0x3f20a752d968aee0!2sThe%20Sanderson!5e0!3m2!1sen!2smy!4v1705919935440!5m2!1sen!2smy" loading="lazy" ></iframe>
            </div>
        </section>
    )
}