import React from 'react';
import dnd from '../assets/dnd.png';

function Portfolio() {
    return (
        <div>
            <section id="work">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">My Work</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <a href="https://github.com/kwm0304/DnD">
                                {" "}
                                <img src={dnd} className="my-2" style={{ width: "20%" }} alt="dnd" />
                            </a>
                        </div>
                        <div>
                            <h4>DnD</h4>
                            <p>DnD MERN</p>
                        </div>
                    </div>
                </div>







            </section>
        </div>
    );
}

export default Portfolio;