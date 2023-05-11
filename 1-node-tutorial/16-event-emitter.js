// EVENTS IN NODEJS
// Event-Driven Programming
// Used Hevily in Node.js



const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`date received, user: ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'John', 50)

