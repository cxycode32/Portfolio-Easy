import Image from 'next/image'
import './Header2.css'

export const Header2: React.FC = () => {

    return (
        <div className='header-2__wrapper'>
            <div className='header-2__logo'>
                <Image
                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/icon-toggle.png"
                    alt="image"
                    width={50}
                    height={50}
                />
            </div>
            <button className='header-2__offcanvas-btn mr-5'>
                <Image
                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/logo/menubar.png"
                    alt="image"
                    width={30}
                    height={30}
                    className='menubar'
                />
            </button>
        </div>
    )
}