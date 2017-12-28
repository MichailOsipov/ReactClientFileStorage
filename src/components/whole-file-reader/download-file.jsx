import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

export const DownloadFile = ({
    onLoadFile
}) => (
    <div>
        <label>Загрузить файл:</label><br />
        <Field name="userHash" component="input" />
        <button onClick={onLoadFile}>Загрузить файл</button>
    </div>
);

DownloadFile.propTypes = {
    onLoadFile: PropTypes.func
};
