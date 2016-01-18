/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-19 00:24:09
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 01:16:17
*/
export const CHECK_ITEM = 'CHECK_ITEM';
export const UNCHECK_ITEM = 'UNCHECK_ITEM';
export const CHECK_ALL = 'CHECK_ALL';
export const UNCHECK_ALL = 'UNCHECK_ALL';
export const CREATE_ITEM = 'CREATE_ITEM';

export function createItem(label, checked) {
	return {
		type: CREATE_ITEM,
		label: label,
		checked: checked
	};
}

export function checkAll() {
	return {
		type: CHECK_ALL
	};
}

export function uncheckAll() {
	return {
		type: UNCHECK_ALL
	};
}

export function checkItem(label) {
	return {
		type: CHECK_ITEM,
		label: label
	};
}

export function uncheckItem(label) {
	return {
		type: UNCHECK_ITEM,
		label: label
	};
}
