function exampleThree() {

    function one() {
        doWork()
    }

    async function two() {
        await sleep(500)
        await doWork()
        await sleep(500)
        await doWork()
    }

    async function three() {
        await sleep(500)
        await doWork()
        await sleep(500)
        await doWork()
    }

    one()
    return [two(), three()]
}