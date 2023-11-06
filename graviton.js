const gravitonElements = document.querySelectorAll('.graviton');

function calcGravity() {
    let scrollY = window.scrollY;
    gravitonElements.forEach(element => {
        let gravity;
        console.log("Data-Gravity: " + element.dataset.gravity);
        
        switch (parseInt(element.dataset.gravity, 10)) {
            case 1:
                gravity = 0.1;
                break;
            case 2:
                gravity = 0.2;
                break;
            case 3:
                gravity = 0.3;
                break;
            case 4:
                gravity = 0.4;
                break;
            case 5:
                gravity = 0.5;
                break;
            case -1:
                gravity = -0.1;
                break;
            case -2:
                gravity = -0.2;
                break;
            case -3:
                gravity = -0.3;
                break;
            case -4:
                gravity = -0.4;
                break;
            case -5:
                gravity = -0.5;
                break;
            default:
                gravity = 0.3;
                break;
        }

        console.log("Gravity: " + gravity);
        let translateY = gravity * scrollY;
        element.style.transform = `translateY(${translateY}px)`;
        console.log("TranslateY: " + translateY);
    });
    requestAnimationFrame(calcGravity);
}

calcGravity();


