"use strict";

fetch("./students.json").then(function(resp){
        return resp.json();
}).then(function(data){
    var student = data;
    console.log(student.name);
})