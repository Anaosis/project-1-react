import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      users: [],
      show: 'users',
      color: '#000000'
    };
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 11);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary =  Math.floor(Math.random() * 10000);
          user.image = "https://picsum.photos/" + Math.floor(Math.random() * 1000);
        });
        this.setState({users: data});
      })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const result = data.filter(post => post.id < 16);
        this.setState({posts: result});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  handleColorChange(event){
    this.setState({color: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel - Proiectul 1</h1>
        <div className="container">
          <div className="row">
            <div className="form col">
              <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
            </div>
            <div className="changes col d-flex flex-column text-center">
              <label htmlFor="bgcolor">Daca vrei sa schimbi fundalul:</label>
              <input type="color" name="bgcolor" className="mx-auto" onChange={(event) => this.changeColor(event)}/>
              <label htmlFor="txcolor">Daca vrei sa schimbi culoarea textului:</label>
              <input type="color" className="mx-auto" name="txcolor" onChange={(event) => this.handleColorChange(event)}/>
              <input type="button" className="btn btn-info w-50 mx-auto" value="Afișează useri" onClick={() => this.setState({ show: 'users' })} />
              <input type="button" className="btn btn-info w-50 mx-auto" value="Afișează postări" onClick={() => this.setState({ show: 'posts' })} />
            </div>
          </div>
          <div class="row">
            <div class="users-posts col">
            { this.state.show === 'users'
                ? <UserList users={this.state.users}/>
                : <PostList posts={this.state.posts}/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
