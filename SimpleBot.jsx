import React, { useState, useEffect, useRef } from 'react';
import './SimpleBot.css';

const SimpleBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const response = (input) => {
    const lowerInput = input.toLowerCase();

    // Helper function to check if any keyword is present
    const containsAny = (keywords) => keywords.some(keyword => lowerInput.includes(keyword));

    // Greetings
    if (containsAny(['hi', 'salut', 'hello', 'hey', 'greetings'])) {
      return "Hi there! How can I help you?";
    }

    // ISO 9001
    if (containsAny(['iso 9001', 'quality management', 'customer satisfaction', 'quality improvement'])) {
      return "ISO 9001 is a standard for quality management systems, ensuring organizations meet customer and regulatory requirements.";
    }

    // ISO 14001
    if (containsAny(['iso 14001', 'environmental management', 'environmental performance', 'reduce environmental footprint'])) {
      return "ISO 14001 focuses on environmental management systems, helping organizations improve their environmental performance.";
    }

    // ISO 45001
    if (containsAny(['iso 45001', 'occupational health and safety', 'workplace injuries', 'workplace safety'])) {
      return "ISO 45001 is an occupational health and safety standard, aimed at reducing workplace injuries and illnesses.";
    }

    // ISO 27001
    if (containsAny(['iso 27001', 'information security', 'data protection', 'cybersecurity'])) {
      return "ISO 27001 is a standard for information security management, protecting sensitive company and customer data.";
    }

    // ISO 50001
    if (containsAny(['iso 50001', 'energy management', 'energy efficiency', 'reduce energy costs'])) {
      return "ISO 50001 deals with energy management systems, helping organizations improve energy efficiency and reduce costs.";
    }

    // ISO 22301
    if (containsAny(['iso 22301', 'business continuity', 'disruption management', 'risk management'])) {
      return "ISO 22301 is a business continuity management standard, ensuring organizations can continue operations during disruptions.";
    }

    // ISO 37001
    if (containsAny(['iso 37001', 'anti-bribery', 'anti-corruption', 'ethical conduct'])) {
      return "ISO 37001 is a standard for anti-bribery management systems, helping organizations fight corruption and bribery.";
    }

    // ISO 13485
    if (containsAny(['iso 13485', 'medical device', 'healthcare quality', 'product safety'])) {
      return "ISO 13485 is for medical device quality management systems, ensuring companies comply with regulatory requirements in the healthcare industry.";
    }

    // ISO 26000
    if (containsAny(['iso 26000', 'social responsibility', 'ethical operations', 'human rights'])) {
      return "ISO 26000 provides guidance on social responsibility, helping organizations operate in an ethical and transparent manner.";
    }

    // ISO 20121
    if (containsAny(['iso 20121', 'sustainable event management', 'event sustainability', 'environmental impact of events'])) {
      return "ISO 20121 is for sustainable event management, helping organizations deliver environmentally responsible events.";
    }

    // Significance of ISO certifications
    if (containsAny(['iso certification significance', 'importance of iso certification', 'why get certified', 'benefits of iso certification'])) {
      return "ISO certifications demonstrate a commitment to quality, safety, and efficiency, enhancing customer trust and opening new market opportunities.";
    }

    // Certification Process
    if (containsAny(['certification process', 'how to get certified', 'steps to certification', 'getting certified'])) {
      return "To obtain ISO certification, follow these steps: 1) Understand the standard requirements, 2) Implement necessary changes, 3) Conduct internal audits, 4) Choose a certification body, 5) Undergo an external audit.";
    }

    // Company Services
    if (containsAny(['company services', 'consulting services', 'offer', 'services'])) {
      return "We provide consulting services for ISO certification, helping your organization become ISO compliant and improve operational efficiency.";
    }

    // Pricing
    if (containsAny(['price', 'cost', 'fees', 'quote'])) {
      return "Our pricing depends on the scope of the certification process and the size of your organization. For a detailed quote, please contact us directly.";
    }

    // Certification Timeline
    if (containsAny(['certification timeline', 'how long certification takes', 'iso certification duration', 'time to get certified'])) {
      return "The ISO certification process typically takes 3 to 6 months, depending on your organization's readiness and the standard you're pursuing.";
    }

    // FAQ
    if (containsAny(['faq', 'frequently asked questions', 'iso questions', 'certification questions'])) {
      return "Q: What is ISO certification? A: ISO certification is a process where an organization is assessed and certified for compliance with international standards.";
    }

    // Case Studies
    if (containsAny(['case studies', 'client success', 'example results', 'client experiences'])) {
      return "Our client in the manufacturing industry achieved a 30% increase in operational efficiency after implementing ISO 9001.";
    }

    // Technical Support
    if (containsAny(['technical support', 'helpdesk', 'technical assistance', 'support team'])) {
      return "For technical support, please reach out to our helpdesk at support@company.com or call our hotline at +123456789.";
    }

    // Business Advice
    if (containsAny(['business advice', 'business growth', 'business tips', 'operational improvement'])) {
      return "It's essential to continuously improve your processes and maintain strong customer relationships to ensure sustainable business growth.";
    }

    // Custom Request
    if (containsAny(['custom request', 'tailored plan', 'bespoke solution', 'customized consulting'])) {
      return "If you need a customized consulting package, please fill out our request form on our website, and we will tailor a solution to your needs.";
    }

    // Contact
    if (containsAny(['contact', 'reach us', 'contact details', 'how to contact us'])) {
      return "You can reach us at contact@company.com or call us at +1234567890 for more information.";
    }

    // Sustainability
    if (containsAny(['sustainability', 'eco-friendly', 'sustainable practices', 'environmental responsibility'])) {
      return "Sustainability is crucial for businesses today. It not only improves your environmental footprint but also boosts brand reputation.";
    }

    // Interactive Features
    if (containsAny(['schedule consultation', 'customized quote', 'schedule meeting', 'quote request'])) {
      return "Would you like to schedule a consultation? Let us know your availability, and we’ll arrange a meeting with one of our experts.";
    }

    // Default Response
    return "I'm not sure about that. Could you please be more specific?";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = { type: 'user', content: inputMessage };
    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = { type: 'bot', content: response(inputMessage) };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000); // Typing indicator duration
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <button 
        className="chat-toggle-button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with TuniBot</h3>
          </div>

          <div className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-message">
                Hello! How can I help you today? You can ask me about:
                <ul>
                  <li>Our services</li>
                  <li>Contact information</li>
                  <li>Pricing</li>
                  <li>ISO standards</li>
                  <li>Certification process</li>
                </ul>
              </div>
            )}
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
              >
                {message.content}
              </div>
            ))}
            {isTyping && <div className="typing-indicator">Bot is typing...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SimpleBot;
