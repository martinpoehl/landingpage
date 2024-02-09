<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $anfrage = isset($_POST["Anfrage"]) ? "Anfrage" : "";
    $kurzaufenthalt = isset($_POST["Kurzaufenthalt"]) ? "Kurzaufenthalt" : "";
    $dauermiete = isset($_POST["Dauermiete"]) ? "Dauermiete" : "";
    $anrede = isset($_POST["text-20"]) ? $_POST["text-20"] : "";
    $vName = isset($_POST["vName"]) ? $_POST["vName"] : "";
    $lName = isset($_POST["lName"]) ? $_POST["lName"] : "";
    $email = isset($_POST["Email"]) ? $_POST["Email"] : "";
    $telefonnummer = isset($_POST["Telefonnummer"]) ? $_POST["Telefonnummer"] : "";
    $message = isset($_POST["Subject"]) ? $_POST["Subject"] : "";
    $message = isset($_POST["Message"]) ? $_POST["Message"] : "";

    // Concatenate checkbox values into a string
    $anfrageString = implode(", ", array_filter([$anfrage, $kurzaufenthalt, $dauermiete]));

    // Create the email body
    $email_body .= "Anfrage: $anfrageString\n\n";
    $email_body .= "Anrede: $anrede\n";
    $email_body .= "Vorname: $vName\n";
    $email_body .= "Nachname: $lName\n";
    $email_body .= "E-Mail: $email\n";
    $email_body .= "Telefonnummer: $telefonnummer\n";
    $email_body .= "Betreff:\n\n$subject";
    $email_body .= "Nachricht:\n\n$message";

    // Set up email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain;charset=utf-8\r\n";

    // Set your email address where you want to receive the form submissions
    $to = "martinpoehl@me.com";

    // Send the email
    mail($to, "Kontaktformular - MP Landingpage", $email_body, $headers);

    // You can redirect the user to a thank you page or display a success message here
    echo "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden!";
} else {
    // If the form is not submitted through POST, redirect to the form page
    header("Location: your-form-page.html");
    exit();
}
?>
