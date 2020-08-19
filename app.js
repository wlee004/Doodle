"use strict";
var student;
fetch("./students.json").then(function(resp){
        return resp.json();
}).then(function(data){
    student=data;
})