import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Sidebar.css'

export const Sidebar: React.FC = () => {
    return (
        <div className='sidebar d-none d-xl-block'>
            <div className='author__meta mt-[80px]'>
                <div className='author__meta-shape1 absolute top-[-25px] start-[35px]'>
                    <Image
                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/shape-line-shadow.png"
                        alt="img"
                        width={50}
                        height={50}
                    />
                </div>
                <div className='author__photo'>
                    <Image
                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/photo-author.png"
                        alt="img"
                        width={400}
                        height={400}
                    />
                </div>
                <h2 className='author__meta-title text-4xl font-semibold text-blue-950 mt-[26px] mb-[6px]'>
                    Cindy
                    <span className='font-normal'>&nbsp;Sim</span>
                </h2>
                <p className='author__meta-subtitle text-xl font-medium text-blue-950'>
                    Web Developer
                </p>
                <div className='author__meta-btn mt-[42px] mb-[120px]'>
                    <a className='wc-btn-primary resume-bg-primary btn-hover-divide'>
                        Download CV
                    </a>
                </div>
                <div className='author__social'>
                    <p className='social__title text-xs font-medium uppercase text-blue-950 mb-[15px]'>
                        Follow Me
                    </p>
                    <ul className='social__media flex gap-[10px] justify-center'>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebookF} className='size-5' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} className='size-5' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className='size-5' />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} className='size-5' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}