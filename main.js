var calcForm = document.forms["calcutalor"];
// var civil = calcForm.elements["civil"];
// var depende = calcForm.elements["depende"];
var base = calcForm.elements["base"];
var almoco = calcForm.elements["almo"];
var dias = calcForm.elements["days"];
var retencao = calcForm.elements["perc"];
// var insentacao = calcForm.elements["inse"];
// var dioturnidade = calcForm.elements["diot"];

var btn = document.getElementById("btn");

function calcBruto(){
    // Salario Base + (SubAlmo*Dias)
    var bruto = 0.0;
    var sub = 0.0;

    sub = parseFloat(almo.value) * parseInt(dias.value);
    bruto = parseFloat(base.value) + sub;

    return bruto;
}

function calcRet(){
    // Salario*Perc 
    var ret = 0.0;
    var perc = 0.0;

    perc = parseInt(retencao.value) / 100;
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

    total = calcBruto() - calcRet() - calcSS();
    console.log(calcBruto() + " - " + calcRet() + " - " + calcSS());

    document.getElementById("result").innerHTML = total + "€";
});