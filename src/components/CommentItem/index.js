import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onClickDeleteBtn, toogleLike, backgroundColor} = props
  const {id, name, comment, isLiked} = commentDetails

  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLikeBtn = () => {
    console.log('like trigered')
    toogleLike(id)
  }

  const onDeleteComment = () => {
    onClickDeleteBtn(id)
  }

  console.log(backgroundColor)

  return (
    <li className="li">
      <div className="name-container">
        <span className={`initial-letter`}>{name[0]}</span>
        <h1 className="name">{name}</h1>
        <p className="format-distance">{formatDistanceToNow(new Date())} ago</p>
      </div>
      <p className="comment-description">{comment}</p>
      <div className="like-and-delete-container">
        <button
          className={`like-btn ${isLiked ? 'like-text' : ''}`}
          onClick={onClickLikeBtn}
        >
          <img src={imageUrl} className="like-img" alt="like"/>
          Like
        </button>

        <button className="like-btn" onClick={onDeleteComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
      <hr className="seperator" />
    </li>
  )
}

export default CommentItem
