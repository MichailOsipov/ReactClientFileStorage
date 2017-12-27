export function transformBytesToUrlObj({data: {data}, ...rest}) {
    const {buffer} = Uint8Array.from(data);
    return {
        ...rest,
        urlObj: URL.createObjectURL(new Blob([buffer]))
    };
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
