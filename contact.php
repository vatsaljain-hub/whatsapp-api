<?php
	$name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

	// Database connection
	$conn = new mysqli('localhost','root','','wati');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into contact(name,email,message) values(?, ?, ?)");
		$stmt->bind_param("sss", $name, $email, $message);
		$execval = $stmt->execute();
		echo $execval;
		echo "successfully received your message...";
		$stmt->close();
		$conn->close();
	}
?>