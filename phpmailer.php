<?php

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';
require 'phpmailer/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$subject = 'Mensaje recibido desde lucioteposiciona.com';

$recaptcha_secret = "6LeAjmAhAAAAAA5DwU7YQYB40Le54jvXITMDEkfj";
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$recaptcha_secret."&response=".$_POST['g-recaptcha-response']);
$response = json_decode($response, true);

if( empty(trim($name)) ) $name = 'anonimo';

$body = <<<HTML
    <h1>Mensaje recibido desde lucioteposiciona.com</h1>
    <p>De: $name | $email</p>
    <!-- <h2>Mensaje:</h2> -->
    $comment
HTML;

$mailer = new PHPMailer(true);

try {
    //Server setting
    $mailer->SMTPDebug = 0;
    $mailer->isSMTP();
    $mailer->Host = 'c1591626.ferozo.com';
    $mailer->SMTPAuth = true;  
    $mailer->Username = 'no-reply@c1591626.ferozo.com';
    $mailer->Password = 'jr@gQXC3wG';                          
    $mailer->SMTPSecure = 'ssl';
    $mailer->Port = 465;
    //$mailer->AltBody = strip_tags($body);
    //$mailer->CharSet = 'UTF-8';

    //Recipients
    $mailer->setFrom( $email, "$name" );
    $mailer->addAddress('no-reply@c1591626.ferozo.com','Sitio web');

    //Content
    $mailer->isHTML(true);
    //$mailer->msgHTML($body);
    $mailer->Subject = $subject;
    $mailer->msgHTML($body);
    $mailer->AltBody = strip_tags($body);
    $mailer->CharSet = 'UTF-8';

    if($response["success"] === true){
        $mailer->send();
        header("Location: thank-you.html" );
    } else {
        header("Location: 404.html" );
    }

} catch (Exception $e) {
    return "El mensaje no pudo ser enviado. Error: $mailer->ErrorInfo";
}

?>