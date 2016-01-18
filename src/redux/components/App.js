/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 01:59:09
*/
import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import Checkbox from './Checkbox';
import {checkAll, uncheckAll, checkItem, uncheckItem} from '../reducers/actions';

class App extends React.Component {
	render() {
		const {dispatch} = this.props;
		return (
			<div>
				<ul style = {{background: 'gray'}}>
					<Checkbox label = {this.props.header} checked = {_.every(this.props.items, itemChecked => itemChecked)} change = {(label, checked) => {
						checked ? dispatch(checkAll()) : dispatch(uncheckAll());
					}}/>
				</ul>
				<ul>
					{_.map(this.props.items, (checked, label) => 
						<Checkbox key = {label} label = {label} checked = {checked} change = {(itemLabel, itemChecked) => {
							itemChecked ? dispatch(checkItem(itemLabel)) : dispatch(uncheckItem(itemLabel));
						}}/>
					)}
				</ul>
			</div>
		);
	}
}

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	items: React.PropTypes.object.isRequired,
	dispatch: React.PropTypes.func.isRequired
};

export default connect((state) => state)(App);
