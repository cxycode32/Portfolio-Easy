import 'swiper/css';

interface PaginationBulletProps {
    ariaLabel: string
}

export const Bullet: React.FC<PaginationBulletProps> = ({ ariaLabel }) => {
    return (
        <span
            className='swiper-pagination-bullet swiper-pagination-bullet-active'
            tabIndex={0}
            role="button"
            aria-label={ariaLabel}
        ></span>
    )
}