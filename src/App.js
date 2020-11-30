import logo from './logo.svg';
import './App.css';
import firestore from './api/firebase' 
import {useCollectionData} from 'react-firebase-hooks/firestore'


function App() {
  
  const testRef = firestore.collection('test')
  // const test = testRef.orderBy('name')
  const [yep, loading, error] = useCollectionData(testRef)
  console.log(yep)
  return (
    <div className="App">
      {loading && <div>loading</div>}
      {yep && yep.map(msg => {
        return <p>{msg.name}</p>
      })}
    </div>
  );
}

export default App;
