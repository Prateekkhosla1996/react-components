import React from 'react';
import ReactDOM from 'react-dom';
import Faker from'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App=()=>{
    return (
        <div className=" ui container comments">
            <ApprovalCard>
                <CommentDetail author="max" text="nice!!!!" timeago="Today at 7:00pm" avatar={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="sunny" text="nice post!!!!" timeago="Today at 6:00pm" avatar={Faker.image.avatar()}/>

            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App/>,document.querySelector('#root'));