import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/AIChat.module.css';

export default function AIChat({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am Itachi\'s AI assistant. How can I help you?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { id: Date.now() + 1, text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatModal}>
      <div className={styles.chatBox}>
        <div className={styles.chatHeader}>
          <h3>💬 AI Assistant</h3>
          <button onClick={onClose} className={styles.closeBtn}>✕</button>
        </div>
        <div className={styles.messagesContainer}>
          {messages.map(msg => (
            <div key={msg.id} className={`${styles.message} ${styles[msg.sender]}`}> 
              <p>{msg.text}</p>
            </div>
          ))}
          {loading && <div className={styles.typing}>AI is typing...</div>}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className={styles.inputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>Send</button>
        </form>
      </div>
    </div>
  );
}