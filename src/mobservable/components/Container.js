/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 04:10:13
*/
import CheckboxesStore from '../stores/store';
import {transaction} from 'mobservable';
import App from './App';
import React from 'react';
import {observer} from 'mobservable-react';

@observer
class Container extends React.Component {
	render() {
		return (
			<App header = {CheckboxesStore.header}
				items = {CheckboxesStore.items}
				changeItems = {(label, checked) => transaction(() => CheckboxesStore.items.forEach((itemChecked, itemLabel) => CheckboxesStore.items.get(itemLabel).checked = checked))}
				changeItem = {(label, checked) => CheckboxesStore.items.get(label).checked = checked}
			/>
		);
	}
}

export default Container;
