let tabuada = document.querySelector("#vertaduada");
vertabuada.addEventListener("click", resulttabuada);




function resulttabuada() {
    let numero = document.querySelector("#texto1");

    let n1 = Number(numero.value);
    

    let tabu1 = n1 * 1;
    let tabu2 = n1 * 2;
    let tabu3 = n1 * 3;
    let tabu4 = n1 * 4;
    let tabu5 = n1 * 5;
    let tabu6 = n1 * 6;
    let tabu7 = n1 * 7;
    let tabu8 = n1 * 8;
    let tabu9 = n1 * 9;
    let tabu10 = n1 * 10;
    

    
    let resultado = document.querySelector("#resultado");
    
    if (n1 > 10){
        resultado.innerText = "Não pode usar número maior que 10.";
        return;
    }
    
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