
// the * indicate where server stuff needs doing, m not totally sure how to do this part

var numOfVans;
var vanNames;
var queueNumbers; //arrays which we will fetch from server
var registrationNumbers;
var chassisNumbers; 
var statusArray;
var arrivalDates;


window.onload = function(){
    checkDetails();
    findVans();
    createNodes();
}

function checkDetails(){
    //write code for checking if they didnt skip login
    //if illegitimate send them to home 

    //* if legitimate then check if their details are complete, if not then details=false; and openDropdown(); *******

    var legit = true;
    if(legit==false){ //sends them back to home page if they skipped login
        window.location= "http://127.0.0.1:5500/index.html";
    }
    var details=false;
    if (details==false){ //if details are not complete then make the deatils button flash to catch attention
        openDropdown();
        setInterval(changeColor,500);
        document.getElementById("detailsComplete").innerText="";
    }
    else{
        document.getElementById("boltIcon").style.backgroundColor="green";
        document.getElementById("detailsNotComplete1").innerText="";
        document.getElementById("detailsNotComplete2").innerText="";
        document.getElementById("inputDetails-btn").style.display="none";

    
    }
}
function findVans(){
    //*this is where we will fetch details of vans from server **************
    numOfVans= 3;
    vanNames=["Citron 1","BMW 2","Porche 3", "Aston Martin"];
    queueNumbers=["1","2","3"];
    registrationNumbers=["123","456","789"];
    chassisNumbers=["chassis1","chassis2","chasis3"];
    statusArray=["at depot", "at depot", "arrived"];
    arrivalDates=["22/03/2019","01/04/2019","18/04/2019"];
}

function createNodes(){
    for (var i=0;i<vanNames.length;i++){ 
        var node1=document.createElement("div");
        node1.className="white-box";
        node1.id="whiteBox"+i;
        document.getElementById("container").appendChild(node1);

        var node2=document.createElement("H2");
        node2.className="van-name";
        node2.innerText=vanNames[i];
        document.getElementById(("whiteBox"+i)).appendChild(node2);
        
        var node3=document.createElement("P1");
        node3.className="gray-info";
        node3.innerText="Queue Number: "+queueNumbers[i]+" \n"+"Registration Number: "+registrationNumbers[i]+" \n"+"Chassis Number: "+chassisNumbers[i];
        document.getElementById(("whiteBox"+i)).appendChild(node3);

        var node4=document.createElement("img");
        node4.className="status-picture";
        if (status[i]=="delivered")
            node4.srcset="styles/assets/logo.png"; //change image to delivered icon
        else if (status[i]=="at depot")
            node4.srcset="styles/assets/logo.png"; //change image source to at depot icon
        else if (status[i]=="processing")
            node4.srcset="styles/assets/logo.png"; //change image source to processing icon
        else
            node4.srcset="styles/assets/logo.png"; //change image source to on route icon
        document.getElementById(("whiteBox"+i)).appendChild(node4);

        var node5=document.createElement("P2");
        node5.className="black-info";
        node5.innerText=" \n Status: "+statusArray[i]+" \n"+"Proposed Delivery Date: "+arrivalDates[i];
        document.getElementById(("whiteBox"+i)).appendChild(node5);


    }
}

//keeping header at top when/if scrolling
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



//for details button dropdown 
var boltIsClicked=false;
var boltIcon = document.getElementById("boltIcon");
var boltDropdownOverall = document.getElementById("boltDropdownOverall")
boltIcon.onmouseenter  = function(){openDropdown();}
boltIcon.onclick = function(){openDropdown();}
boltDropdownOverall.onmouseleave = function(){
    closeDropdown();
}
function openDropdown(){
    if(boltIsClicked==false){
        document.getElementById("boltDropdown").style.display="block";
    
        boltIsClicked=true;
    }
    else
        closeDropdown();
}
function closeDropdown(){
    boltIsClicked=false;
    document.getElementById("boltDropdown").style.display="none";
} 

function changeColor(){
    var element=document.getElementById("boltIcon");
    if (element.style.backgroundColor=="rgb(250, 154, 154)"){
        element.style.backgroundColor="white"}
    else
        element.style.backgroundColor="rgb(250, 154, 154)";
}//end of dropdown

//start of details window (will pop up when "click to complete details" button is clicked inside dropdown)
function completeDetails(){
    document.getElementById("completeDetails").style.display="block";
    document.getElementById("boltIcon").style.display="none";
}

document.getElementById("cross").onclick = function(){
    document.getElementById("completeDetails").style.display="none";
    document.getElementById("boltIcon").style.display="block";
}

//this next bit is just opening and closing items to show which section they are on
function openDLFirst(){
    if(document.getElementById("getDrivingLicence").style.backgroundColor!="yellow" || document.getElementById("getDrivingLicence").style.backgroundColor!="green"){
        document.getElementById('openDriversLicence').style.display='block';
        document.getElementById("DLFirst").style.display="block";
        document.getElementById("DLSecond").style.display="none";
        document.getElementById("DLThird").style.display="none";
        document.getElementById("DLCheck").style.display="none";
    }
    
}
function openDLSecond(){
    if(document.getElementById("DLImage").files.length == 0 ){
        document.getElementById("errorDLFile").style.display="block";
    }
    else{
        document.getElementById("errorDLFile").style.display="none";
        document.getElementById("DLFirst").style.display="none";
        document.getElementById("DLSecond").style.display="block";
        document.getElementById("DLThird").style.display="none";
        document.getElementById("DLCheck").style.display="none";
    }
    
}
function openDLThird(){
    if(document.getElementById("DLNumber").value.length!=16){
        document.getElementById("errorDLLength").style.display="block";
    }
    else{
        document.getElementById("errorDLLength").style.display="none";
        document.getElementById("DLFirst").style.display="none";
        document.getElementById("DLSecond").style.display="none";
        document.getElementById("DLThird").style.display="block";
        document.getElementById("DLCheck").style.display="none";
    }
}
function finishDL(){
    var inputDate=document.getElementById("DLExpiryDate").value;
    var myDate=new Date(inputDate);
    var today= new Date();
    console.log(today,inputDate, document.getElementById("DLExpiryDate").value )
    if(myDate>today){
        document.getElementById("errorDLDate").style.display="none";
        document.getElementById("DLFirst").style.display="none";
        document.getElementById("DLSecond").style.display="none";
        document.getElementById("DLThird").style.display="none";
        document.getElementById("DLCheck").style.display="block";
        document.getElementById("checkDLNumber").innerText="Is this driving license number correct: "+document.getElementById("DLNumber").value;
        document.getElementById("checkDLDate").innerText="Is this expiry date correct (yyyy-mm-dd): "+document.getElementById("DLExpiryDate").value;
    }
    else{
        document.getElementById("errorDLDate").style.display="block";
    }
    
}
function finishDLDetails(){
    document.getElementById('openDriversLicence').style.display='none';
    document.getElementById("getDrivingLicence").style.backgroundColor="yellow";
    //im not sure how secure we want it because i doubt that the customer will use inspect to get in to the details part

    //* send the details to be stored in the server under the account name *********
}


    //for displaying chosen image inside details, is activated on change
function readURL(input){
    document.getElementById("errorDLFile").style.display="none";
    if(input.files&& input.files[0]){
        var reader = new FileReader();
        reader.onload = function (e){
            document.getElementById("blah").setAttribute("src", e.target.result);
            document.getElementById("blah2").setAttribute("src", e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
//end of details



