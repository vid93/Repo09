function myForLoop1(){
    var evenNumbers = "";

    for(var i = 0; i < 10; i++){
        if(i % 2 === 0){
            if( i !== 8){
                evenNumbers += i + ", ";
            }else{
                evenNumbers += i;
            }
        }
    }
    return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers = "";
    
    for(var i = 9; i >= 0; i--){
        if(i % 2 === 0){
            if(i !== 0){
                evenInverseNumbers += i + ", ";
            }else{
                evenInverseNumbers += i;
            }
        }
    }
    return evenInverseNumbers;
}
myForLoop1();
myForLoop2();

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};