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

var bbdbbench=["BB/DB Bench Press", "6-8","Emphasises Sternal Head of Pec (Mid Chest) with work on triceps and anterior deltoid \n \n Proven to be the best exercise at activating the chest with 100 average EMG and 6.5 RPE (Whitnee Schanke, 2012 & John P. Porcari, 2012) \n \n Exercise that you can lift the most weight with. \n \n It has a positive correlation between 1 rep max on bench press and the size of chest. \n \n Go all the way down to chest for greater range of motion leading to greater hypertrophy.\n \n Optimal repetitions 6-10 for 3-4 sets", "na", "flat"] //[name, reps, info, equiptment, bench]
var bbdbibench=["BB/DB Incline Bench Press", "6-8","Both mid and lower chest are emphasised, mainly lower. \n \n Almost as effective as the bench press at activating the chest (Whitnee Schanke, 2012) \n \n As you can cross your hands at the bottom position, there is greater horizontal adduction at the shoulder, therefore better activating the chest \n \n Optimal repetitions 6-10 for 3-4 sets.", "na", "adj"]
var hlcablecross=["Hight to Low Cable Cross Overs","6-10", "Heavy emphasis on upper chest. \n \n Almost as effective as the bench press at activating the chest (Whitnee Schanke, 2012) \n \n o	Optimal repetitions 10+ for 3-4 sets", "c", "na"]
var dips=["Weighted Dips","6-8", "Most effective exercise for hitting the lower chest (Bret Contreras, 2010) \n \n With a slight lean forward, the lower chest is target more. \n \n Optimal repetitions 8-12 for 3 sets", "na", "na"]
var dbchestflys=["DB Chest Flys","6-10","Have a large range of motion and is a very simple exercise \n \n Do not overload as this may cause damage to joints","db","flat"]
var mchestflys=["Machine Chest Flys","8-12","Targets the mid chest without activating many other secondary mucles. \n \n Great if you are lacking in chest size.","m","na"]

var chest = [bbdbbench,bbdbibench, hlcablecross,dips,dbchestflys,mchestflys]

var milpress= ["Military Press", "6-8", "Emphasis mainly on anterior deltoid but also on lateral deltoid, triceps bacchii and serratus interior. \n \n Shown to be best exercise for anterior deltoid, 41% more effective than Dunbbell front raise (SuppVersity, 2011) \n \n This variant is the second best for highest activation of all three shoulder muscles behind standing dumbbell press \n \n Optimal repetitions 6-10 for 3-4 sets", "bb", "na"]
var seatedsp = ["Seated Shoulder Press", "8-10", "Almost as good as standing shoulder press however slightly less activation (SuppVersity, 2011) \n \n Optimal repetitions 6-10 for 3-4 sets", "db", "adj"]
var dblatraisers = ["DB Lateral Raisers", "6-10", "Emphasizes lateral deltoid \n \n Highest activation of the mid deltoid compared to other exercises (SuppVersity, 2011) \n \n Range of movement is very high which is a factor of it being so effective \n \n Optimal repetitions 6-10 for 2 sets and 12-15 for 2 sets", "db","na"]
var reversefly = ["Reverse Flys", "6-10", "The reverse fly is a resistance exercise that targets the rear shoulders (deltoids) and major muscles of the upper back, including the trapezius. \n \n The trapezius helps with a scapular retraction or pulling your shoulder blades in toward each other. \n \n o	Optimal repetitions 6-10 for 2 sets and 12-15 for 2 sets", "m", "na"]
var reversepecdec= ["Reverse Pec Dec", "6-10", "Emphasises rear deltoid with work on infraspinatus and trapezius \n \n The reverse pec Dec elicits higher rear deltoid activation than the seated row and lat-pulldown (Schoenfeld B, 2013)\n \n A neutral grip elicited higher posterior delt and infraspinatus activation than an internally rotated grip (palms facing down) (Schoenfeld B, 2013) \n \n Optimal repetitions 6-10 for 2 sets and 12-15 for 2 sets", "m", "na"]
var facepulls = ["Standing Face Pulls", "6-10", "Emphasizes posterior deltoid with work on lateral deltoid an upper trap too. This is because the upper traps are more active during standing exercises since they work as a postural muscle (Cools AM, 2007). Upper traps are usually a muscle that is neglected \n \n Optimal repetitions 8-12 for 2 sets ", "c", "na"]

