import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownEditor({ mode = 'light' }) {
  const [mdText, setMdText] = useState(`# Welcome to DevWiz Markdown Editor

Type some **Markdown** here, and see it _previewed_ in real time!

- Supports lists
- **Bold**, _italic_
- Links: [DevWiz](https://example.com)
- Tables

| Header 1 | Header 2 |
| -------- | -------- |
| Cell A   | Cell B   |
`);

  // Same backgrounds as Textform
  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';
  const lightPurpleCardBackground = 'rgba(255, 255, 255, 0.08)';


  const containerStyle = {
    background: darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '40px 20px',
    transition: 'all 0.5s ease',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    background: lightPurpleCardBackground,
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    marginBottom: '40px',
    flex: 1,
    minWidth: '300px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  };

  const textareaStyle = {
    backgroundColor: mode === 'light' ? '#fff' : '#495057',
    color: mode === 'light' ? '#212529' : '#f8f9fa',
    border: '2px solid',
    borderColor: mode === 'light' ? '#fff' : '#6c757d',
    borderRadius: '10px',
    padding: '15px',
    fontSize: '1.1rem',
    fontFamily: 'monospace',
    lineHeight: '1.4',
    resize: 'vertical',
    flexGrow: 1,
  };

  const previewStyle = {
    backgroundColor: mode === 'light' ? '#fff' : '#495057',
    border: mode === 'light' ? '1px solid #ddd' : '1px solid #6c757d',
    borderRadius: '10px',
    padding: '15px',
    overflowY: 'auto',
    maxHeight: '450px',
    color: mode === 'light' ? '#212529' : '#f8f9fa',
    fontSize: '1.1rem',
    lineHeight: '1.4',
  };

  return (
    <div style={containerStyle}>
      {/* Editor */}
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>✏️ Markdown Editor</h2>
        <textarea
          value={mdText}
          onChange={(e) => setMdText(e.target.value)}
          style={textareaStyle}
          placeholder="Type your markdown here..."
        />
      </div>

      {/* Preview */}
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>📖 Preview</h2>
        <div style={previewStyle}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
