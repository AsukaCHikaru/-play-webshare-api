import React from 'react';

export const App: React.VFC = () => {
  const handleClickShare = () => {
    const shareData: ShareData = {
      title: 'play webshare API',
      text: 'text',
      url: 'https://asukachikaru.com',
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => {
          console.log("shared");
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      console.log("not supported");
    }
  };

  return (
    <div>
      <button onClick={handleClickShare}>SHARE</button>
    </div>  
  );
};
