<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Параметры SMTP-сервера
    $smtpHost = 'smtp.hostinger.com';
    $smtpUsername = 'ivan@hroshev.website';
    $smtpPassword = 'H1n2a3s4h###';
    $smtpPort = 465;

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
        $mail->setFrom('ivan@hroshev.website', 'New message');
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
        $mail->Subject = 'Agency message';

        // Создаем HTML-содержимое письма с кастомизированными стилями
        $mail->isHTML(true);
        $mail->Body = "
            <html>
            <head>
                <title>Agency message</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #ffffff !important;
                        color: #000000 !important;
                        font-size: 16px !important;
                    }
                    table {
                        width: 100% !important;
                        border-collapse: collapse !important;
                    }
                    td {
                        padding: 0px !important;
                        color: #000000 !important;
                        font-size: 16px !important;
                    }
                    .header {
                        padding: 0px 0px 10px 0px;
                        font-size: 20px !important;
                        font-weight: bold;
                        color: #111111 !important;
                    }
                    a {
                        font-size: 16px !important;
                        color: #000000 !important;
                        text-decoration: none !important;
                    }
                </style>

            </head>
            <body>
                <div class='header'>New order &#128276;</div>
                <table>
                    <tr>
                        <td style='padding: 0px 8px 0px 0px !important; font-weight: bold !important;'>Name:</td>
                        <td>$name</td>
                    </tr>
                    <tr>
                        <td style='padding: 0px 8px 0px 0px !important; font-weight: bold !important;'>Email:</td>
                        <td>$email</td>
                    </tr>
                    <tr>
                        <td style='padding: 0px 8px 0px 0px !important; font-weight: bold !important;'>Phone:</td>
                        <td>$phone</td>
                    </tr>
                    <tr>
                        <td style='padding: 0px 8px 0px 0px !important; font-weight: bold !important;'>Text:</td>
                        <td>$comments</td>
                    </tr>
                </table>
            </body>
            </html>
        ";

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