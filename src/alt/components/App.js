/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 02:39:04
*/
import React from 'react';
import _ from 'lodash';
import Checkbox from './Checkbox';

class App extends React.Component {
	render() {
		return (
			<div>
				<ul style = {{background: 'gray'}}>
					<Checkbox label = {this.props.header} checked = {_.every(this.props.items, itemChecked => itemChecked)} change = {this.props.changeItems}/>
				</ul>
				<ul>
					{_.map(this.props.items, (checked, label) => 
						<Checkbox key = {label} label = {label} checked = {checked} change = {this.props.changeItem}/>
					)}
				</ul>
			</div>
		);
	}
}

App.propTypes = {
	header: React.PropTypes.string,
	items: React.PropTypes.object,
	changeItem: React.PropTypes.func,
	changeItems: React.PropTypes.func
};

export default App;
