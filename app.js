var project = setInterval(projectDone,80)
let count1=1;
function projectDone(){
    count1++;
    document.querySelector("#num1").innerHTML=count1;
    if(count1==15){
clearInterval(project)
    }
}


    
