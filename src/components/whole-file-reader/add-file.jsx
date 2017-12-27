import React from 'react';
import PropTypes from 'prop-types';

export const AddFile = ({
    onSelectFile
}) => (
    <div>
        <label>Добавить файл:</label>
        <input type="file" onChange={onSelectFile} />
    </div>
);

AddFile.propTypes = {
    onSelectFile: PropTypes.func
};
