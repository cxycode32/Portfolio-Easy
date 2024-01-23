import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export const Header: React.FC = () => {

    return (
        <div className='pin-spacer'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <span className='d-none d-xl-block'>
                        <Image
                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-toggle.png"
                            alt="image"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className='offcanvas-close d-xl-none'>
                        <FontAwesomeIcon icon={faX} />
                    </span>
                </div>
                <div className='header__nav m-5 mb-11'>
                    <nav className='resume-menu'>
                        <ul>
                            <li>
                                <a href="#heroContainer">
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-home.png"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="#biographyContainer">
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-user.png"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    about
                                </a>
                            </li>
                            <li>
                                <a href="#experiencesContainer">
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-resume.png"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    resume
                                </a>
                            </li>
                            <li>
                                <a href="#workContainer">
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-briefcase.png"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    works
                                </a>
                            </li>
                            <li>
                                <a href="#contactContainer">
                                    <Image
                                        src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-plane.png"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a href='#' className='header__hire-btn'>
                    <span className='icon-img'>
                        <Image
                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/arrow-right.png"
                            alt=""
                            width={20}
                            height={20}
                            className='image'
                        />
                    </span>
                    get hired me
                </a>
            </div>
        </div>
    )
}