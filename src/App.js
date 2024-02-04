
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  function buttonLink(){
    window.location.href = 'https://www.linkedin.com/in/ariffaisal';
  };
  return (
    <div class="App">
      <div class="hero">
          <img
            id="img"
            src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1"
            alt='lolo of '
          />
      <h3 id="heading3">Software Developer</h3>
      <h1 id="heading">Arif Faisal</h1>
      <input id="button" type="button" value="LinkedIn profile" onClick={buttonLink}/>
      </div>
      <section>
          <header>
              <h1 id="bio">Biografi</h1>
              <p id="paragraf">Halo perkenalkan nama saya arif faisal. saya berumur 25 tahun. saya berasal dari jepara. saya lulusan teknik informatika. saya sekarang sedang mengikuti private mentoring dari eduwork.id</p>
              <p id="paragraf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit, velit esse quod natus corporis! Iure vero rerum impedit ratione doloribus adipisci quam repudiandae saepe, suscipit architecto assumenda maiores iste.</p>
          </header>
      </section>
      <section>
          <div class="skills">
              <h3>Skills</h3>
              <ul>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>CSS</li>
                  <li>Golang</li>
                  <li>MySQL</li>
                  <li>Bootstrap</li>
                  <li>Laravel</li>
                  <li>Dart Flutter</li>
              </ul>
              <h3>Other Skills</h3>
              <ul>
                  <li>Networking</li>
                  <li>Hardware Installation</li>
                  <li>Software Installation</li>
                  <li>Computer troubleshooting</li>
                  <li>Printer troubleshooting</li>
                  <li>Cisco</li>
                  <li>Mikrotik</li>
              </ul>
          </div>
      </section>
      <section class="friend">
          <div>
              <h1>My Close Friends</h1>
              <table>
                  <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Address</th>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Ipung</td>
                      <td>Jepara</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>Sonya</td>
                      <td>Jepara</td>
                  </tr>
              </table>
          </div>
    </section>
      
      
      <section class="contact">
          <h1>My Contact</h1>
          <div class="column">
            <form action="">
              <label for="fname">Email</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your email.."
              />
              <label for="subject">Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                
              ></textarea>
              <input type="submit" value="Send" />
            </form>
            </div>
        </section>
        <section class="footer">
            <p>Copyright &copy;2023 - All right reserved</p>
        </section>
    </div>
    
  );
}

export default App;
