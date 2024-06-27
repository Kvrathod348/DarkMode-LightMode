function light() {
    const lightMode = document.getElementById('light');
    lightMode.classList.add('active1')

    const darkMode = document.getElementById('dark');
    darkMode.classList.remove('active2');

    const bodyMode = document.getElementById('body');
    bodyMode.classList = "bg-light"
}

function dark() {
    const darkMode = document.getElementById('dark');
    darkMode.classList.add('active2');

    const lightMode = document.getElementById('light');
    lightMode.classList.remove('active1');

    const bodyMode = document.getElementById('body');
    bodyMode.classList = "bg-dark"

     const cardFont = document.getElementById('container-card');
    cardFont.classList = "card-name-dark"
}
// production change function

function first() {
    const imgChange = document.getElementById('img-show')
    imgChange.src = "../images/best-selling-action/Deku.png"
}

function second() {
    const imgChange = document.getElementById('img-show')
    imgChange.src = "../images/best-selling-action/Deku2.0.png"
}

function third() {
    const imgChange = document.getElementById('img-show')
    imgChange.src = "../images/best-selling-action/group.png"
}

function fourth() {
    const imgChange = document.getElementById('img-show')
    imgChange.src = "../images/best-selling-action/hookEye.png"
}

function fifth() {
    const imgChange = document.getElementById('img-show')
    imgChange.src = "../images/best-selling-action/indevar.png"
}

// increment and decrement part

function inc() {
    const quantityText = document.getElementById('quantitytext');
    let quantity = parseInt(quantityText.innerText);
    const priceText = document.getElementById('pricetext')
    const priceTotal = document.getElementById('pricetotal');

    if (quantity < 5) {
        quantityText.innerText = ++quantity;
    } else {
        alert("You can't buy more than 5 items")
    }

    priceTotal.innerText = (`Total : ${quantity * 2000}rs/-`)

}

function dec() {
    const quantityText = document.getElementById('quantitytext');
    let quantity = parseInt(quantityText.innerText);
    const priceTotal = document.getElementById('pricetotal')
    if (quantity > 1) {
        quantityText.innerText = --quantity;
    } else {
        alert("You can't buy less than 1 item")
    }
    priceTotal.innerText = (`Total : ${quantity * 2000}rs/-`)
}