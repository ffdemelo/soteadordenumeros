// TODO create array with sequential numbers and randomize its item positions for unique randomic elements

var inputQuant = document.getElementById('input-quant');
var inputSorteado = document.getElementById('input-sorteado');
var btnGerar = document.getElementById('gerar');
var numberList = document.getElementById('number-list');

// Function to get a random positive integer number in a range from "begin" parameter until "end" parameter
function getRandInt(begin, end){
    if (begin === 0) {
        alert("Erro!");
        return;
    }

    return Math.floor(Math.random() * (end - begin + 1)) + begin;
}

function getArray(number_items){
    var array = [];
    for(i = 1; i<= number_items; i++){
        array.push(i);
    }
     return array;
}

function randomizeArray(array){
    for(i = 0; i<= array.length - 1; i++){
        let x = array[i];
        let rn = (getRandInt(1, array.length)) - 1;
        array[i] = array[rn];
        array[rn] = x;
    }
    return array;
}

// Create element:
function createSequence(){
    array_elements = getArray(inputQuant.value);
    array_elements = randomizeArray(array_elements);
    numberList.innerHTML = ""
    for(let x of array_elements){
        const div = document.createElement("div");
        div.innerText = x;
        div.id = x;
        div.style.color = "white";
        div.style.backgroundColor = "red";
        div.style.fontWeight = "bold"
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.margin = "3px";
        div.style.borderRadius = "30px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";

        // Append to numberList:
        numberList.appendChild(div);
    }

    rn = getRandInt(1, inputQuant.value);

    inputSorteado.value = rn;
    document.getElementById(rn).style.backgroundColor = "green";
}

/* const div = document.createElement("div");
div.innerText = "texto";
document.numberList.appendChild(div); */
btnGerar.onclick = createSequence;
/* document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center"; */