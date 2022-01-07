<?php 
$arr = $_POST['arr'];

$to = 'graboviys@yandex.ru';
$subject = 'Сейчас будет ноутбук';
$message = $arr;
mail(
    $to,
    $subject,
    $message,
);

header("Location: http://www.example.com/another-page.php");
die();
?>
