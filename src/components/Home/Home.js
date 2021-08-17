import NoteCard from "../NoteCard/NoteCard";
import "./Home.css";


const Home = (props)=>{
    const database = props.database;

    const theme = "blue";

    return (
        <div id="home-container">
            <div id="sticky-top">
                <p id="tool-bar">"Welcome back some name!"</p>
                <div id="tool-bar">
                    list of tools
                </div>
            </div>

            <div id="notes-list">
                {database.notes.map((e) => {
                    return (<NoteCard note={e}/>)
                })}
            </div>
        </div>
    )

}

export default Home;