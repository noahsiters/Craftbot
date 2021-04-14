module.exports = {
    name: "rolldice",
    descrption: "rolls some dice baby",
    execute(message, args){

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function diceroll(){
            num = getRandomInt(5);
            return num;
        }

        message.channel.send(diceroll());
    }
}