import React, {useState} from 'react';

import LearningDate from './LearningDate';
import Card from '../UI/Card';
import './LearningItem.css'


const LearningItem = (props) =>{
    const [title, setTitle]=useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return(
        <Card className="learning-item">
            <LearningDate date={props.date}></LearningDate>

            <div className="learning-item__description">
                <h2>{title}</h2>
            </div>
            <div className="learning-item__price">{props.hours}hrs</div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default LearningItem;