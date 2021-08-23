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
          height:200px;
          width:200px;
          background-color: blue;
          border-radius: 10px;
          padding:15px;
          float: left;
          justify-content:start;
          overflow: hidden;
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