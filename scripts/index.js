// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');
const buttonAddCard = document.querySelector('.profile__add-button');
// @todo: Функция создания карточки
function createCard(cardItem, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');

    cardImage.src = cardItem.link;
    cardImage.alt = cardItem.name;

    cardTitle.textContent = cardItem.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
        deleteCard(cardElement);
    });
    return cardElement;
};
// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
};

function renderCard(container, cardItem) {
    container.append(cardItem);
};
// @todo: Вывести карточки на страницу
initialCards.forEach(function (cardData) {
    renderCard(cardsContainer, createCard(cardData, deleteCard));
});