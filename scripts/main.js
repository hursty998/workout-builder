
function openQ1(){
    document.getElementById("welcome-box").style.display="none";
    document.getElementById("status-bar").style.display="block";
    document.getElementById("q1").style.display="block";
    document.getElementById("c1").style.borderColor ="orange";
}
function openQ2(){
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="block";
    document.getElementById("status-bar").style.display="block"
    document.getElementById("c1").style.borderColor ="green";
    document.getElementById("c2").style.borderColor ="orange";
}
var selected = 0
function changeColor(id){
    
    if (document.getElementById(id).style.borderColor== "red" || document.getElementById(id).style.borderColor== "" ){
        document.getElementById(id).style.borderColor= "green";
        console.log("green");
        selected+=1
    }
    else{
        document.getElementById(id).style.borderColor= "red";
        console.log("red")
        selected-=1
    }
}

var whichE = 1
function nextE(){
    if (whichE==1){
        if (selected<1){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q21").style.display="none"
            document.getElementById("q22").style.display="block"
            whichE+=1
            selected=0
        }
    }
    else if (whichE==2){
        if (selected<1){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q22").style.display="none"
            document.getElementById("q23").style.display="block"
            whichE+=1
            selected=0
        }
    }
    else{
        if (selected<1){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q2").style.display="none"
            document.getElementById("q3").style.display="block"
            document.getElementById("c3").style.borderColor ="orange";
            document.getElementById("c2").style.borderColor ="green";
            whichE+=1
            selected=0
        }
    }
}
function backE(){
    if (whichE==1){
        document.getElementById("q2").style.display="none"
        document.getElementById("q1").style.display="block"
        selected=0
    }
    else if (whichE==2){
        document.getElementById("q22").style.display="none"
        document.getElementById("q21").style.display="block"
        whichE-=1
        selected=0
    }
    else if (whichE==3){
        document.getElementById("q23").style.display="none"
        document.getElementById("q22").style.display="block"
        whichE-=1
        selected=0
    }
    else{
        document.getElementById("q3").style.display="none"
        document.getElementById("q2").style.display="block"
        document.getElementById("q23").style.display="block"
        whichE-=1
        selected=0
    }
}