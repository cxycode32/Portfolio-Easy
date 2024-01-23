import { Title } from './Title'
import { ExperienceItem } from './ExperienceItem'
import './ExperienceComponent.css'

interface ExperienceComponentProps {
    title: string
    expTime: string[]
    expTitle: string[]
    company: string[]
    desc: string[]
}

export const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ title, expTime, expTitle, company, desc }) => {
    return (
        <div className='experience__area pt-[60px]'>
            <Title title={title} />
            <div className='experience__wrapper overflow-hidden'>
                {expTime.map((time, index) => (
                    <ExperienceItem
                        key={index}
                        expTime={expTime[index]}
                        expTitle={expTitle[index]}
                        company={company[index]}
                        desc={desc[index]}
                    />
                ))}
            </div>
        </div>
    )
}