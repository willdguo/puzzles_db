import { Navbar, Container, Nav } from "react-bootstrap"
import Puzzles from "./components/Puzzles"
import { Routes, Route, Navigate } from "react-router-dom"

/*
  TO DO:
  sort puzzles
  search puzzles
*/

function App() {

  // general layout: think notion layout; main page where you can filter stuff + potentially dif tabs for dif views

  /* puzzleSchema = new Puzzle({
    title: String,
    puzzle_category: String in [situation, game, probability, etc.]
    puzzle_difficulty: String in [easy, medium, hard],
    puzzle_statement: String,
    puzzle_hint: String,
    puzzle_answer: String,
    id: int,
  })
  */
  
  return (

    <div className = "container">
      <NavBar />

      <Routes>
        <Route path = "/" element = {<Navigate replace to = "/home"/>} />
        <Route path = "/home" element = {"Hello World *insert description*"}/>
        <Route path = "/puzzles" element = {<Puzzles />}/>
        {/* <Route path = "/rants" element = {<Rants />} /> */}
      </Routes>

    </div>
    
  )
}

const NavBar = () => {

  return (
    <Navbar bg = "light" data-bs-theme = "light" >
      <Container>
        <Navbar.Brand href = "/home"> willdguo </Navbar.Brand>
        <Nav>
          <Nav.Link href = "/home"> Home </Nav.Link>
          <Nav.Link href = "/puzzles"> Puzzles </Nav.Link>
          {/* <Nav.Link href = "/rants"> Rants </Nav.Link>  */}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default App;
