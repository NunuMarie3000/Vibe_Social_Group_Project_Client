import React, {Component} from 'react'
import {Card} from "react-bootstrap"
import axios from "axios"

export default class MemoryCRUD extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         users: []
      }
    }
    
      componentDidMount() {
        this.getUser();
      }
    
      getUser = async () => {
        const userAPI = "https://memories-socialmedia-group.herokuapp.com/users";
        await axios.get(userAPI).then(res => this.setState({setUsers: res.data}));
        console.log('welcome to the machine')
      };

      
      memoryCreate = async (id) => {
        const URL = `https://memories-socialmedia-group.herokuapp.com/newmemory/${id}`;
    
        const response = await axios.post(URL, id);
    
        const newMemory = response.data;
        this.setState({ users: [...this.state.users, newMemory] }, () =>
          this.users()
        );
      };

   memoryUpdate = async (event) => {
    
   }


      memoryDelete = async (itemDelete) => {
        const url = `https://memories-socialmedia-group.herokuapp.com/memory/${itemDelete}`; // finds the ObjectID for us :0
        console.log(itemDelete);
        try {
          const response = await axios.delete(url);
          console.log(response.data);
          const filteredOut = this.state.users.filter(
            (obj) => obj._id !== itemDelete
          );
          this.setState({ users: filteredOut }); // auto rerender
        } catch (error) {
          console.log(error);
        }
      };
render(){
  return (
    <>

        {this.state.users.map(obj => (
        <Card key = {obj._id}>        
          <Card.Header>{obj.email}</Card.Header>
        </Card>
    
        ))}
    </>
  )
        }
}


