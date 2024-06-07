import {Component} from 'react'

import CommentItem from '../CommentItem'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', commentCount: 0}

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextAreaInput = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  onClickDeleteBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      commentCount: prevState.commentCount - 1,
    }))
  }

  toogleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment =>
        eachComment.id === id
          ? {...eachComment, isLiked: !eachComment.isLiked}
          : comment,
      ),
    }))
  }
  render() {
    const {commentsList, name, comment, commentCount} = this.state
    return (
      <div className="bg-container">
        <div className="header-container">
          <div className="initial-conatiner">
            <h1 className="main-heading-comments">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                placeholder="Your Name"
                className="input-name"
                onChange={this.onChangeNameInput}
                value={name}
              />
              <br />

              <textarea
                placeholder="Your Comment"
                cols="35"
                rows="8"
                className="textarea-comment"
                value={comment}
                onChange={this.onChangeTextAreaInput}
              />

              <br />

              <button className="btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comments-img"
          />
        </div>

        <hr className="seperator" />

        <div className="comments-container">
          <p className="comments">
            <span className="span">{commentCount}</span> Comments
          </p>
          <ul className="comments-list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                onClickDeleteBtn={this.onClickDeleteBtn}
                toogleLike={this.toogleLike}
                backgroundColor = {initialContainerBackgroundClassNames[commentCount-1]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
