// /* Import Google Fonts */
// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

// /* Reset and Base Styles */
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   list-style: none;
//   text-decoration: none;
// }

// body {
//   font-family: "Montserrat", sans-serif;
//   scroll-behavior: smooth;
// }

// nav {
//   background: #0082e6;
//   height: 80px;
//   width: 100%;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// }

// label.logo {
//   color: white;
//   font-size: 25px;
//   line-height: 80px;
//   padding: 0 100px;
//   font-weight: bold;
// }

// .checkbtn {
//   font-size: 30px;
//   color: white;
//   float: right;
//   line-height: 80px;
//   margin-right: 30px;
//   cursor: pointer;
//   display: none;
// }

// #check {
//   display: none;
// }

// ul {
//   float: right;
//   margin-right: 20px;
//   display: flex;
// }

// ul li {
//   display: inline-block;
//   margin: 0 5px;
//   line-height: 80px;
// }

// ul li a {
//   color: white;
//   font-size: 16px;
//   padding: 5px 10px;
//   border-radius: 3px;
//   text-transform: uppercase;
// }

// ul li a.active,
// ul li a:hover {
//   background: #1b9bff;
//   color: #fff;
//   transition: 0.5s;
// }

// /* Responsive Styles */
// @media (max-width: 890px) {
//   .checkbtn {
//     display: block;
//   }

//   label.logo {
//     padding: 0 30px;
//     font-size: 20px;
//   }

//   ul {
//     position: fixed;
//     width: 100%;
//     height: 100vh;
//     background: #2c3e50;
//     top: 80px;
//     left: -100%;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     transition: all 0.5s;
//   }

//   ul.open {
//     left: 0;
//   }

//   ul li {
//     margin: 30px 0;
//     line-height: 30px;
//   }

//   ul li a {
//     font-size: 20px;
//   }

//   ul li a.active,
//   ul li a:hover {
//     background: none;
//     color: #1b9bff;
//   }
// }

// /* Sections */
// .section {
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 30px;
//   color: white;
//   text-transform: uppercase;
// }

// .home {
//   background: #34495e;
// }

// .about {
//   background: #2ecc71;
// }

// .services {
//   background: #e67e22;
// }

// .contact {
//   background: #9b59b6;
// }

// .feedback {
//   background: #3498db;
// }


// import { useState, useEffect } from "react";
// import "./styles.css";

// const App = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       let current = "";

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         // Check if the scroll position is within the section's range
//         if (window.scrollY >= sectionTop - sectionHeight / 2) {
//           current = section.id;
//         }
//       });

//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* Navigation */}
//       <nav>
//         <label className="logo">Logo</label>
//         <input
//           type="checkbox"
//           id="check"
//           checked={menuOpen}
//           onChange={() => setMenuOpen(!menuOpen)}
//         />
//         <label htmlFor="check" className="checkbtn">
//           &#9776;
//         </label>
//         <ul className={menuOpen ? "open" : ""}>
//           <li>
//             <a
//               href="#home"
//               className={activeSection === "home" ? "active" : ""}
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className={activeSection === "about" ? "active" : ""}
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#services"
//               className={activeSection === "services" ? "active" : ""}
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className={activeSection === "contact" ? "active" : ""}
//             >
//               Contact
//             </a>
//           </li>
//           <li>
//             <a
//               href="#feedback"
//               className={activeSection === "feedback" ? "active" : ""}
//             >
//               Feedback
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Sections */}
//       <section id="home" className="section home">
//         Home Section
//       </section>
//       <section id="about" className="section about">
//         About Section
//       </section>
//       <section id="services" className="section services">
//         Services Section
//       </section>
//       <section id="contact" className="section contact">
//         Contact Section
//       </section>
//       <section id="feedback" className="section feedback">
//         Feedback Section
//       </section>
//     </div>
//   );
// };

// export default App;
