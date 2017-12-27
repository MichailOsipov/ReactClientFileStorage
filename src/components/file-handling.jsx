import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {
    addFileMethod,
    getFilesByUserMethod
} from 'api/file-service';
import {AddFile} from './add-file';
import {LoadFile} from './load-file';
import {FilesList} from './files-list';
import {
    userToSaveSelector,
    fileToSaveSelector,
    userToLoadSelector
} from './selectors';

import {FILE_HANDLING_FORM_NAME} from './constants';
import {WholeFileReader} from './whole-file-reader';

@connect(state => ({
    userToSave: userToSaveSelector(state),
    fileToSave: fileToSaveSelector(state),
    userToLoad: userToLoadSelector(state)
}), null)
@reduxForm({form: FILE_HANDLING_FORM_NAME})
export class FileHandling extends PureComponent {
    static propTypes = {
        userToSave: PropTypes.string,
        fileToSave: PropTypes.string,
        userToLoad: PropTypes.string
    };

    state = {files: [], message: ''};

    addFileToFileSystem = () => {
        addFileMethod({
            user: this.props.userToSave,
            file: this.props.fileToSave
        }).then(({message}) => {
            this.setState(() => ({message}));
        });
    }

    loadFilesByHash = () => {
        getFilesByUserMethod({
            user: this.props.userToLoad
        }).then((files) => {
            this.setState(() => ({files}));
        });
    }

    render() {
        return (
            <div>
                {this.state.message}
                <AddFile onAddFile={this.addFileToFileSystem} />
                <LoadFile onLoadFile={this.loadFilesByHash} />
                <FilesList files={this.state.files} />
                <WholeFileReader />
            </div>
        );
    }
}
