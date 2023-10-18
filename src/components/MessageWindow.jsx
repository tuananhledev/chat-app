import React from 'react'
import { useParams } from 'react-router-dom';

const MessageWindow = () => {
   const { id } = useParams();
   return (
      <div>
         Screen {id}
      </div>
   )
}

export default MessageWindow