import JSZip from 'jszip';

export function zipFilesIfNecessary(files) {
    const zip = new JSZip();
    files.forEach(({name, data: {data}}) => {
        zip.file(name, new Blob([Uint8Array.from(data).buffer]));
    });
    return zip.generateAsync({type: 'blob'})
        .then(blob => ({
            name: 'arhive.zip',
            urlObj: URL.createObjectURL(blob)
        }));
}

export function autoDownload({name, urlObj}) {
    const hiddenLink = document.createElement('a');
    hiddenLink.style.visibility = 'hidden';
    hiddenLink.style.position = 'fixed';
    hiddenLink.href = urlObj;
    hiddenLink.download = name;
    document.body.appendChild(hiddenLink);
    hiddenLink.click();
    document.body.removeChild(hiddenLink);
}
