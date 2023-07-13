import { formValueProps } from "@/app/utils/contactformhandler";

const generateEmail = (data : formValueProps) : string => {
  const emailTemplate : string = `
  <html>
      <head>
          <style>
              .hello {
                color: red; 
              }
              .b-panel {
                background-color: black; 
              }
          </style>
      </head>
      <body>
      <div class="container">
        <div class="title">
          <span class="text">WebNebula - Transforming Ideas into Reality</span>
        </div>
          <div class="main">
            <p>Greetings ${data.Name}e</p>
            <p>Here is the message</p>
          </div>
      </div>
    </body>
  </html>`
  return emailTemplate
}


const contactemailTemplate : string = `
<html>
  <head>
    <style>
        * {
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;
        }
      .container {
      display: flex;
      flex-direction: column;
      min-height: 22rem;
      min-width: 42rem;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      gap: 2rem;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #101522;
    }
    .title {
        color: #F8FAFC;
        height: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
    }
    span.text {
        padding: 0.75rem;
        border-bottom: 4px solid #2D53BD;
    }
    .main {
        display: flex;
        flex-direction: column;
        color: #F8FAFC;
        background-color: #020617;
        border: 1px solid #1E293B;
        padding: 1.5rem;
        border-radius: 0.75rem;
        font-size: 22px;
        gap: 2rem;
    }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="title">
        <span class="text">WebNebula - Transforming Ideas into Reality</span>
      </div>
        <div class="main">
          <p>Greetings Name</p>
          <p>Here is the message</p>
        </div>
    </div>
  </body>
</html>
`;

export default generateEmail