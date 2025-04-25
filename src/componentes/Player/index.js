const Player = ({ nome, elo, mmr }) => {
    return(
    <>
    <h1>{nome}</h1>
    <h2>{elo}</h2>
    <h3>{mmr}</h3>
    </>)
}

export default Player;