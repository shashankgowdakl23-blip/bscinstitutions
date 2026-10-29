<?php
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request body']);
    exit;
}

$name          = trim($input['name'] ?? '');
$phone         = trim($input['phone'] ?? '');
$email         = trim($input['email'] ?? '');
$iAmA          = trim($input['iAmA'] ?? '');
$interestedIn  = trim($input['interestedIn'] ?? '');
$preferredMode = trim($input['preferredMode'] ?? '');

if ($name === '' || $phone === '' || $email === '' || $iAmA === '' || $interestedIn === '' || $preferredMode === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

if (!preg_match('/^[6-9]\d{9}$/', $phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid phone number']);
    exit;
}

// ─── SMTP CONFIGURATION ───────────────────────────────────────────────
// Update these with your Hostinger email credentials.
// Find them in: hPanel → Emails → Manage Email → Configuration tab.
$smtpHost     = 'smtp.hostinger.com';
$smtpPort     = 465;
$smtpUsername = 'enquiry@bscinstitutions.com';
$smtpPassword = 'Bsc@!nst!tut!on123';
$fromEmail    = 'enquiry@bscinstitutions.com';
$fromName     = 'BSC Institutions';
$toEmail      = 'enquiry@bscinstitutions.com';
// ──────────────────────────────────────────────────────────────────────

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPort;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry from ' . $name;

    $mail->Body = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='UTF-8'></head>
    <body style='font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;'>
      <div style='background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:20px;border-radius:10px 10px 0 0;'>
        <h1 style='color:#fff;margin:0;font-size:20px;'>New Enquiry Submission</h1>
      </div>
      <div style='background:#f9fafb;padding:20px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 10px 10px;'>
        <table style='width:100%;border-collapse:collapse;'>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;width:140px;'>Full Name</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($name)."</td>
          </tr>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;'>Phone</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($phone)."</td>
          </tr>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;'>Email</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($email)."</td>
          </tr>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;'>I Am A</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($iAmA)."</td>
          </tr>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;'>Interested In</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($interestedIn)."</td>
          </tr>
          <tr>
            <td style='padding:10px 0;font-weight:bold;color:#374151;'>Preferred Mode</td>
            <td style='padding:10px 0;color:#1f2937;'>".htmlspecialchars($preferredMode)."</td>
          </tr>
        </table>
      </div>
      <p style='text-align:center;color:#9ca3af;font-size:12px;margin-top:10px;'>Sent from BSC Institutions Enquiry Form</p>
    </body>
    </html>";

    $mail->AltBody = "New Enquiry\nName: $name\nPhone: $phone\nEmail: $email\nI Am A: $iAmA\nInterested In: $interestedIn\nPreferred Mode: $preferredMode";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully']);
} catch (Exception $e) {
    error_log('PHPMailer Error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again.', 'debug' => $mail->ErrorInfo]);
}
