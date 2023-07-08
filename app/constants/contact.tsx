export interface formContentProps {
name: string, 
label: string, 
placeholder: string, 
description: string
}

export const formContent : Array<formContentProps> = [
{
name: "Name", 
label: "Name", 
placeholder: "Name", 
description: "Provide your name for contact and identification purposes."
},
{
name: "Email", 
label: "Email", 
placeholder: "Email", 
description: "Please provide your email address so we can get back to you."
},
{
name: "Phone", 
label: "Phone", 
placeholder: "Phone", 
description: "Enter your phone number so we can reach you if needed."
},
{
name: "Organisation", 
label: "Company/Organisation", 
placeholder: "Company", 
description: "Specify the name of your company or organization."
},
{
name: "Subject", 
label: "Subject", 
placeholder: "Subject", 
description: "Enter the subject or topic of your message."
}
]

export const messageContent : formContentProps = {
  name: "Message", 
label: "Message", 
placeholder: "Message", 
description: "Compose your message or inquiry here."
}

export const buttonLabel : string = "Send Message"

export const contactTitle: string = "Contact Us";
