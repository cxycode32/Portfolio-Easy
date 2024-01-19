import { ExperienceComponent } from './components/ExperienceComponent'
import './Experiences.css'

export const Experiences: React.FC = () => {
    return (
        <div className='experiences-area-wrapper grid gap-x-12'>
            <ExperienceComponent
                title="Experience"
                expTime={["2017 - 2019", "2017 - 2019", "2017 - 2019"]}
                expTitle={["Creative Director", "Sr. Developer", "Java Developer"]}
                company={["Audio Jungle", "Envato", "Wealcoder"]}
                desc={[
                    "Collaborate with wireframe and development team on the proper execution of ideas.",
                    "I have received at this company. My main task was to do creative design & research.",
                    "I have received at this company. My main task was to do creative design & research."
                ]}
            />
            <ExperienceComponent
                title="Education"
                expTime={["2017 - 2019", "2017 - 2019", "2017 - 2019"]}
                expTitle={["Master in Design", "Bachelor in Science", "Diploma in Computer"]}
                company={["Pure University", "Alka University", "Technical College"]}
                desc={[
                    "Collaborate with wireframe and development team on the proper execution of ideas.",
                    "I have received at this company. My main task was to do creative design & research.",
                    "I have received at this company. My main task was to do creative design & research."
                ]}
            />
        </div>
    )
}