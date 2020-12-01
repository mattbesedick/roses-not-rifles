import React, {useState} from 'react'
import firestore from '../api/firebase' 
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {Grid, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        border: "1px solid red",
        width: "100vw",
        // height: "50vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        margin: "100px 0px"


    },
    image: {
        border: "solid blue 1px",
        height: "400px",
        width: "300px"
    }
})



const Home = () => {
    const [image, setImage] = useState(null)
    const data = async() => {
        const testRef = await firestore.collection('test').get() 
        // console.log(testRef)  
        setImage(testRef.docs[0].data().image)
    }
    data();
    // const test = testRef.orderBy('name')
    const classes = useStyles()
    //listener to firebase
    // const [yep, loading, error] = useCollectionData(test)
    // console.log(testRef)
    // console.log(image)
    // return (
    //     <div>
    //         {loading && <div>loading</div>}
    //         {yep && yep.map(msg => {
    //             return <p key={msg.name}>{msg.name}</p>
    //         })}
    //     </div>
    // )
    return (
        <div className={classes.root}>
            <img className={classes.image} src={image} />
            <img className={classes.image} src={image} />
            <img className={classes.image} src={image} />
        </div>
    )
}

export default Home
