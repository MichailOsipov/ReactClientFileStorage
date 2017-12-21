import {formValueSelector} from 'redux-form';
import {FILE_HANDLING_FORM_NAME} from './constants';

const valueSelector = formValueSelector(FILE_HANDLING_FORM_NAME);
export const userToSaveSelector = state => valueSelector(state, 'userToSave');
export const fileToSaveSelector = state => valueSelector(state, 'fileToSave');
export const userToLoadSelector = state => valueSelector(state, 'userToLoad');
