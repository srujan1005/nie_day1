function vote(){
    var name =
    document.getElementById("name").value;
    var age =
    document.getElementById("age").value;
    var answer=
    document.getElementById("Answer").value;
    if(age>=18){
        Answer.innerHTML = name + "is eligible"
    }
    else{
        Answer.innerHTML = name + "your are still child"
    }
    }