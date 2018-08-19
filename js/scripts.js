document.addEventListener("DOMContentLoaded", loaded);
console.log(1);
function loaded() {
    const lever = document.querySelector('.lever');
    let mouseDown = false;
    let mouseX;
    let mouseY;

    // element X and Y before and after move
    let elementX = 0;
    let elementY = 0;
    lever.addEventListener('webkitAnimationEnd', function (e) {
        lever.classList.remove('pull-down');
    }, false)
    // lever.addEventListener('click', function(e) {
    //     console.log(e);
    //     lever.classList.add('pull-down');
    // });
    lever.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    lever.addEventListener('mouseup', onMouseUp);

    function onMouseDown(e) {
        console.log('down ', e);
        mouseX = event.clientX;
        mouseY = event.clientY;
        mouseDown = true;
    }

    function onMouseMove(e) {
        console.log(mouseDown);
        if (mouseDown === false) {
            return;
        }
        console.log('move', e);
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    function onMouseUp(event) {
        console.log(lever);
        mouseDown = false;
        var deltaY = event.clientY - mouseY;
        lever.style.transform = `translateY(${160}px)`;
    }
}