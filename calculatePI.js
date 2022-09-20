/*n const n = Number(prompt("Digite:"));

function calcPi(n){
    
    let pi = 0.000000; */
    let pointsCircle = 0;
    let pointsTotal = 0; 

    let n = 100000000; // comentar esta linha quando for função

    for (let counter = 1; counter <= n; counter++) {

        let x = Math.random();
        let y = Math.random();
        let r = x**2 + y**2;
    
        if (r <= 1) {
            pointsCircle += 1;
        }
        pointsTotal += 1;
    }
    pi = 4 * pointsCircle / pointsTotal;
    console.log(pi); // comentar esta linha quando for função 
    // return pi;    
// }

/* resultado = calcPi;
console.log(resultado); */


    // O problema de cálculo de pi não é direto - aqui, foram considerados dois "fatos" que se correlacionam e permitem chegar a uma aproximação
    // do valor de pi, dependendo da precisão adotada.
    // 1º fato: a distância "r" de um ponto no plano (x, y) em relação à origem (0, 0).
    // 2º fato: relação entre a área de 1/4-de-círculo de raio "r" e um quadrado de lado "r" é igual a pi/4. Abstração: as áreas do círculo e do quadrado
    // estão sendo interpretados pela quantidade de pontos gerados aleatoriamente dentro de seus perímetros. Quanto mais pontos gerados, melhor a
    // aproximação.