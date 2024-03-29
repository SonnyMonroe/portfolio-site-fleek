// Import Assets
import uniswap from '../assets/uniswap.png';
import landing from '../assets/landing.png';
import aave from'../assets/aave.png';
import portfolioSite from '../assets/portfolio-site.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>portfolio Site</h3>
                    <img src={portfolioSite} alt="Uniswap Swap Page" />
                    <p>My custom portfolio site I made from scratch with React.js
                    </p>

                    <a href="https://github.com/SonnyMonroe/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/SonnyMonroe" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Landing Page</h3>
                    <img src={landing} alt="landing" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://icy-sunset-6501.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/SonnyMonroe/WebSite" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;