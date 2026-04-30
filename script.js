// Movie catalog interactions: simple selection summary (no search, no modal)
document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.getElementById('catalog')
    const showSelection = document.getElementById('showSelection')
    const resultado = document.getElementById('resultado')
    // When clicking on a card (not the checkbox), let the default label behavior toggle the checkbox.
    // No modal: clicking the card toggles the checkbox because each card is a label wrapping the checkbox.

    // Show selection summary
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

