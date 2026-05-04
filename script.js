
document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.getElementById('catalog')
    const showSelection = document.getElementById('showSelection')
    const resultado = document.getElementById('resultado')


    showSelection.addEventListener('click', () => {
        const selected = Array.from(catalog.querySelectorAll('.select-movie:checked'))
            .map(cb => cb.closest('.card'))
        if (selected.length === 0) {
            resultado.innerHTML = '<em>Nenhum filme selecionado. Marque algumas caixas para ver a seleção.</em>'
            return
        }

        const list = selected.map(card => {
            return `<div class="sel-item"><img src="${card.querySelector('img').src}" alt=""/><div><strong>${card.dataset.title}</strong><br>${card.dataset.year} · ${card.dataset.genre}</div></div>`
        }).join('')

        resultado.innerHTML = `<h3>Filmes selecionados (${selected.length})</h3>` + list
    })
})

