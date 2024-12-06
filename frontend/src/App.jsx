import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/ui/Navbar"


function App() {

  return(
    <Box minH={"100vh"}>
        {/* Navbar */}
        <Navbar></Navbar>
        <Routes>
          
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/create" element={<CreatePage></CreatePage>} ></Route>
        </Routes>

    </Box>
  )

}

export default App;