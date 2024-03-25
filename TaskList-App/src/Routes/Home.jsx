import './Home.css'
const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="card">
        <img src={""} />
        
        <h2>About</h2>
        <p>
          In this app you will find the features to add/Edit/ remove task..</p>
          <div className="card1">
            {" "}
            <h3>Steps:</h3>
         
          <p> 1) you need to create a category of the task..</p>
          <p>2) select the category of the task and add task inside that category..
          </p>
        
        </div>
        <div className="footer">
          <p className="title-f">"Hiba Fatima"</p>
          <p>Certified Front-end Developer </p>
          <p> Coding in Color Graduate</p>
        </div>

        <a href="#">
          {" "}
          <i className="fab fa-dribbble"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook"></i>
        </a>

        <p>
          <button>Contact</button>
        </p>
    </div>
    </div>
  );
};

export default Home;