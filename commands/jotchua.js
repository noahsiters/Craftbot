module.exports = {
    name: "jotchua",
    descrption: "sends a funny pic (:",
    execute(message, args){
        message.channel.send('', {files: ["./images/IMG_5136.jpg"]});
    }
}