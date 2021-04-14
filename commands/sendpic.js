module.exports = {
    name: "sendpic",
    descrption: "sends a cute pic",
    execute(message, args){
        message.channel.send('', {files: ["./images/me.png"]});
    }
}