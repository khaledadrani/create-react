import NoteCard from "../NoteCard/NoteCard";
import Tool from "../Tool/Tool";
import "./Home.css";
import search from "../../assets/search.svg";
import sort from "../../assets/sort.svg";
import trash from "../../assets/trash.svg";
import select from "../../assets/check-square.svg";
import paragraph from "../../assets/paragraph.svg";



const Home = (props)=>{
    const database = props.database;

    const theme = "black";

    return (
        <div id="home-container">
            <div id="sticky-top">
                <p id="tool-bar">"Welcome back some name!"</p>
                <div id="tool-bar">
                <Tool icon={search} name={"Search"} onClick={() => {}} />
                <Tool icon={select} name={"Select"} onClick={() => {}} />
                <Tool icon={sort} name={"Sort"} onClick={() => {}} />
                <Tool icon={trash} name={"Delete"} onClick={() => {}} />
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