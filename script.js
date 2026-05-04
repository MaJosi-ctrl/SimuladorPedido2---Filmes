
// Script atualizado para listar filmes selecionados e mostrar preços
// O botão com id "showSelection" aciona a função showSelection

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('showSelection')
    if (btn) btn.addEventListener('click', showSelection)
})

function showSelection() {
    // vamos pegar todos os checkboxes dos cards
    const checkboxes = document.querySelectorAll('.select-movie')
    const resultado = document.getElementById('resultado')

    // mapa de preços por título (caso o card não tenha data-price)
    const priceMap = {
        'A Viagem de Chihiro': 18.00,
        'O Serviço de Entregas da Kiki': 15.00,
        'O Menino e a Garça': 12.00,
        'Ponyo': 14.00,
        'Princesa Mononoke': 20.00
    }

    let itensHtml = ''
    let subtotal = 0

    checkboxes.forEach(cb => {
        if (cb.checked) {
            const card = cb.closest('.card')
            if (!card) return
            const title = card.dataset.title || (card.querySelector('h2') && card.querySelector('h2').innerText) || 'Filme'
            const year = card.dataset.year || ''
            const genre = card.dataset.genre || ''

            // preço: preferir data-price no card, senão buscar no mapa, senão usar 15
            let price = 15.00
            if (card.dataset.price) {
                const p = parseFloat(card.dataset.price)
                if (!isNaN(p)) price = p
            } else if (priceMap[title]) {
                price = priceMap[title]
            }

            subtotal += price

            itensHtml += `<div class="item"><strong>${title}</strong> — R$ ${price.toFixed(2)}<br><small>${year} ${year && genre ? '·' : ''} ${genre}</small></div>`
        }
    })

    if (subtotal === 0) {
        resultado.innerHTML = 'Escolha pelo menos um filme!'
        return
    }

    // desconto: 10% quando subtotal >= 50 (continua a regra anterior)
    let desconto = 0
    if (subtotal >= 50) desconto = subtotal * 0.10

    const total = subtotal - desconto

    resultado.innerHTML =
        `<strong>Filmes selecionados:</strong><br>` +
        itensHtml +
        `<br>Subtotal: R$ ${subtotal.toFixed(2)}` +
        `<br>Desconto: R$ ${desconto.toFixed(2)}` +
        `<br><strong>Total: R$ ${total.toFixed(2)}</strong>`
}
    // Se o valor for maior o igual a 50, aplicamos um desconto de 10%

