import LearningItem from './LearningItem';
import Card from '../UI/Card';
import './Learnings.css';

const Learnings = (props) => {


    return(
        <Card className='learnings'>
        <h2>Learning Tracker</h2>
        <LearningItem title={props.learnings[0].title} hours={props.learnings[0].hours} date={props.learnings[0].date}></LearningItem>
        <LearningItem title={props.learnings[1].title} hours={props.learnings[1].hours} date={props.learnings[1].date}></LearningItem>
        <LearningItem title={props.learnings[2].title} hours={props.learnings[2].hours} date={props.learnings[2].date}></LearningItem>
        <LearningItem title={props.learnings[3].title} hours={props.learnings[3].hours} date={props.learnings[3].date}></LearningItem>
      </Card>
    )
}

export default Learnings;