import './ExperienceItem.css'

interface ExperienceItemProps {
    expTime: string
    expTitle: string
    company: string
    desc: string
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ expTime, expTitle, company, desc }) => {
    return (
        <div className='experience__item'>
            <div className='exp-time text-sm font-normal mb-0 text-gray-600'>{expTime}</div>
            <h3 className='exp-title text-lg font-medium text-blue-950'>{expTitle}</h3>
            <div className='company text-base font-normal mb-[20px] text-gray-600 capitalize'>{company}</div>
            <p className='text-gray-600'>
                {desc}
            </p>
        </div>
    )
}