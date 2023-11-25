import React from 'react'
import '../pages/Chat/Chat.css'
import blue_logo from '../assets/medChat_logo.png'
import voice_icon from '../assets/voice_call_icon.png'
import emergency_icon from '../assets/emergency_call_icon.png'

const ChatSideBar = () => {
  return (
    <React.Fragment>
        <aside className='chat_sidebar_container'>

             <div className='side_blue_logo_div'>
                 <img src={blue_logo} alt="med chart logo" />
            </div>


             <div className="call_btn">
        <img src={voice_icon} alt="" />
        <button>Voice Chat</button>
    </div>

     <div className="call_btn">
        <img src={emergency_icon} alt="" />
        <button>Emergency Chat</button>
    </div>
        </aside>

    </React.Fragment>
  )
}

export default ChatSideBar