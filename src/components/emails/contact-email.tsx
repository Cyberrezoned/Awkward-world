
import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission from {name}</h1>
    <p>
      You have received a new message from your website contact form.
    </p>
    <hr />
    <h2>Message Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
    </ul>
    <hr />
    <h2>Message:</h2>
    <p>{message}</p>
    <hr />
    <p>This email was sent from the AWKWORLD contact form.</p>
  </div>
);

export default ContactEmail;
