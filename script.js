const left = document.querySelector('.esq');
const right = document.querySelector('.dir');
const escolha = document.querySelector('.main');

left.addEventListener('mouseenter', () => escolha.classList.add('hover-left'))
left.addEventListener('mouseleave', () => escolha.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => escolha.classList.add('hover-right'))
right.addEventListener('mouseleave', () => escolha.classList.remove('hover-right'))