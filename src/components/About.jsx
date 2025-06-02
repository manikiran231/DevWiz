import React from 'react';

export default function About() {
    const sectionStyle = {
        background: 'linear-gradient(135deg, #1b1446, #2a1b6d)',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '40px 20px',
    };

    const headingStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        borderBottom: '2px solid #3d2e91',
        paddingBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        marginBottom: '40px',
        color: '#ddd',
    };

    const servicesGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px',
    };

    const card = {
        backgroundColor: '#2d2073',
        borderRadius: '10px',
        padding: '20px',
        color: '#e0e0e0',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        border: '1px solid #3d2e91',
    };

    const testimonialStyle = {
        fontStyle: 'italic',
        marginBottom: '20px',
        backgroundColor: '#3b2a91',
        padding: '15px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div style={sectionStyle}>
            <div className="container">
                <h1 className="text-center mb-5">About DevWiz</h1>

                {/* About Us */}
                <h2 style={headingStyle}>Who We Are</h2>
                <p style={paragraphStyle}>
                    DevWiz is your digital companion built to simplify everyday development and productivity tasks. Whether you're a developer, student, or content creator, DevWiz equips you with essential tools in one place—fast, functional, and beautifully designed.
                </p>

                {/* Our Story */}
                <h2 style={headingStyle}>Our Story</h2>
                <p style={paragraphStyle}>
                    We started DevWiz with a simple goal: eliminate the need to juggle multiple tabs and websites for routine tasks. Over time, we grew by listening to our users and constantly expanding our toolkit—today, DevWiz helps thousands manage content, generate assets, and stay organized.
                </p>

                {/* Services */}
                <h2 style={headingStyle}>What We Offer</h2>
                <div style={servicesGrid}>
                    <div style={card}>
                        <h4>📝 Text Utilities</h4>
                        <p>Convert case, count words/chars, estimate reading time, and more.</p>
                    </div>
                    <div style={card}>
                        <h4>🔊 Text-to-Speech</h4>
                        <p>Read your content aloud with natural voice playback.</p>
                    </div>
                    <div style={card}>
                        <h4>🧾 Markdown Editor</h4>
                        <p>Write and preview markdown with GitHub-style formatting.</p>
                    </div>
                    <div style={card}>
                        <h4>🎨 Color Picker</h4>
                        <p>Pick the perfect shade for your designs or themes.</p>
                    </div>
                    <div style={card}>
                        <h4>📦 JSON Formatter</h4>
                        <p>Instantly beautify or minify JSON data.</p>
                    </div>
                    <div style={card}>
                        <h4>⌨️ Typing Test</h4>
                        <p>Track your typing speed and improve your accuracy.</p>
                    </div>
                    <div style={card}>
                        <h4>🔐 Password Generator</h4>
                        <p>Create secure, random passphrases for your accounts.</p>
                    </div>
                    <div style={card}>
                        <h4>🧪 Lorem Ipsum Generator</h4>
                        <p>Generate placeholder content for mockups and designs.</p>
                    </div>
                    <div style={card}>
                        <h4>📬 Spam Email Generator</h4>
                        <p>Create fake emails for testing or signups.</p>
                    </div>
                    <div style={card}>
                        <h4>✅ Todo List</h4>
                        <p>Manage tasks with offline cache and priority support.</p>
                    </div>
                    <div style={card}>
                        <h4>📱 Responsive Design</h4>
                        <p>Optimized for all screens—from mobile to desktop.</p>
                    </div>
                </div>

                {/* Testimonials */}
                <h2 style={headingStyle}>What Our Users Say</h2>
                <div style={testimonialStyle}>
                    "DevWiz is my daily go-to. Clean, efficient, and packed with tools I actually use." — <strong>Ritika S.</strong>
                </div>
                <div style={testimonialStyle}>
                    "It replaced five tabs in my browser. Big fan of the markdown editor and color tools." — <strong>Lucas T.</strong>
                </div>
                <div style={testimonialStyle}>
                    "Honestly didn’t expect the spam email generator to be this helpful. Love it!" — <strong>Manuel R.</strong>
                </div>
            </div>
        </div>
    );
}
