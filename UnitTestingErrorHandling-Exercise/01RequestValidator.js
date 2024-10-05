function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    // Validate method
    if (!obj.method || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    // Validate URI
    const uri = obj.uri;
    const uriRegex = /^[a-zA-Z0-9.]+$/; // Valid URI: alphanumeric + periods
    if (!uri || !(uri === '*' || uriRegex.test(uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    // Validate version
    const version = obj.version;
    if (!version || !validVersions.includes(version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    // Validate message
    const message = obj.message;
    const specialCharsRegex = /[<>\\&'"]/; // Special characters to disallow
    if (message === undefined || specialCharsRegex.test(message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj; // Return the valid object unchanged
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))

// console.log(requestValidator({
// method: 'OPTIONS',
// uri: 'git.master',
// version: 'HTTP/1.1',
// message: '-recursive'
// }))

// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }))