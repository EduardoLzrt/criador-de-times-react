import Formulario from "../Formulario"
import Player from "../Player"
import BotaoLink from "../BotaoLink"

const CriarPlayer = () => {
    return (
        <div>
            <BotaoLink to={"/players"}>Lista de players</BotaoLink>
            <Formulario />
            <Player />
        </div>
    )
}

export default CriarPlayer;
