import Image from 'next/image'
import './ContactBox.css'

interface ContactBoxProps {
    img: string
    title: string
    desc: string
}

export const ContactBox: React.FC<ContactBoxProps> = ({ img, title, desc }) => {
    return (
        <div className='wcf__iconbox'>
            <a>
                <div className='icon'>
                    <Image
                        src={img}
                        alt="Icon"
                        width={20}
                        height={20}
                    />
                </div>
                <h2 className='title'>{title}</h2>
                <p className='desc'>{desc}</p>
            </a>
        </div>
    )
}