import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {sendFile, receiveFile} from 'api/file-service';
import {autoDownload, transformBytesToUrlObj} from 'utils/file-downloading';
import {uploadSingleFile, prepareFormData} from 'utils/file-uploading';
import {AddFile} from './add-file';
import {DownloadFile} from './download-file';
import {userHashSelector} from '../selectors';

@connect(state => ({
    userHash: userHashSelector(state)
}), null)
export class WholeFileReader extends PureComponent {
    static propTypes = {
        userHash: PropTypes.string
    };
    state = {hash: null};

    sendFileToService = (event) => {
        const file = event && event.target && event.target.files[0];
        uploadSingleFile(file)
            .then(prepareFormData('files'))
            .then(sendFile)
            .then(({hash}) => {
                this.setState(() => ({hash}));
            });
    }

    downloadFile = () => {
        receiveFile(this.props.userHash)
            .then(transformBytesToUrlObj)
            .then(autoDownload);
    }

    render() {
        const {hash} = this.state;
        return (
            <div>
                <div>Обработка файлов с помощью Целиком:</div>
                <AddFile onSelectFile={this.sendFileToService} />
                {hash && <div>{`Hash: ${hash}`}</div>}
                <div>Загрузка файлов:</div>
                <DownloadFile onLoadFile={this.downloadFile} />
            </div>
        );
    }
}
