////////////////////////////
//   Author: Pei-Hua Lin  //
//   lin.2049@osu.edu     //
////////////////////////////

var tasksArr = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

function showTask() {
    var out = "";
    var i;
    for(i = 0; i < tasksArr.length; i++) {
        out += '<tr><td class="col-one">' + tasksArr[i].name + '<span class="col-two">' + 
        tasksArr[i].date + '</span></td><td class="col-three">' + tasksArr[i].assigned + '</td></tr>';
    }
    document.getElementById("data").innerHTML = out;
}

function submitForm(tname, date, assigned) {
    if (tname == null || tname == "" || date == null || date == "" || assigned == null || assigned == "") {
        alert("Please fill all the fields in the form.");
        document.getElementById("errorMessage").style.display = "block";
        return ;
    }

    var newTask = {"name": tname, "date": date, "assigned": assigned };
    tasksArr.push(newTask);
    showTask();
    document.forms['taskForm'].reset()
}

$(document).ready(function() {
    showTask();
});
