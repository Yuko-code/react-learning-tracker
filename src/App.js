import NewLearning from './components/Learnings/NewLearning';
import Learnings from './components/Learnings/Learnings';

const App = () => {
  const learnings=[
    {
      id:'l1',
      title: 'wordpress, domain transfer, React',
      hours: 12,
      date: new Date(2022, 2, 5)
    },
    {
      id:'l1',
      title: 'React',
      hours: 12,
      date: new Date(2022, 2, 6)
    },
    {
      id:'l1',
      title: 'Algorithm, React',
      hours: 4,
      date: new Date(2022, 2, 7)
    },
    {
      id:'l1',
      title: 'HTML, CSS, Wordpress',
      hours: 4,
      date: new Date(2022, 2, 8)
    }
  ]

  return (
    <div>
      <NewLearning />
      <Learnings learnings={learnings}></Learnings>
    </div>
  );
}

export default App;
