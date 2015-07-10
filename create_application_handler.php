<?php

$errors = array();
$fields = array();
$response = array();
$owner;




if(!empty($errors)){
  $response["success"] = false;
  $response["message"] = $errors;
}
else{
  //Create Parse Form Object and save it
  $response["success"] = true;
  $response["message"] = "Success";
}

//return data to 
echo json_encode($response);

?>