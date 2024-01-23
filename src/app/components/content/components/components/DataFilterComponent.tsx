import './DataFilterComponent.css'

interface DataFilterComponentProps {
    dataFilter: string
    span: string
    text: string
    onClick?: () => void
    isActive?: boolean
}

export const DataFilterComponent: React.FC<DataFilterComponentProps> = ({ dataFilter, span, text, onClick, isActive }) => {
    return (
        <button
            data-filter={dataFilter}
            onClick={onClick}
            className={isActive ? 'active' : ''}
        >
            <span>{span}</span>
            {text}
        </button>

    )
}