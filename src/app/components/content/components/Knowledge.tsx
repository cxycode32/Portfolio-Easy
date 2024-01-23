import { Title } from './components/Title'
import "../Content.css"
import './Knowledge.css'
import { KnowledgeCard } from './components/KnowledgeCard'

export const Knowledge: React.FC = () => {
    return (
        <section className='knowledge__area pt-[60px]'>
            <Title title="Knowledge" />
            <div className='container-area'>
                <div className='knowledge__wrapper grid gap-[15px]'>
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Create logo design"
                    />
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Swimming and Gossiping"
                    />
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Theory and Debating"
                    />
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Idea and Research"
                    />
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Modern and mobile-ready"
                    />
                    <KnowledgeCard
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/check.png"
                        text="Graphics and Animations"
                    />
                </div>
            </div>
        </section>

    )
}