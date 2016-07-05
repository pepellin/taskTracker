////////////////////////////
//   Author: Pei-Hua Lin  //
//   lin.2049@osu.edu     //
////////////////////////////

var tasksArr;

function showTask() {
    var out = "";
    for(var i = tasksArr.length-1; i >= 0; i--) {
        out += "<tr><td class='col-one'>" + tasksArr[i].name + "</td><td class='col-two'>" + 
        tasksArr[i].date + "</td><td class='col-three'>" + tasksArr[i].assigned + "</td></tr>";
    }
    document.getElementById("data").innerHTML = out;

    resizeColThree();
}
window.onresize = resizeColThree;

function resizeColThree() {
    var tableMaxWidth = document.getElementById("table").offsetWidth;
    var	myNodelist = document.getElementById("data");
    myNodelist.rows[0].cells[2].style.width = "auto";
    var col1Width = myNodelist.rows[0].cells[0].offsetWidth;
    console.log(col1Width);
    var col2Width = myNodelist.rows[0].cells[1].offsetWidth;
    var col3Width = myNodelist.rows[0].cells[2].offsetWidth;
    var tableWidth = col1Width + col2Width + col3Width;
    if (tableMaxWidth - tableWidth > 0) {
        var newWidth = tableMaxWidth - col1Width - col2Width - 15;
        myNodelist.rows[0].cells[2].style.width = newWidth + "px";
    }
}

function checkDate(field) {
    var errorMsg = "";
    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
 
    if(regs = field.match(re)) {
        switch (regs[1]) {
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                if (parseInt(regs[2]) < 1 || parseInt(regs[2]) > 31) {
                    errorMsg = "Invalid value for day: " + regs[2];
                }
                break;
            case "04":
            case "06":
            case "09":
            case "11":
                if (parseInt(regs[2]) < 1 || parseInt(regs[2]) > 30) {
                    errorMsg = "Invalid value for day: " + regs[2];
                }
                break;
            case "02":
                var lastDate = (regs[3] % 400 == 0 || (regs[3] % 100 != 0 && regs[3] % 4 == 0)) ? "29" : "28";
                if (parseInt(regs[2]) < 1 || parseInt(regs[2]) > lastDate) {
                    errorMsg = "Invalid value for day: " + regs[2];
                }
                break;
            default:
                errorMsg = "Invalid value for month: " + regs[1];                                     
        }
    } else {
        errorMsg = "Invalid date format: " + field;
    }

    if(errorMsg != "") {
        alert(errorMsg);    
	    return false;
    }

	return true;
 }

function submitForm () {
    var tname = document.getElementById("tname").value;
    var date = document.getElementById("date").value;
    var assigned = document.getElementById("assigned").value;
    if (!tname || !date || !assigned) {
        alert("Please fill all the fields in the form.");
        document.getElementById("errorMessage").style.display = "block";
        return ;
    }
    if (!checkDate(date)) {
        return;
    }

    var newTask = {"name": tname, "date": date, "assigned": assigned };
    tasksArr.push(newTask);
    showTask();
    document.forms["taskForm"].reset();
    document.getElementById("errorMessage").style.display = "none";
}

$(document).ready(function() {
    tasksArr = jsonFile.reverse();
    showTask();

});

document.getElementById("submitBtn").onclick = submitForm;