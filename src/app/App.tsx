"use client"

import { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { Header2 } from './components/header/Header2';
import { Hero } from "./components/hero/Hero";
import { Content } from './components/content/Content'
import './App.css';

export default function App() {

    const [isHeaderVisible, setHeaderVisibility] = useState(false);

    const handleMenuBarClick = () => {
        setHeaderVisibility(true);
    }

    const handleCloseClick = () => {
        setHeaderVisibility(false);
    }

    const handleScroll = () => {
        var heroContainer = document.getElementById("heroContainer");
        var contentContainer = document.getElementById("contentContainer");
        var pinSpacer = document.getElementById("pinSpacer");

        // scroll past hero container
        if (pinSpacer && heroContainer && window.scrollY > (heroContainer.offsetTop + heroContainer.offsetHeight)) {
            pinSpacer.classList.add("sticky");
        } else if (pinSpacer && heroContainer && window.scrollY < (heroContainer.offsetTop + heroContainer.offsetHeight)) {
            pinSpacer.classList.remove("sticky");
        }

        // scroll past content container
        if (pinSpacer!.classList.contains("sticky")) {
            let pinSpacerBottom = window.scrollY + pinSpacer!.offsetTop + pinSpacer!.offsetHeight
            let contentContainerBottom = contentContainer!.offsetTop + contentContainer!.offsetHeight

            if (pinSpacerBottom > contentContainerBottom) {
                pinSpacer!.classList.remove("sticky");
            }
        }
    };

    useEffect(() => {
        // just trigger this so that the initial state
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className='darkMode'>
            <header id='header' className={`header ${isHeaderVisible && 'header-visible'}`}>
                <Header onCloseClick={handleCloseClick} />
            </header>
            <div className='header-2 d-xl-none'>
                <Header2 onMenuBarClick={handleMenuBarClick} />
            </div>
            <main className="inline-block w-full">
                <Hero />
                <Content />
            </main>
        </main>
    )
}