let shopButton = document.querySelectorAll('.shop-btn');
let product = document.querySelectorAll('.product');

for (let i = 0; i < shopButton.length; i++) {

    shopButton[i].addEventListener('click', () => {

        for (let j = 0; j < product.length; j++) {
            
            if (i != j && product[j].classList.contains('active')) {
                product[j].classList.remove('active');
            } 
            
            if (i === j && !product[j].classList.contains('active')) {
                product[j].classList.add('active');
            }
        }
    });
}