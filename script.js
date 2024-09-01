let display = document.getElementById('inputBox');    //inputbox store in display variable 
//we will store the buttons in different variables
//query selector will store all the buttons in one variable and then create array and take them in  different variables
let buttons = document.querySelectorAll('button'); //using button tag
let buttonsArray = Array.from(buttons);
let string = '';  
 //noramal argument inserted btn(seperated it from array and converted it into a function)
//buttonsArray.forEach(function(btn){})           
buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

            if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);   //substring converts the value according to the index value and displays only the values we want
             //then dislpay...
            display.value = string; 

        } else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string; 
        }else if(e.target.innerHTML == '='){
                string = eval(string);     //whatever inside the string will be converted into code and then we will stored in the string
                display.value = string; 
        }else{
        string = string + e.target.innerHTML;
        display.value = string;  // for string display
        //console.log(e.target.innerHTML)  
        }
    });
});

