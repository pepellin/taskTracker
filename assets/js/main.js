////////////////////////////
//   Author: Pei-Hua Lin  //
//   lin.2049@osu.edu     //
////////////////////////////

var tasksArr;

function showTask() {
    var out = "";
    for(var i = tasksArr.length-1; i >= 0; i--) {
        out += '<tr><td class="col-one">' + tasksArr[i].name + '</td><td class="col-two">' + 
        tasksArr[i].date + '</td><td class="col-three">' + tasksArr[i].assigned + '</td></tr>';
    }
    document.getElementById("data").innerHTML = out;
}

function submitForm () {
    var tname = document.getElementById("tname").value;
    var date = document.getElementById("datepicker").value;
    var assigned = document.getElementById("assigned").value;
    if (tname == null || tname == "" || date == null || date == "" || assigned == null || assigned == "") {
        alert("Please fill all the fields in the form.");
        document.getElementById("errorMessage").style.display = "block";
        return ;
    }

    var newTask = {"name": tname, "date": date, "assigned": assigned };
    tasksArr.push(newTask);
    showTask();
    document.forms['taskForm'].reset();
    document.getElementById("errorMessage").style.display = "none";
}

$(document).ready(function() {
    tasksArr = window.jsonFile;
    showTask();

    $( "#datepicker" ).datepicker({ minDate: new Date()});
});

document.getElementById("submitBtn").onclick = submitForm;