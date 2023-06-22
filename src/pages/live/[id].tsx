import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getItem } from '@/services/liveStream';

const LiveShow = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const { id } = router.query;

  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getItem(id as string).then(res => setChannel(res.data));
    }
  }, [id]);

  useEffect(() => {
    if (channel && typeof window !== 'undefined') {
      const flvPlayer = require('flv.js');
      const player = flvPlayer.createPlayer({
        type: 'flv',
        url: `http://localhost:5301/live/${id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    }
  }, [channel]);

  if (!channel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Live</h1>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{channel.title}</h1>
      <h5>{channel.description}</h5>
    </div>
  );
};

export default LiveShow;
