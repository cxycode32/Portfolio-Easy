import { ProgressItem2 } from './components/ProgressItem2'
import { ProgressItem3 } from './components/ProgressItem3'
import { Title } from './components/Title'
import './Skills.css'

export const Skills: React.FC = () => {
    return (
        <div className='skills-area-wrapper grid gap-x-12'>
            <div className='software__area pt-[60px]'>
                <Title title="Software" />
                <div className='software__wrapper grid gap-[23px]'>
                    <ProgressItem2
                        dataWidth={65}
                        title='Adobe XD'
                        color='#9A9EFF'
                    />
                    <ProgressItem2
                        dataWidth={80}
                        title='Figma'
                        color='#F9B099'
                    />
                    <ProgressItem2
                        dataWidth={50}
                        title='InVision'
                        color='#7DDED8'
                    />
                </div>
            </div>
            <div className='language__area pt-[60px]'>
                <Title title="Language" />
                <div className='language__wrapper grid gap-[30px]'>
                    <ProgressItem3
                        title="English (Native)"
                        value={100}
                        color="#9A9EFF"
                    />
                    <ProgressItem3
                        title="Spanish (Medium)"
                        value={60}
                        color="#F9B099"
                    />
                    <ProgressItem3
                        title="Hindi (Fluent)"
                        value={80}
                        color="#7DDED8"
                    />
                    <ProgressItem3
                        title="Arabic (Basic)"
                        value={40}
                        color="#EE94C4"
                    />
                </div>
            </div>
        </div>
    )
}