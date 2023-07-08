interface Content {
    title: string, 
    content: React.ReactNode,
    footer: React.ReactNode
}

const termsContent: Content = {
  title: "Terms and Conditions of Use",
  content: (
    <>
      <h3>Acceptance of Terms</h3>
      <p>These Terms and Conditions govern your use of the website {process.env.NEXT_PUBLIC_APP_URL} ({process.env.NEXT_PUBLIC_APP_NAME}). By accessing or using the Website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these Terms and Conditions, you must not use the Website.</p>
      <h3>Intellectual Property</h3>
      <p>The Website and all its content, including but not limited to text, images, graphics, logos, trademarks, and software, are the property of Webnebula or its licensors and are protected by intellectual property laws. You may not modify, reproduce, distribute, or create derivative works based on any material from the Website without prior written consent from Webnebula.</p>
      <h3>Disclaimer of Warranties</h3>
      <p>The Website is provided on an "as is" and "as available" basis. Webnebula makes no representations or warranties of any kind, express or implied, regarding the operation or availability of the Website or the accuracy, completeness, or reliability of any content on the Website.</p>
      <h3>Limitation of Liability</h3>
      <p>In no event shall Webnebula or its authors be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Website or the content provided on the Website.</p>
      <h3>External Links</h3>
      <p>The Website may contain links to third-party websites or resources. Webnebula is not responsible for the availability or accuracy of such external sites or resources. The inclusion of any link does not imply endorsement by Webnebula.</p>
      <h3>Modification of Terms</h3>
      <p>Webnebula reserves the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the Website after any modifications constitutes your acceptance of the revised Terms and Conditions.</p>
      <h3>Governing Law</h3>
      <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the kingdom of Morocco, without regard to its conflict of laws principles.</p>
      <h3>Severability</h3>
      <p>If any provision of these Terms and Conditions is found to be invalid or unenforceable, that provision shall be severed from the remaining provisions, which shall continue to be valid and enforceable to the fullest extent permitted by law.</p>
      <h3>Privacy Policy</h3>
      <p>Your privacy is important to us. Please refer to our <a href={process.env.NEXT_PUBLIC_APP_URL + "/policy"} className="underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information.</p>
      <h3>Communication</h3>
      <p>By using the Website, you consent to receive communications from Webnebula, including promotional and marketing materials. You can opt-out of receiving these communications at any time by contacting us directly.</p>
      <h3>Termination</h3>
      <p>Webnebula reserves the right to terminate or suspend the Website or any part thereof at any time without prior notice. You agree that Webnebula shall not be liable to you or any third party for any termination of your access to the Website.</p>
    </>
  ),
  footer: (
    <>
      <h3>Contact Us</h3>
      <p>If you have any questions or concerns about these terms and conditions of use, please contact us at {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
    </>
  )
};

export default termsContent;
