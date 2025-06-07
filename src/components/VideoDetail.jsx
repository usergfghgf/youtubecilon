import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Typography, Stack, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ p: 3 }}>
          <Box flex={2}>
            <Box sx={{ position: 'sticky', top: '86px' }}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width="100%" />
              <Typography color="text.primary" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: 'text.primary', py: 1, px: 2 }}>
                <Link to={`/channel/${channelId}`}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={videoDetail?.snippet?.thumbnails?.default?.url} sx={{ width: 24, height: 24, mr: 1 }} />
                    <Typography variant="subtitle2" color="text.primary">
                      {channelTitle}
                      <CheckCircle sx={{ fontSize: 12, color: 'primary.main', ml: 0.5 }} />
                    </Typography>
                  </Box>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box flex={1} sx={{ px: { xs: 0, md: 2 } }}>
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default VideoDetail;