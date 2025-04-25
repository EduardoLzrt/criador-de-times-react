import './Formulario.css'
import CampoTexto from "../CampoTexto";
import Botao from '../Botao';
import ListaDeElos from '../ListaDeElos';

const { useState } = require("react");

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [mmr, setMmr] = useState('');
    const [elo, setElo] = useState('');

    const aoSalvar = async (evento) => {
        evento.preventDefault();

        const novoPlayer = {
            nome,
            mmr,
            elo
        };

        try {
            const resposta = await fetch('http://localhost:8000/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoPlayer)
            });

            if (resposta.ok) {
                console.log('Player salvo com sucesso!');
                setNome('');
                setMmr('');
                setElo('');
            } else {
                const erro = await resposta.text();
                console.error('Erro ao salvar o player:', erro);
            }
        } catch (erro) {
            console.error('Erro na comunicação com o servidor:', erro);
        }
    };

    const elos = [
        { nome: 'Ferro' },
        { nome: 'Bronze' },
        { nome: 'Prata' },
        { nome: 'Ouro' },
        { nome: 'Platina' },
        { nome: 'Esmeralda' },
        { nome: 'Diamante' },
        { nome: 'Mestre' },
        { nome: 'High Elo' }
    ];

    const todosOsElos = elos.map(elo => elo.nome);

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um player.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nick"
                    placeholder="Digite o nick"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="MMR"
                    placeholder="Digite o MMR"
                    valor={mmr}
                    aoAlterado={valor => setMmr(valor)}
                />
                <ListaDeElos
                    obrigatorio={true}
                    label="Elos"
                    itens={todosOsElos}
                    valor={elo}
                    aoAlterado={valor => setElo(valor)}
                />
                <Botao>
                    Criar player
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
