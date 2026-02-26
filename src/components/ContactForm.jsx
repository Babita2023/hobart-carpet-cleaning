"use client";
import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setMessage("Message sent successfully!");
      e.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Your Name" className="w-full border p-3" required />
      <input name="phone" placeholder="Phone Number" className="w-full border p-3" required />
      <textarea name="message" placeholder="Message" className="w-full border p-3" required />
      <button className="bg-slate-900 text-white px-6 py-3 rounded">
        Submit
      </button>
      <p>{message}</p>
    </form>
  );
}