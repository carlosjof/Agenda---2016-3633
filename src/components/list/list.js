import React, { Component } from 'react';

import { contacts } from './contacts.json';

class List extends Component {
	constructor(){
		super();
		this.state = {
			contacts
		};	
		this.handleAddList = this.handleAddList.bind(this);
	}

	handleAddList(contacts){
		this.setState({
			contacts: [...this.state.contacts, contacts]
		})
	}

	render(){
		const contacts = this.state.contacts.map((contacts, i) => {
			return (
					<ul className=""  key={i}>
						<li className="lista">
						{contacts.nombre} {contacts.apellido}
						<p>{contacts.telefono}</p>
						</li>
					</ul>
			)
		})
		return(
		<div className="Card">
			{ contacts }
			</div >
		)
	}
}

export default List;