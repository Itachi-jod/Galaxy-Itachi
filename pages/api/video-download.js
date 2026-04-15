import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  try {
    const response = await axios.get(
      `https://autolink-api-itachi.vercel.app/api/download?url=${encodeURIComponent(url)}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Video download error:', error);
    res.status(500).json({ error: 'Failed to fetch video data' });
  }
}