import styles from '../styles/estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS">
      <div className={styles.DivEstilo}>
        <h1>Estilinho</h1>
      </div>
    </Layout>
  )
}