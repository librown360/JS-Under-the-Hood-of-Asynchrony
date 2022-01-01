function doWork() {
    return new Promise(resolve => {
        const myWorker = new Worker("worker.js");

        myWorker.postMessage('doWork')

        myWorker.onmessage = function() {
            console.log('in here')
            resolve()
        }
    })
}
    

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

let example1Button = document.querySelector('#example-1')
let example2Button = document.querySelector('#example-2')
let example3Button = document.querySelector('#example-3')

example1Button.addEventListener('click', function () {
    exampleOne()
    example1Button.textContent = 'Done!'
})

example2Button.addEventListener('click', function () {
    exampleTwo()
        .then(function () {
            example2Button.textContent = 'Done!'
        })
})

example3Button.addEventListener('click', function () {
    Promise.all(exampleThree())
        .then(function(){
            example3Button.textContent = 'Done!'
        })
})