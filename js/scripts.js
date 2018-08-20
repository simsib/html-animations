document.addEventListener("DOMContentLoaded", loaded);
console.log(1);
function loaded() {
    const lever = document.querySelector('.lever');
    let mouseDown = false;
    var mouseY;

    var elementY = 20;
    lever.addEventListener('webkitAnimationEnd', function (e) {
        lever.classList.remove('pull-down');
    }, false)
    // lever.addEventListener('click', function(e) {
    //     console.log(e);
    //     lever.classList.add('pull-down');
    // });
    lever.addEventListener('mousedown', onMouseDown);
    lever.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    function onMouseDown(e) {
        mouseY = event.clientY;
        mouseDown = true;
    }

    function onMouseMove(e) {
        console.log(mouseDown);
        if (mouseDown === false) {
            return;
        }
        var deltaY = event.clientY - mouseY;
        lever.style.top = elementY + deltaY + 'px';
    }

    function onMouseUp(event) {
        console.log(lever);
        mouseDown = false;
        elementY = parseInt(lever.style.top) || 0;
        // var deltaY = event.clientY - mouseY;
        // lever.style.transform = `translateY(${160}px)`;
    }
}