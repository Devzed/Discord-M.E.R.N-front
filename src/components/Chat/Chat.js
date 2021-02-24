import React, { useEffect, useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import './Chat.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../Message/Message';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import db from '../../firebase';
import firebase from 'firebase';

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db
                .collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
                ))
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault();
        db
            .collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                message: input,
                user: user,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        setInput('');
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {
                    messages.map(message => (
                        <Message 
                            timestamp={message.timestamp}
                            user={message.user}
                            message={message.message}
                        />
                    ))
                }
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize='large' />

                <form>
                    <input
                        placeholder={`Message #${channelName}`}
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}
                    />
                    <button 
                        className='chat__inputButton' 
                        type='submit'
                        onClick={sendMessage}
                    >Send message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize='large' />
                    <GifIcon fontSize='large' />
                    <EmojiEmotionsIcon fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Chat;
