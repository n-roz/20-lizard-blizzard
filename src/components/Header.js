import React from "react";
import Nav from "./Nav";

// from module 20
function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className="flex-row px-1">
                    <div>
                        <h1>Naomi Roznik's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                    </div>
                </header>
            </section>
            <section class="hero">
                <div>
                    <h3>Welcome</h3>
                    <p>Welcome to Naomi's portfolio</p>
                </div>
            </section>
        </div>
    );
}

export default Header;