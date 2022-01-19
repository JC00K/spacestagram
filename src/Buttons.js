import React, { useState } from 'react';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import IconButton from '@mui/material/IconButton';

export default function Buttons() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const likeHandler = () => {
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
      setDislike(false);
    }
  };
  const dislikeHandler = () => {
    if (dislike === true) {
      setDislike(false);
    } else {
      setDislike(true);
      setLike(false);
    }
  };

  return (
    <React.Fragment>
      {like === true ? (
        <IconButton onClick={(event) => likeHandler(event)}>
          <ThumbUpAltIcon style={{ fontSize: 60 }} />
        </IconButton>
      ) : (
        <IconButton onClick={(event) => likeHandler(event)}>
          <ThumbUpOffAltIcon style={{ fontSize: 60 }} />
        </IconButton>
      )}
      {dislike === true ? (
        <IconButton onClick={(event) => dislikeHandler(event)}>
          <ThumbDownAltIcon style={{ fontSize: 60 }} />
        </IconButton>
      ) : (
        <IconButton onClick={(event) => dislikeHandler(event)}>
          <ThumbDownOffAltIcon style={{ fontSize: 60 }} />
        </IconButton>
      )}
    </React.Fragment>
  );
}
