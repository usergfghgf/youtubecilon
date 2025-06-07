import { Box, Card, CardContent, CardMedia, Typography, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '100%', sm: '358px' }, marginTop }}>
    <Card sx={{ maxWidth: 358, borderRadius: 4, boxShadow: 3, bgcolor: 'background.paper' }}>
      <CardMedia
        component="img"
        height="180"
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
      />
      <CardContent sx={{ textAlign: 'center', py: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircle sx={{ fontSize: 14, color: 'primary.main', ml: 0.5 }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="body2" color="text.secondary">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
          <Avatar src={channelDetail?.snippet?.thumbnails?.default?.url} />
        </Box>
      </Link>
    </Card>
  </Box>
);

export default ChannelCard;