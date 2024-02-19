const overdraft = document.getElementById('overdraft');
const amount = document.getElementById('amount');
const overdraftAlert = document.getElementById('overdraft-alert');
const amountAlert = document.getElementById('amount-alert');

let isOverdraft = false;

document.body.addEventListener('keydown', (e) => {
    if (e.key == "y") {
        isOverdraft = true;
    }
});

overdraft.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (e.target.value < 100 || e.target.value > 2000) {
        overdraftAlert.style.display = "block";
    } else {
        overdraftAlert.style.display = "none";
    }
})

amount.addEventListener('input', (e) => {
    console.log(e.target.value);

    if (e.target.value < 500) {
        amountAlert.style.display = "block";
    } else {
        amountAlert.style.display = "none";
    }
})

