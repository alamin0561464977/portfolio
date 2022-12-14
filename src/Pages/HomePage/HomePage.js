import React from 'react';
import TopBanner from './TopBanner';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Skills from './Skills';

const HomePage = () => {
    return (
        <div>
            <section id='home'>
                <TopBanner></TopBanner>
            </section>
            <section id='projects'>
                <Projects></Projects>
            </section>
            <section id='skills'>
                <Skills></Skills>
            </section>
            <section id='contactMe'>
                <ContactMe></ContactMe>
            </section>
        </div>
    );
};

export default HomePage;