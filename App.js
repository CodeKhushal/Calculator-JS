let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Clear'){
            string = '';
            document.querySelector('input').value = "0";
        }
        else if(e.target.innerHTML == 'Backspace'){
            string = document.querySelector('input').value.substring(0, document.querySelector('input').value.length-1);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})