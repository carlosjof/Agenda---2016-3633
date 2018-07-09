import React, { Component } from 'react';

import Add from './add/add';
import List from './list/list';

class Principal extends Component {
	render(){
		return(
			<div className="Padre">
				<Add onAddContacts={this.handleAddList}/>
				<List/>
			</div>
		)
	}
}

export default Principal;