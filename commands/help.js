module.exports = {
    name: "help",
    descrption: "this is a help command",
    execute(message, args, version){
        message.channel.send(`
   Supported commands:

**!help** - Displays the help menu
**!wiki string** - Searches the minecraft wiki with the given term
**!cord string** - Gives the coordinates of a location, use 'all' for all locations, use 'help' for location guide
**!sendpic** - sends a cute pic (:        
        `);
    }
}
