import React from 'react'
import firestore from '../api/firebase' 
import {useCollectionData} from 'react-firebase-hooks/firestore'


const Home = () => {

    const testRef = firestore.collection('test')
    // const test = testRef.orderBy('name')
    const [yep, loading, error] = useCollectionData(testRef)
    return (
        <div>
            {loading && <div>loading</div>}
            {yep && yep.map(msg => {
                return <p key={msg.name}>{msg.name}</p>
            })}
        </div>
    )
}

export default Home
