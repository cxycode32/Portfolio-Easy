import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './Header.css'

interface HeaderProps {
    onCloseClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCloseClick }) => {

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMenuClick = (index: any) => {
        setActiveMenuItem(index);
    };

    const menuItems = [
        {
            id: 1,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-home.png",
            href: "#heroContainer",
            label: "home"
        },
        {
            id: 2,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-user.png",
            href: "#biographyContainer",
            label: "about"
        },
        {
            id: 3,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-resume.png",
            href: "#experiencesContainer",
            label: "resume"
        },
        {
            id: 4,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-briefcase.png",
            href: "#workContainer",
            label: "works"
        },
        {
            id: 5,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-plane.png",
            href: "#contactContainer",
            label: "contact"
        },
    ];

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
                    <span
                        className='offcanvas-close d-xl-none'
                        onClick={onCloseClick}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </span>
                </div>
                <div className='header__nav m-5 mb-11'>
                    <nav className='resume-menu'>
                        <ul>
                            {menuItems.map((menuItem) => {
                                return (
                                    <li key={menuItem.id}>
                                        <a
                                            href={menuItem.href}
                                            className={activeMenuItem === menuItem.id ? 'active' : ''}
                                            onClick={() => handleMenuClick(menuItem.id)}
                                        >
                                            <Image
                                                src={menuItem.img}
                                                alt="icon"
                                                width={20}
                                                height={20}
                                                className='menu-item'
                                            />
                                            {menuItem.label}
                                        </a>
                                    </li>
                                )
                            })}
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