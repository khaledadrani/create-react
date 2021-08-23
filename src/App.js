import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'


// const database = {notes:[{uid:0,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",title:"Note1"},
//                   {uid:2,content:"second",title:"Note1"},
//                   {uid:1,content:"third",title:"Note1"},
//                   {uid:1,content:"third",title:"Note1"},
//                   {uid:1,content:"third",title:"Note1"}]}

function App() {
  return (
    <div className="App">
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
 
          
    </div>
  );
}



export default App;