var shoulder = [milpress, dblatraisers, facepulls, seatedsp, reversefly, reversepecdec]

var deadlift =["Deadlift", "6-8", "•	Works all your back muscles and some lower body but emphasis erector spinae (lower back)\n \n•	Great compound movement \n \n •	Requires a lot of effort so best for start of your workout \n \n •	Optimal repetitions 6-8 of 3 sets", "bb", "na"]
var dualpulleyrow =["Seated Dual Pulley Row", "6-10", "•	Good alternative to deadlift. \n \n •	Emphasises lower back but works on whole back \n \n •	Is good if you don’t want to work out lower body \n \n •	Optimal repetitions 6-10 of 3 sets", "c", "na"]
var pullups =["Wide Grip Pull Ups", "6-12", "•	Works all of back and strengthens secondary muscles in the back.	Also works shoulders and scapular stabilizers \n \n •	Build width and thickens back. \n \n•	It is a closed chain exercise (hands in fixed position) may provide greater motor unit recruitment \n \n •	Although chin ups give same lateral activation, pull ups tend to increase activation in lower trap and infraspinatus while chin ups increased activation in pec major and biceps brachy (Youdas JW, 2010) \n \n •	Add weight once completing 10-12 reps confidently \n \n •	Optimal repetitions 6-12 of 4 sets", "p", "na"]
var latpulldowns = ["Lat Front Pull Downs", "6-10", "•	Works same muscles as wide grip pull ups but without as much work on shoulders and secondary muscles. \n \n •	Use instead of wide grip pull ups. \n \n •	Pronated grip proved higher activation over supinated grip. \n \n •	Slight lean back at 135 degrees leads to an 11% increase in lateral activation if no momentum is used. Also “middle” grip gave more bicep activation and able to do heavier weight (Anderson V, 2014) \n \n •	Optimal repetitions 6-10 of 4 sets", "c", "na"]
var chestrow = ["Chest Supported Row", "6-10", "•	Emphasises latissimus dorsi (Mid back) and works traps and rhomboids \n \n •	Similar activation to lateral pull downs but more activation of traps and rhomboids in chest supported row. \n \n •	Optimal repetitions 6-10 of 4 sets", "bb"," adj"]
var scapular = ["Scapular Pull Ups", "8+", "•	Emphasises lower traps \n \n •	This is good as lower traps are not often worked on in exercises. \n \n •	Optimal repetitions 8+ of 3 sets", "p", "na"]

var back=[deadlift, dualpulleyrow, pullups, latpulldowns, chestrow, scapular]

var chinups =["Chin Ups", "6-8", "•	EMG activation of biceps is 2nd highest of bicep exercises beating the barbell curl (Scott Young, 2014) \n \n •	Shouldn’t be done on the same day as back unless part of your back routine \n \n •	Compound movement which is done with heavy weight. This helps due to the biceps being mostly type II fibres which best respond to heavy weight", "p", "na"]
var inclinecurl = ["Incline Curl", "6-8", "•	More emphasis on the long head of the bicep but still with some work on short head. \n \n •	The long head will be active for the whole range of motion, therefore increasing work on the muscle.", "bb", "adj"]
var concentrationcurl = ["Concentration Curl", "6-8", "•	EMG activation of biceps is highest of top 7 bicep exercises (Scott Young, 2014) \n \n •	Emphasis on the short head of the biceps as activation of the short head is maximised with the flection of the arm and supination of wrist. Therefore, when performing the movement, your wrist should go from neutral to supinated. \n \n•	Minimizes the activation of the front deltoid, lowest activation of front deltoid in studies (Scott Young, 2014)", "db", "flat"]
var reverseezcurl = ["Reverse EZ Bar Curl", "6-8", "•	Emphasizes brachialis which pushes up biceps to make them look larger \n \n •	Great for superset with inclined curls.", "bb", "na"]

var bicep=[chinups, inclinecurl, concentrationcurl, reverseezcurl]

