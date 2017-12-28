import {formValueSelector} from 'redux-form';
import {WHOLE_FILE_READER_FORM_NAME} from './constants';

const valueSelector = formValueSelector(WHOLE_FILE_READER_FORM_NAME);
export const userHashSelector = state => valueSelector(state, 'userHash');
