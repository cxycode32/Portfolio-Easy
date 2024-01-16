import Image from 'next/image'
import './Hero.css'

export const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="width-limit mx-auto">
                <div className="flex flex-col items-center lg:grid lg:grid-cols-2 justify-between gap-5">
                    <div className='justify-self-start align-self-center'>
                        <h1 className='text-8xl font-bold mb-[16px] text-blue-950'>
                            Cindy
                            <br></br>
                            Sim
                        </h1>
                        <div>
                            <p className='text-xl font-semibold'>
                                Front-End Developer
                            </p>
                        </div>
                        <div className="mt-[32px] mb-[64px] flex gap-[16px] flex-row">
                            <a className="bg-indigo-300 rounded-[28px] overflow-hidden relative z-1 py-[20px] px-[40px] font-semibold text-base inline-flex items-center gap-[10px]">
                                View Work
                            </a>
                            <a className="bg-amber-300 rounded-[28px] overflow-hidden relative z-1 py-[20px] px-[40px] font-semibold text-base inline-flex items-center gap-[10px]">
                                Download CV
                            </a>
                        </div>
                        <div className="flex gap-[16px] items-center pt-[20px] border-t border-solid border-t-gray-400 mt-[20px]">
                            <Image
                                src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/award.png"
                                alt="award img"
                                width={50}
                                height={50}
                            />
                            <div>
                                <p className='text-sm font-light max-w-[100px]'>
                                    Creative Development Award
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative hero-img-wrapper">
                        <div className='overflow-hidden  h-full border-t border-dashed border-t-gray-400 rounded-[12rem] bg-teal-300'>
                            <Image
                                className='hero-img'
                                src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/photo-author.png"
                                alt="author photo"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className='absolute right-[-25%] flex flex-col gap-5 end-0 top-1/2 transform -translate-y-1/2'>
                            <div className='max-w-[97px] ml-auto relative'>
                                <Image
                                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/hero-video-bg.png"
                                    alt="hero video bg"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div>
                                <p className='text-sm font-light max-w-[80px] text-right ml-auto mt-[16px] mb-[28px]'>
                                    My working process
                                </p>
                            </div>
                            <div className='flex justify-end mr-[20%]'>
                                <Image
                                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/point-down.png"
                                    alt="point down"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <div className='bg-white p-[28px] rounded-[25px]'>
                                <div>
                                    <p className='text-sm font-medium mb-[15px]'>
                                        Worked with more than
                                        <br></br>
                                        100 people
                                    </p>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <div className='flex'>
                                        <Image
                                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/client-1.jpg"
                                            alt="client 1"
                                            width={50}
                                            height={50}
                                            className='border-[3px] border-solid border-white rounded-full'
                                        />
                                        <Image
                                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/client-2.jpg"
                                            alt="client 2"
                                            width={50}
                                            height={50}
                                            className='border-[3px] border-solid border-white rounded-full'
                                        />
                                        <Image
                                            src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/client-3.jpg"
                                            alt="client 3"
                                            width={50}
                                            height={50}
                                            className='border-[3px] border-solid border-white rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-normal relative pl-[40px] inline-block before:absolute before:content-[''] before:w-[30px] before:h-px before:bg-gray-400 before:start-0 before:border-s-[1px] before:top-1/2">
                                            <span className='text-lg font-medium'>100+</span>
                                            <br></br>
                                            Clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-0 start-0'>
                            <Image
                                src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/shape-line.png"
                                alt="shape line"
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className='absolute top-1/3 start-[-40px]'>
                            <Image
                                src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/shape-customization.png"
                                alt="shape line"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className='bg-white absolute start-[33px] bottom-[17px] w-[80px] h-[80px] inline-flex justify-center items-center rounded-full'>
                            <Image
                                src="https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/figma.png"
                                alt="shape line"
                                width={28}
                                height={28}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 inset-start-1/5 z-[-1]">
                <Image
                    src="	https://crowdytheme.com/html/info/info-demo/assets/imgs/resume/line-dark.png"
                    alt="shape line"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    );
}