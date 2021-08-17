import { useState } from "react";

const NoteCard = (props) => {
     const uid = props.note.uid;
     const title = props.note.title;
     const content = props.note.content;
     const color = props.note.color//props.note.color ? Theme[props.note.color] : Theme[0];
     const [confirm, setConfirm] = useState(false);

     const style = `
     #container-${uid}{
          display: flex;
          flex-direction:column;
          padding-top:5px;
          padding-bottom:5px;
          margin-bottom:30px;
          margin-left:10px;
          margin-right:10px;
          height:275px;
          width:250px;
          background-image: linear-gradient(to right, ${color}, ${color});
          background-color: blue;
          border-radius: 10px;
          padding:15px;
          float: left;
          justify-content:start;
          transition-duration: 0.15s;
          overflow: hidden;
          transition-duration:0.2s;
          cursor:pointer;
     }`




     return (
         <div id={`container-${uid}`}>
             <style>{style}</style>
             <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                 <div id={`note-preview-${uid}`}>
                     <h3 id={`note-title-${uid}`}>{title}</h3>
                     <p id={`note-content-${uid}`}>{content}</p>
                 </div>
             </div>
         </div>
     )


}

export default NoteCard