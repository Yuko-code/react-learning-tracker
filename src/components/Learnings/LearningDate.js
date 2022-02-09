import './LearningDate.css';

const LearningDate = (props) => {
    const month=props.date.toLocaleString('en-US', {month:'long'});
    const day=props.date.toLocaleString('en-US',{day: '2-digit'});
    const year=props.date.getFullYear();

    return(
        <div className='learning-date'>
            <div className='learning-date__month'>{month}</div>
            <div className='learning-date__day'>{day}</div>
            <div className='learning-date__year'>{year}</div>
        </div>
    )

}

export default LearningDate;