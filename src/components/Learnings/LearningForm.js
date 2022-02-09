import React, {useState} from "react";

import './LearningForm.css';

const LearningForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredHours, setEnteredHours] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const hoursChangeHandler = (event) =>{
        setEnteredHours(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    return(
        <form>
            <div className="new-learning__controls">
                <div className="new-learning__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}  />
                </div>
                <div className="new-learning__control">
                    <label>Hours</label>
                    <input type='number' min="0.01" step="0.01" onChange={hoursChangeHandler} />
                </div>
                <div className="new-learning__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div>
                <button type="submit">Add Learning</button>
            </div>
        </form>

    )
}

export default LearningForm;