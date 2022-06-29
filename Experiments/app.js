//console.log("Example node js appilication")
//a = 3
//b = 4
//c = a + b
//console.log("addition : " + c)
//console.log(4 + 7)
//console.log("Multiplication : "+ 2 * 4);
//console.log("Division " + 4 / 2)
//console.log("Mod :" + 4 % 5)
//str = "sowjanya"
//const sort = str.split('').sort((a, b) => a.localeCompare(b)).join('');
//console.log(sort)


// function verifylogin(user, pwd, callback){
//     if(pwd == "pwd1"){
//         callback(null, "correct login")
//     }
//     else{
//         callback("incorrect", null)
//     }
// }
// verifylogin("user1","pwd1", function(err, result){
//     if(err){
//         console.log(err);
//     }
//     else
//         console.log(result)
// })


// function verifylogin(user, pwd, callback){
//     if(pwd == "pwd"){
//         callback(null, "correct login")
//     }
//     else{
//         callback("incorrect", null)
//     }
// }
// verifylogin("user1","pwd1", function(err, result){
//     if(err){
//         console.log(err);
//     }
//     else
//         console.log(result)
// })


// function verifylogin(user, pwd, callback){
//     if(pwd == "pwd1"){
//         callback(null, "correct login")
//     }
//     else{
//         callback("incorrect", null)
//     }
// }
// verifylogin("user1","pwd1", (err, result) =>{
//     if(err){
//         console.log(err);
//     }
//     else
//         console.log(result)
// })

console.log("program is starting");
setTimeout(() => {
    console.log("Inside timeout");
}, 2000);
console.log("after time out")
console.log("program ending")

