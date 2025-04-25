import './ListaDeElos.css';



const ListaDeElos = (props) => {
    return (
        <div className='lista-de-elos'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=''>Selecione um elo</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaDeElos;
