/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 02:59:33
*/
import React from 'react';
import CheckboxesStore from '../stores/store';
import CheckboxesActions from '../actions/action';
import AltContainer from 'alt-container';
import App from './App';

class Container extends React.Component {
	render() {
		return (
			<AltContainer store = {CheckboxesStore} actions = {{
				changeItems: (label, checked) => checked ? CheckboxesActions.checkAll() : CheckboxesActions.uncheckAll(),
				changeItem: (label, checked) => checked ? CheckboxesActions.checkItem(label) : CheckboxesActions.uncheckItem(label)
			}}>
				<App/>
			</AltContainer>
		);
	}
}

export default Container;
