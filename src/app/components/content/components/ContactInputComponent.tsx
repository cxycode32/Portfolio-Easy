import './ContactInputComponent.css'

interface ContactInputComponentProps {
    label: string
    name: string
    id: string
    placeholder: string
}

export const ContactInputComponent: React.FC<ContactInputComponentProps> = ({ label, name, id, placeholder }) => {
    return (
        <div className='input-field'>
            <label>
                {label}
            </label>
            <input
                type='text'
                name={name}
                id={id}
                placeholder={placeholder}
            >
            </input>
        </div>
    )
}