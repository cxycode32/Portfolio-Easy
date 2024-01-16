import Image from 'next/image'
import "./ServicesBox.css"

interface ServicesBoxProps {
    icon: string
    title: string
    desc: string
    delay: string
}

export const ServicesBox: React.FC<ServicesBoxProps> = ({ icon, title, desc, delay }) => {
    return (
        <div className='wcf__iconbox' data-delay={delay}>
            <a>
                <div className='icon'>
                    <Image
                        src={icon}
                        alt="Icon"
                        width={40}
                        height={40}
                    />
                </div>
                <h2 className='title text-blue-950 text-xl font-medium mb-2.5 capitalize'>
                    {title}
                </h2>
                <p className='desc'>
                    {desc}
                </p>
            </a>
        </div>
    )
}