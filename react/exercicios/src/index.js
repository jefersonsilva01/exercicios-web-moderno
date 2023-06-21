import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'

// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'

// ReactDOM.render(<BomDia nome="Jef"/>, document.getElementById('root'))

// import Multi, { BoaTarde } from './componentes/Multiplos'

// ReactDOM.render(
//   <div>
//     <BoaTarde nome="Ana" />
//     <Multi.BoaNoite nome="Bia" />
//   </div>
//   , document.getElementById('root')
// )

// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//   <Saudacao tipo="Bom dia" nome="João" />, document.getElementById('root')
// )

// import Pai from './componentes/Pai'

// ReactDOM.render(
//   <Pai nome="Paulo" sobrenome="Silva"/>, document.getElementById('root')
// )

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva"> 
    <Filho nome="Pedro" />
    <Filho nome="Paulo" />
    <Filho nome="Carla" />
  </Pai>  
  </div>, document.getElementById('root')
)