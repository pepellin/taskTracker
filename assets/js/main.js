//   Author: Pei-Hua Lin
//   http://pepellin.github.io
//   lin.2049@osu.edu

var tasksArr;

// var tasksArr = [
// 	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
// 	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
// ];

function initTasks(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<tr><td class="col-one">' + arr[i].name + '<span class="col-two">' + 
        arr[i].date + '</span></td><td class="col-three">' + arr[i].assigned + '</td></tr>';
    }
    document.getElementById("data").innerHTML = out;
}

function submitForm(tname, date, assigned) {
    var newTask = {"name": tname, "date": date, "assigned": assigned };
    tasksArr.push(newTask);
    initTasks(tasksArr);
}

$(document).ready(function() {
    $.getJSON("assets/json/tasks.json", function(json) {
        initTasks(json);
        tasksArr = json;
    });
});


// function submitForm(tname, date, assigned) {
//     var $tname = $("#tname");
//     var $date = $("#date");
//     var $assigned = $("#assigned");
//     var params = {
//     name: $tname.val(),
//     date: $date.val(),
//     assigned: $assigned.val(),
//     }

//     $.ajax({
//           type: 'POST',
//           data: params,
//           url: 'save_json.php',

//           success: function(data) {
//               console.log('success');
//             },
//             error: function(data) {
//               console.log('error');
//             },
//             complete: function() {
//               console.log('complete');
//             }
//         });
//     }