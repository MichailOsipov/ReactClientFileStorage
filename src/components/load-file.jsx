import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

export const LoadFile = ({
    onLoadFile
}) => (
    <div>
        <div>
            <label>Пользователь:</label>
            <Field name="userToLoad" component="input" />
        </div>
        <button onClick={onLoadFile}>Загрузить файл</button>
    </div>
);

LoadFile.propTypes = {
    onLoadFile: PropTypes.func
};
