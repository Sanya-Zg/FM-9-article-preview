const sharePointer = document.getElementById('share');
const blockLinks = document.querySelector('.links-outer');

sharePointer.addEventListener('mouseenter', () => {
    sharePointer.classList.toggle('share-hovered');
})

sharePointer.addEventListener('mouseleave', () => {
    sharePointer.classList.toggle('share-hovered');
})

sharePointer.addEventListener('click', () => {
    
    blockLinks.classList.toggle('visible');
});
