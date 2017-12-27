const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export const addFileMethod = ({user, file}) => fetch('/api/files', {
    headers,
    method: 'POST',
    body: JSON.stringify({user, file})
}).then(response => response.json());

export const getFilesByUserMethod = ({user}) => fetch(`/api/files?user=${user}`, {
    headers,
    method: 'GET'
}).then(response => response.json());

export const sendFile = data => fetch('/api/files', {
    method: 'POST',
    body: data
}).then(response => response.json());

export const receiveFile = hash => fetch(`/api/files?hash=${hash}`, {
    method: 'GET'
}).then(response => response.json());
