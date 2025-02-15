import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
  })
    })}
  render() {
    return (
      <div>

        <h2> Posts </h2>

      </div>
    )
  }
}

export default HTTPRequests