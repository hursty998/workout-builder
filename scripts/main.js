
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
function changeColor2(id){
    if (document.getElementById(id).style.borderColor== "red" || document.getElementById(id).style.borderColor== "" ){
        document.getElementById("fullBody").style.borderColor= "red";
        document.getElementById("lowerBody").style.borderColor= "red";
        document.getElementById("upperBody").style.borderColor= "red";
        document.getElementById(id).style.borderColor= "green";
    }
    else{
        document.getElementById(id).style.borderColor= "red";
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
        document.getElementById("c1").style.borderColor="orange"
        selected=3
    }
    else if (whichE==2){
        document.getElementById("q22").style.display="none"
        document.getElementById("q21").style.display="block"
        whichE-=1
        selected=3
    }
    else if (whichE==3){
        document.getElementById("q23").style.display="none"
        document.getElementById("q22").style.display="block"
        whichE-=1
        selected=3
    }
    else{
        document.getElementById("q3").style.display="none"
        document.getElementById("q2").style.display="block"
        document.getElementById("q23").style.display="block"
        document.getElementById("c2").style.borderColor="orange"
        whichE-=1
        selected=3
    }
}
function nextFinal(){
    if (document.getElementById("fullBody").style.borderColor== "green" || document.getElementById("lowerBody").style.borderColor== "green" || document.getElementById("upperBody").style.borderColor== "green"){
        document.getElementById("q3").style.display="none"
        document.getElementById("status-bar").style.display="none"
        document.getElementById("c3").style.borderColor="green"
        document.getElementById("confirm").style.display="block"
    }
    else{
        alert("You have to select one of these options")
    }
}

function backLast(){
    document.getElementById("q3").style.display="block"
    document.getElementById("status-bar").style.display="block"
    document.getElementById("c3").style.borderColor="orange"
    document.getElementById("confirm").style.display="none"
}
function confirm(){
    document.getElementById("confirm").style.display="none"
    document.getElementById("results").style.display="block"
}

var numDays
var BarOrDumb =[]
var AdjOrFlat = [];
var MorCorP = []
var muscles
function answers(){
    numDays = document.getElementById("number").innerText
    
    if (document.getElementById("barbells").style.borderColor =="green"){
        BarOrDumb.push("Barbells")
    }
    if (document.getElementById("dumbbells").style.borderColor =="green"){
        BarOrDumb.push(" Dumbbells")
    }
    
    if (document.getElementById("adjustable").style.borderColor =="green"){
        AdjOrFlat.push("Adjustable Bench")
    }
    if (document.getElementById("flat").style.borderColor =="green"){
        AdjOrFlat.push(" Flat Bench")
    }
    if (document.getElementById("machines").style.borderColor =="green"){
        MorCorP.push("Machines")
    }
    if (document.getElementById("Cabels").style.borderColor =="green"){
        MorCorP.push(" Cabels")
    }
    if (document.getElementById("Pullup").style.borderColor =="green"){
        MorCorP.push(" Pull Up Bar")
    }
    if (document.getElementById("fullBody").style.borderColor =="green"){
        muscles = "Full Body"
    }
    if (document.getElementById("lowerBody").style.borderColor =="green"){
        muscles = "Lower Body"
    }
    if (document.getElementById("upperBody").style.borderColor =="green"){
        muscles = "Upper Body"
    }
    document.getElementById("pnumsesh").innerText=numDays
    document.getElementById("pavailable").innerText=BarOrDumb+", "+AdjOrFlat+", "+MorCorP
    document.getElementById("pmuscles").innerText=muscles

    console.log(numDays, BarOrDumb, AdjOrFlat, MorCorP, muscles );
}