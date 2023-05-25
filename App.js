import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [type, setType] = useState('');
  const [tone, setTone] = useState('');
  const [relationship, setRelationship] = useState('');
  const [length, setLength] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [prompt, setPrompt] = useState('');
  const [email, setEmail] = useState('');

  const handleTypeChange = (event) => setType(event.target.value);
  const handleToneChange = (event) => setTone(event.target.value);
  const handleRelationshipChange = (event) =>
    setRelationship(event.target.value);
  const handleLengthChange = (event) => setLength(event.target.value);
  const handleFocusChange = (event) => setFocus(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  const handleSubmit = () => {
    if (type === 'Outreach') {
      setPrompt(
        `Act as a message assistant. Please write an Outreach message to a ${relationship} with the name ${name} . Use a ${tone} tone. The message should be around ${length} long (+/- 5 words). Include the following in your response: ${focus}`
      );
    }
    if (type === 'Response') {
      setPrompt(
        `Act as an message assistant. Please write a response to a ${relationship} with the name ${name} who wrote the text message below. Use a ${tone} tone. The response should be around ${length}  words long (+/- 5 words). Include the following in your response: ${focus}. Use this date: ${date} Here is the text message: ${email}`
      );
    }
  };

  const handleClear = () => setPrompt('');

  return (
    <div className="App">
      <div>
        Message Type
        <div>
          <label>Type:</label>
          <select value={type} onChange={handleTypeChange}>
            <option value="">Select...</option>
            <option value="Outreach">Outreach</option>
            <option value="Response">Response</option>
          </select>
        </div>
        {type === 'Response' && (
          <div>
            <textarea
              value={email}
              onChange={handleEmailChange}
              placeholder="Your text here..."
            ></textarea>
          </div>
        )}
      </div>

      <div className="accordion">

        <div>
           <h2>Parameters</h2>
          <div className="parameters">
          
         

          
            {/* <label>Tone:</label> */}
            <select value={tone} onChange={handleToneChange}>
              <option value="neutral">Select Tone...</option>
              <option value="professional">Professional</option>
              <option value="formal">Formal</option>
              <option value="friendly">Friendly</option>
              <option value="direct">Direct</option>
              <option value="informative">Informative</option>
              <option value="positive">Positive</option>
              <option value="persuasive">Persuasive</option>
              <option value="casual">Casual</option>
              <option value="humorous">Humorous</option>
              <option value="authoritative">Authoritative</option>
              <option value="neutral">Neutral</option>
              <option value="respectful">Respectful</option>
              <option value="empathetic">Empathetic</option>
              <option value="sympathetic">Sympathetic</option>
              <option value="instructional">Instructional</option>
              <option value="confident">Confident</option>
              <option value="appreciative">Appreciative</option>
              <option value="supportive">Supportive</option>
              <option value="encouraging">Encouraging</option>
            </select>
            {/* <label>Relationship:</label> */}
            <select value={relationship} onChange={handleRelationshipChange}>
            <option value="general">Select Relationship...</option>
              <option value="friend">Friend</option>
              <option value="coworker">Coworker</option>
              <option value="acquaintance">Acquaintance</option>
              <option value="client">Client</option>
              <option value="Sales lead">Sales lead</option>
              <option value="service-provider">Service provider</option>
              <option value="mentor">Mentor</option>
              <option value="student">Student</option>
              <option value="boss">Boss</option>
              <option value="employee">Employee</option>
              <option value="business-partner">Business partner</option>
              <option value="stranger">Stranger</option>
              <option value="mentee">Mentee</option>
            </select>
            {/* <label>Length:</label> */}
            <select value={length} onChange={handleLengthChange}>
              <option value="any">Select Length...</option>
              <option value="30">30 words</option>
              <option value="60">60 words</option>
              <option value="100">100 words</option>
              <option value="200">200 words</option>
              <option value="300">300 words</option>
            </select>
          </div>
        </div>



        <div>
          Additional Input
          <div>
            <label>Focus:</label>
            <textarea value={focus} onChange={handleFocusChange} />
            <label>Name:</label>
            <textarea value={name} onChange={handleNameChange} />
          </div>
        </div>
        <div>
          Meeting Times
          <div>
            <label>Date:</label>
            <input
              type="datetime-local"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>

      <div>
        Final Prompt
        <div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleClear}>Clear</button>
          <div>Prompt: {prompt}</div>
        </div>
      </div>
    </div>
  );
};

export default App;