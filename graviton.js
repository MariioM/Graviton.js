const gravitonElements = document.querySelectorAll('.graviton')

window.addEventListener('scroll', fun =>{
    let scrollY = window.scrollY
    gravitonElements.forEach(element => {
        let newPosition= element.dataset.gravity * 0.2 * scrollY + 'px';
        element.style.marginTop = newPosition;
        console.log()
    });
})