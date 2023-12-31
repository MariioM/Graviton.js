const gravitonElements = document.querySelectorAll('.graviton');
const gravitonElementsHor = document.querySelectorAll('.graviton-hor');
function calcGravity() {
    let scrollY = window.scrollY;
    let gravity;
    gravitonElements.forEach(element => {
        if (Number(element.dataset.gravity)) {
            switch (parseInt(element.dataset.gravity, 10)) {
                case 1:
                    gravity = 0.07;
                    break;
                case 2:
                    gravity = 0.1;
                    break;
                case 3:
                    gravity = 0.15;
                    break;
                case 4:
                    gravity = 0.17;
                    break;
                case 5:
                    gravity = 0.2;
                    break;
                case 6:
                    gravity = 0.25;
                    break;
                case 7:
                    gravity = 0.27;
                    break;
                case 8:
                    gravity = 0.3;
                    break;
                case 9:
                    gravity = 0.35;
                    break;
                case 10:
                    gravity = 0.37;
                    break;
                case 1:
                    gravity = -0.07;
                    break;
                case 2:
                    gravity = -0.1;
                    break;
                case 3:
                    gravity = -0.15;
                    break;
                case 4:
                    gravity = -0.17;
                    break;
                case 5:
                    gravity = -0.2;
                    break;
                case 6:
                    gravity = -0.25;
                    break;
                case 7:
                    gravity = -0.27;
                    break;
                case 8:
                    gravity = -0.3;
                    break;
                case 9:
                    gravity = -0.35;
                    break;
                case 10:
                    gravity = -0.37;
                    break;
                default:
                    gravity = 0.3;
                    break;
            }
        }
        else {
            switch (element.dataset.gravity) {
                case "Earth":
                    gravity = 9.802;
                    break;
                case "Moon":
                    gravity = 1.62;
                    break;
                case "Mars":
                    gravity = 3.71;
                    break;
                case "Venus":
                    gravity = 8.87;
                    break;
            }
        }
        let translateY = gravity * scrollY;
        element.style.transform = `translateY(${translateY}px)`;
    });
    gravitonElementsHor.forEach(element => {
        if (Number(element.dataset.gravity)) {
            switch (parseInt(element.dataset.gravity, 10)) {
                case 1:
                    gravity = 0.07;
                    break;
                case 2:
                    gravity = 0.1;
                    break;
                case 3:
                    gravity = 0.15;
                    break;
                case 4:
                    gravity = 0.17;
                    break;
                case 5:
                    gravity = 0.2;
                    break;
                case 6:
                    gravity = 0.25;
                    break;
                case 7:
                    gravity = 0.27;
                    break;
                case 8:
                    gravity = 0.3;
                    break;
                case 9:
                    gravity = 0.35;
                    break;
                case 10:
                    gravity = 0.37;
                    break;
                case 1:
                    gravity = -0.07;
                    break;
                case 2:
                    gravity = -0.1;
                    break;
                case 3:
                    gravity = -0.15;
                    break;
                case 4:
                    gravity = -0.17;
                    break;
                case 5:
                    gravity = -0.2;
                    break;
                case 6:
                    gravity = -0.25;
                    break;
                case 7:
                    gravity = -0.27;
                    break;
                case 8:
                    gravity = -0.3;
                    break;
                case 9:
                    gravity = -0.35;
                    break;
                case 10:
                    gravity = -0.37;
                    break;
                default:
                    gravity = 0.3;
                    break;
            }
        }
        else {
            switch (element.dataset.gravity) {
                case "Earth":
                    gravity = 9.802;
                    break;
                case "Moon":
                    gravity = 1.62;
                    break;
                case "Mars":
                    gravity = 3.71;
                    break;
                case "Venus":
                    gravity = 8.87;
                    break;
            }
        }
        let translateX = gravity * scrollY;
        element.style.transform = `translateX(${translateX}px)`;
    });
    requestAnimationFrame(calcGravity);
}

calcGravity();