import './App.css';
import image from "./imgSrc.jpg";

function App() {
  return (
    <div className="App">
      
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

 <  h1 className="title red">Eat your food</h1>

 
    <div className="image">
    <img className="picPub" src="/imgPublic.jpg" />

<img className="picSrc" src={image}/>
    </div>
 

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
