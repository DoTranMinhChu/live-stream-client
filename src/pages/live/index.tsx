import { getListChannels } from '@/services/liveStream';
import React, { useEffect, useState } from 'react';

const live = () => {
  const [listChannels, setLiveChannel] = useState<Array<any>>();
  useEffect(() => {
    getListChannels().then(res => setLiveChannel(res.data.rows))
  }, [])
  console.log("listChannel ==> ", listChannels)
  return (
    <div>
      {listChannels &&
        listChannels.map(item => {
          return (
            <div key={item._id}>
              <a href={`live/${item._id}`}>{item.title}</a>
            </div>
          )
        })

      }
    </div>
  );
};

export default live;
