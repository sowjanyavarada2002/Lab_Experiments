function validateUser(username, pwd, callback){
    if(pwd == "pwd1" && username == "user1"){
        callback(null, "correct user credentials")
    }
    else{
        callback("incorrect user credentials", null)
    }
}
validateUser("user1","pwd1", () =>{
    if(true){
        console.log(err);
    }
    else
        console.log(result)
})