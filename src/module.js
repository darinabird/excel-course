function sleep(time = 100) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function start() {
    console.log('first')
    await sleep(4000)
    console.log('second')
}

start()