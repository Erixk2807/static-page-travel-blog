
import './App.css';
import Header from './components/Header';
import data from './components/data';
import Post from './components/Post';

function App() {

  const postsList = data.map((info) => {
    return (
        <Post 
        info={info}
        />)
  })

  return (
    <div className="App">
      <Header />
      <section>
        {postsList}
      </section>
    </div>
  );
}

export default App;
