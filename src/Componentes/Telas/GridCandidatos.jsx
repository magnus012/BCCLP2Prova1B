import  { listaCandidatos as lCand } from "../../dados/candidatos";
import Candidato from "./elementos/Candidato";
import { useState } from "react";
export default function GridCandidatos(props) {
    function exibirCandidatos(){
        props.setExibirCandidatos(true);
    }
    const [listaCandidatos, setListaCandidatos] = useState(lCand)
    if (listaCandidatos) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {listaCandidatos.map((candidato) => (
                    <Candidato key={candidato.id} candidato={candidato} listaCandidatos={listaCandidatos} setListaCandidatos={setListaCandidatos}/>
                ))}
            </div>
        )
    }
    else {
        return (<h1>Carregando...</h1>)
    }
}