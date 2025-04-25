import './Banner.css';

function Banner({ children }) {
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="banner principal da página" />
            { children }
        </header>
    )
};

export default Banner;
