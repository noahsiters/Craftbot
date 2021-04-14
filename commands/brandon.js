module.exports = {
    name: "brandon",
    descrption: "this is a brandon command",
    execute(message, args){
        message.channel.send('', {files: ["./images/rat.jpg"]});
    }
}