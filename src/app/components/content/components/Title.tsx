import "./Title.css"

interface TitleProps {
    title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className='section-title-wrapper overflow-hidden mb-[40px]'>
            <h2 className='section-title text-2xl font-medium relative mb-[8px] text-blue-950'>
                {title}
            </h2>
            <div className='section-title__border w-12 h-1 bg-indigo-300 rounded-[3px] ms-2.5 relative'></div>
        </div>
    )
}