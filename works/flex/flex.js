var container =document.getElementById('container');
var fd= document.getElementsByName("fd");
for(var i = 0; i< fd.length; i++){
    fd[i].onchange = function() {
        if(this.checked == true){
            console.log(this.id)
            if(this.id == "fd-rowrev"){
                console.log(1212);
                container.style.flexDirection = "row-reverse";
            }
            if(this.id == "fd-row"){
                container.style.flexDirection = "row";
            }
            if(this.id == "fd-col"){
                container.style.flexDirection = "column";
            }
            if(this.id == "fd-colrev"){
                container.style.flexDirection =  "column-reverse";
            }
        }
    }
}
var jc= document.getElementsByName("jc");
for(var i = 0; i< jc.length; i++){
    jc[i].onchange = function() {
        if(this.checked == true){
            console.log(this.id)
            if(this.id == "jc-flexstart"){
                container.style.justifyContent = "flex-start";
            }
            if(this.id == "jc-flexend"){
                container.style.justifyContent = "flex-end";
            }
            if(this.id == "jc-center"){
                container.style.justifyContent = "center";
            }
            if(this.id == "jc-sbetween"){
                container.style.justifyContent = "space-between";
            }
            if(this.id == "jc-saround"){
                container.style.justifyContent = "space-around";
            }
            if(this.id == "jc-sevenly"){
                container.style.justifyContent = "space-evenly";
            }
           
        }
    }
}
var ai= document.getElementsByName("ai");
for(var i = 0; i< ai.length; i++){
    ai[i].onchange = function() {
        if(this.checked == true){
            console.log(this.id)
            if(this.id == "ai-flexstart"){
                container.style.alignItems = "flex-start";
            }
            if(this.id == "ai-flexend"){
                container.style.alignItems = "flex-end";
            }
            if(this.id == "ai-center"){
                container.style.alignItems = "center";
            }
            if(this.id == "ai-stretch"){
                container.style.alignItems = "stretch";
            }
            if(this.id == "ai-baseline"){
                container.style.alignItems = "baseline";
            }
    
           
        }
    }
}