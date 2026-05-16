"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (UI placeholder)");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">Full Name</label>
          <input
            id="contact-name"
            className={styles.input}
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            className={styles.input}
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          className={styles.input}
          type="text"
          name="subject"
          placeholder="How can I help you?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          className={styles.textarea}
          name="message"
          placeholder="Write your message here..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Send Message
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  );
}
