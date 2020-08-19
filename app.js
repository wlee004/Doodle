"use strict";
var student;
fetch("./students.json").then(function(resp){
        return resp.json();
}).then(function(data){
<<<<<<< HEAD
    student=data;
=======
    var student = data;
    console.log(student.name);
>>>>>>> 1632d374d6c46e0abd0a0ffb7279ead3b38d52df
})