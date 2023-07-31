"use server"

import { formValueProps } from "@/app/utils/contactformhandler";

const generateEmail = (
  data: formValueProps,
  theme: string,
  type: "checkout-transfer" | "checkout-monero"| "contact-user" | "contact-owner"
): string => {
  const emailTemplateUser: string = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
          <style>
              .hello {
                color: red; 
              }
              .main-container {
                min-height: 100vh; 
                background-color: ${theme === "dark" ? "#101522" : "#F8FAFC"};
                display:flex; 
                justify-content: center; 
                align-items: center; 
              }
              .main {
                color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
                background-color: ${theme === "dark" ? "#020617" : "#F8FAFC"};
                border: 1px solid ${theme === "dark" ? "#1E293B" : "#B9B9BC"};
                padding: 1.5rem;
                border-radius: 0.75rem;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
            }
            .container {
              padding-bottom: 1rem; 
              min-height: 22rem;
              max-width: 42rem;
              margin: auto auto;
            }
            .title {
              display: flex; 
              color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
              height: 33%;
              font-family: 'Lato', sans-serif;
              font-size: 30px;
              height: fit-content; 
              padding-bottom: 0.9rem; 
          }
          .text {
            text-align: center;
            width: 100%; 
            padding: 0.5rem;
            padding-top: 0px; 
            border-bottom: 4px solid ${
              theme === "dark" ? "#2D53BD" : "#1959EE"
            };
            height: fit-content;
          }
          .greeting {
            padding-bottom: 0.5rem; 
            margin: 0px; 
          }
          .message {
            margin: 0px;  
            padding-bottom: 0.25rem; 
          }
          .messagefooter {
            margin: 0px; 
            padding-bottom: 0.5rem; 
          }
          .endmessage {
            margin: 0px;
            padding: 0px; 
          }
          </style>
      </head>
      <body>
    <div class="main-container">
      <div class="container">
      <div class="subcontainer">
        <div class="title">
          <span class="text">WebNebula - Transforming Ideas into Reality</span>
        </div>
          <div class="main">
            <p class="greeting">Dear ${data.Name}</p>
            <p class="message">Thank you for reaching out to us through our website's contact form. We appreciate you taking the time to get in touch with us, and we value your interest in our products/services.</p>
            <p class="message">Our team has received your message, and we are currently reviewing the details you provided. We strive to respond to all inquiries promptly, and you can expect to hear back from us within 24 hours.</p>
            <p class="message">While we work on addressing your query, please feel free to explore our website further. We have a wealth of information about our offerings and frequently asked questions that may already answer some of your queries.</p>
            <p class="message">If you have any additional information or if there's anything else you'd like us to know, please don't hesitate to reply to this email. We're here to help and ensure you have a seamless experience with our company.</p>
            <p class="message">Once again, thank you for getting in touch with us. We look forward to assisting you further.</p>
            <p class="messagefooter">Best regards,</p>
            <p class="endmessage">Yassir Elkhaili</p>
            <p class="endmessage">Founder and Developer, Webnebula</p>
          </div>
          </div>
      </div>
    </div>
  </body>
  </html>`;

  const emailTemplateOwner: string = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
          <style>
              .hello {
                color: red; 
              }
              .main-container {
                min-height: 100vh; 
                background-color: ${theme === "dark" ? "#101522" : "#F8FAFC"};
                display:flex; 
                justify-content: center; 
                align-items: center; 
              }
              .main {
                color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
                background-color: ${theme === "dark" ? "#020617" : "#F8FAFC"};
                border: 1px solid ${theme === "dark" ? "#1E293B" : "#B9B9BC"};
                padding: 1.5rem;
                border-radius: 0.75rem;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
            }
            .container {
              padding-bottom: 1rem; 
              min-height: 22rem;
              max-width: 42rem;
              margin: auto auto;
            }
            .title {
              display: flex; 
              color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
              height: 33%;
              font-family: 'Lato', sans-serif;
              font-size: 30px;
              height: fit-content; 
              padding-bottom: 0.9rem; 
          }
          .text {
            text-align: center;
            width: 100%; 
            padding: 0.5rem;
            padding-top: 0px; 
            border-bottom: 4px solid ${
              theme === "dark" ? "#2D53BD" : "#1959EE"
            };
            height: fit-content;
          }
          .greeting {
            padding-bottom: 0.5rem; 
            margin: 0px; 
          }
          .message {
            margin: 0px;  
            padding-bottom: 0.25rem; 
          }
          .messagefooter {
            margin: 0px; 
            padding-bottom: 0.5rem; 
          }
          .endmessage {
            margin: 0px;
            padding: 0px; 
          }
          </style>
      </head>
      <body>
    <div class="main-container">
      <div class="container">
      <div class="subcontainer">
        <div class="title">
          <span class="text">WebNebula - Transforming Ideas into Reality</span>
        </div>
          <div class="main">
            <p class="greeting">Message from ${data.Name}</p>
            <p class="message">Email: ${data.Email}</p>
            <p class="message">Phone: ${data.Phone}</p>
            <p class="message">Company/Organisation: ${data.Organisation}</p>
            <p class="message">Subject: ${data.Subject}</p>
            <p class="message">Message: ${data.Message}</p>
            <p class="messagefooter">Best regards,</p>
            <p class="endmessage">Yassir Elkhaili</p>
            <p class="endmessage">Founder and Developer, Webnebula</p>
          </div>
          </div>
      </div>
    </div>
  </body>
  </html>`;

  const emailTemplateTransfer: string = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
          <style>
              .hello {
                color: red; 
              }
              .main-container {
                min-height: 100vh; 
                background-color: ${theme === "dark" ? "#101522" : "#F8FAFC"};
                display:flex; 
                justify-content: center; 
                align-items: center; 
              }
              .main {
                color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
                background-color: ${theme === "dark" ? "#020617" : "#F8FAFC"};
                border: 1px solid ${theme === "dark" ? "#1E293B" : "#B9B9BC"};
                padding: 1.5rem;
                border-radius: 0.75rem;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
            }
            .container {
              padding-bottom: 1rem; 
              min-height: 22rem;
              max-width: 42rem;
              margin: auto auto;
            }
            .title {
              display: flex; 
              color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
              height: 33%;
              font-family: 'Lato', sans-serif;
              font-size: 30px;
              height: fit-content; 
              padding-bottom: 0.9rem; 
          }
          .text {
            text-align: center;
            width: 100%; 
            padding: 0.5rem;
            padding-top: 0px; 
            border-bottom: 4px solid ${
              theme === "dark" ? "#2D53BD" : "#1959EE"
            };
            height: fit-content;
          }
          .greeting {
            padding-bottom: 0.5rem; 
            margin: 0px; 
          }
          .message {
            margin: 0px;  
            padding-bottom: 0.25rem; 
          }
          .messagefooter {
            margin: 0px; 
            padding-bottom: 0.5rem; 
          }
          .endmessage {
            margin: 0px;
            padding: 0px; 
          }
          </style>
      </head>
      <body>
    <div class="main-container">
      <div class="container">
      <div class="subcontainer">
        <div class="title">
          <span class="text">WebNebula - Transforming Ideas into Reality</span>
        </div>
          <div class="main">
            <p class="greeting">Dear ${data.Name}</p>
            <p class="message">Thank you for reaching out to us through our website's contact form. We appreciate you taking the time to get in touch with us, and we value your interest in our products/services.</p>
            <p class="message">Our team has received your message, and we are currently reviewing the details you provided. We strive to respond to all inquiries promptly, and you can expect to hear back from us within 24 hours.</p>
            <p class="message">While we work on addressing your query, please feel free to explore our website further. We have a wealth of information about our offerings and frequently asked questions that may already answer some of your queries.</p>
            <p class="message">If you have any additional information or if there's anything else you'd like us to know, please don't hesitate to reply to this email. We're here to help and ensure you have a seamless experience with our company.</p>
            <p class="message">Once again, thank you for getting in touch with us. We look forward to assisting you further.</p>
            <p class="messagefooter">Best regards,</p>
            <p class="endmessage">Yassir Elkhaili</p>
            <p class="endmessage">Founder and Developer, Webnebula</p>
          </div>
          </div>
      </div>
    </div>
  </body>
  </html>`;

  const emailTemplateMonero: string = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
          <style>
              .hello {
                color: red; 
              }
              .main-container {
                min-height: 100vh; 
                background-color: ${theme === "dark" ? "#101522" : "#F8FAFC"};
                display:flex; 
                justify-content: center; 
                align-items: center; 
              }
              .main {
                color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
                background-color: ${theme === "dark" ? "#020617" : "#F8FAFC"};
                border: 1px solid ${theme === "dark" ? "#1E293B" : "#B9B9BC"};
                padding: 1.5rem;
                border-radius: 0.75rem;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
            }
            .container {
              padding-bottom: 1rem; 
              min-height: 22rem;
              max-width: 42rem;
              margin: auto auto;
            }
            .title {
              display: flex; 
              color: ${theme === "dark" ? "#F8FAFC" : "#222222"};
              height: 33%;
              font-family: 'Lato', sans-serif;
              font-size: 30px;
              height: fit-content; 
              padding-bottom: 0.9rem; 
          }
          .text {
            text-align: center;
            width: 100%; 
            padding: 0.5rem;
            padding-top: 0px; 
            border-bottom: 4px solid ${
              theme === "dark" ? "#2D53BD" : "#1959EE"
            };
            height: fit-content;
          }
          .greeting {
            padding-bottom: 0.5rem; 
            margin: 0px; 
          }
          .message {
            margin: 0px;  
            padding-bottom: 0.5rem; 
          }
          .messagefooter {
            margin: 0px; 
            padding-bottom: 0.5rem; 
          }
          .endmessage {
            margin: 0px;
            padding: 0px; 
          }
          .moneroimg {
            border-radius: 0.5rem;
            display: block; 
          }
          .center {
            margin: 0 auto; 
          }
          .monero-container {
            margin-bottom: 0.5rem; 
          }
          .textcenter {
            text-align: center;
          }
          </style>
      </head>
      <body>
    <div class="main-container">
      <div class="container">
      <div class="subcontainer">
        <div class="title">
          <span class="text">WebNebula - Transforming Ideas into Reality</span>
        </div>
          <div class="main">
            <p class="greeting">Dear ${data.Name}</p>
            <div class="monero-container">
            <p class="message">We hope this message finds you well. Below, you will find all the necessary payment information for the Monero transfer:</p>
            <img src="https://i.ibb.co/9bM08pf/monero.png" class="moneroimg center message" alt="Monero QR code" border="0">
            <p class="message textcenter">Monero Wallet Address:</p>
            <p class="endmessage textcenter">87FrtUuvTGPMm6C5KNL5oW2WPFjEj4qfBZjrUoJb1mWgZ5xva5gvdYqHVzztoktXpbD3g1rPpVPuz3wd8aSc3CyaSqywWLt</p>
            </div>
            <p class="message">To make a payment using Monero for our web development services, please follow these simple steps:</p>
            <p class="endmessage">Step 1: Set Up a Monero Wallet</p>
            <p class="message">If you don't have a Monero wallet, you'll need to create one. Choose a reputable wallet service that suits your preferences, such as a desktop wallet, mobile wallet, or web wallet. Keep your wallet information secure. We recommend using the official Monero gui wallet from <a href="https://www.getmonero.org/" target="_blank">getmonero.org</a>.</p>
            <p class="endmessage">Step 2: Acquire Monero from a reputable crypto exchange (Skip this step if you already own Monero)</p>
            <p class="message">If you don't have any Monero, you can acquire some from cryptocurrency exchanges like Kraken or Binance. Create an account on the exchange of your choice, complete the necessary verification process, and deposit funds into your exchange account. Then, use the funds to buy Monero.</p>
            <p class="endmessage">Step 3: Withdraw Monero to Your Personal Wallet</p>
            <p class="message">Once you have purchased Monero on Binance or Kraken, withdraw the Monero to your personal Monero wallet. Locate the "Withdraw" or "Send" section on the exchange platform, enter your Monero wallet address (found in your personal Monero wallet), and specify the amount you wish to transfer.</p>
            <p class="endmessage">Step 4: Confirm the Transaction Details</p>
            <p class="message">Before finalizing the withdrawal, carefully review the transaction details, including the Monero wallet address. Ensure that you are sending the Monero to the correct wallet address.</p>
            <p class="endmessage">Step 5: Payment Confirmation</p>
            <p class="message">Once you have completed the withdrawal and the Monero transaction is confirmed on the blockchain, please notify us of the payment by sending an email to [Your Contact Email]. Include the transaction ID or any relevant payment details for verification purposes.</p>
            <p class="endmessage">Step 6: Project Commencement</p>
            <p class="message">Upon receiving the Monero payment and verifying the transaction, we will commence work on your web development project promptly.</p>
            <p class="message">If you have any questions or encounter any issues during the payment process, don't hesitate to contact us at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL}. We're here to assist you throughout the payment and development process.</p>
            <p class="message">Thank you for choosing us for your web development needs. We look forward to delivering outstanding results for your project.</p>
            <p class="messagefooter">Best regards,</p>
            <p class="endmessage">Yassir Elkhaili</p>
            <p class="endmessage">Founder and Developer, Webnebula</p>
          </div>
          </div>
      </div>
    </div>
  </body>
  </html>`;

  switch (type) {
    case "contact-user":
      return emailTemplateUser;
    case "contact-owner":
      return emailTemplateOwner;
    case "checkout-transfer":
      return emailTemplateTransfer;
    case "checkout-monero":
      return emailTemplateMonero;
    default:
      return "type does not exist";
  }
};

export default generateEmail;
