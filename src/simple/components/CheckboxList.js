/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 00:45:56
*/
import _ from 'lodash';
import React from 'react';
import Checkbox from './Checkbox';

class CheckboxList extends React.Component {
	constructor(props) {
		super(props);
		const itemsState = {};
		React.Children.forEach(props.children, component => itemsState[component.props.label] = component.props.checked);
		this.state = {
			itemsState: itemsState
		};
	}
	
	componentWillReceiveProps(nextProps) {
		const itemsState = {};
		React.Children.forEach(nextProps.children, component => itemsState[component.props.label] = component.props.checked);
		this.setState({
			itemsState: itemsState
		});
	}

	onChange = (label, checked) => {
		this.setState({itemsState: _.mapValues(this.state.itemsState, () => checked)});
	};

	render() {
		const {label, children} = this.props;
		const checked = _.every(this.state.itemsState, itemChecked => itemChecked);
		const Checkboxes = React.Children.map(children, component => React.cloneElement(component, {
			checked: this.state.itemsState[component.props.label],
			change: (checkboxLabel, checkboxChecked) => {
				this.state.itemsState[checkboxLabel] = checkboxChecked;
				this.setState(this.state);	
			}
		}));
		return (
			<div>
				<ul style = {{background: 'gray'}}>
					<Checkbox label = {label} checked = {checked} change = {this.onChange}/>
				</ul>
				<ul>
					{Checkboxes}
				</ul>
			</div>
		);
	}
}

CheckboxList.propTypes = {
	label: React.PropTypes.string.isRequired,
	children: React.PropTypes.node
};

export default CheckboxList;
