import Navegador from "../components/Navgador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
      <Navegador texto="Jsx" destino="/jsx" cor="crimson" />
      <Navegador texto="Navegcação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegcação #02" destino="/cliente/sp-2/123" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="#a45b71" />
      <Navegador texto="Integracao com API #01" destino="/integracao_1" cor="#42a9a9" />
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
    </div>
  )
}