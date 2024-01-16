import Image from 'next/image'
import "./Slide.css"

interface SlideProps {
    index: string
    ariaLabel: string
    feedback: string
    name: string
    designation: string
}

export const Slide: React.FC<SlideProps> = ({ index, ariaLabel, feedback, name, designation}) => {
    return (
        <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-prev mr-[20px]"
            data-swiper-slide-index={index}
            role="group"
            aria-label={ariaLabel}
        >
            <div className="slide">
                <div className="picture">
                    <Image
                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/elements/testimonial/img.jpg"
                        alt="Client Image"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="content">
                    <div className='image mb-[45px]'>
                        <Image
                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/quote-dark.png"
                            alt="Client Image"
                            width={40}
                            height={40}
                        />
                    </div>
                    <p className='feedback text-lg font-normal pb-[25px]'>
                        {feedback}
                    </p>
                    <h3 className='name text-xl font-medium text-blue-950'>
                        {name}
                    </h3>
                    <p className='designation text-sm font-normal'>
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    )
}