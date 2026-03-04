import {createRoot} from "react-dom/client";
import {createElement} from "react";
const Newroot = createRoot(document.getElementById("root"));

Newroot.render(
  <Page />
)
function Header(){
  return(
  <header className="header">
      <img src = "src\assets\rynody logo.png"  alt = "mylogo" className="imagestyle" />
      <nav >
        <ul className="nav-list" >
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
  </header>
  )
}
function Maincomponent()
{
  return(
            <main>
        <h1>
            Fun Facts about React
        </h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>

        </main>
  )
}
function Myfooter(){
  return(
        <footer className="footing">
         <small> ©2026 Dtee Development. All Rights reserved. </small>
        </footer>
  )
}
function Page(){
  return(
    <>
      <Header />
      <Maincomponent />
      <Myfooter />
    </>
  )
}

export default App;