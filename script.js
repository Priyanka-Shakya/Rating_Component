
let count = 4;
const NumberBtn = document.querySelectorAll('.btn');
const subBtn = document.querySelector('#subBtn');
const show = document.querySelector('b');
const container = document.querySelector('.container');
const thankuBox = document.querySelector('.thankuBox');



Array.from(NumberBtn).forEach((button) => {
    button.addEventListener('click', (e) => {
        button.style.backgroundColor = 'lightgreen';
        button.style.color='white';
        count = e.target.innerHTML;

    });
});

function rating() {
    container.style.display = 'none';
    thankuBox.style.display = 'block';
    show.innerHTML = count;
}


subBtn.addEventListener('click', rating);