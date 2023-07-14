const generateEmail = (name : string, theme : string) : string => {
  const emailTemplate : string = `
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
            border-bottom: 4px solid ${theme === "dark" ? "#2D53BD" : "#1959EE"};
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
            <p class="greeting">Dear ${name}</p>
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
  </html>`
  return emailTemplate
}

export default generateEmail