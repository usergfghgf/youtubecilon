import { Stack, Box, Typography } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  console.log('Videos component - videos prop:', videos);

  if (!videos?.length) {
    return <Typography color="text.secondary">No videos available.</Typography>;
  }

  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent={{ xs: 'center', md: 'start' }} // Center on mobile, start on desktop
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: '358px', md: '320px' } }}>
          {item.id?.videoId && <VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;