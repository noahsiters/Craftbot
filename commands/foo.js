module.exports = {
    name: "foo",
    descrption: "this is a foo command",
    execute(message, args){
        message.channel.send('bar');
    }
}