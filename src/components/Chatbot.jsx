import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Kiran U can ask anything related to DevWiz..{Ex: I want to analyze}' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userInput = input.trim().toLowerCase();
    const newMessages = [...messages, { from: 'user', text: input }];

    const toolLinks = [
      { keywords: ['text', 'analyze', 'analyse', 'word count', 'readability'], title: 'Text Analyzer', route: '/textutils' },
      { keywords: ['todo', 'tasks', 'list'], title: 'Todo List', route: '/todoapp' },
      { keywords: ['color', 'pick', 'picker'], title: 'Color Picker', route: '/colorpicker' },
      { keywords: ['json', 'formatter', 'format'], title: 'JSON Formatter', route: '/jsonformatter' },
      { keywords: ['typing', 'speed', 'test'], title: 'Typing Test', route: '/typingtest' },
      { keywords: ['password', 'generate', 'secure'], title: 'Password Generator', route: '/passwordgenerator' },
      { keywords: ['lorem', 'dummy', 'ipsum'], title: 'Lorem Ipsum Generator', route: '/loremgenerator' },
      { keywords: ['markdown', 'editor'], title: 'Markdown Editor', route: '/markdowneditor' },
      { keywords: ['qr', 'code'], title: 'QR Code Generator', route: '/qrcodegenerator' },
      { keywords: ['spam', 'email'], title: 'Spam Email Generator', route: '/spamemailgenerator' }
    ];

    let foundTool = null;

    for (let tool of toolLinks) {
      if (tool.keywords.some(kw => userInput.includes(kw))) {
        foundTool = tool;
        break;
      }
    }

    const botReply = foundTool
      ? ` You can use our <strong>${foundTool.title}</strong> here: <a href="${foundTool.route}" target="_blank">${foundTool.route}</a>`
      : " Sorry, I'm only able to assist with the tools available in DevWiz.";

    setMessages([...newMessages, { from: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          backgroundColor: '#6c5ce7',
          color: '#fff',
          fontSize: '24px',
          border: 'none',
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ background: '#6c5ce7', padding: '10px', color: '#fff' }}>
            <strong>Chatbot</strong>
          </div>
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.from === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: msg.from === 'user' ? '#dfe6e9' : '#a29bfe',
                    color: msg.from === 'user' ? '#000' : '#fff',
                    padding: '6px 10px',
                    borderRadius: '12px',
                    maxWidth: '80%',
                    wordWrap: 'break-word',
                  }}
                  dangerouslySetInnerHTML={{ __html: msg.text }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ddd' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              style={{ flex: 1, borderRadius: '8px', padding: '8px', border: '1px solid #ccc' }}
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: '5px',
                padding: '8px 12px',
                borderRadius: '8px',
                background: '#6c5ce7',
                color: '#fff',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
