<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cookbook";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$mode = $_GET["mode"];

if($mode == "loadSidebarData")
{
    $sql = "SELECT ID, Name FROM `category`";

    $result = $conn -> query($sql) -> fetch_all(MYSQLI_ASSOC);

    echo json_encode($result);
}

//$stmt = $conn->prepare($sql);
//$stmt->bind_param("sss", $firstname, $lastname, $email);
//$firstname = "John";
//$stmt->execute();

?>