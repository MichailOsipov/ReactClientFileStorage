const {map} = require('lodash');

export const uploadFiles = files => Promise.all(
    map(files, file =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = (event) => {
                resolve({
                    name: file.name,
                    data: event && event.target && event.target.result
                });
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        })
    )
);

export const prepareFormData = fieldName => (uploadedFiles) => {
    const formData = new FormData();
    uploadedFiles.forEach(({name, data}) => {
        formData.append(fieldName, new Blob([data]), name);
    });
    return formData;
};
