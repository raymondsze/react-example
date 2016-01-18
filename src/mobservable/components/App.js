/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 04:09:31
*/
import React from 'react';
import _ from 'lodash';
import Checkbox from './Checkbox';
import {observer} from 'mobservable-react';

@observer
class App extends React.Component {
	render() {
		const {header, items} = this.props;
		return (
			<div>
				<ul style = {{background: 'gray'}}>
					<Checkbox label = {header} checked = {() => _.every(items.toJs(), item => item.checked)} change = {this.props.changeItems}/>
				</ul>
				<ul>
					{_.map(items.toJs(), (item, label) => 
						<Checkbox key = {label} label = {label} checked = {() => item.checked} change = {this.props.changeItem}/>
					)}
				</ul>
			</div>
		);
	}
}

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	items: React.PropTypes.object.isRequired,
	changeItem: React.PropTypes.func,
	changeItems: React.PropTypes.func
};

export default App;
