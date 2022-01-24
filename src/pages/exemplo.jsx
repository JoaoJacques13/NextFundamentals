import Header from "../components/Header"
import Layout from "../components/Layout"

export default function Exemplo() {
  return(
    <Layout titulo="Usando componentes">
      <Header nome="Joao Jacques"/>
      <Header/>
    </Layout>
  )
}