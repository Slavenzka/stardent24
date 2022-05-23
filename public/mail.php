<?php

if (filter_var($_POST['phone'])) {
  if (isset($_POST['name']) && isset($_POST['phone'])) {
    $userName = $_POST['name'];
    $userPhone = $_POST['phone'];
    $messageSubject = 'Новая заявка с лэндинга "Здоровая реклама"';

    $to = "new@zdad.ru";
    $body = "Получена новая заявка!";
    $body .= "От кого: ".$userName. "\r\n";
    $body .= "Контактный телефон: ".$userPhone. "\r\n";

    $headers[] = 'From: health.landing';
    $headers[] = 'Reply-To: health.landing';

    mail($to, $messageSubject, $body, implode("\r\n", $headers));
  }
}