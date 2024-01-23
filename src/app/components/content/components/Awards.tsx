import { Title } from "./components/Title"
import { AwardsItem } from "./components/AwardsItem"
import "../Content.css"
import './Awards.css'

export const Awards: React.FC = () => {
    return (
        <section className='awards__area pt-[60px]'>
            <Title title="Awards" />
            <div className="container-area">
                <div className="awards__wrapper grid gap-[15px]">
                    <AwardsItem
                        category="Winner"
                        year="2017"
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/a-1-dark.png"
                        title="02x Developer Award"
                    />
                    <AwardsItem
                        category="Nominee"
                        year="2019"
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/a-2-dark.png"
                        title="03x Creative Award"
                    />
                    <AwardsItem
                        category="Winner"
                        year="2023"
                        icon="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/a-3-dark.png"
                        title="01x Creative Design Award"
                    />
                </div>
            </div>
        </section>
    )
}