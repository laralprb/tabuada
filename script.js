function calcular(){

    let numero = document.getElementById('txtnumero');
    let res = document.getElementById('res');
   
    let n = Number(numero.value);

   
    res.innerHTML = `Tabuada de ${n}<br>`;
    if(numero.value.length == 0){
        alert("Por favor, digite um número!");

    }else{
            for(i=0;i<=10;i++){
                //console.log(n*i)
               let total = n*i
            res.innerHTML += `${n}x${i} = ${total} <br>`
        }
    
             
    } 
             
}