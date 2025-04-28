import React, { useState, useEffect } from 'react';

export default function TypingTest({ mode }) {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for typing test
  const [isTesting, setIsTesting] = useState(false);
  const [speed, setSpeed] = useState(0); // Words per minute (WPM)
  const [accuracy, setAccuracy] = useState(100); // Percentage accuracy

  const placeholderText = `The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet.`;

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to calculate words per minute (WPM) and accuracy dynamically while typing
  const calculateDynamicSpeed = () => {
    const typedWords = userInput.trim().split(' ').filter((word) => word !== '').length;
    const wpm = (typedWords / 5) * (60 / (60 - timeLeft)); // Formula for Words per minute
    setSpeed(Math.round(wpm));

    const correctWords = userInput
      .split(' ')
      .filter((word, index) => word === text.split(' ')[index]).length;
    const accuracyPercent = (correctWords / typedWords) * 100;
    setAccuracy(Math.round(accuracyPercent));
  };

  useEffect(() => {
    if (isTesting && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      calculateResults();
    }
  }, [isTesting, timeLeft]);

  useEffect(() => {
    if (isTesting) {
      calculateDynamicSpeed(); // Update speed and accuracy dynamically
    }
  }, [userInput, timeLeft, isTesting]);

  const startTest = () => {
    setIsTesting(true);
    setUserInput('');
    setTimeLeft(60);
    setSpeed(0);
    setAccuracy(100);
    setText(placeholderText); // Set the text for typing test
  };

  const calculateResults = () => {
    const totalWords = text.split(' ').length;
    const typedWords = userInput.split(' ').length;
    const correctWords = userInput.split(' ').filter((word, index) => word === text.split(' ')[index]).length;

    const wpm = (typedWords / 5) * (60 / (60 - timeLeft)); // Formula for Words per minute
    const accuracyPercent = (correctWords / typedWords) * 100;

    setSpeed(Math.round(wpm));
    setAccuracy(Math.round(accuracyPercent));
    setIsTesting(false);
  };

  const stopTest = () => {
    calculateResults(); // Call the result calculation when the test is manually stopped
  };

  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.5s ease',
  };

  return (
    <div style={containerStyle}>
      <div className="container text-center">
        <h2 className="mb-4">⏱️ Typing Test</h2>

        {isTesting ? (
          <>
            <h4>Time Left: {timeLeft} seconds</h4>
            <textarea
              className="form-control mb-3"
              rows="4"
              value={userInput}
              onChange={handleChange}
              placeholder="Start typing here..."
              style={{
                backgroundColor: mode === 'light' ? 'white' : '#333',
                color: mode === 'light' ? 'black' : 'white',
                borderColor: mode === 'light' ? '#ced4da' : '#555',
              }}
            />
            <button
              className="btn btn-danger mt-3"
              onClick={stopTest} // Manually stop the test
              style={{ marginTop: '20px' }}
            >
              Stop Test
            </button>

            <div className="mt-3">
              <p>Speed: {speed} WPM</p> {/* Display dynamic speed here */}
              <p>Accuracy: {accuracy}%</p>
            </div>
          </>
        ) : (
          <>
            <p>{placeholderText}</p>
            <button className="btn btn-primary mt-3" onClick={startTest}>
              Start Typing Test
            </button>
          </>
        )}

        {/* Display results when the test is over */}
        {!isTesting && timeLeft === 0 && (
          <div className="mt-4">
            <h4>Results</h4>
            <p>Speed: {speed} WPM</p>
            <p>Accuracy: {accuracy}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
