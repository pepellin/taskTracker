<?php
$params = array('name' => $_POST['name'], 'date' => $_POST['date'], 'assigned' => $_POST['assigned']);

$jsonObject = json_encode($params);
file_put_contents('tasks.json', $jsonObject, FILE_APPEND);

// $temp_array = array();
// $temp_array = json_decode(file_get_contents('tasks.json'));
// $upload_info = array('name'=>'b','date'=>'v','assigned'=>'c');
// array_push($temp_array, $upload_info);
// file_put_contents('tasks.json', json_encode($temp_array));

?>