// funzione per creare elementi HTML
function createElement(obj) {
    return document.createElement(obj);
}

// funzione per prendere elementi da classe
function getElementsByClass(classe) {
    return document.getElementsByClassName(classe);
}

let cell = getElementsByClass('casella');

for(let i = 1; i < cell.length + 1; i++){
    cell[i - 1].innerText = i;
}


function id(){
    let anno = data_ora.getFullYear()
    let primo_dicembre = new Date(`${anno}-08-26`);
    console.log(primo_dicembre.getMilliseconds())
}