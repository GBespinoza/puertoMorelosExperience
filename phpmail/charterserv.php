
<?php

$to = "management@experienciapuertomorelos.com";
$subject = "Experiencie Puerto Morelos";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
$message = '<html><body style="background: #fff7ee;">';
$message .= '<p style="color:#174543;font-family:Lucida Console;font-size:25px;width: 70%;margin: 5px 150px 5px 150px;">Experiencie</p>';
$message .= '<p style="color: #174543;font-family: Lucida Console;font-size: 40px;width: 70%;margin: 0 150px 5px 150px;">Puerto Morelos</p>';

//formulario---
$message .= '<center><table rules="all" cellpadding="20" style="width:50%;margin:3em 0 3em 0;background: #fff7ee;border: #ab761c;">';
$message .= "<tr><td style='padding: 10px;width: 20%;'><p style='margin:  0;font-size:18px;color: #ab761c;font-family:Lucida Sans Unicode;'>Nombre</p></td><td>" . strip_tags($_POST['nombrech']) . "</td></tr>";


$message .= "<tr><td style='padding: 10px;width: 20%;'><p style='margin:  0;font-size:18px;color: #ab761c;font-family:Lucida Sans Unicode;'>correo</p></td><td>" . strip_tags($_POST['Emailch']) . "</td></tr>";

$message .= "<tr><td style='padding: 10px;width: 20%;'><p style='margin: 0;font-size:18px;color: #ab761c;font-family:Lucida Sans Unicode;'>telefono</p></td><td>" . strip_tags($_POST['Phonech']) . "</td></tr>";

$message .= "<tr><td style='padding: 10px;width: 20%;'><p style='margin: 0;font-size:18px;color: #ab761c;font-family:Lucida Sans Unicode;'>Fecha de</p></td><td>" . strip_tags($_POST['fecha']) . "</td></tr>";




$addURLS = $_POST['addURLS'];
if (($addURLS) != '') {
    $message .= "<tr><td><strong>URL To Change (additional):</strong> </td><td>" . strip_tags($addURLS) . "</td></tr>";
}
$curText = htmlentities($_POST['curText']);           
if (($curText) != '') {
    $message .= "<tr><td><strong>CURRENT Content:</strong> </td><td>" . $curText . "</td></tr>";
}
$message .= "</table><center>";
//formulario---


$message .= '<center><img src="http://localhost/ptomorelos_web/img/aboutus_Service_Booking/Sport_Fishing.svg" alt="Website Change Request" style="padding: 7em  0 11px 0;" /><center>';
$message .= ' <table style="width: 70%;background: #174543;padding: 22px 0 20px 0;"><th><p style="color: #fff;letter-spacing: 2px;">www.Experiencia Puerto Morelos.mx</p></th></table>';
$message .= "</body></html>";
 
mail($to, $subject, $message, $headers);
?>
