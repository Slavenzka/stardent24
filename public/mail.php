<?php

if (filter_var($_POST['phone'])) {
  if (isset($_POST['name']) && isset($_POST['phone'])) {
    $userName = $_POST['name'];
    $userPhone = $_POST['phone'];
    $messageSubject = 'Новая заявка с сайта stardent24';

    $to = "southern.resorts@gmail.com";
    $body = "Получена новая заявка!";
    $body .= "От кого: ".$userName. "\r\n";
    $body .= "Контактный телефон: ".$userPhone. "\r\n";

    $headers[] = 'From: stardent24.landing';
    $headers[] = 'Reply-To: stardent24.landing';

    mail($to, $messageSubject, $body, implode("\r\n", $headers));
  }
}