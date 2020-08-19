"use strict";

fetch("./classes.json").then(function(resp){
        return resp.json();
}).then(function(data){
    console.log(data);
})