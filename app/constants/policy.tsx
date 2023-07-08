interface Content {
    title: string, 
    content: React.ReactNode,
    footer: React.ReactNode
}

const policyContent: Content = {
  title: "Privacy Policy",
  content: (
    <>
      <h3>Introduction</h3>
      <p>{process.env.NEXT_PUBLIC_APP_NAME} ("we," "us," or "our") is committed to protecting the privacy and confidentiality of the personal information we collect from users ("you" or "user") of our website {process.env.NEXT_PUBLIC_APP_URL} ({process.env.NEXT_PUBLIC_APP_NAME}). This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your personal information.</p>
      <h3>Information We Collect</h3>
      <p>Personal Information: When you visit or interact with our Website, we may collect certain personal information, such as your name, email address, contact information, and any other information you voluntarily provide to us.</p>
      <h3>Use of Information</h3>
      <p>We may use the collected information to: Provide and improve our services, products, and Website functionality. Communicate with you, respond to your inquiries, and provide customer support. Personalize your experience on the Website. Send you promotional materials and marketing communications, where permitted by law.</p>
      <h3>Disclosure of Information</h3>
      <p>We do not sell, trade, or rent your personal information to third parties without your consent.</p>
      <h3>Data Security</h3>
      <p>We take reasonable measures to protect your personal information from unauthorized access, use, disclosure, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure. We implement industry-standard security practices and procedures to ensure the security and confidentiality of your information.</p>
      <h3>Your Rights</h3>
      <p>You have the right to access, update, correct, or delete your personal information. You may exercise these rights by contacting us using the contact information provided at the end of this Privacy Policy. We will make reasonable efforts to respond to your requests in a timely manner, subject to any legal or contractual obligations.</p>
      <h3>Third-Party Links</h3>
      <p>Our Website may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party websites or services. We recommend reviewing the privacy policies of those third parties before providing them with your personal information.</p>
      <h3>Updates to this Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated Privacy Policy on our Website. Your continued use of the Website after such modifications constitutes your acceptance of the updated Privacy Policy.</p>
    </>
  ),
  footer: (
    <>
      <h3>Contact Us</h3>
      <p>If you have any questions or concerns about this privacy policy or our handling of your personal information, please contact us at {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
    </>
  )
};

export default policyContent;