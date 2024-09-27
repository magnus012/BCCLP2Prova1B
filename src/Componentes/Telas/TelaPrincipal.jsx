import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import { listaCandidatos } from "../../dados/candidatos";
export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false)
    const [exibirCandidatos, setExibirCandidatos]=useState(listaCandidatos)
    const [exibirProposta, setExibirProposta]=useState(false)



    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato detalharCandidato={detalharCandidato} setDetalharCandidato={setDetalharCandidato} exibirProposta={exibirProposta} setExibirProposta={setExibirProposta}/>
                    
                ) : (
                    <GridCandidatos listaCandidatos={listaCandidatos} exibirCandidatos={exibirCandidatos} setExibirCandidatos={setExibirCandidatos}/>
                )
            }
        </Pagina>
    );
}