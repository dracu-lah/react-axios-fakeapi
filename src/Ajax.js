import React, { Component } from "react";
import axios from "axios";

export default class Ajax extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // console.log(response);
      this.setState({ posts: response.data });
    });
  }

  render() {
    return (
      <div>
        <h3>Ajax with axios</h3>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>title</td>
            </tr>
          </thead>
          <tbody>
                {this.state.posts.map((itm, k)=>{
                  return(
                    <tr>
                      <td key={k}>{itm.id}</td>
                      <td>{itm.title}</td>
                    </tr>
                  )
                })}
          </tbody>
        </table>
      </div>
    );
  }
}
