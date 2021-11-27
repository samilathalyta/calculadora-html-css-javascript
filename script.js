
 

function insert(num){

   
    var resultado = document.querySelector('.resultado').innerHTML 
    
    
    var resultado = document.querySelector('.resultado').innerHTML = resultado + num

       
}
    


function apagar (){
    var resultado = document.querySelector('.resultado').innerHTML
     document.querySelector('.resultado').innerHTML = resultado.substring(0, resultado.length -1)

}

function clean() {
    document.querySelector('.resultado').innerHTML = " "
}

function calc(){
    var resultado = document.querySelector('.resultado').innerHTML
    if(resultado){
        document.querySelector('.resultado').innerHTML = eval(resultado)
    }
}




