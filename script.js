let display = document.getElementById('inputbox');              //inputbox store in display variable
//From queryselector we can sotre all the buttons inside a variable buttons
let buttons = document.querySelectorAll('button') ;                   // we can give id,class,tag  for queryselector 
// console.log(buttons);
let buttonsArray = Array.from(buttons);              // convert buttons in array   
let string = '';
//foreach loop use--
buttonsArray.forEach(function(btn) {            //function pass with btn arugment(foreach loop s array ko alg2 kra)
    //  console.log(btn);                       
     //btn.addEventListener('click',function(event){});
        //arrow function use--
       btn.addEventListener('click',(e) => {   //event perform on btn

        if(e.target.innerHTML ==  'DEL'){
            string = string.substring(0, string.length-1);    //substring is method of string
            display.value = string;
        }
        else if (e.target.innerHTML ==  'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML ==  '='){
            string = eval(string);  // eval function --convert string into number then calculate by js then stroe in string
            display.value = string;
        }
        else{
        string = string +  e.target.innerHTML;
        display.value = string;
        // console.log(event.target.innerHTML);
        }
    });
}); 
