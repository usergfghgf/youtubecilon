import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, borderRadius: 4, boxShadow: 3 }}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: '100%', height: 180, borderRadius: '4px 4px 0 0' }}
      />
    </Link>
    <CardContent sx={{ bgcolor: 'background.paper', p: 2 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Avatar src={snippet?.thumbnails?.default?.url} sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="subtitle2" color="text.secondary">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'primary.main', ml: 0.5 }} />
          </Typography>
        </Box>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;