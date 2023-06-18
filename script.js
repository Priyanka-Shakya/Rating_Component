
let count = 0;
const NumberBtn = document.querySelectorAll('.btn');
const subBtn = document.querySelector('#subBtn');
const show = document.querySelector('b');
const container = document.querySelector('.container');
const thankuBox = document.querySelector('.thankuBox');



Array.from(NumberBtn).forEach((button) => {
    button.addEventListener('click', () => {
        if(button.className==='btn clicked'){
            count=count+0;
        }else{
            button.classList.add('clicked');
            button.style.backgroundColor = 'green';
            button.style.color='white';
            count = count+1;
        } 
    });
});

function rating() {
    if(count==0){
        alert('please rate Us!!!');
        return;
    }
    container.style.display = 'none';
    thankuBox.style.display = 'block';
    show.innerHTML = count;
}

subBtn.addEventListener('click', rating);