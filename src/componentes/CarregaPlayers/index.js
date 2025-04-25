import "./CarregaPlayers.css";
import { useEffect, useState } from "react";

const CarregaPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [playersSelecionados, setPlayersSelecionados] = useState([]);
    const [time1, setTime1] = useState([]);
    const [time2, setTime2] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/players")
            .then((resposta) => resposta.json())
            .then((dados) => setPlayers(dados))
            .catch((erro) => console.error("Erro no fetch:", erro));
    }, []);

    const aoClicado = (playerSelecionado) => {
        const jaSelecionado = playersSelecionados.some((p) => p.nome === playerSelecionado.nome);

        if (jaSelecionado) {
            setPlayersSelecionados((valorAtual) =>
                valorAtual.filter((p) => p.nome !== playerSelecionado.nome)
            );
        } else {
            if (playersSelecionados.length >= 10) {
                alert("Máximo de 10 jogadores selecionados!");
                return;
            }
            setPlayersSelecionados((valorAtual) => [...valorAtual, playerSelecionado]);
        }
    };

    const dividirTimes = () => {
        const sortPlayers = [...playersSelecionados].sort((a, b) => b.mmr - a.mmr);
        let time1 = [];
        let time2 = [];
        let time1MMR = 0;
        let time2MMR = 0;

        sortPlayers.forEach(player => {
            if (time1.length < 5 && (time1MMR <= time2MMR || time2.length >= 5)) {
                time1.push(player);
                time1MMR += player.mmr;
            } else if (time2.length < 5) {
                time2.push(player);
                time2MMR += player.mmr;
            }
        });

        setTime1(time1);
        setTime2(time2);
    };

    const excluirPlayer = async () => {

        const ids = playersSelecionados.map(player => player.id);

        await Promise.all(
            ids.map(id =>
                fetch(`http://localhost:8000/players/${id}`, {
                    method: 'DELETE',
                })
            )
        );

        setPlayers(prev => prev.filter(player => !ids.includes(player.id)));
    };

    return (
        <>
            <div className="container">
                <h1 className="lista-jogadores">Lista de Jogadores</h1>
                <ul className="players">
                    {players.map((player, index) => {
                        const selecionado = playersSelecionados.some(p => p.nome === player.nome);

                        return (
                            <li key={index}>
                                <button
                                    onClick={() => aoClicado(player)}
                                    className={selecionado ? "botao selecionado" : "botao"}
                                >
                                    {player.nome} || {player.elo} 
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="container-botoes">
                <button onClick={excluirPlayer} className="botao-excluir">Excluir player</button>
                <button onClick={dividirTimes} className="botao-dividir-times">Dividir em Times</button>
            </div>

            <div className="container-times">
                <div className="time">
                    <h2>Time 1</h2>
                    <ul>
                        {time1.map((player, index) => (
                            <li key={index}>
                                {player.nome} || {player.mmr} || {player.elo}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="time">
                    <h2>Time 2</h2>
                    <ul>
                        {time2.map((player, index) => (
                            <li key={index}>
                                {player.nome} || {player.mmr} || {player.elo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CarregaPlayers;
