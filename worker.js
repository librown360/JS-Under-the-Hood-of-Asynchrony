onmessage = function (message) {
    if (message.data === 'doWork') {
        let start = new Date().getTime()
        let now = start
        while (now < start + 500) {
            now = new Date().getTime()
        }
        postMessage('done')
    }
}