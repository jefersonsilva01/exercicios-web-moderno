Array.prototype.reduce2 = function(callback, valorInicial) {
  let acumulador = valorInicial || this[0]
  const indiceInicial = valorInicial ? 0 : 1
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}