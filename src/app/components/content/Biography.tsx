import { Title } from "./components/Title"
import "./Biography.css"

export const Biography: React.FC = () => {
    return (
        <section className='biography__area mt-[60px] pt-[60px]'>
            <Title title="Biography" />
            <div className='about__content'>
                <div className='cf-text'>
                    <p className='mb-[20px]'>
                        Hi, my name is
                        <span className='text-blue-950 font-medium'>&nbsp;Cindy Sim&nbsp;</span>
                        and I began using WordPress when I’ve spent most of my working hours for
                        the last ten years designing, programming and operating WordPress sites beyond with exclusive
                        designer. I am a graphic designer I’m highly passionate about my job & my personal contribution
                        to the world of modern web design. Here, you will be eligible to learn more about my projects as
                        well as get to know me as a person. I like nothing more than telling stories with the help of
                        photography
                    </p>
                </div>
                <ul className='about__bio'>
                    <li>
                        Name&nbsp;
                        <span>:&nbsp;</span>
                        <strong>Cindy Sim</strong>
                    </li>
                    <li>
                        Nationality&nbsp;
                        <span>:&nbsp;</span>
                        <strong>Malaysia</strong>
                    </li>
                    <li>
                        Phone&nbsp;
                        <span>:&nbsp;</span>
                        <strong>+(1) 234 567 890</strong>
                    </li>
                    <li>
                        Email&nbsp;
                        <span>:&nbsp;</span>
                        <strong>cindysim@oppstar.com.my</strong>
                    </li>
                    <li>
                        Experience&nbsp;
                        <span>:&nbsp;</span>
                        <strong>1 year</strong>
                    </li>
                    <li>
                        Freelance&nbsp;
                        <span>:&nbsp;</span>
                        <strong>Available</strong>
                    </li>
                    <li>
                        Skype&nbsp;
                        <span>:&nbsp;</span>
                        <strong>cindy.sim32</strong>
                    </li>
                    <li>
                        Language&nbsp;
                        <span>:&nbsp;</span>
                        <strong>Human Language</strong>
                    </li>
                </ul>
            </div>
        </section>
    )
}