import { useState } from "react";
import Layout from "../components/Layout";


export default function Estado() {
  const [valor, setValor] = useState(3);

  function incrementar(){
    setValor(valor + 1)
  }

  return(
    <Layout titulo="Componente com Estado">
      <span>{valor}</span>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}