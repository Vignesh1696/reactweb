import React , { Component } from 'react'
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';
import { Button } from 'reactstrap';

const color1 = {
  color: '#09d3ac',
  'font-size': 'calc(10px + 2vmin)',
   'background-color': '#282c34',
   'text-align': 'center'

}

const css ={
	color:'#09d3ac',
	'font-size': 'calc(10px + 2vmin)',
	 'background-color': '#282c34',
      'justify-content': 'center'

}

class Form extends Component {
     constructor(){
     	super()
     	this.state = {
     		name: ' ',
     		age: ' ',
     		gender: 'male'
     	}
     }

     nameChange = (e) =>{
     	this.setState({
     		name:e.target.value
     	})
     }

     ageChange = (e) =>{
     	this.setState({
     		age:e.target.value
     	})
     }

     genChange = (e) =>{
     	this.setState({
     		gender:e.target.value
     	})
     }

     form = (e) =>{
     	
      alert("hiii")

      
     }

	render(){
		return(
			<form onSubmit={this.form}>
			<div>
			<label style = {color1}>Name</label>
			<input type='text' value = {this.state.name} onChange = {this.nameChange}/>
		     </div>
		     <div>
			<label style = {css}>age</label>
			<input type='text' value = {this.state.age} onChange = {this.ageChange}/>
		     </div>
		     <div>
		     <label style = {css}>
		     Gender
		     </label>
		     <select value = {this.state.gender} onChange = {this.genChange}>
		     <option type = 'male'>Male</option>
		     <option type = 'female'>Female</option>
		     </select>
		     </div>
		     <div>
		    <Button outline color="primary">primary</Button>
			</div>
			</form>

			)

	}
}


export default Form;