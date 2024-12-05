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
    let anno = new Date().getFullYear();

    let caselle = document.getElementsByClassName("casella")

    Array.from(caselle).forEach((casella, index) => {
        let data = new Date(anno, 11, index + 1);
        let giorno = data.getDate();
        let mese = data.getMonth();
        let annoCorrente = data.getFullYear();
        
        casella.id = `${giorno}-${mese}-${annoCorrente}`;

        casella.addEventListener("click", function(){            
            checkDay(casella);
        });
    });
}


function checkDay(casella){

    let oggi = new Date();
    let giorno = oggi.getDate();
    let mese = oggi.getMonth();
    let anno = oggi.getFullYear();

    let dataCorrente = `${giorno}-${mese}-${anno}`;

    
    if(dataCorrente === casella.id){
        alert("ok");
    }else{
        alert("no");
    }
}

id();



