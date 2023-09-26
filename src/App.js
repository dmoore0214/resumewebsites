import headshot from './HeadShot-Glasses.jpg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Danielle Moore</h1>
        <img
        src={headshot}
        alt="Head Shot"
        />
        <h3>Software Engineer</h3>
        </header>
        </div>

        <div className="middle-page">
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>HTML/CSS</li>
            <li>PYTHON</li>
            <li>JAVA</li>
            <li>JAVASCRIPT</li>
            <li>SQL</li>
            <li>GIT</li>
          </ul>
        </div>
        <div className="education">
          <h1>Education</h1>
          <div className="bachelors">
          <h3>Bachelors of Science in Computer Science</h3>
          <p>University of Maryland Global Campus<br/>January 2020 - May 2023</p>
          </div>
          <div className="associates">
          <h3>Associates of Science in Clinical Laboratory Science</h3>
          <p>The George Washington University<br/>April 2016 - April 2017</p>
          </div>
        </div>
        <div className="Projects">
          <h1>Projects</h1>
          <div className="Python">
          <h2>Python</h2>
          <div className="discord-bot">
            <h4>Discord Bot</h4>
            <ul>
              <li>Python script that uses API link to collect memes to populate 
                on a discord server when key '$meme' is triggered
              </li>
              <li><a href="https://github.com/dmoore0214/discord-bot" target="_blank">Discord Bot</a></li>
            </ul>
          </div>
          <div className='web-scraper'>
            <h4>Web Scraper</h4>
            <ul>
              <li>Uses beautifulSoup in order to intake a web url and output title and price</li>
              <li><a href="https://github.com/dmoore0214/web-scraper" target="_blank">Web Scraper</a></li>
            </ul>
          </div>
          </div>
          <div className="Java">
          <h2>Java</h2>
          <div className="benchmark-sorts">
            <h3>Benchmark Sorts</h3>
            <ul>
              <li>Script that creates a set of dat to run through algorithms in order to compare time complexity</li>
              <li>Uses pancake and selection sort</li>
              <li><a href="https://github.com/dmoore0214/Benchmark-sorts" target="_blank">Benchmark Sorts</a></li>
            </ul>
          </div>
          <div className="reservations">
            <h3>Reservations for a Small B&B</h3>
            <ul>
              <li>Designed a reservation system for a small bed and breakfast</li>
              <li>Allows reservations of four rooms with altered prices and tracks rooms reserved</li>
              <li><a href="https://github.com/dmoore0214/Reservations" target="_blank">Reservations</a></li>
            </ul>
          </div>
          <div className="state-data-entry">
            <h3>State Data Entry</h3>
            <ul>
              <li>Allows users to search a specific state and print out state name, state flower, and state bird</li>
              <li>If state is not included in list, program gives an error message</li>
              <li><a href="https://github.com/dmoore0214/State-Data-Entry">State Data Entry</a></li>
            </ul>
          </div>
          </div>
          <div className="JavaScript">
          <h2>JavaScript</h2>
          <div className="tictactoe">
            <h4>TicTacToe - React</h4>
            <ul>
              <li>Deployed React in order to run a game of TicTacToe</li>
              <li>Learned about state changes and better understanding of functions</li>
              <li><a href='https://github.com/dmoore0214/tictactoe' target="_blank">TicTacToe</a></li>
            </ul>
          </div>
          </div>
          <div className="Others">
            <h2>Other Languages</h2>
          </div>
        </div>
    </div>
    <div class="bottom page"></div>
    </>
  );
}

export default App;
