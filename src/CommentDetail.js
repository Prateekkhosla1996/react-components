import React from 'react';
import Faker from'faker';
const CommentDetail=(props)=>{
    return(
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}></img>
                </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
    <span className="date">{props.timeago}</span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
        </div>
    );
}
export default CommentDetail;