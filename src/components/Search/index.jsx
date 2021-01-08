import React,{Component} from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
    searchHandler= () =>{
        let {keyWordsElement:{value}} = this
        this.props.changeLoading(true)
        axios.get('https://api.github.com/search/users?q='+value).then(res=>{
            this.props.getData(res.data)
            this.keyWordsElement.value=''
            this.props.changeLoading(false)
        }).catch(err=>{
            console.log(err)
            this.props.changeLoading(false,err)
        })
    }
    render() {
        return (
            <div className="searchBar">
                <h3>Search Github Users</h3>
                <div>
                    <input type="text" ref={(c)=>this.keyWordsElement=c} placeholder="enter the name you search" /> &nbsp; <button onClick={this.searchHandler}>Search</button>
                </div>
            </div>
        )
    }
}