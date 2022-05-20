const taskBar = document.querySelector('.taskicon');
let isStartDisplay = false;
taskBar.addEventListener('click', e=> {
    const startMenu = document.querySelector('.startMenu');
    if(isStartDisplay === false) {
        isStartDisplay = true;
        startMenu.style.bottom = "6vh";
    }
    else {
        isStartDisplay = false;
        startMenu.style.bottom = "-82vh";
    }
})