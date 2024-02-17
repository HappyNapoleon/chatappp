import React, { useState, useEffect, useRef} from 'react';
import db from "./firebase";
import firebase from "firebase/compat/app";
import { useStateValue } from "./StateProvider";
import Avatar from '@mui/material/Avatar';

function Home() {

  const [text, setText] = useState('');
  const [messages, setMessages] = useState([])
  const [{ user }, dispatch] = useStateValue();

  const haram = useRef();


  useEffect(() => {
    db.collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the container after messages state has been updated
    haram.current.scrollIntoView({ behavior: 'smooth'});
  }, [messages]); // Run this effect whenever messages state changes

  const textType = (event) => {
    setText(event.target.value)
  }

  const buttonClick = () =>{
    setText('')
    db.collection("messages").add({
      text: text,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      avatar: user.photoURL,
      check: user.uid
    });

  }


  return (
    <div className="black-box">
        <div className="yus">

          <div className="row">

            <div className="message-scroll-css">
              {messages.map((message) => (
                <div>
                  {user.uid === message.data.check ?
                    
                    <div className="my-side">
                      <p className="text-message">{message.data.text}</p>
                    </div>

                  :

                  <div className="message-container">
                    <Avatar src={message.data.avatar} style={{width: '30px', height: '30px'}}/>
                    <div className="other-side">
                      <p className="text-message">{message.data.text}</p>
                    </div>
                  </div>

                  }

                </div>

              ))}

              <div ref={haram}></div>
            </div>

          </div>

          <form onSubmit={buttonClick}>
            <input placeholder='Say something nice' className="InputCss" value={text} onChange={textType}/>
            <button type="submit" className="submit-button" disabled={!text} onClick={buttonClick}>🕊️</button>
          </form>  

        </div>
    </div>
  )
}

export default Home