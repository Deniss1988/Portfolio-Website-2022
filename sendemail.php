<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "deniscj@inbox.lv"; // replace with your email address
    $subject = "Message from $name";
    $headers = "From: $email\r\n";
    
    mail($to, $subject, $message, $headers);
    if (mail($to, $subject, $message, $headers)) {
      echo "Email sent successfully!";
    } else {
      echo "An error occurred while sending the email.";
    }
  }
?>
