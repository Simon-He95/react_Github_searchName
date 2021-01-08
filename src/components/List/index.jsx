import React,{Component} from 'react'
import './index.css'

export default class List extends Component{
    render(){
        const {data:{items}} = this.props
        let isShow = items && items.length >0 ? 'flex' :'none'
        let first = this.props.first?'block':'none'
        let isLoading = this.props.isLoading ? 'block':'none'
        let isError = this.props.errMsg ? 'block':'none'
        return (
            <div>
                <div className="row" style={{display:isShow}}>
                    {items?items.map((item,index)=>{
                        return (
                            <div className="card" key={item.id}>
                                <a href={item.html_url} rel="noreferrer" target="_blank">
                                    <img src={item.avatar_url} alt="head_portrait" style={{width:'100px',marginTop:'10px'}} />
                                </a>
                                <p className="card-name">{item.login}</p>
                            </div>
                        )
                    }):''}
                </div>
                <div className="start" style={{display:first}}><h2>Enter name to search</h2></div>
                <div className="start" style={{display:isLoading}}>
                    <h1>Loading....</h1>
                </div>
                <div className="start" style={{display:!isError}}>
                    <h1>{this.props.errMsg}</h1>
                </div>
            </div>
        )
    }
}