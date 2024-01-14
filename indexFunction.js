window.onload=function() {
    document.getElementById("desc").style.display='none';
    document.getElementById("moreInf").style.display='none';
}  

function displayOutput1() {
    var output = document.getElementById("desc");
    if (output.style.display == "none") {
        output.style.display = "block";
    } 
    else {
        output.style.display = "none";
    }
}

function displayOutput2() {
    var output = document.getElementById("moreInf");
    if (output.style.display == "none") {
        output.style.display = "block";
    } 
    else {
        output.style.display = "none";
    }
}