import React,{Component} from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component{
  state={
    data:[],
    isLoading:false,
    isError: '',
    first:true,
  }
  getData=(data)=>{
    this.setState({data})    
  }
  changeLoading=(status, err)=>{
    console.log(status)
    this.setState({isLoading:status,first:false,isError:''})
    if(err){
      this.setState({isError:err.message})
    }
  }
  render(){
    return (
      <div className="container">
        <Search getData={this.getData} changeLoading={this.changeLoading} />
        <List data={this.state.data} isLoading={this.state.isLoading} errMsg={this.state.isError} first={this.state.first}/>
      </div>
    )
  }
}