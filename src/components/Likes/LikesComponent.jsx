import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Likes.css';
import { likeDeterminer, styleDeterminer } from '../../services/styleSelector';


const LikesDislikes = ({ handleClick, article, isAuthenticated }) => {
  const { like_info } = article;
  const { like, dislike, likeCount, dislikeCount } = like_info;
  return (
    <div className={`like ${likeDeterminer(like,dislike,isAuthenticated).underline}`}>
      <div>
        <i
          id="like"
          className="fas fa-thumbs-up fa-1x like-icon left-icon"
          style={{color:`${styleDeterminer(like,isAuthenticated).color}`}}
          aria-hidden="true"
          article={article}
          onClick={() => handleClick(article.slug, 'like')}
        />
      </div>
      <div className={`likes-count ${styleDeterminer(like,isAuthenticated).render}`}>
        {likeCount}
      </div>
      <div>
        <i
          id="dislike"
          className="fas fa-thumbs-up fa-rotate-180 fa-1x like-icon right-icon"
          aria-hidden="true"
          style={{color:`${styleDeterminer(dislike,isAuthenticated).color}`}}
          onClick={() => handleClick(article.slug, 'dislike')}
        />
      </div>
      <div className={`likes-count ${styleDeterminer(dislike,isAuthenticated).render}`}>
        {dislikeCount}
      </div>
    </div>
  );
};

LikesDislikes.propTypes = {
  handleClick: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default LikesDislikes;
