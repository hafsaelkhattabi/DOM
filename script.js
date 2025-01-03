document.addEventListener("DOMContentLoaded", () => {
const plus = document.querySelectorAll(".fa-plus-circle");
const minus = document.querySelectorAll(".fa-minus-circle");
const trashbtn = document.querySelectorAll(".fa-trash-alt");
const heart = document.querySelectorAll(".fa-heart");
const total = document.querySelector(".total");

plus.forEach((button)=>{
    button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        quantity++;
        quantityElement.innerText = quantity;
        updateTotal();
    });
});

minus.forEach((button)=>{
    button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.innerText);
        if (quantity > 0){
            quantity--;
            quantityElement.innerText = quantity;
        }
            updateTotal();
    });
});

trashbtn.forEach((button)=>{
    button.addEventListener("click", () => {
        const item = button.closest(".card-body");
        item.remove();
        updateTotal();
    });
});

heart.forEach((button)=>{
    button.addEventListener("click", () => {
        button.classList.toggle("liked");
    });
});

function updateTotal(){
    let total = 0;
    const cards = document.querySelectorAll(".card-body");
    iyems.forEach((card) => {
        const price = parseFloat(item.querySelector(".unit-price").innerText.replce("$", ""));
        const quantity = parseInt(item.querySelector(".quantity").innerText);
        total += price + quantity;
    });
    totalElement.innerText = 'total : ${total.toFixed(2)}';
}
});