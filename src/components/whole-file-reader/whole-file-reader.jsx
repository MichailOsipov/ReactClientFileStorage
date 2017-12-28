import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {sendFile, receiveFile} from 'api/file-service';
import {autoDownload, zipFilesIfNecessary} from 'utils/file-downloading';
import {uploadFiles, prepareFormData} from 'utils/file-uploading';
import {AddFile} from './add-file';
import {DownloadFile} from './download-file';
import {userHashSelector} from './selectors';
import {WHOLE_FILE_READER_FORM_NAME} from './constants';

@connect(state => ({
    userHash: userHashSelector(state)
}), null)
@reduxForm({form: WHOLE_FILE_READER_FORM_NAME})
export class WholeFileReader extends PureComponent {
    static propTypes = {
        userHash: PropTypes.string
    };
    state = {hash: null};

    sendFileToService = (event) => {
        const files = event && event.target && event.target.files;
        uploadFiles(files)
            .then(prepareFormData('files'))
            .then(sendFile)
            .then(({hash}) => {
                this.setState(() => ({hash}));
            });
    }

    downloadFile = () => {
        receiveFile(this.props.userHash)
            .then(zipFilesIfNecessary)
            .then(autoDownload);
    }

    render() {
        const {hash} = this.state;
        return (
            <div>
                <div>Обработка файлов целиком:</div>
                <AddFile onSelectFile={this.sendFileToService} />
                {hash && <div>{`Hash: ${hash}`}</div>}
                <div>Загрузка файлов:</div>
                <DownloadFile onLoadFile={this.downloadFile} />
            </div>
        );
    }
}
