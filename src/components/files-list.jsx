import React from 'react';
import PropTypes from 'prop-types';

export const FilesList = ({
    files
}) => (
    <div>
        {files.map(file => (
            <div key={file}>{file}</div>
        ))}
    </div>
);

FilesList.propTypes = {
    files: PropTypes.arrayOf(PropTypes.any)
};
