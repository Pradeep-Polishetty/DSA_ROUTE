'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', topic: 'General Question', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setErrorMsg('');

    if (!form.fname || !form.email || !form.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }
    if (!form.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setForm({ fname: '', lname: '', email: '', topic: 'General Question', message: '' });
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-wrap reveal">
      <div className="form-title">Send a Message</div>
      <p className="form-sub">
        Fill out the form and your message will be sent directly to{' '}
        <strong style={{ color: 'var(--accent)' }}>your-new-email@gmail.com</strong>
      </p>

      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input name="fname" value={form.fname} onChange={handleChange} placeholder="Ravi" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="lname" value={form.lname} onChange={handleChange} placeholder="Kumar" />
        </div>
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label>Topic</label>
        <select name="topic" value={form.topic} onChange={handleChange}>
          <option>General Question</option>
          <option>Phase Guidance</option>
          <option>Problem Help</option>
          <option>Resources / Study Plan</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="I'm stuck on DP problems and not sure how to approach..."
        />
      </div>

      <button className="btn-submit" onClick={handleSubmit} disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>Sending… <span>⏳</span></>
        ) : (
          <>Send Message <span>✉</span></>
        )}
      </button>

      <div className={`success-msg ${status === 'success' ? 'show' : ''}`}>
        ✅ Message sent successfully! Pradeep will get back to you within 24 hours.
      </div>
      <div className={`error-msg ${status === 'error' ? 'show' : ''}`}>
        ❌ {errorMsg}
      </div>
    </div>
  );
}
