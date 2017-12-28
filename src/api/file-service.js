export const sendFile = data => fetch('/api/files', {
    method: 'POST',
    body: data
}).then(response => response.json());

export const receiveFile = hash => fetch(`/api/files?hash=${hash}`, {
    method: 'GET'
}).then(response => response.json());
