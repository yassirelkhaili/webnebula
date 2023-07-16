export interface processProps {
  question: string;
  answer: string;
}

export const processTitle: string = "Frequently Asked Questions";

const processContent: Array<processProps> = [
  {
    question: "What is included in the Essential Web Presence Package?",
    answer:
      "The Essential Web Presence Package includes a responsive and custom front-end website built with technologies like React and Tailwind CSS. It also includes SEO optimization and documentation to help you effectively manage and promote your website.",
  },
  {
    question: "What does the Complete Web Solution Package offer?",
    answer:
      "The Complete Web Solution Package provides a comprehensive web solution with both front-end and back-end development. Your website will be built using technologies like React for the front-end and Laravel for the back-end. This package also includes SEO optimization and documentation for your convenience.",
  },
  {
    question: "What makes the Premium Web Solution Package different?",
    answer:
      "The Premium Web Solution Package offers everything included in the Complete Web Solution Package, but with an additional customized admin panel. The admin panel allows you to have full control and easy management of your website's content, user data, and other administrative tasks.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for website development depends on various factors, such as the complexity of the project, design requirements, functionality needed, and client responsiveness. We provide estimates based on project scope and work diligently to deliver high-quality results within the agreed timeframe.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely! We prioritize mobile responsiveness and ensure that your website looks and functions flawlessly on various devices and screen sizes. This helps provide an optimal user experience and improves search engine visibility.",
  },
  {
    question:
      "Do you provide website hosting and domain registration services?",
    answer:
      "Yes, we offer website hosting and domain registration services as part of our comprehensive web development packages. We can help you choose a suitable hosting plan and register a domain that aligns with your brand.",
  },
  {
    question: "Can I customize the design of my website with these packages?",
    answer:
      "Absolutely! All our packages offer custom website development, which means we tailor the design to align with your brand identity, preferences, and requirements. Our team will work closely with you to ensure the website reflects your vision.",
  },
  {
    question: "Will I receive documentation to manage my website effectively?",
    answer:
      "Yes, we provide documentation that outlines the functionalities and features of your website. This documentation serves as a guide to help you understand and manage various aspects of your website, such as updating content, adding new pages, or managing user interactions.",
  },
  {
    question:
      "Can I upgrade my package in the future if I need additional features?",
    answer:
      "Certainly! We understand that your website needs may evolve over time. You can always upgrade your package to include additional features or functionalities. We can discuss your requirements and provide a tailored solution based on your needs.",
  },
];

export default processContent;
