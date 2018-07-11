import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

class Turkey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: []
    };
  }
 
  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=cc474d575828432c8c562bd5dc35d3f8')
    .then((res)=> {
    console.log(res.data)
    //serults
    this.setState
    (
    	{author: res.data.articles}
    )
    }).catch(err => console.log(err))
}

    formatDate(date) {
      var time = new Date(date);
      var year = time.getFullYear();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var month = time.getMonth() + 1;
      var composedTime =
        day +
        '/' +
        month +
        '/' +
        year +
        ' | ' +
        hour +
        ':' +
        (minute < 10 ? '0' + minute : minute);
      return composedTime;
    }

     render() {
    return (
      <div className="App">
      
      {
        this.state.author.map((news, index) => {
          return (
            <div  align="center" key={index}>
              {
                /*                
                  <h3><Link to={`/news/${index}`}> {data.title} </Link></h3> 
                  <h5>{data.description}</h5>
                */
              }
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>

            </div>
          )
        })
      }
      
     </div>
    );
  }
}

export default Turkey;