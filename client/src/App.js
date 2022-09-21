import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Everything from "./components/Everything"

const App = () => {

  const [allMemories, setAllMemories] = useState('')

  const getMemories = async()=>{
    const userAPI = "https://memories-socialmedia-group.herokuapp.com/memories";
    let res = await axios.get(userAPI);
    setAllMemories(res.data)
  }
  useEffect(()=> {
    getMemories()
  },[])

  return (
    <div>
      <Header />
      {allMemories !== '' && <Everything/>}
      <Footer />
    </div>
  );
};

export default App;
