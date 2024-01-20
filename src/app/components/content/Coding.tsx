import { Title } from './components/Title'
import { ProgressItem } from './components/ProgressItem'
import "../Content.css"
import './Coding.css'

export const Coding: React.FC = () => {
    return (
        <section className='coding__area pt-[60px]'>
            <Title title="Coding Skills" />
            <div className='container-area'>
                <div className='coding__wrapper grid justify-between gap-y-[40px] gap-x-[30px]'>
                    <ProgressItem
                        valuenow={70}
                        title="HTML, CSS"
                        primaryColor='#9A9EFF'
                    />
                    <ProgressItem
                        valuenow={95}
                        title="WordPress"
                        primaryColor='#F9B099'
                    />
                    <ProgressItem
                        valuenow={65}
                        title="JavaScript"
                        primaryColor='#7DDED8'
                    />
                    <ProgressItem
                        valuenow={80}
                        title="Laravel"
                        primaryColor='#B3DA83'
                    />
                    <ProgressItem
                        valuenow={50}
                        title="Design"
                        primaryColor='#EE94C4'
                    />
                </div>
            </div>
        </section>
    )
}