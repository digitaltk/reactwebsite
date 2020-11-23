<?php $name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$formcontent="From: $name \n Message: $message";
$recipient = "tindxmathew@hotmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>