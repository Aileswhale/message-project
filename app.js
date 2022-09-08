const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const msgOut = document.querySelector('.msgOut')

const message = ()=>{
     const msgIn= input.value;
    if (msgIn === '') {
        alert('please type in something')
    }
    else{
       
    msgOut.innerHTML= msgIn;
    input.value= '';
      
    }
   
   
}
const enterEvent = (event)=>{
     const msgIn= input.value;
    if (msgIn.length > 0  && event.which === 13 ) {
        
    msgOut.innerHTML= msgIn;
    input.value= '';
        
    }
   else if (msgIn === ''  && event.which === 13 ) {
    alert('opps, type some message.')
   }
    
   
   
}

btn.addEventListener('click', message)
input.addEventListener('keypress',enterEvent)



