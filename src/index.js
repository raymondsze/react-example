/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-18 20:38:57
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-19 04:13:49
*/
/* eslint-disable no-alert */
import 'babel-polyfill';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import SimpleCheckboxList from './simple/components/CheckboxList';
import SimpleCheckbox from './simple/components/Checkbox';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers/reducers';
import ReduxApp from './redux/components/App';
import {createItem as reduxCreateItem} from './redux/reducers/actions';

import AltContainer from './alt/components/Container';
import AltAction from './alt/actions/action';

import MOContainer from './mobservable/components/Container';
import MOStore from './mobservable/stores/store';

$(document).ready(() => {
	const items = [];
	const max = 2000;
	for (let i = 0; i < max; i++) {
		items.push(<SimpleCheckbox key = {i} label = {i.toString()} checked = {false}/>);
	}
	ReactDOM.render(
		<SimpleCheckboxList label = 'Check all'>
			{items}
		</SimpleCheckboxList>, 
	$('#container')[0]);

	const store = createStore(reducers);
	for (let i = 0; i < max; i++) {
		store.dispatch(reduxCreateItem(i.toString(), false));
	}
	ReactDOM.render(
		<Provider store = {store}>
			<ReduxApp/>
		</Provider>, 
	$('#redux-container')[0]);

	for (let i = 0; i < max; i++) {
		AltAction.createItem(i.toString(), false);
	}
	ReactDOM.render(
		<AltContainer/>,
	$('#alt-container')[0]);

	for (let i = 0; i < max; i++) {
		MOStore.createItem(i.toString(), false);
	}
	ReactDOM.render(
		<MOContainer/>,
	$('#mobservable-container')[0]);
});
