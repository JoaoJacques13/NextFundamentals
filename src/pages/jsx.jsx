import Layout from "../components/Layout"

export default function JSX() {
  const a = 5
  const b = 3

  
  return(
    <Layout titulo="Exemplo de JSX">
      <h1>JSX é um conceito central</h1>
      {a * b}
    </Layout>
  )
}