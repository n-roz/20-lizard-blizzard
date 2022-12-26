import React from "react";
import resume from '../assets/resume.pdf';
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
    return (
        <div>
            <section>
                <div className="flex-row">
                    <h2>My Resume</h2>
                </div>
                <div className="flex-row">
                    <div>
                        <div>
                            <a href={resume} className="download-logo" download>
                                <BsCloudDownload />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Resume;