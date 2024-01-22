import { useState } from 'react'
import Image from 'next/image'
import { Title } from './components/Title'
import { DataFilterComponent } from './components/DataFilterComponent'
import '../Content.css'
import './Work.css'
import './components/DataFilterComponent.css'

export const Work: React.FC = () => {

    const portfolioItems = [
        {
            id: 1,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-1.jpg",
            title: "Mobile Friendly",
            categoryId: 1,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 2,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-2.jpg",
            title: "Ice Cream Cup",
            categoryId: 2,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 3,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-3.jpg",
            title: "Laptop Friendly",
            categoryId: 3,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 4,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-4.jpg",
            title: "Card Design",
            categoryId: 1,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 5,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-5.jpg",
            title: "Iphone Mockup",
            categoryId: 2,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 6,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-6.jpg",
            title: "Ice Cream Cup",
            categoryId: 3,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 7,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-7.jpg",
            title: "Art Design",
            categoryId: 2,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 8,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-8.jpg",
            title: "Creative Design",
            categoryId: 3,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 9,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-9.jpg",
            title: "Mockup Design",
            categoryId: 1,
            category: "UI Design",
            date: "2014"
        },
        {
            id: 10,
            img: "https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/pf-3.jpg",
            title: "Mobile Friendly",
            categoryId: 1,
            category: "UI Design",
            date: "2014"
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const [currentFilter, setCurrentFilter] = useState(0);
    const itemsPerPage = 6;

    const filteredItems = currentFilter === 0
        ? portfolioItems
        : portfolioItems.filter(item => item.categoryId === currentFilter);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    }

    const handleFilterClick = (filter: number) => {
        setCurrentFilter(filter);
        setCurrentPage(1);
    }

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <section className='work__area pt-[60px]'>
            <div className='container-area'>
                <div className='work__container grid justify-between gap-x-50 gap-y-30 mb-[40px]'>
                    <Title title="Work" />
                    <div className='wcf__portfolio'>
                        <div className='filter mb-0'>
                            <DataFilterComponent
                                dataFilter="all"
                                span="07"
                                text="View All"
                                onClick={() => handleFilterClick(0)}
                                isActive={currentFilter === 0}
                            />
                            <DataFilterComponent
                                dataFilter=".design"
                                span="03"
                                text="Design"
                                onClick={() => handleFilterClick(1)}
                                isActive={currentFilter === 1}
                            />
                            <DataFilterComponent
                                dataFilter=".development"
                                span="03"
                                text="Development"
                                onClick={() => handleFilterClick(2)}
                                isActive={currentFilter === 2}
                            />
                            <DataFilterComponent
                                dataFilter=".branding"
                                span="01"
                                text="Branding"
                                onClick={() => handleFilterClick(3)}
                                isActive={currentFilter === 3}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='work__wrapper'>
                <div className='wcf__portfolio'>
                    <div className='wrapper'>
                        <div className='container-area'>
                            <div className='wcf-posts'>
                                {filteredItems.slice(startIndex, endIndex).map(item => {
                                    return (
                                        <div key={item.id} className='wcf-post text-center'>
                                            <div className='thumb overflow-hidden rounded-[25px]' data-cursor-text="View">
                                                <a>
                                                    <Image
                                                        src={item.img}
                                                        alt="Thumbnail"
                                                        width={400}
                                                        height={400}
                                                        className='post-item'
                                                    />
                                                </a>
                                            </div>
                                            <div className='content mt-[20px]'>
                                                <h2 className='title text-xl font-medium text-blue-950'>
                                                    <a>{item.title}</a>
                                                </h2>
                                                <div className='meta'>
                                                    <a>Test</a>,&nbsp;
                                                    <a>{item.category}</a>,&nbsp;
                                                    <time>{item.date}</time>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className='pf-pagination flex gap-[3px]'>
                            {pageNumbers.map(page => {
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageClick(page)}
                                        className={`page-numbers ${page === currentPage ? 'active' : ''}`}
                                    >
                                        {page}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}