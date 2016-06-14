////////////////////////////
//   Author: Pei-Hua Lin  //
//   lin.2049@osu.edu     //
////////////////////////////

var jsonfile = '[{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }]';
var tasksArr;

function showTask() {
    var out = "";
    for(var i = tasksArr.length-1; i >= 0; i--) {
        out += '<tr><td class="col-one">' + tasksArr[i].name + '</td><td class="col-two">' + 
        tasksArr[i].date + '</td><td class="col-three">' + tasksArr[i].assigned + '</td></tr>';
    }
    document.getElementById("data").innerHTML = out;
}

function initTasks(str) {
    tasksArr = JSON.parse(str);
    showTask();
}

function checkDate(field)
  {
    var allowBlank = false;
    var minYear = (new Date()).getFullYear();

    var errorMsg = "";

    re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if(field != '') {
        if(regs = field.match(re)) {
            if(regs[3] < minYear) {
                errorMsg = "Invalid value for year: " + regs[3] + " - must be in or after " + minYear;
            } else {
                switch (regs[1]) {
                    case '01':
                    case '03':
                    case '05':
                    case '07':
                    case '08':
                    case '10':
                    case '12':
                        if (regs[2] < 1 || regs[2] > 31) {
                            errorMsg = "Invalid value for day: " + regs[2];
                        }
                        break;
                    case '04':
                    case '06':
                    case '09':
                    case '11':
                        if (regs[2] < 1 || regs[2] > 30) {
                            errorMsg = "Invalid value for day: " + regs[2];
                        }
                        break;
                    case '02':
                    console.log(regs[3] % 4);
                        var lastDate = (regs[3] % 400 == 0 || (regs[3] % 100 != 0 && regs[3] % 4 == 0)) ? '29' : '28';
                        if (regs[2] < 1 || regs[2] > lastDate) {
                            errorMsg = "Invalid value for day: " + regs[2];
                        }
                        break;
                    default:
                        errorMsg = "Invalid value for month: " + regs[1];                                     
                }
            }
      } else {
        errorMsg = "Invalid date format: " + field;
      }
    } else if(!allowBlank) {
        errorMsg = "Empty date not allowed!";
    }

    if(errorMsg != "") {
        alert(errorMsg);
        document.getElementById("errorMessage").style.display = "block";      
        return false;
    }
    return true;
  }

function submitForm () {
    var tname = document.getElementById("tname").value;
    var date = document.getElementById("date").value;
    if (!checkDate(date)) {
        return;
    }
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
    initTasks(jsonfile);
});

document.getElementById("submitBtn").onclick = submitForm;