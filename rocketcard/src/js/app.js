const colorBackground = document.querySelector('.container');
const btnChangeColor = document.querySelector('.customCard');
const resetColor = document.querySelector('.resetCard');

const handleBackgroundColor = () =>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorBackground.style.backgroundColor = "#" + randomColor;
}

const resetBackgroundColor = () =>{
    const originalColor = '#000000';
    colorBackground.style.backgroundColor = originalColor;
}


btnChangeColor.addEventListener('click', handleBackgroundColor);
resetColor.addEventListener('click', resetBackgroundColor);