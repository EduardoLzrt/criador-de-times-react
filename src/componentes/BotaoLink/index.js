import "./BotaoLink.css";
import { Link } from "react-router-dom";

const BotaoLink = ({ to, children }) => {
    return (
        <header className="container-botao-link">
            <Link to={to} className="botao-link">{children}</Link>
        </header>
    );
};

export default BotaoLink;
