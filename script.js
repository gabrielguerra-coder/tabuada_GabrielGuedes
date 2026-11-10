let tabuada = document.querySelector("#vertaduada");
vertabuada.addEventListener("click", resulttabuada);

function resulttabuada() {
    let numero = document.querySelector("#texto1");
    let nummultiplica = "1";

    let n1 = Number(numero.value);
    var tabu1 = n1 * 1;
    var tabu2 = n1 * 2;
    var tabu3 = n1 * 3;
    var tabu4 = n1 * 4;
    var tabu5 = n1 * 5;
    var tabu6 = n1 * 6;
    var tabu7 = n1 * 7;
    var tabu8 = n1 * 8;
    var tabu9 = n1 * 9;
    var tabu10 = n1 * 10;


    
    let resultado = document.querySelector("#resultado");
    
    resultado.innerText = `TABUADA DO ${n1}
        ${n1} x 1 = ${tabu1}
        ${n1} x 2 = ${tabu2}
        ${n1} x 3 = ${tabu3}
        ${n1} x 4 = ${tabu4}
        ${n1} x 5 = ${tabu5}
        ${n1} x 6 = ${tabu6}
        ${n1} x 7 = ${tabu7}
        ${n1} x 8 = ${tabu8}
        ${n1} x 9 = ${tabu9}
        ${n1} x 10 = ${tabu10}`;
    
}