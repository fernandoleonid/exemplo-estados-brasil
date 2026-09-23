import { carregarCidades } from "./cidades.js"

function criarCard (estado){
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = estado.sigla
    card.onclick = () => carregarCidades (estado.cidades)

    return card
}
export function carregarEstados (estados) {
    const container = document.getElementById('estado-container')
    const cards = estados.map(criarCard)
    container.replaceChildren(...cards)
}