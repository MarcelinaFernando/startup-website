// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";


export default function Contact() {


// state to store the field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // updates the values as the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // action on form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // sends the data (console.log or API)
    console.log("Dados enviados:", formData);

    // clears the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      {/* Contact page header */}
      <SectionHeader
        title="Contact Us"
        description={
          <>
            Lorem ipsum, dolor sit amet <br />
            consectetur <br />
            <span className="last-line">adipisicing elit.</span>
          </>
        }
      />
 

 <div className="contact-content">
  {/* Map section */}
      <section className="contact-map">
    <iframe
    title="Google Map Huambo"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.40260307221735!2d15.728963807182186!3d-12.764166464259198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb775aa2a6f737f%3A0x8d2236fb1127a17a!2sCidade%20Baixa!5e0!3m2!1sen!2sao!4v1759150264463!5m2!1sen!2sao"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
    </section>



 {/* Form */}

<section className="contact-form-section" aria-label="Contact Form">

  <form className="contact-form" onSubmit={handleSubmit}>

    <label htmlFor="name" className="section-description">Name</label>
    <input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="email" className="section-description">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <label htmlFor="message" className="section-description">Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
    />
    
        {/* Reusable Button */}
        <Button type="submit" label="Submit" className="btn-primary" />
  </form>
</section>

</div>
    </main>
  );
}
