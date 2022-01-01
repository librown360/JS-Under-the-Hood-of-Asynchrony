function exampleOne() {
    
    async function one() {
        await doWork()
    }

    async function two() {
        await doWork()
    }

    one()
    two()
}