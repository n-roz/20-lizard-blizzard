import React from 'react';
import profileImage from '../assets/profileImage.jpg';

function About() {
    return (
        <section className="my-5">
            <div class="flex-row">
                <h1 id="about-me">About Me</h1>
            </div>
            <div className="flex-row">
                <div class="intro-img">
                    <img src={profileImage} width="25%" alt="it's me" />
                </div>
                <p>I am an entry level front-end web developer. I received my B.A. in Geography and Environmental Studies from the University of North Carolina in Chapel Hill in 2015.</p>
            </div>
        </section>
    );
}

export default About;