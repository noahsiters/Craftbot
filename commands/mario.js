module.exports = {
    name: "mario",
    descrption: "sends a funny pic (:",
    execute(message, args){
        message.channel.send('', {files: ["./images/IMG_5249.jpg"]});
    }
}