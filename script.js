// 1.  Fibonnaci
function fibonacci(){
    const n = document.formE1.dato.value;
    let a = -1, b = 1, res = "";
    for(let i=1; i<=n; i++){
        let d = a + b;
        res += d + " , ";    
        a = b; b = d;
    }  
    document.getElementById('resE1').innerHTML = res;
}
// 2. Serie Binaria
function binarios(){
    const n = document.formE2.dato.value;
    let res = "";
    for( let i = 0; i<=n; i++){
        res += i.toString(2)+" , ";
    }
    document.getElementById('resE2').innerHTML = res;
}
// 3. Factorial y Suma
function factorial(){
    const n = document.formE3.dato.value;
    let f = 1, s = 0;
    var res = "";
    for(let i = 1; i <= n; i++){
        f *= i; s += f;
        res += " + "+f;
    }
    res += " = "+s;
    document.getElementById('resE3').innerHTML = res;
}
// 4. Rotar pares 
function rotNumPares(){
    let n = document.formE4.dato.value;
    function rotP(n){
        let y=0,d,p=1,cd,x;
        while(n != 0){
            d = n%10;
            n = Math.trunc(n/10);
            if(d % 2 == 0){ y = d*p+y; p = p*10 }
        }
        d = y % 10
        y = Math.trunc( y / 10)
        cd = Math.trunc(Math.log10(y))+1
        x = d*(10**cd)+y
        return x;
    }
    let x = rotP(n);
    let p = 1,y=0;
    while( n != 0){
        d = n % 10;
        n = Math.trunc(n / 10);
        if(d % 2 == 0){
            d = x % 10;
            x = Math.trunc( x / 10);
        }
        y = d*p+y;
        p = p*10;
    } 
    document.getElementById('resE4').innerHTML = y;
}
// 5. Digitos Repetidos
function digRepetidos(){
    let n = document.formE5.dato.value;
    let res = " "
    let c0=0,c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;
    while ( n != 0){
        d = n%10;
        n = Math.trunc(n / 10)
        if( d == 0){c0++;}
        else if(d == 1){c1++;} 
        else if(d == 2){c2++;}
        else if(d == 3){c3++;}
        else if(d == 4){c4++;}
        else if(d == 5){c5++;}
        else if(d == 6){c6++;}
        else if(d == 7){c7++;}
        else if(d == 8){c8++;}
        else if(d == 9){c9++;}
    }
    if( c0 > 1){ res += 0+" , ";}
    if( c1 > 1){ res += 1+" , ";}
    if( c2 > 1){ res += 2+" , ";}
    if( c3 > 1){ res += 3+" , ";}
    if( c4 > 1){ res += 4+" , ";}
    if( c5 > 1){ res += 5+" , ";}
    if( c6 > 1){ res += 6+" , ";}
    if( c7 > 1){ res += 7+" , ";}
    if( c8 > 1){ res += 8+" , ";}
    if( c9 > 1){ res += 9+" , ";}
    
    document.getElementById('resE5').innerHTML = "Los digitos que se repiten son: "+res;

}
// 6. Numero Capicuo
function numCapicuo(){
    const n = document.formE6.dato.value;
    let x = parseInt(n), y = 0,r = "",d=0;
    while( x != 0 ){
        d = x % 10;
        x = Math.trunc(x / 10);        
        y = y*10+d;
    }
    if( y == n){ r = "Es capicuo"}
    else{ r = "No es Capicuo"}
    document.getElementById('resE6').innerHTML = n+" "+r;
}
// 7. Es Primo
function nesPrimo(){
    const p = document.formE7.dato.value;
    let k = 2, res = "";
    while( p%k != 0 && k <= Math.trunc(p/2)){k = k+1;}
    if( k > Math.trunc(p/2)){ res = "Es Primo"}
    else{ res = "No es Primo"}
    document.getElementById('resE7').innerHTML = res;

}
// 8. Serie de Primos
function nPrimo(){
    const n = document.formE8.dato.value;
    let p = 2, k=2, t = 1, res = "";
    while (t <= n) {
        if (p % k != 0 && k <= p / 2) { k = k + 1; } 
        else {
            if (k > p / 2) {
                res += p+" , "; 
                t = t + 1;
            }
            p = p + 1; k = 2;
        }
    }
    document.getElementById('resE8').innerHTML = res;

}
// 9. Vector Fibo
function vFibonacci(){
    const n = document.formE9.dato.value;
    let v = [0,1];
    let res=v[0]+" , "+v[1];
    for(let i = 2; i < n; i++){
        v[i] = v[i-1] + v[i-2];
        res += " , "+v[i];
    }
    document.getElementById('resE9').innerHTML = res;
}
/* 10. Serie Exponencial */
function serieExpo(){
    const a = document.formE10.dato.value;
    const b = document.formE10.dato2.value;
    let s = 0, res="", lim = expo(a,b);
    function facto(n){
        let f = 1;
        for(let i = 1; i<= n; i++){ f *= i}
        return f
    }
    function expo(n,x){
        return r = n**x
    }
    for(let i = 0 ; i <=lim; i++){
        s = s+(expo(b,i)/facto(i));
        res += " "+s+" + ";
    }
    document.getElementById('resE10').innerHTML = res;
}
/* 10.2 Serie Exponencial */
function serieExpo2(){
    const a = document.formE102.dato.value;
    const b = document.formE102.dato2.value;
    let res="";
    for(let i = 1; i <= b; i++){
        res += a**i+" , "
    }
    document.getElementById('resE10.2').innerHTML = res;

}
/* 11. Palabra Palindrome */
function palindrome(){
    const b = document.formE11.dato.value;
    let v="",y ="",res;
    for(let i = 0; i < b.length ; i++){ 
        if(b[i] != " "){v = b[i]+v; y += b[i]}
    }
    if(v == y){res = `La palabra "${b}" es Palindrome`;}
    else{res = `La palabra ${b} NO es Palindrome`;}

    document.getElementById('resE11').innerHTML = res;


}
/* 12. Invertir Cadena */
function invCad(){
    const b = document.formE12.dato.value;
    let v="";
    for(let i = 0; i < b.length ; i++){ v = b[i]+v; }
    document.getElementById('resE12').innerHTML = v;
}
/* 13. Calculadora */
function calculadora(){
    let a = parseInt(document.formE13.dato.value);
    let b = parseInt(document.formE13.dato2.value);
    let op,r,res="" ;

    document.querySelector('#suma').addEventListener('click', () => {op = "+";});
    document.querySelector('#resta').addEventListener('click', () => {op = "-";});
    document.querySelector('#producto').addEventListener('click', () => {op = "*";});
    document.querySelector('#division').addEventListener('click', () => {op = "/";});
    document.querySelector('#facto').addEventListener('click', () => {op = "!";});
    document.querySelector('#expo').addEventListener('click', () => {op = "^";});
    document.querySelector('#calcular').addEventListener('click', () =>{
        if( op == "+"){ r = a+b; res += ""+r+"";}
        else if( op == "-"){ r = a-b; res += ""+r+"";}
        else if( op == "*"){ r = a*b; res += ""+r+"";}
        else if( op == "/"){ r = a/b; res += ""+r+"";}
        else if( op == "^"){ r = Math.pow(a,b); res += ""+r+"";}
        else if( op == "!"){
            r = 1
            for(let i=1; i<=a; i++){r *= i;}
            res += ""+r;
        }
        document.querySelector('#resE13').innerHTML = res;
    })
}
/* 14. Convertir un Numero a Romano */
function convR(){
    let n = document.formE14.dato.value;
    const x = n;
    var conv = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };
    var romano = '';
    for(i in conv){ 
        while(n >= conv[i]){ 
            romano += i;
            n -= conv[i]; 
        } 
    } 
    document.getElementById('resE14').innerHTML = "El número "+ x + " en romano es: "+romano;
}
/* 15. Matriz de Pascal */
function matrizPascal(){
    let num = document.formE15.dato.value;
    let n = parseInt(num);
    var v = new Array(n);
    for (var i=1;i<=n;i++) {  v[i] = new Array(n);  }  

    for(i=1;i<=n;i++){  
        for(j=1;j<=i;j++){ v[i][j]=pascal(i-1,j-1); }  
    }  

    function pascal(a,b){ return Math.round(fact(a)/(fact(b)*fact(a-b))) }
    function fact(n){
        let f = 1;
        for(let i =1; i<=n; i++){f *= i;}
        return f;
    }
    function formaMatriz(pascal){    
        var result = "<table border=1>";
        for(var i=1; i<=n; i++) {
            result += "<tr>";
            for(var j=1; j<=i; j++){
                result += "<td width='30' align='center'>"+v[i][j]+"</td>";
            }
            result += "</tr>";
        }
        result += "</table>";
        return result;
    }
    document.getElementById("resE15").innerHTML = formaMatriz(v);
}
/* 16. Evaluar Expresion */
function evExp(){
    const x = parseInt(document.formE16.dato.value);
    const y = parseInt(document.formE16.dato2.value);
    const z = parseInt(document.formE16.dato3.value);
    let r = x+y+z;
    document.getElementById('resE16').innerHTML = r;
}
/* 17. 2Matriz en Espiral */
function matrizEspiral(){
    let num = document.formE17.dato.value;
    let n = parseInt(num);
    let v = new Array(n);
    
    for( let i = 1; i<=n; i++){ v[i] = new Array(n); }
    function espiral(w){
        let c = 1, li = 1, ls = w , i , j;     
        for(let k = 1; k<=w/2; k++){
            i = li;
            for(j = li; j<=ls;j++){v[i][j] = c; c = c + 1;}
            j = ls;
            for(i=li+1; i<=ls; i++){v[i][j] = c; c = c + 1;}
            i = ls;
            for(j = ls-1; j>=li; j--){v[i][j] = c; c = c + 1;}
            j = li;
            for(i = ls-1; i >= li + 1 ;i--){v[i][j] = c; c = c + 1;}
            li = li + 1; ls = ls - 1;
        }
        if( w % 2 == 1 ){ v[ Math.trunc(w/2+1) ][Math.trunc(w/2+1)] = c;}
    }
    espiral(n);
    function formaMatriz(espiral){    
        var result = "<table border=1>";
        for(let i=1; i<= n; i++) {
            result += "<tr>";
            for(let j = 1; j <= n; j++){
                result += "<td width='30' align='center'>"+v[i][j]+"</td>";
            }
            result += "</tr>";
        }
        result += "</table>";
        return result;
    }
    document.getElementById("resE17").innerHTML = formaMatriz(v);
}






