import React from 'react';
import PropTypes from 'prop-types';

export const AddFile = ({
    onSelectFile
}) => (
    <div>
        <label>Добавить файл:</label><br />
        <input type="file" onChange={onSelectFile} multiple />
    </div>
);

AddFile.propTypes = {
    onSelectFile: PropTypes.func
};
