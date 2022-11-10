const politicsCards = document.querySelectorAll('.politics-card');
const politicsCardsArray = Array.from(politicsCards);

const politicsCardsBlur = () => {
    politicsCardsArray.forEach((card) => {
        card.classList.add('blur');
    });
};

const politicsCardsUnblur = () => {
    politicsCardsArray.forEach((card) => {
        card.classList.remove('blur');
    });
};

// Blur all politics cards exept the one that is hovered
politicsCardsArray.forEach((card) => {
    card.addEventListener('mouseover', () => {
        politicsCardsBlur();
        card.classList.remove('blur');
    });

    card.addEventListener('mouseout', () => {
        politicsCardsUnblur();
    });
});
