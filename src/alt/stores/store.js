/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 04:15:25
*/
import alt from '../alt';
import _ from 'lodash';
import CheckboxesActions from '../actions/action';

class CheckboxesStore {
	constructor() {
		this.header = 'Check all';
		this.items = {};
		this.bindListeners({
			createItem: CheckboxesActions.CREATE_ITEM,
			checkItem: CheckboxesActions.CHECK_ITEM,
			uncheckItem: CheckboxesActions.UNCHECK_ITEM,
			checkAll: CheckboxesActions.CHECK_ALL,
			uncheckAll: CheckboxesActions.UNCHECK_ALL
		});
	}
	createItem(item = {checked: false}) {
		this.items[item.label] = item.checked;
	}
	checkAll() {
		this.items = _.mapValues(this.items, () => true);
	}
	uncheckAll() {
		this.items = _.mapValues(this.items, () => false);
	}
	checkItem(label) {
		this.items[label] = true;
	}
	uncheckItem(label) {
		this.items[label] = false;
	}
}

export default alt.createStore(CheckboxesStore, 'CheckboxesStore');
