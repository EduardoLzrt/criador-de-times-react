import BotaoLink from "../BotaoLink";
import CarregaPlayers from "../CarregaPlayers";

const ListaDePlayers = () => {
    return(
        <div>
            <BotaoLink to={"/"}>Criar Player</BotaoLink>
            <CarregaPlayers />
        </div>
    )
}

export default ListaDePlayers;