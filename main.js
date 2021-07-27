//setting up
const dotenv = require('dotenv').config();
const Discord = require ('discord.js');
const fs = require('fs'); //to access physical file system
const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

//setting up system to execute commands from other .js command files
const prefix = '!';
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("craftbot is online!");

    client.user.setPresence("Use !help for information");
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/); //removes the prefix
    const command = args.shift().toLowerCase();

    //series of ifs checking which command has been submitted
    if(command === 'foo'){
        client.commands.get('foo').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'jotchua'){
        client.commands.get('jotchua').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'rolldice'){
        client.commands.get('rolldice').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'wiki'){
        client.commands.get('wiki').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'cord'){
        client.commands.get('cord').execute(message, args);
        console.log('Called command' + command); //currently just sending all the cords, specific location requests will come in next version, then possibly allowing users to add new ones
    }
    else if(command === 'mario'){
        client.commands.get('mario').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'brandon'){
        client.commands.get('brandon').execute(message, args);
        console.log('Called command' + command);
    }
    else if(command === 'sendpic'){
        client.commands.get('sendpic').execute(message, args);
        console.log('Called command' + command);
    }

    //possibly add an add command and allow people to add their own coordinates to the cords file
})

client.on('message', message => {
    if(message.author.bot) return;

    // const args = message.content; //puts content into args array
    // num = getRandomInt(100);

    //has 1% chance of firing
    // if(num <= 1){
    //     client.commands.get('sweet').execute(message, args);
    // }
})

//function for random number generation
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

client.login(token);
