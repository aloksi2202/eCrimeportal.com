import axios from 'axios';
import React, { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const News = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_BASE_URL}/public/news`);
      setData(Array.isArray(response.data?.articles) ? response.data.articles : []);
      if (response.data?.status === 'error') {
        setError(response.data.message || 'The news provider returned an error.');
      }
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to load news. Configure NEWS_API_KEY in the backend environment.');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-3">
      <h1>Daily News</h1>
      <button className="bg-red-700" onClick={getNews} disabled={loading}>
        {loading ? 'Loading...' : 'Get News'}
      </button>
      {error && <p role="alert" className="my-2 text-red-700">{error}</p>}
      {data.map((item, idx) => (
        <div key={item.url || idx} className="my-4">
          <h3 className="font-bold">{item.title}</h3>
          {item.urlToImage && <img src={item.urlToImage} alt="" />}
          <p>{item.description}</p>
          {item.url && <a href={item.url} target="_blank" rel="noreferrer" className="bg-blue-600 rounded-3xl p-1 items-center">View more</a>}
        </div>
      ))}
    </div>
  );
};

export default News;
