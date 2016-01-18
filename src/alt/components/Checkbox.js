/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 01:42:13
*/
import $ from 'jquery';
import React from 'react';

class Checkbox extends React.Component {
	
	onChange = () => {
		const {label, change = () => {}} = this.props;
		const checked = $(this.refs.input).is(':checked');
		change(label, checked);
	};

	render() {
		const {label, checked} = this.props;
		return (
			<li>
				<span>{label}</span>
				<input ref = 'input' type = 'checkbox' checked = {checked} onChange = {this.onChange}/>
			</li>
		);
	}
}

Checkbox.defaultProps = {
	checked: false
};

Checkbox.propTypes = {
	label: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool.isRequired,
	change: React.PropTypes.func
};

export default Checkbox;
