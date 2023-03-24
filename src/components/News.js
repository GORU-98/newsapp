import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
export class News extends Component {
    articles=[];
   constructor(){
    super();
    this.state = {
        articles:[],
        loading:false,
        page:1,
        pageSize:10
    }
   
   }
 async componentDidMount(){
    // let url=`https://newsapi.org/v2/${this.props.category}?q=apple&from=2022-12-28&to=2022-12-28&sortBy=popularity&apiKey=647739fe51424fc3bbf83735e1977033&page=1&pageSize=${this.props.pageSize}`
    let url=`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=647739fe51424fc3bbf83735e1977033&page=1&pageSize=${this.props.pageSize}
    `;
    let data= await fetch(url);
    let parsedData= await data.json();
   this.setState({articles : parsedData.articles,
    totalResults:parsedData.totalResults
})
console.log(this.state.totalResults)
   }
    nxt = async()=>{

   
    let url=`https://newsapi.org/v2/everything?q=apple&from=2023-03-23&to=2023-03-23&sortBy=popularity&apiKey=647739fe51424fc3bbf83735e1977033&page=${this.state.page + 1}&pageSize=${this.props.pageSize}
    `;
    this.setState({
        loading:true
    })
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles : parsedData.articles})
    this.setState({page:this.state.page + 1,
        loading:false
    })
   }
    prv =async()=>{



let url=`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=647739fe51424fc3bbf83735e1977033&page=${this.state.page -1}&pageSize=${this.props.pageSize}
`;
this.setState({
    loading:true
})
let data= await fetch(url);
let parsedData= await data.json();
this.setState({articles : parsedData.articles})
this.setState({page:this.state.page - 1,
   loading:false
})
   }
   
   render() {

       return (
           <>
         {this.state.loading &&  <Spinner/>}
    <div className="container">
    <div className='container my-5 row'>   
   { console.log(Array.isArray(this.state.articles))  }     
    { !this.state.loading && Array.isArray(this.state.articles) && (this.state.articles).map((element)=>{
        return   <div className="col-md-3" key={element.url}><Newsitem title={element.title} desc={element.description} imageUrl={element.urlToImage} url={element.url}/> </div>
    })}
    </div>
    </div>
    <div className="container d-flex justify-content-between">
    <button type="button" disabled={this.state.page<=1} onClick={this.prv} className="btn btn-warning">Previous</button>
    <button type="button" disabled={this.state.page>Math.ceil(this.state.totalResults/`${this.props.pageSize}`)} onClick={this.nxt} className="btn btn-warning">Next</button>
    </div>

         </>
    )
  }
}

export default News
