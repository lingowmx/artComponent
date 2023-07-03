const shareBtn = document.querySelector('.card__content__icon');
const socialIcons = document.querySelector('.card__content__profile__social-icons');

shareBtn.addEventListener('click', () => {
    socialIcons.classList.toggle('show')
})