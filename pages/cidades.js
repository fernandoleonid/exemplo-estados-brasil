function criarCard (cidade){
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = cidade

    return card
}
export function carregarCidades (cidades) {
    const container = document.getElementById('estado-container')
    const cards = cidades.map(criarCard)
    container.replaceChildren(...cards)
}