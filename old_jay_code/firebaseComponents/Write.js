import firebase from './firebase'
//import 'firebase/firestore'

const WriteUserData = () => { 
    const sendData = () => {
        try {
            firebase 
                .firestore() 
                .collection('users_collection')
                .doc('single_entry?') 
                .set ({
                    userEmail: 'j_moran@coloradocollege.edu',
                    password: 'ilovejavascript'
                }) 
                .then(alert('Data sent properly'))
        } 
        catch (error) {
            console.log(error) 
            alert(error)
        }

        

    }

    return (
        <button onClick={sendData}>Send to Firestore</button>
    )



}