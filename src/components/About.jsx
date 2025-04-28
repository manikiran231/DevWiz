import React from 'react';

export default function About() {
    const pageBackground = {
        background: 'linear-gradient(135deg, #1b1446, #2a1b6d)', // Dark purple gradient
        color: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
        transition: 'all 0.4s ease',
    };

    const cardStyle = {
        backgroundColor: '#2d2073', // Slightly lighter purple for cards
        color: '#e0e0e0',
        border: '1px solid #3d2e91',
        borderRadius: '10px',
        marginBottom: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'all 0.4s ease',
    };

    const accordionButtonStyle = {
        backgroundColor: '#3b2a91',  // Even lighter purple for button
        color: 'white',
        fontWeight: '500',
        border: 'none',
        borderRadius: '8px',
        padding: '12px',
        transition: 'background-color 0.3s ease',
    };

    const accordionBodyStyle = {
        backgroundColor: '#2a1b6d',   // Body slightly darker than button
        color: '#dcdcdc',
        borderTop: '1px solid #483b9b',
        padding: '15px',
        borderRadius: '8px',
    };

    return (
        <div style={pageBackground}>
            <div className="container">
                <h1 className="my-4 text-center">About WordWiz</h1>

                <div className="accordion" id="accordionExample">
                    {/* Purpose */}
                    <div className="accordion-item" style={cardStyle}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                style={accordionButtonStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                📌 Purpose of WordWiz
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={accordionBodyStyle}>
                                <strong>WordWiz</strong> is a comprehensive toolset designed to help users quickly and easily manage, analyze, and enhance text. Whether you're looking to improve your writing, format data, or test your skills, WordWiz provides everything you need in one place.
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="accordion-item" style={cardStyle}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                style={accordionButtonStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                ⚙️ Key Features
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={accordionBodyStyle}>
                                <ul>
                                    <li>Text Analysis tools like <strong>uppercase/lowercase conversion</strong>, <strong>word/character count</strong>, and reading time estimation.</li>
                                    <li><strong>Text-to-speech</strong> reader to hear your content aloud.</li>
                                    <li><strong>Color Picker</strong> to select perfect colors for your projects and designs.</li>
                                    <li><strong>JSON Formatter</strong> to format and beautify JSON data with ease.</li>
                                    <li><strong>Typing Test</strong> to measure and improve your typing speed and accuracy.</li>
                                    <li><strong>Password Generator</strong> to create secure, random passwords for your accounts.</li>
                                    <li><strong>Lorem Ipsum Generator</strong> to generate placeholder text for your designs and mockups.</li>
                                    <li>Fully <strong>mobile responsive</strong> interface for seamless use on all devices.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Future */}
                    <div className="accordion-item" style={cardStyle}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                style={accordionButtonStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                🚀 Future Enhancements
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body" style={accordionBodyStyle}>
                                <ul>
                                    <li>Grammar checker & <strong>text summarizer</strong> for better text processing.</li>
                                    <li>Customizable <strong>theme color picker</strong> to personalize your interface.</li>
                                    <li><strong>Dictionary</strong> and <strong>AI integrations</strong> for advanced text analysis and improvements.</li>
                                    <li><strong>Multi-language support</strong> for global accessibility.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
