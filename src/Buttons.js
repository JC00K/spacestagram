import { useState } from 'react';
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
    <ul className='button-styling'>
      {like === true ? (
        <li>
          <IconButton onClick={(event) => likeHandler(event)}>
            <ThumbUpAltIcon />
          </IconButton>
        </li>
      ) : (
        <li>
          <IconButton onClick={(event) => likeHandler(event)}>
            <ThumbUpOffAltIcon />
          </IconButton>
        </li>
      )}
      {dislike === true ? (
        <li>
          <IconButton onClick={(event) => dislikeHandler(event)}>
            <ThumbDownAltIcon />
          </IconButton>
        </li>
      ) : (
        <li>
          <IconButton onClick={(event) => dislikeHandler(event)}>
            <ThumbDownOffAltIcon />
          </IconButton>
        </li>
      )}
    </ul>
  );
}
