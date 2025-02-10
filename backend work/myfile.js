// console.log("hello");
function sum(num1,num2){
    return num1+num2;
}
// const result=sum(10,12);
// console.log("Sum:"+result);
const multiply=(num1,num2)=>{
    return num1*num2;
}
// module.exports=sum;
const obj={
    sum:sum,
    multiply:multiply
};
module.exports={
    sum:sum,
    multiply:multiply
};