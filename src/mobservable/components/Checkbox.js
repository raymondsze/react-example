/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 03:50:19
*/
import $ from 'jquery';
import React from 'react';
import _ from 'lodash';
import {observer} from 'mobservable-react';

@observer
class Checkbox extends React.Component {
	
	onChange = () => {
		const label = _.isFunction(this.props.label) ? this.props.label() : this.props.label;
		const {change = () => {}} = this.props;
		const checked = $(this.refs.input).is(':checked');
		change(label, checked);
	};

	render() {
		const label = _.isFunction(this.props.label) ? this.props.label() : this.props.label;
		const checked = _.isFunction(this.props.checked) ? this.props.checked() : this.props.checked;
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
	label: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]).isRequired,
	checked: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.bool]).isRequired,
	change: React.PropTypes.func
};

export default Checkbox;
