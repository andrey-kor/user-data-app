async function start() {
    return await Promise.resolve('async is working')
}

const unused = 11

start().then(console.log)