import Image from 'next/image'
import './KnowledgeCard.css'

interface KnowledgeCardProps {
    icon: string
    text: string
}

export const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ icon, text }) => {
    return (
        <div className='knowledge__card'>
            <div className='icon'>
                <Image
                    src={icon}
                    alt=""
                    width={20}
                    height={20}
                />
            </div>
            <p className='text-base font-medium text-blue-950'>
                {text}
            </p>
        </div>
    )
}