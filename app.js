const  mostrarHora = ()=>{
    let date  = new Date();    
    
    let hr = formatearDigitos(date.getHours());
    let min = formatearDigitos(date.getMinutes());
    let sec = formatearDigitos(date.getSeconds());      
    hora =  `${hr} : ${min} : ${sec}`
    document.getElementById('hora').innerHTML =hora;  


    let mes = ['Ene','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let dia = ['Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab', 'Dom'];
    let diaSem = dia[date.getDay()];
    let diaNum = date.getDay();
    let mesA = mes[date.getMonth()];
    let fecha = `${diaSem}, ${diaNum} de ${mesA}`    
    document.getElementById('fecha').innerHTML = fecha;
    document.getElementById('contenedor').classList.toggle('animacion');
    
}


const formatearDigitos = (digito)=>{

    if(digito < 10)
    digito = '0' + digito;
    return digito;
    
}


setInterval(mostrarHora,1000);

