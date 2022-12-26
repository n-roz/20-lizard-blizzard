import React from 'react';
import { FaGithub } from 'react-icons/fa'
import dnd from '../assets/dnd.png';
import password from '../assets/password-generator.png';
import quiz from '../assets/code-quiz.png';
import refractor from '../assets/code-refractor.png';
import pokedex from '../assets/operation-pokedex.png';
import movie from '../assets/movie-finder-pro.png';

const ProjectList = () => {

    const projects = [
        {
            title: 'DnD',
            link: 'https://github.com/kwm0304/DnD',
            repo: 'https://github.com/kwm0304/DnD',
            image: dnd
        },
        {
            title: 'Password Generator',
            link: 'https://github.com/n-roz/password-generator',
            repo: 'https://github.com/n-roz/password-generator',
            image: password
        },
        {
            title: 'Code Quiz',
            link: 'https://github.com/n-roz/code-quiz',
            repo: 'https://github.com/n-roz/code-quiz',
            image: quiz
        },
        {
            title: 'Code Refractor',
            link: 'https://github.com/n-roz/code-refractor',
            repo: 'https://github.com/n-roz/code-refractor',
            image: refractor
        },
        {
            title: 'Pokedex',
            link: 'https://github.com/zasen01/smooth-ops',
            repo: 'https://github.com/zasen01/smooth-ops',
            image: pokedex
        },
        {
            title: 'Movie Finder Pro',
            link: 'https://github.com/ReeceDevenney/Movie-Finder-Pro',
            repo: 'https://github.com/ReeceDevenney/Movie-Finder-Pro',
            image: movie
        }
    ];

    return (
        <>
            {projects.map(instance => (
                <div className="card">
                    <div className="cardImgLink">
                        <div className='cardTitle' key={instance.title}>
                            <div>
                                <a href={instance.link}><img className='cardImg' src={instance.image} style={{ width: "40%" }} alt="portfolio" /></a>
                            </div>
                        </div>
                        <div className="card-description">
                            {instance.description}
                        </div>
                        <a href={instance.repo}><FaGithub /></a>
                    </div>
                </div>

            ))}
        </>)
}

export default ProjectList;