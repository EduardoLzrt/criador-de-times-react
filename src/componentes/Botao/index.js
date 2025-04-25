import './Botao.css';

const Botao = ({ children }) => {
    return (
        <div className='container-botao'>
            <button className='botao'>{children}</button>
        </div>

    )
}

export default Botao;
