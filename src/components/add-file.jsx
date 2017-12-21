import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

export const AddFile = ({
    onAddFile
}) => (
    <div>
        <div>
            <label>Пользователь:</label>
            <Field name="userToSave" component="input" />
        </div>
        <div>
            <label>Название файла:</label>
            <Field name="fileToSave" component="input" />
        </div>
        <button onClick={onAddFile}>Добавить файл в базу данных</button>
    </div>
);

AddFile.propTypes = {
    onAddFile: PropTypes.func
};
