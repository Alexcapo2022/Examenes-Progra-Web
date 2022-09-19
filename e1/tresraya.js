//VARIABLES
let numeros =[0,1,2,3,4,5,6,7,8];
numeros = numeros.sort(()=>{return Math.random()-0.5})
numeros.splice(0,0,'X')
numeros.splice(1,1,'O')
numeros.splice(2,2,'X')
numeros.splice(3,3,'O')
numeros.splice(4,4,'X')
numeros.splice(5,5,'O')
numeros.splice(6,6,'X')
numeros.splice(7,7,'O')
numeros.splice(8,8,'X')
let tarjetasDestapadas = 0;
let primerResultado=null;
let segundoResultado=null;
let tercerResultado=null;
let tarjeta1=null;
let tarrjeta2=null;
let aciertos=0;
let temporizador=false;
let timer =20;
let timerInicial =20;
let tiempoRegresivoid =null;
//Apuntando a documento HTML
let mostrarAciertos =document.getElementById('aciertos');
let mostrarMovientos = document.getElementById('movimientos');
let mostrarMovientos2 = document.getElementById('movimientos2');
let mostrarTiempo = document.getElementById('t-restante');
//Funciones
function contarTiempo(){
    tiempoRegresivoid=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML= `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoid);
            bloquearTarjetas();
        }
    },1000);
}
function bloquearTarjetas(){
    for (let i= 0;i<=8;i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i]
        tarjetaBloqueada.disabled = true;
    }
}
//FUNCION PRINCIPAL
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
    if(tarjetasDestapadas == 1){
        //Mostrar primer numero
        tarjeta1= document.getElementById(id);
        primerResultado=numeros[id]
        tarjeta1.innerHTML = primerResultado;
       
        
        

    }else if(tarjetasDestapadas == 2){
        //Mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        

        //Incrementar movimientos
        movimientos++;
        mostrarMovientos.innerHTML = `movimientos: ${movimientos}`;

        if( primerResultado==primerResultado || segundoResultado == segundoResultado ||tercerResultado == tercerResultado){
            //Encerar contador tarjetas destapadas
            tarjetasDestapadas=0;

            //Aumentar Aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;

            if(aciertos == 1){
                clearInterval(tiempoRegresivoid);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} Player1 Gana, Player2Gana , EMPATE`;
                mostrarTiempo.innerHTML = `Fantastico!📣 Solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovientos.innerHTML = `Movimientos: ${movimientos} 🤟😎`;
                mostrarMovientos2.innerHTML = `Movimientos: ${movimientos} 🤟😎`;
                
            }
        }else{
            //Mostrar momeamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }   
    }
}