import React, { Component } from 'react';

class Add extends Component {
	constructor(){
		super();
		this.state = {
			nombre: '',
			apellido: '',
			telefono: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleInput.bind(this);
	}

	handleInput(e){
		const { value, name} = e.target;
		this.setState({
			[name]: value
		});
		console.log(this.state);
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.onAddContacts(this.state);
	}

	render(){
		return(
			<div className="form-row">
			<form className="form-group col-md-3" onSubmit={this.handleSubmit}>
				<label className="label mt-2">Nombre</label>
				<input type="text" name="nombre" className="form-control m-2" placeholder="Ingrese Nombre" onChange={this.handleInput}/>

				<label className="label">Apellido</label>
				<input type="text" name="apellido" className="form-control m-2" placeholder="Ingrese Apellido" onChange={this.handleInput}/>

				<label className="label">Telefono</label>
				<input type="text" name="telefono" className="form-control m-2" placeholder="Ingrese Telefono" onChange={this.handleInput}/>

				<input type="submit" className="btn btn-success m-2" value="Aceptar"/>
			</form>
			</div>
		)
	}
} 

export default Add;