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
    else if (numDays=="2"){
        document.getElementById("fullBody").style.display="none"
        document.getElementById("lowerBody").style.display="none"
        document.getElementById("upperBody").style.display="block"
    }
    else if (numDays=="3"){
        document.getElementById("fullBody").style.display="block"
        document.getElementById("lowerBody").style.display="none"
        document.getElementById("upperBody").style.display="block"
    }
    else{
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
    if ((selectFB ==true && numDays>2) || (selectLB==true && numDays==1) || (selectUB ==true && numDays<4)){
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
}

var bbdbbench=["BB/DB Bench Press", "6-8","Info", "na", "flat"] //[name, reps, info, equiptment, bench]
var bbdbibench=["BB/DB Incline Bench Press", "6-8","Info", "na", "adj"]
var hlcablecross=["Hight to Low Cable Cross Overs","6-10", "info", "cable", "na"]
var dips=["Weighted Dips","6-8", "info", "na", "na"]
var dbchestflys=["DB Chest Flys","6-10","info","db","flat"]
var mchestflys=["Machine Chest Flys","8-12","info","machine","na"]

var chest = [bbdbbench,bbdbibench, hlcablecross,dips,dbchestflys,mchestflys]

var milpress= ["Military Press", "6-8", "Info", "bb", "na"]
var seatedsp = ["Seated Shoulder Press", "8-10", "Info", "db", "adj"]
var dblatraisers = ["DB Lateral Raisers", "6-10", "info", "db","na"]
var reversefly = ["Reverse Flys", "6-10", "info", "m", "na"]
var reversepecdec= ["Reverse Pec Dec", "6-10", "info", "m", "na"]
var facepulls = ["Standing Face Pulls", "6-10", "info", "c", "na"]

var shoulder = [milpress, seatedsp, dblatraisers, reversefly, reversepecdec, facepulls]

var deadlift =["Deadlift", "6-8", "Info", "bb", "na"]
var dualpulleyrow =["Seated Dual Pulley Row", "6-10", "info", "c", "na"]
var pullups =["Wide Grip Pull Ups", "6-12", "info", "p", "na"]
var latpulldowns = ["Lat Front Pull Downs", "6-10", "info", "c", "na"]
var chestrow = ["Chest Supported Row", "6-10", "info", "bb"," adj"]
var scapular = ["Scapular Pull Ups", "8+", "info", "p", "na"]

var back=[deadlift, dualpulleyrow, pullups, latpulldowns, chestrow, scapular]

var chinups =["Chin Ups", "6-8", "info", "p", "na"]
var inclinecurl = ["Incline Curl", "6-8", "info", "bb", "adj"]
var concentrationcurl = ["Concentration Curl", "6-8", "info", "db", "flat"]
var reverseezcurl = ["Reverse EZ Bar Curl", "6-8", "info", "bb", "na"]

var bicep=[chinups, inclinecurl, concentrationcurl, reverseezcurl]

var closegripbench = ["Close Grip Bench", "6-8", "info", "bb", "flat"]
var overheadextentions =["Overhead Cable Extensions", "6-8", "info", "c", "na"]
var skullcrushers= ["BB/DB Skull Crushers", "6-8", "info", "na", "flat"]
var cablepulldowns = ["Cable Pull Downs", "6-8", "info", "c", "na"]
var diamondpushups = ["Diamond Push Ups", "6-8", "info", "na", "na"]

var tricep=[closegripbench, overheadextentions, skullcrushers, cablepulldowns, diamondpushups, dips]

var legraisers = ["Hanging Leg Raisers", "8-10", "info", "p", "na"]
var plank = ["Plank", "1 min", "info", "na", "na"]
var russiatwist = ["Russian Twists", "1 min", "info", "db", "na"]

var core=[legraisers, russiatwist, plank]

var bbbacksquat = ["BB Back Squat", "6-8", "info","bb", "na"]
var bbdbfrontsquat = ["BB/DB Front Squat", "6-8", "info", "na", "na"]
var legpress = ["Leg Press", "6-10", "Info", "m", "na"]
var splitsquat = ["BB/DB Bulgarian Split Squat", "6-8", "info", "na", "na"]
var hipthrusts = ["Weighted Hip Thrusts", "6-10", "info", "na", "na"]

var legs=[bbbacksquat, bbdbfrontsquat, legpress, splitsquat, hipthrusts]

var muscles =[chest, back, shoulder, bicep, tricep, core, legs]

var day1=[]
var day2=[]
var day3=[]
var day4=[]
var day5=[]
var currentDay=1

function confirm(){
    document.getElementById("confirm").style.display="none"
    document.getElementById("results").style.display="block"

    
    for (i =0; i<muscles.length; ++i){
        for (x=muscles[i].length-1; x>=0; x--){
            if ((muscles[i][x][4]=="adj" && haveAdj==false)||(muscles[i][x][3]=="db" && haveDB==false)||(muscles[i][x][3]=="bb" && haveBB==false)||(muscles[i][x][3]=="cable" && haveC==false)||(muscles[i][x][3]=="machine" && haveM==false)|| (muscles[i][x][3]=="pull" && haveP==false)){
                muscles[i].splice(x,1)
            }
        }
    }

    
    console.log(selectLB, legs[0][0])
    if (selectLB==true){
        console.log("yes")
        day1[0]=legs[0]
        day1[1]=legs[1]
        day1[2]=legs[2]
        day1[3]=legs[3]
    }
    else if (selectUB==true && numDays==1){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=back[0]
        day1[3]=back[1]
        day1[4]=shoulder[0]
        day1[5]=shoulder[1]
        day1[6]=bicep[0]
        day1[7]=tricep[0]
    }
    else if (selectUB==true && numDays==2){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=chest[2]
        day1[3]=shoulder[0]
        day1[4]=shoulder[1]
        day1[5]=shoulder[2]
        day1[6]=tricep[0]
        day1[7]=tricep[1]

        day2[0]=back[0]
        day2[1]=back[1]
        day2[2]=back[2]
        day2[3]=bicep[0]
        day2[4]=bicep[1]
        day2[5]=bicep[2]
        day2[6]=core[0]
        day2[7]=core[1]
    }
    else if (selectUB==true && numDays==3){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=chest[2]
        day1[3]=back[0]
        day1[4]=back[1]
        day1[5]=back[2]
        day1[6]=bicep[0]
        day1[7]=bicep[1]

        day2[0]=shoulder[0]
        day2[1]=shoulder[1]
        day2[2]=shoulder[2]
        day2[3]=chest[0]
        day2[4]=chest[1]
        day2[5]=tricep[0]
        day2[6]=tricep[1]
        day2[7]=tricep[2]

        day3[0]=back[0]
        day3[1]=back[1]
        day3[2]=shoulder[0]
        day3[3]=shoulder[1]
        day3[4]=shoulder[2]
        day3[5]=bicep[0]
        day3[6]=bicep[1]
        day3[7]=bicep[2]
    }
    else if (selectFB==true && numDays==3){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=chest[2]
        day1[3]=back[0]
        day1[4]=back[1]
        day1[5]=back[2]
        day1[6]=bicep[0]
        day1[7]=bicep[1]

        day2[0]=legs[0]
        day2[1]=legs[1]
        day2[2]=legs[2]
        day2[3]=shoulder[0]
        day2[4]=shoulder[1]
        day2[5]=shoulder[2]
        day2[6]=tricep[0]
        day2[7]=tricep[1]

        day3[0]=chest[0]
        day3[1]=chest[1]
        day3[2]=chest[2]
        day3[3]=shoulder[0]
        day3[4]=shoulder[1]
        day3[5]=bicep[0]
        day3[6]=bicep[1]
        day3[7]=bicep[2]
    }
    else if (selectFB==true && numDays==4){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=chest[2]
        day1[3]=back[0]
        day1[4]=back[1]
        day1[5]=back[2]
        day1[6]=bicep[0]
        day1[7]=bicep[1]

        day2[0]=legs[0]
        day2[1]=legs[1]
        day2[2]=legs[2]
        day2[3]=shoulder[0]
        day2[4]=shoulder[1]
        day2[5]=shoulder[2]
        day2[6]=tricep[0]
        day2[7]=tricep[1]

        day3[0]=chest[0]
        day3[1]=chest[1]
        day3[2]=chest[2]
        day3[3]=back[0]
        day3[4]=back[1]
        day3[5]=back[2]
        day3[6]=bicep[0]
        day3[7]=bicep[1]

        day4[0]=legs[0]
        day4[1]=legs[1]
        day4[2]=legs[2]
        day4[3]=shoulder[0]
        day4[4]=shoulder[1]
        day4[5]=shoulder[2]
        day4[6]=tricep[0]
        day4[7]=tricep[1]
    }
    else if (selectFB==true && numDays==5){
        day1[0]=chest[0]
        day1[1]=chest[1]
        day1[2]=chest[2]
        day1[3]=back[0]
        day1[4]=back[1]
        day1[5]=back[2]
        day1[6]=bicep[0]
        day1[7]=bicep[1]

        day2[0]=legs[0]
        day2[1]=legs[1]
        day2[2]=legs[2]
        day2[3]=legs[3]

        day3[0]=shoulder[0]
        day3[1]=shoulder[1]
        day3[2]=shoulder[2]
        day3[3]=chest[0]
        day3[4]=chest[1]
        day3[5]=tricep[0]
        day3[6]=tricep[1]
        day3[7]=tricep[2]

        day4[0]=legs[0]
        day4[1]=legs[1]
        day4[2]=legs[2]
        day4[3]=legs[3]

        day5[0]=back[0]
        day5[1]=back[1]
        day5[2]=shoulder[0]
        day5[3]=shoulder[1]
        day5[4]=shoulder[2]
        day5[5]=bicep[0]
        day5[6]=bicep[1]
        day5[7]=bicep[2]  
    }
    for (i=0; i<day1.length; ++i){
        console.log(day1[i][0])
    }
    changeday(1)
}

function changeday(num){
    currentDay=num
    for (i=0; i<=7; i++){
        if (typeof eval("day"+num)[i] === 'undefined' || eval("day"+num)[i] === null ){
            document.getElementById("1"+ (i+1).toString()).innerText=""
            document.getElementById("2"+ (i+1).toString()).innerText=""
            document.getElementById("3"+ (i+1).toString()).style.display="none"
        }
        else{
            document.getElementById("1"+ (i+1).toString()).innerText=eval("day"+num)[i][0]
            document.getElementById("2"+ (i+1).toString()).innerText=eval("day"+num)[i][1]
            document.getElementById("3"+ (i+1).toString()).style.display="block"
        }
    }
}

function showInfo(exnum){
    document.getElementById("infoBox").style.display="block"
    document.getElementById("results").style.display="none"
    document.getElementById("infoBoxTitle").innerText=eval("day"+currentDay)[exnum][0] +" Information:"
    document.getElementById("infoBoxText").innerText=eval("day"+currentDay)[exnum][2]
}
