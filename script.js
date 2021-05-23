var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var searchBar = document.querySelector('input');
//console.log(cards)

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                }
                else {
                    card.style.display = 'none';
                }
            })
        }
    })
});

searchBar.addEventListener('keyup', function (event) {
    // console.log(event.target.value.toLowerCase().trim());
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function (card) {
        if (card.classList.contains(userInput)) {
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
    })
})
