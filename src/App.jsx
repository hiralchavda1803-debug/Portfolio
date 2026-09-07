import "./App.css";
import img1 from "./assets/home.png";
import img2 from "./assets/about.png";
import img3 from "./assets/certificate1.png";
import img4 from "./assets/certificate2.png";
import img5 from "./assets/project1.png";
import img6 from "./assets/project2.png";
import img7 from "./assets/project3.png";
import img8 from "./assets/project4.png";
import img9 from "./assets/project5.png";
import img10 from "./assets/project6.png";
import img11 from "./assets/contact.png";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black border-bottom border-secondary shadow-lg fixed-top w-100">
        <div className="container-fluid px-4">

          <a className="navbar-brand text-white fs-3 fw-semibold" href="#">CodeCraft</a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto gap-lg-4 text-center">
              <li className="nav-item"><a href="#home" className="nav-link text-white">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link text-white">About</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link text-white">Skills</a></li>
              <li className="nav-item"><a href="#certificates" className="nav-link text-white">Certificates</a></li>
              <li className="nav-item"><a href="#project" className="nav-link text-white">Project</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link text-white">Contact</a></li>
            </ul>


            <div className="text-center">
              <button className="btn btn-primary btn-lg px-4">Hire Me ↗</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="bg-black text-white min-vh-100 d-flex align-items-center">
        <div className="container-fluid px-3 px-lg-5 py-5">

          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <button className="web-btn px-3 py-3 m-0 rounded-3 fw-bold border-0 mt-5">I'M A WEB DEVELOPER</button>
              <h3 className="display-2 fw-bold mt-3">Hi, I'm <span className="text-primary">Hiral</span></h3>
              <h3 className="display-5 fw-bold mt-3">I build things for the web.</h3>
              <p className="lead text-secondary mt-4">I'm a passionate web developer specializing in building exceptional digital experiences with modern technologies.</p>

              <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start flex-nowrap">
                <button className="btn btn-primary btn-lg px-4">View My Work ↗</button>
                <button className="btn btn-outline-light btn-lg px-4">Download CV ↓</button>
              </div>

              <div className="mt-5">
                <p className="fw-bold text-secondary">TECHNOLOGIES I WORK WITH</p>
                <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start">
                  <button className="btn skill-btn html-btn">HTML</button>
                  <button className="btn skill-btn css-btn">CSS</button>
                  <button className="btn skill-btn js-btn">JS</button>
                  <button className="btn skill-btn ts-btn">TS</button>
                  <button className="btn skill-btn react-btn">React</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
              <div className="d-flex justify-content-center align-items-center">
                <img src={img1} className="img-fluid rounded-circle w-75" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
              <img src={img2} alt="" className="img-fluid" style={{ maxHeight: "450px" }} />
            </div>

            <div className="col-12 col-lg-7 text-center text-lg-start">
              <button className="btn btn-primary px-5 py-3 fw-bold fs-5 mb-4">ABOUT ME</button>
              <h3 className="display-5 fw-bold mb-4">I’m passionate about<br className="d-none d-md-block" />creating digital solutions</h3>
              <p className="text-secondary fs-5">
                I am Hiral Chavda, a passionate and enthusiastic BCA student
                with a strong interest in web development. I enjoy creating
                modern, responsive, and user-friendly websites using HTML, CSS,
                JavaScript, React, and Bootstrap. I am continuously learning
                new technologies and improving my coding skills through
                practical projects.
              </p>
              <button className="btn btn-outline-light fs-5 px-3 py-2 mt-3">Learn More About Me 👩</button>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="bg-black text-white py-5 vh-100 d-flex  justify-content-center align-items-center">
        <div className="container">

          <div className="text-center">
            <p className="text-primary fw-semibold fs-4">MY SKILLS</p>
            <h1 className="fw-bold mt-3">Technologies I Master</h1>
            <hr className="border-primary border-2 opacity-100 w-25 mx-auto" />
          </div>

          <div className="d-flex justify-content-center tech gap-5">

            {/* LEFT SIDE */}
            <div className="col-lg-4">
              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">
                <div className="d-flex align-items-center text-white mb-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" width="35" height="35" className="me-3" />
                  <span className="fw-semibold">HTML</span>
                  <span className="ms-auto text-primary fw-bold">95%</span>
                </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">
                <div className="d-flex align-items-center text-white mb-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" width="35" height="35" className="me-3" />
                  <span className="fw-semibold">CSS</span>
                  <span className="ms-auto text-primary fw-bold">90%</span>
                </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">                <div className="d-flex align-items-center text-white mb-3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" width="35" height="35" className="me-3" />
                <span className="fw-semibold">JavaScript</span>
                <span className="ms-auto text-primary fw-bold">90%</span>
              </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>


            {/* RIGHT SIDE */}
            <div className="col-lg-4">
              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">
                <div className="d-flex align-items-center text-white mb-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="" width="35" height="35" className="me-3" />
                  <span className="fw-semibold">Tailwind CSS</span>
                  <span className="ms-auto text-primary fw-bold">80%</span>
                </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">
                <div className="d-flex align-items-center text-white mb-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" width="35" height="35" className="me-3" />
                  <span className="fw-semibold">Git</span>
                  <span className="ms-auto text-primary fw-bold">85%</span>
                </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="mb-4 p-3 bg-dark rounded-4 border border-secondary shadow skill-card">
                <div className="d-flex align-items-center text-white mb-3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" width="35" height="35" className="me-3" />
                  <span className="fw-semibold">React.js</span>
                  <span className="ms-auto text-primary fw-bold">80%</span>
                </div>
                <div className="progress bg-secondary" style={{ height: "7px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      <section id="certificates" className="bg-dark text-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary fs-3 fw-normal mb-4">My Certificates</h2>
            <p className="text-white fs-5">Certificates that showcase my learning and technical skills.</p>
            <div className="bg-primary mx-auto" style={{ width: "350px", height: "2px" }}></div>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 certificate-card">
                <img src={img3} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold certificate-title">Full Stack Development with MERN</h3>
                  <p className="text-secondary fs-5">thingQbator & NASSCOM Foundation</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">MERN Stack</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 certificate-card">
                <img src={img4} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold certificate-title">Foundations of IT Infrastructure</h3>
                  <p className="text-secondary fs-5">Simplilearn SkillUp</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">IT Infrastructure</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="project" className="bg-black text-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-primary fs-3 fw-normal mb-4">My Projects</h2>
            <p className="text-white fs-5">A showcase of my recent work and projects.</p>
            <div className="bg-primary mx-auto" style={{ width: "250px", height: "2px" }}></div>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img5} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">FoodMood – Food Ordering Website</h3>
                  <p className="text-secondary fs-5">A modern food ordering website with an interactive menu and smooth user experience.</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, JavaScript</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img6} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">Coffee Shop Website</h3>
                  <p className="text-secondary fs-5">A stylish coffee shop website designed to showcase coffee, menu items, and café services.</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, Bootstrap</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row g-4 align-items-stretch mt-4">
            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img7} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">Architecture Website</h3>
                  <p className="text-secondary fs-5">A modern architecture website showcasing creative designs, projects, and innovative spaces.</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, JavaScript</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img8} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">Product CRUD Application</h3>
                  <p className="text-secondary fs-5">A responsive product management website designed to add, edit, delete and search products.</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, JavaScript</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row g-4 align-items-stretch mt-4">
            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img9} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">Car Collection Website</h3>
                  <p className="text-secondary fs-5">A responsive car collection website showcasing different cars,their details, and prices</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, React</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card bg-dark text-white border border-secondary rounded-4 overflow-hidden shadow-lg w-100 project-card">
                <img src={img10} className="card-img-top" alt="" />
                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold project-title">WeatherInfo Website</h3>
                  <p className="text-secondary fs-5">  A responsive weather website that displays weather information for different cities.</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="badge bg-primary fs-6 px-3 py-2">HTML, CSS, JavaScript</span>
                    <span className="text-secondary fs-5">2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="text-primary fs-2 fw-normal mb-4">Contact Me</h2>
            <p className="text-white fs-5">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="bg-primary mx-auto" style={{ width: "300px", height: "3px" }}></div>
          </div>


          <div className="row align-items-center justify-content-center g-5">

            <div className="col-lg-5 col-md-6 text-center">
              <img src={img11} alt="" className="img-fluid rounded-4 shadow" style={{ maxHeight: "500px", objectFit: "cover" }} />
            </div>

            <div className="col-lg-5 col-md-6">
              <form>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg px-4"> Send Message ↗</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}



export default App;