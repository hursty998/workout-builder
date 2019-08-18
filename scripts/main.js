var numDays
var muscleChoice
var haveBB=false
var haveDB =false
var haveAdj =false
var haveFlat =false
var haveM = false
var haveC = false
var haveP =false
var selectFB =false
var selectLB = false
var selectUB = false
var whichE = 1

function openQ1(){
    document.getElementById("welcome-box").style.display="none";
    document.getElementById("status-bar").style.display="block";
    document.getElementById("q1").style.display="block";
    document.getElementById("c1").style.borderColor ="orange";
}
function openQ2(){
    numDays = document.getElementById("number").innerText
    if (numDays =="1"){
        document.getElementById("fullBody").style.display="none"
        document.getElementById("lowerBody").style.display="block"
        document.getElementById("upperBody").style.display="block"
    }
    else{
        document.getElementById("fullBody").style.display="block"
        document.getElementById("lowerBody").style.display="none"
        document.getElementById("upperBody").style.display="block"
    }
    if (eval(numDays)>3){
        document.getElementById("fullBody").style.display="block"
        document.getElementById("lowerBody").style.display="none"
        document.getElementById("upperBody").style.display="none"
    }
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="block";
    document.getElementById("status-bar").style.display="block"
    document.getElementById("c1").style.borderColor ="green";
    document.getElementById("c2").style.borderColor ="orange";
}
function changeColor(id,v1){
    
    if (document.getElementById(id).style.borderColor== "red" || document.getElementById(id).style.borderColor== "" ){
        document.getElementById(id).style.borderColor= "green";
        eval(v1+"=true")
    }
    else{
        document.getElementById(id).style.borderColor= "red";
        eval(v1+"=false")
    }
}
function changeColor3(id, v1){
    if (document.getElementById(id).style.borderColor== "red" || document.getElementById(id).style.borderColor== "" ){
        document.getElementById("adjustable").style.borderColor= "red";
        document.getElementById("flat").style.borderColor= "red";
        document.getElementById(id).style.borderColor= "green";
        haveFlat=false
        haveAdj=false
        eval(v1+"=true")
    }
    else{
        document.getElementById(id).style.borderColor= "red";
        eval(v1+"=false")
    }
}
function changeColor2(id,v1){
    if (document.getElementById(id).style.borderColor== "red" || document.getElementById(id).style.borderColor== "" ){
        document.getElementById("fullBody").style.borderColor= "red";
        document.getElementById("lowerBody").style.borderColor= "red";
        document.getElementById("upperBody").style.borderColor= "red";
        document.getElementById(id).style.borderColor= "green";
        selectFB=false
        selectLB=false
        selectUB=false
        eval(v1+"=true")
    }
    else{
        document.getElementById(id).style.borderColor= "red";
        eval(v1+"=false")
        console.log(selectLB)
    }
}


function nextE(){
    if (whichE==1){
        if (haveBB==false && haveDB==false){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q21").style.display="none"
            document.getElementById("q22").style.display="block"
            whichE+=1
        }
    }
    else if (whichE==2){
        if (haveAdj==false && haveFlat ==false){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q22").style.display="none"
            document.getElementById("q23").style.display="block"
            whichE+=1
        }
    }
    else{
        if (haveM == false && haveC ==false && haveP == false){
            alert("You have to select at least one of these options")
        }
        else{
            document.getElementById("q2").style.display="none"
            document.getElementById("q3").style.display="block"
            document.getElementById("c3").style.borderColor ="orange";
            document.getElementById("c2").style.borderColor ="green";
            whichE+=1
        }
    }
}
function backE(){
    if (whichE==1){
        document.getElementById("q2").style.display="none"
        document.getElementById("q1").style.display="block"
        document.getElementById("c1").style.borderColor="orange"
    }
    else if (whichE==2){
        document.getElementById("q22").style.display="none"
        document.getElementById("q21").style.display="block"
        whichE-=1
    }
    else if (whichE==3){
        document.getElementById("q23").style.display="none"
        document.getElementById("q22").style.display="block"
        whichE-=1
    }
    else{
        document.getElementById("q3").style.display="none"
        document.getElementById("q2").style.display="block"
        document.getElementById("q23").style.display="block"
        document.getElementById("c2").style.borderColor="orange"
        whichE-=1
    }
}
function nextFinal(){
    if ((selectFB ==true && numDays<2) || (selectLB==true && numDays==1) || (selectUB ==true && numDays<4)){
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

function answers(){
    document.getElementById("day5Radio").style.display="block"
    document.getElementById("day4Radio").style.display="block"
    document.getElementById("day3Radio").style.display="block"
    document.getElementById("day2Radio").style.display="block"
    document.getElementById("pavailable").innerText=""
    if (numDays<5){
        document.getElementById("day5Radio").style.display="none"
    }
    if (numDays<4){
        document.getElementById("day4Radio").style.display="none"
    }
    if (numDays<3){
        document.getElementById("day3Radio").style.display="none"
    }
    if (numDays<2){
        document.getElementById("day2Radio").style.display="none"
        document.getElementById("arrow-down2").style.display="none"
        document.getElementById("numberR").onclick = document.getElementById('dropdown-box2').style.display='none'
    }
    document.getElementById("pnumsesh").innerText= numDays
    
    if (document.getElementById("barbells").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+="Barbells, "
    }
    if (document.getElementById("dumbbells").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Dumbbells, "
    }
    
    if (document.getElementById("adjustable").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Adjustable Bench, "
    }
    if (document.getElementById("flat").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Flat Bench, "
    }
    if (document.getElementById("machines").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Machines, "
    }
    if (document.getElementById("Cabels").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Cabels, "
    }
    if (document.getElementById("Pullup").style.borderColor =="green"){
        document.getElementById("pavailable").innerText+=" Pull Up Bar"
    }

    if (selectFB==true){
        muscleChoice = "full"
        document.getElementById("pmuscles").innerText= "Full Body"
    }
    if (selectLB==true){
        muscleChoice = "lower"
        document.getElementById("pmuscles").innerText= "Lower Body"
    }
    if (selectUB==true){
        muscleChoice = "upper"
        document.getElementById("pmuscles").innerText= "Upper Body"
    }
    var chest ="chest"
    var one ="1"
    var two="2"
    var chest12= "lol"
    eval(chest+one+two+"='asos'")
    //document.getElementById("results-col1").innerHTML=eval(chest+one+two)

    var chestexercises=[]
 
}
function confirm(){
    document.getElementById("confirm").style.display="none"
    document.getElementById("results").style.display="block"

    var bbbench=["BB Bench Press", "6-8","Info", "bb", "flat"] //[name, reps, info, equiptment, bench]
    var dbibench=["DB Incline Bench Press", "6-8","Info", "Db", "adj"]
    var chest = [bbbench, dbibench]

    var milpress= ["Military Press", "6-8", "Info", "bb", "na"]
    var seatedsp = ["Seated Shoulder Press", "8-10", "Info", "db", "adj"]
    var shoulder = [milpress, seatedsp]
    
    var chestnew =[]
    var shouldernew=[]
    var muscles =[chest, shoulder]

    for (i =0; i<muscles.length; ++i){
        for (x=0; x< muscles[i].length; ++x){
            if (muscles[i][x][3]=="adj"){
                eval(muscles[i]+"new.push('muscles[i][x]')")
            }
            
        }
    }
    console.log(chestnew[0], shouldernew)
    var final=[] //[[day 1 exersizes],[day 2 exersizes]...]
}
