import './ProgressItem3.css'
import './progressbar.css'

interface ProgressItem3Props {
    value: number
    title: string
    color: string
}

export const ProgressItem3: React.FC<ProgressItem3Props> = ({ value, title, color }) => {
    return (
        <div className='progress-item-3 grid justify-between text-center'>
            <p className='title text-base pb-[10px] text-blue-950'>
                {title}
            </p>
            <div
                className='dot-progress'
                style={{
                    "--value": value,
                    "--primary": color,
                }}>
            </div>
        </div>
    )
}