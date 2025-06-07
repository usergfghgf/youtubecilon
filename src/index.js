import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// These imports should point to the components directory
import { ChannelCard, ChannelDetail, Feed, Navbar, SearchBar, SearchFeed, Sidebar, VideoCard, VideoDetail, Videos } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);