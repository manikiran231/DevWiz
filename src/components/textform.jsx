import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Textform(props) {
    const [text, setText] = useState(() => {
        return localStorage.getItem('wordwiz-text') || "";
    });

    const handleChange = (event) => setText(event.target.value);

    const toUpperCase = () => {
        setText(text.toUpperCase());
        toast.info("Converted to UPPERCASE");
    };

    const toLowerCase = () => {
        setText(text.toLowerCase());
        toast.info("Converted to lowercase");
    };

    const clearText = () => {
        setText("");
        toast.warn("Text cleared");
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        toast.success("Text copied to clipboard!");
    };

    const removeExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        toast.info("Extra spaces removed");
    };

    const capitalizeEachWord = () => {
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newText);
        toast.info("Capitalized each word");
    };

    const downloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "textutils-output.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        toast.success("Text file downloaded");
    };

    const speakText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
            toast.info("Speaking the text...");
        } else {
            toast.error("Text-to-Speech not supported in this browser");
        }
    };

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    useEffect(() => {
        localStorage.setItem('wordwiz-text', text);
    }, [text]);

    // Dark gradient background for the main background
    const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

    // Light purple gradient for the cards
    const lightPurpleCardBackground = 'rgb(39, 26, 100)';

    const containerStyle = {
        background: darkGradientBackground,
        color: props.mode === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        padding: '40px 20px',
        transition: 'all 0.5s ease',
    };

    const textareaStyle = {
        backgroundColor: props.mode === 'light' ? '#ffffff' : '#495057',
        color: props.mode === 'light' ? '#212529' : '#f8f9fa',
        border: '2px solid',
        borderColor: props.mode === 'light' ? '#ced4da' : '#6c757d',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '1.1rem',
    };

    const cardStyle = {
        background: lightPurpleCardBackground,
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        marginBottom: '40px',
    };

    return (
        <div style={containerStyle}>
            <div className="container" style={cardStyle}>
                <h1 className="text-center mb-4" style={{ fontWeight: 'bold' }}>WordWiz - Text Analyzer</h1>
                <textarea
                    className="form-control"
                    style={textareaStyle}
                    rows="8"
                    value={text}
                    onChange={handleChange}
                    placeholder="Type or paste your text here..."
                />

                <div className="text-center mt-4">
                    <button className="btn btn-primary m-2" disabled={!text} onClick={toUpperCase}>UPPERCASE</button>
                    <button className="btn btn-primary m-2" disabled={!text} onClick={toLowerCase}>lowercase</button>
                    <button className="btn btn-info m-2" disabled={!text} onClick={capitalizeEachWord}>Capitalize Words</button>
                    <button className="btn btn-warning m-2" disabled={!text} onClick={removeExtraSpaces}>Remove Spaces</button>
                    <button className="btn btn-success m-2" disabled={!text} onClick={copyText}>Copy Text</button>
                    <button className="btn btn-secondary m-2" disabled={!text} onClick={downloadText}>Download Text</button>
                    <button className="btn btn-dark m-2" disabled={!text} onClick={speakText}>Speak</button>
                    <button className="btn btn-danger m-2" disabled={!text} onClick={clearText}>Clear All</button>
                </div>
            </div>

            <div className="container" style={cardStyle}>
                <h2 className="text-center mb-3">Text Summary</h2>
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <h4>{wordCount}</h4>
                        <p>Words</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h4>{text.length}</h4>
                        <p>Characters</p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h4>{(0.008 * wordCount).toFixed(2)}</h4>
                        <p>Minutes Read</p>
                    </div>
                </div>

                <h3 className="mt-4">Preview</h3>
                <p style={{ fontStyle: 'italic', minHeight: '50px' }}>
                    {text.length > 0 ? text : "Nothing to preview yet..."}
                </p>
            </div>

            <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
        </div>
    );
}
