/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-19 00:27:16
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 04:17:23
*/
import _ from 'lodash';
import {CREATE_ITEM, CHECK_ITEM, UNCHECK_ITEM, CHECK_ALL, UNCHECK_ALL} from './actions';

function checkboxesReducer(state = {header: 'Check all', items: {}}, action) {
	const newState = _.cloneDeep(state);
	switch (action.type) {
	case CREATE_ITEM:
		newState.items[action.label] = action.checked;
		return newState;
	case CHECK_ALL:
		newState.items = _.mapValues(newState.items, () => true);
		return newState;
	case UNCHECK_ALL:
		newState.items = _.mapValues(newState.items, () => false);
		return newState;
	case CHECK_ITEM:
		newState.items[action.label] = true;
		return newState;
	case UNCHECK_ITEM:
		newState.items[action.label] = false;
		return newState;
	default:
		return newState;
	}
}

export default checkboxesReducer;
