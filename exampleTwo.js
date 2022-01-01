function exampleTwo() {
    
    async function one() {
        await doWork()
    }

    async function two() {
        await doWork()
        await sleep(500)
        await doWork()
        await sleep(500)
        await doWork()
    }

    one()
    return two()
}