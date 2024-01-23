import Script from 'next/script'
import './ProgressItem2.css'
import './progressbar.css'

interface ProgressItem2Props {
    dataWidth: number
    title: string
    color: string
}

export const ProgressItem2: React.FC<ProgressItem2Props> = ({ dataWidth, title, color }) => {
    return (
        <div>
            <div className='progress-item-2 pb-0'>
                <div
                    className='sonny_progressbar mb-0'
                    data-width={dataWidth}
                >
                    <p className='title text-base pb-[10px] text-blue-950'>
                        {title}
                    </p>
                    <div className='bar-container shadow'>
                        <span className='backgroundBar'></span>
                        <span
                            className='bar'
                            style={{
                                "--width": `${dataWidth}%`,
                                "--color": color
                            }}
                        ></span>
                        <span className='progress-percent text-base font-medium uppercase end-0'>
                            {dataWidth}%
                        </span>
                    </div>
                </div>
            </div>
            <Script src="./progressbar.js"></Script>
        </div>
    )
}