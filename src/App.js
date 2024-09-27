import { Route, Routes, BrowserRouter } from "react-router-dom";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import DetalhesCandidato from "./Componentes/Telas/DetalhesCandidato";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
                <Route path="/detalhes" element={<DetalhesCandidato/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
