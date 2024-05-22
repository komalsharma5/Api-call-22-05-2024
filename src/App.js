import axios from 'axios'
import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
  
    this.state = {
       post: null
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
      console.log(res.data);
      this.setState({
        post :res.data
      })
    }).catch((err) =>{
      console.log(err);
    })
  }
  formSubmitHandler = (e) =>{
    e.preventDefault();
    const title = e.target.title.value
    const body = e.target.body.value

    axios.post('https://jsonplaceholder.typicode.com/posts',{title,body}).then((res)=>{
      console.log(res);
      
    }).catch((err) =>{
      console.log(err);
    })
  }
  dataDeletHandler = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + id).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    //console.log('post',this.state.post)
    return (
      <div>
        <form className='w-50 mx-auto' onSubmit={this.formSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" name="title" placeholder='Enter Your Title'></input>
          </div>
        <div className="mb-3">
          <label className="form-label">body</label>
          <input type="text" className="form-control" name="body" placeholder='Enter Body' ></input>
        </div>
        <div className='mb-3 w-100'>
          <input type='submit' className='btn btn-primary'></input>
        </div>
        </form>
        <h1>Get API</h1>
        {
          this.state.post !== null ? this.state.post.map((data)=>{
            return(
              <ul key={data.id}>
                  <li>Id:{data.id} </li>
                  <li>UserId:{data.userId} </li>
                  <li>Title:{data.title} </li>
                  <li>Body:{data.body}</li>
                  <li><button className='btn btn-danger' onClick={()=> this.dataDeletHandler(data.id)}>Delet</button></li>
              </ul>
            )
          }) :''
        }
      </div>
    )
  }
}

export default App
