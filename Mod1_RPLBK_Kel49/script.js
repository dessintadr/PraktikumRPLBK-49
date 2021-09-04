//scope variabel mana yg dapat digunakan
//root scope 
var a = 0;
function q2() {
    console.log("ini root scope: " + a);
    // child scope 
    a = 20;
    console.log("ini child scope: " + a);
}
q2();
console.log("ini root scope: " + a);
