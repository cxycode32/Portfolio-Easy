"use client"

import { gsap } from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sidebar } from './content/Sidebar'
import { Biography } from './content/Biography'
import { Services } from './content/Services'
import { Testimonial } from './content/Testimonial'
import './Content.css'

export const Content: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // ScrollTrigger.create({
        //     trigger: '#pin-spacer',
        //     start: 'top top',
        //     end: 'bottom 1000px',
        //     pin: '#sidebar'
        // })

        ScrollTrigger.create({
            trigger: document.querySelector('#section'),
            start: 'top top',
            endTrigger: 'html',
            end: 'bottom top',
            pin: document.querySelector('#container'),
            pinSpacing: false,
            toggleClass: 'on',
            markers: true
        })
    }, [])

    return (
        <div className='content-container'>
            <div className='content-sub-container'>
                <div id='pin-spacer' className='pin-spacer'>
                    <div id="sidebar">
                        <Sidebar />
                    </div>
                </div>
                <div>
                    <Biography />
                    <Services />
                    <Testimonial />
                    <section id="section" className='clients__area pt-[60px] w-[320px] h-[320px]'>
                        <div id="container" className="test-container">
                            <div className="test-child z-10">Child</div>
                        </div>
                        <div className="test-content">Content</div>
                    </section>
                    <section className='awards__area pt-[60px]'></section>
                    <div className='container-area'></div>
                    <section className='coding__area pt-[60px]'></section>
                    <div className='container-area'></div>
                    <section className='knowledge__area pt-[60px]'></section>
                    <section className='work__area pt-[60px]'></section>
                    <section className='pricing__area pt-[60px]'></section>
                    <section className='blog__area pt-[60px]'></section>
                    <section className='contact__area pt-[60px] pb-[60px]'></section>
                </div>
            </div>
        </div>
    )
}