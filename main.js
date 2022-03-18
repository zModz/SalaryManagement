// import { naoCasado } from "./arrays.js";

var calcForm = document.forms["calcutalor"];
var civil = calcForm.elements["civil"];
var depende = calcForm.elements["depende"];
var base = calcForm.elements["base"];
var almoco = calcForm.elements["almo"];
var dias = calcForm.elements["days"];
var retencao = calcForm.elements["perc"];
// var insentacao = calcForm.elements["inse"];
// var dioturnidade = calcForm.elements["diot"];

var btn = document.getElementById("btn");

var civilArr = ["Solteiro", "Casado"];
for(var i = 0; i < civilArr.length; i++) {
    var opt = civilArr[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    civil.appendChild(el);
}

var dependeArr = [0, 1, 2, 3, 4, 5];
for(var i = 0; i < dependeArr.length; i++) {
    var opt = dependeArr[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    depende.appendChild(el);
}

function calcBruto(){
    // Salario Base + (SubAlmo*Dias)
    var bruto = 0.0;
    var sub = 0.0;

    sub = parseFloat(almo.value) * parseInt(dias.value);
    bruto = parseFloat(base.value) + sub;

    console.log(bruto);
    return bruto;
}

function calcRet(){
    var dep = new Array();
    dep["0"] = 0;
    dep["1"] = 1;
    dep["2"] = 2;
    dep["3"] = 3;
    dep["4"] = 4;
    dep["5"] = 5;
    var d = dep[depende.value];
    console.log(d);
    
    var civ = new Array();
    civ["Solteiro"] = 0;
    civ["Casado"] = 1;
    var c = civ[civil.value];
    console.log(c);

    if(c == 0){
        if (calcBruto() <= 710.00) {
            retencao.value = naoCasado[0][d].toString();
            console.log(calcBruto() + " " + naoCasado[0][d]);
        }

        if (calcBruto() > 710.00 || calcBruto() <= 720.00){
            retencao.value = naoCasado[1][d].toString();
            console.log(calcBruto() + " " + naoCasado[1][d]);
        }

        if (calcBruto() > 720.00 || calcBruto() <= 740.00){
            retencao.value = naoCasado[2][d].toString();
            console.log(calcBruto() + " " + naoCasado[2][d]);
        } 
        
        if (calcBruto() > 740.00 || calcBruto() <= 754.00){
            retencao.value = naoCasado[3][d].toString();
            console.log(calcBruto() + " " + naoCasado[3][d]);
        }

        if (calcBruto() > 754.00 || calcBruto() <= 822.00){
            retencao.value = naoCasado[4][d].toString();
            console.log(calcBruto() + " " + naoCasado[4][d]);
        } 
        
        if (calcBruto() > 822.00 || calcBruto() <= 931.00){
            retencao.value = naoCasado[5][d].toString();
            console.log(calcBruto() + " " + naoCasado[5][d]);
        }

        if (calcBruto() > 931.00 || calcBruto <= 1015.00){
            retencao.value = naoCasado[6][d].toString();
            console.log(calcBruto() + " " + naoCasado[6][d]);
        }
    }

    console.log(naoCasado);
}

function calcPerc(){
    // Salario*Perc 
    var ret = 0.0;
    var perc = 0.0;

    perc = parseFloat(retencao.value) / 100;
    ret = calcBruto() * perc;

    return ret;
}

function calcSS(){
    // Salario*11%
    var ss = 0.0;

    ss = calcBruto() * 0.11;

    return ss;
}

btn.addEventListener("click", () => {
    // Salario + Bruto - Retenção - SS
    var total = 0.0;

    total = calcBruto() - calcPerc() - calcSS();
    console.log(calcBruto() + " - " + calcPerc() + " - " + calcSS());

    document.getElementById("result").innerHTML = total + "€";
});



var naoCasado = [
    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [1.8, 0.2, 0.0, 0.0, 0.0, 0.0],
    [4.5, 0.6, 0.0, 0.0, 0.0, 0.0],
    [6.3, 0.8, 0.0, 0.0, 0.0, 0.0],
    [7.9, 4.5, 1.0, 0.0, 0.0, 0.0],
    [10.1, 6.7, 3.5, 0.0, 0.0, 0.0],
    [11.3, 7.9, 5.7, 1.4, 0.0, 0.0],
];