var closegripbench = ["Close Grip Bench", "6-8", "•	It can easily be overloaded leading to higher activation \n \n •	The narrower the grip, the higher the triceps activation.", "bb", "flat"]
var overheadextentions =["Overhead Cable Extensions", "6-8", "•	Emphasizes long head of triceps \n \n •	Resistance over whole range of motion does more work on the triceps", "c", "na"]
var skullcrushers= ["BB/DB Skull Crushers", "6-8", "•	Alternative for overhead cable extensions  \n \n •	Emphasizes long head \n \n •	Less resistance at the top of the movement so does less work on the triceps", "na", "flat"]
var cablepulldowns = ["Cable Pull Downs", "6-8", "•	Top exercise for activation of the lateral head of the triceps (SuppVersity, 2011) \n \n •	Use overhand grip so that a heavier weight can be used, therefore further increasing activation", "c", "na"]
var diamondpushups = ["Diamond Push Ups", "6-8", "•	Emphasizes the medial head of the triceps \n \n •	Weight can be overloaded \n \n •	Medial head is best activated with this exercise (SuppVersity, 2011)", "na", "na"]

var tricep=[closegripbench, overheadextentions, skullcrushers, cablepulldowns, diamondpushups, dips]

var legraisers = ["Hanging Leg Raisers", "8-10", "Works core as well as secondary muscles which fill out your back. \n \n Can be weighted to add further resistence ", "p", "na"]
var plank = ["Plank", "1 min", "Great core exercise which can be performed almost anywhere. \n \n Add weight for maximum efficiency", "na", "na"]
var russiatwist = ["Russian Twists", "1 min", "Focusses on the sides of your core to give the aesthetic look.", "db", "na"]

var core=[legraisers, russiatwist, plank]

var bbbacksquat = ["BB Back Squat", "6-8", "Emphasises quadriceps, glutes and hamstrings \n \n There is a two-fold increase in muscle size in subjects that performed full range of motion squats as opposed to partial squats over a period of 8 weeks. \n \n o	Barbell squats elicited 43% higher average leg muscle activity when compared to smith machine squats (Schwanbeck S, 2009)","bb", "na"]
var bbdbfrontsquat = ["BB/DB Front Squat", "6-8", "Works on the same muscles as back squats but also works on multiple muscles in the back that are commonly missed \n \n Overall quadriceps activation is very similar between the front and back squats \n \n Also, front squats may emphasize certain quadricep muscles that aren’t activated as well during the back squat.", "na", "na"]
var legpress = ["Leg Press", "6-10", "Alternative for front squat if machine is available \n \n Reduces effort in gym as doing two exercises involving squatting requires a lot of work", "m", "na"]
var splitsquat = ["BB/DB Bulgarian Split Squat", "6-8", "o	Works on all major leg muscles with emphasis on glutes and hamstrings \n \n It involves the hamstrings and glutes more heavily than the squat \n \n Study says that the split squat may be as effective at increasing back squat 1 rep max than the back squat itself", "m", "na"]
var hipthrusts = ["Weighted Hip Thrusts", "6-10", "o	Emphasises the glutes and works hamstrings  \n \n Highest glute activation exercise. Mean activation of glutes in this exercise is 100% of maximum voluntary contraction compared to back squats 50-70% (Bret Contreras, 2010)", "na", "na"]

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
            if ((muscles[i][x][4]=="adj" && haveAdj==false)||(muscles[i][x][3]=="db" && haveDB==false)||(muscles[i][x][3]=="bb" && haveBB==false)||(muscles[i][x][3]=="c" && haveC==false)||(muscles[i][x][3]=="m" && haveM==false)|| (muscles[i][x][3]=="p" && haveP==false)){
                muscles[i].splice(x,1)
            }
        }
    }

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

function toHome(){
    document.getElementById("welcome-box").style.display="block"
    document.getElementById("status-bar").style.display="none"
    document.getElementById("q1").style.display="none"
    document.getElementById("q2").style.display="none"
    document.getElementById("q22").style.display="none"
    document.getElementById("q23").style.display="none"
    document.getElementById("q3").style.display="none"
    document.getElementById("confirm").style.display="none"
    document.getElementById("results").style.display="none"
    document.getElementById("infoBox").style.display="none"
}