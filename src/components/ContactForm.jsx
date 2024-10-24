import { useState } from 'react';
function ContactForm() {
// Define state for form inputs
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

// Handle form submission
const handleSubmit = (e) => {
e.preventDefault();
console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
};

return (
<form   style={{backgroundColor:'pink'}} onSubmit={handleSubmit}>
<div>
<label>Name:</label>
<input style={{padding:'5px'}}
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</div>

<div>
<label>Email:</label>
<input  style={{padding:'5px'}}
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>

<div>
<label>Message:</label>
<textarea  style={{padding:'5px'}}
value={message}
onChange={(e) => setMessage(e.target.value)}
/>
</div>

<button type="submit">Submit</button>
</form>
);
}

export default ContactForm;