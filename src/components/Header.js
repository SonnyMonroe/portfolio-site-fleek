// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Michael Abramo" />

            <div className='header__content'>
                <h1>Hi, I'm Michael Abramo</h1>
                <p>DeFi Enthusiast Learning Blockchain Development</p>
                <a href="mailto:mabramo11@protonmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;