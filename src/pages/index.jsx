import Navegador from '../components/Navegador'

export default function start() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="#ee82ee"/>
      <Navegador destino="/jsx" texto="JSX"/>
      <Navegador destino="/exemplo" texto="Exemplo" cor="#0026ff"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="rgb(255, 60, 0)"/>
      <Navegador destino="/cliente/sc-48/123" texto="Navegação #02" cor="green"/>
      <Navegador destino="/estado" texto="Componente com estado" cor="red"/>
      <Navegador destino="/integracao_1" texto="Integracao com API" cor="orange"/>
      <Navegador destino="/estatico" texto="Conteúdo Estático" cor="brown"/>
    </div>
  )
}
