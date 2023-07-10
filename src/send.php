<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Параметры SMTP-сервера Hostinger
    $smtpHost = 'smtp.hostinger.com';
    $smtpUsername = 'test@working-starter.com';
    $smtpPassword = 'T09303945851n2a3s4t###';
    $smtpPort = 465; // или 465, в зависимости от настроек сервера

    // Создаем экземпляр класса PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Настройка SMTP-сервера
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'ssl'; // или 'ssl', в зависимости от настроек сервера
        $mail->Port = $smtpPort;

        // Настройка отправителя и получателя
        $mail->setFrom('test@working-starter.com', 'New message Agency');
        $mail->addAddress('grosheff.ivan@gmail.com', 'Ivan');

        // Добавление вложения, если было загружено
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $file = $_FILES['file']['tmp_name'];
            $filename = $_FILES['file']['name'];
            $mail->addAttachment($file, $filename);
        }

        // Получение данных из формы
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $comments = $_POST['comments'];

        // Настройка темы и содержимого письма
        $mail->Subject = 'New Message';
        $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\nComments: $comments";

        // Отправка письма
        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        echo 'Message could not be sent. Error: ', $mail->ErrorInfo;
    }
} else {
    echo 'Invalid request.';
}
?>