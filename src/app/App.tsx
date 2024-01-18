"use client"

import { useEffect } from 'react';
import { Hero } from "./components/Hero";
import { Content } from './components/Content'
import { Test } from "./components/Test";
import './App.css';

export default function App() {

    const handleScroll = () => {
        var heroContainer = document.getElementById("heroContainer");
        var contentContainer = document.getElementById("contentContainer");
        var pinSpacer = document.getElementById("pinSpacer");

        // scroll past hero container
        if (pinSpacer && heroContainer && window.scrollY > (heroContainer.offsetTop + heroContainer.offsetHeight)) {
            pinSpacer.classList.add("isSticky");
        } else if (pinSpacer && heroContainer && window.scrollY < (heroContainer.offsetTop + heroContainer.offsetHeight)) {
            pinSpacer.classList.remove("isSticky");
        }

        // scroll past content container
        if (pinSpacer!.classList.contains("isSticky")) {
            let pinSpacerBottom = window.scrollY + pinSpacer!.offsetTop + pinSpacer!.offsetHeight
            let contentContainerBottom = contentContainer!.offsetTop + contentContainer!.offsetHeight

            if (pinSpacerBottom > contentContainerBottom) {
                pinSpacer!.classList.remove("isSticky");
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
        <main className="inline-block w-full">
            <Hero />
            <Content />
            <Test />
        </main>
    )
}