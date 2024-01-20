import './ProgressItem.css'

interface ProgressItemProps {
    valuenow: number
    title: string
    primaryColor: string
}

export const ProgressItem: React.FC<ProgressItemProps> = ({ valuenow, title, primaryColor }) => {
    return (
        <div className='progress-item text-center'>
            <div
                id='progressBar'
                role='progressbar'
                aria-valuenow={valuenow}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                    "--value": valuenow,
                    "--primary": primaryColor,
                }}
            >
            </div>
            <p className='title text-base font-medium mt-[18px] text-blue-950'>
                {title}
            </p>
        </div>
    )
}