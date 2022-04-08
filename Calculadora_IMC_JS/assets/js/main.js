const form = document.querySelector('#form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setRes('peso invalido', false);
        return
    }
    if (!altura) {
        setRes('Altura invalida', false);
        return
    }
    const imc = getimc(peso, altura);
    const nivelimc = getimcnivel(imc);
    
    const msg = `seu IMC é de ${imc} (${nivelimc})`
    setRes(msg, true)
});

function getimcnivel (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'gordo 1', 'gordo 2', 'gordo 3']
    if (imc >= 39.9){
        return nivel[5];
    }
    if (imc >= 34.9){
        return nivel[4];
    }
    if (imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc >= 18.5){
        return nivel[1];
    }
    if (imc < 18,5){
        return nivel[0];
    }
} 

function getimc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

function criap () {
    const p = document.createElement('p');
    return p;
}

function setRes (msg, isvalid) {
    const res  = document.querySelector('#res');
    res.innerHTML = '';

    const p = criap();
    
    if (isvalid) {
        p.classList.add('paragrafo-res')
    }else{
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    res.appendChild(p);      
}
