import React, { useState } from 'react';
import styles from '../styles/VideoDownloader.module.css';

export default function VideoDownloader({ onClose }) {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/video-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (response.ok) {
        setVideoData(data);
      } else {
        setError(data.error || 'Failed to fetch video');
      }
    } catch (err) {
      setError('Error fetching video data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>🎬 Video Downloader</h2>
          <button onClick={onClose} className={styles.closeBtn}>✕</button>
        </div>
        
        <form onSubmit={handleDownload} className={styles.form}>
          <input
            type="text"
            placeholder="Paste video URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Fetching...' : 'Fetch Video'}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        {videoData && (
          <div className={styles.videoInfo}>
            <h3>{videoData.title}</h3>
            {videoData.thumbnail && (
              <img src={videoData.thumbnail} alt="Video thumbnail" />
            )}
            <p>{videoData.description}</p>
            <div className={styles.qualityButtons}>
              {videoData.qualities?.map((quality, idx) => (
                <a 
                  key={idx}
                  href={quality.url}
                  download
                  className={styles.downloadBtn}
                >
                  Download {quality.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}