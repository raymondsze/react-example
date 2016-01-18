/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-19 02:40:26
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 03:59:50
*/
import {map, observable} from 'mobservable';
class Item {
	@observable checked = false;
	@observable label = '';
	constructor(label, checked) {
		this.label = label;
		this.checked = checked;
	}
}

class Store {
	items = map({});
	@observable header = 'Check all';
	constructor() {		
	}
	createItem(label, checked = false) {
		this.items.set(label, new Item(label, checked));
	}
}
export default new Store();
