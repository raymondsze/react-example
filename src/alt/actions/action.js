/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 22:51:06
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 02:27:24
*/
import alt from '../alt';

class CheckboxesActions {
	createItem(label, checked) {
		return {label: label, checked: checked};
	}
	checkAll() {
		return null;
	}
	uncheckAll() {
		return null;
	}
	checkItem(label) {
		return label;
	}
	uncheckItem(label) {
		return label;
	}
}

export default alt.createActions(CheckboxesActions);
