import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt='img-post'
        src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2017%2F11%2F09%2Fspacepugweinstein.jpg'/> {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post;