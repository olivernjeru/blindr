const display = document.getElementById('display');
function play() {
    const clearaudio = document.getElementById("clear-audio");
    clearaudio.play();
}

//using an array
const buttons = Array.from(document.getElementsByClassName('button'));

// to add the content a clicked button the display
buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


