//Leia um número em algarismos romanos e converta-o em algarismos indo-arábicos

let s = 'MMXVI';
let integer = 0;

for (counter = s.length-1; counter >= 0; counter--) {
        if (s.slice(counter-1, counter+1) === "IV") { integer +=4; counter--;}
        else if (s.slice(counter-1, counter+1) === "IX") { integer +=9; counter--;}
        else if (s.slice(counter-1, counter+1) === "XL") { integer +=40; counter--;}
        else if (s.slice(counter-1, counter+1) === "XC") { integer +=90; counter--;}
        else if (s.slice(counter-1, counter+1) === "CD") { integer +=400; counter--;}
        else if (s.slice(counter-1, counter+1) === "CM") { integer +=900; counter--;}
        /* if (s[counter] === "V" && s[counter-1] === "I") { integer += 4; counter--;}
        else if (s[counter] === "X" && s[counter-1] === "I") { integer += 9; counter--;}
        else if (s[counter] === "L" && s[counter-1] === "X") { integer += 40; counter--;}
        else if (s[counter] === "C" && s[counter-1] === "X") { integer += 90; counter--;}
        else if (s[counter] === "D" && s[counter-1] === "C") { integer += 400; counter--;}
        else if (s[counter] === "M" && s[counter-1] === "C") { integer += 900; counter--;} */
        else if (s[counter] === "I") { integer += 1; }
        else if (s[counter] === "V") { integer += 5; }
        else if (s[counter] === "X") { integer += 10; }
        else if (s[counter] === "L") { integer += 50; }
        else if (s[counter] === "C") { integer += 100; }
        else if (s[counter] === "D") { integer += 500; }
        else if (s[counter] === "M") { integer += 1000; }
    }
console.log (s.slice(5,7));
console.log(integer);
