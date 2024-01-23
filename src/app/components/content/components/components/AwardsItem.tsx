import Image from 'next/image'
import './AwardsItem.css'

interface AwardsItemProps {
    category: string
    year: string
    icon: string
    title: string
}

export const AwardsItem: React.FC<AwardsItemProps> = ({ category, year, icon, title }) => {
    return (
        <div className='award__item'>
            <span className='category text-gray-600'>
                {category}
            </span>
            <span className='year absolute end-[25px] top-[20px] text-gray-600'>
                {year}
            </span>
            <div className='icon'>
                <Image
                    src={icon}
                    alt=""
                    width={80}
                    height={80}
                    className='inline-block mt-[85px] mb-[26px]'
                />
            </div>
            <h2 className='title text-base font-medium text-blue-950'>
                {title}
            </h2>
        </div>
    )
}