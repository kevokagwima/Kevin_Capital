<?php 
 if(isset($_POST['submit'])) {
   $fname = $_POST['fname'];
   $sname = $_POST['sname'];
   $emailfrom = $_POST['email'];
   $phone = $_POST['phone'];
   $message = $_POST['message'];  

   $mailto = "kevincapital@kevincapital.co.ke";
   $header = "From: ".$emailfrom;
   $text = "You have received an email from ".$fname.$sname."\n\n".$message;
   $subject = "Consultance";

   mail($mailto, $subject, $txt, $header);
   header("Location: index.php?mailsent");
 }
?>
