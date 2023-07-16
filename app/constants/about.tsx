interface Content {
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const aboutContent: Content = {
  title: "About Us",
  content: (
    <>
      <p>
        At Webnebula, we are passionate about crafting exceptional web solutions
        that make a lasting impression. As a dedicated team of web developers
        and designers, we specialize in creating dynamic and visually stunning
        websites that captivate users and drive tangible results.
      </p>
      <p>
        Our mission is to transform your online presence into a captivating and
        seamless experience. We understand the importance of a well-designed
        website in today's digital landscape. That's why we offer custom
        front-end and back-end development packages tailored to your unique
        needs. Whether you require a simple brochure website or a complex web
        application, we have the expertise to bring your vision to life.
      </p>
      <p>
        With a deep understanding of the latest web technologies and trends, we
        leverage cutting-edge tools such as React.js, Tailwind CSS, Laravel, and
        PHP to build robust and scalable solutions. Our team is well-versed in
        developing RESTful APIs, ensuring seamless integration with other
        systems and applications. We also prioritize search engine optimization
        (SEO) to enhance your website's visibility and drive organic traffic.
      </p>
      <p>
        Thank you for considering Webnebula as your web development partner. We
        look forward to collaborating with you and creating a remarkable online
        presence that sets you apart from the competition.
      </p>
    </>
  ),
  footer: (
    <>
      <div>
        <p>Yassir Elkhaili</p>
        <p>Founder and Developer, Webnebula</p>
      </div>
      <div>
        <p>Zakaria Ghazoune</p>
        <p>Co-founder and Designer, Webnebula</p>
      </div>
    </>
  ),
};

export default aboutContent;
