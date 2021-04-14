module.exports = {
    name: "wiki",
    descrption: "searches the minecraft wiki",
    execute(message, args){

        //checks if there is a search term with the command
        if(!args[0]){
            message.channel.send('Must provide a search term when using the !wiki command. Type !help for more info');
            return;
        }

        //sets searchTerm equal to what the user submitted
        serchTerm = args[0];

        if(args[1]){
            //if there is more than two words, seperate it with a _ for it to work in the URL
            searchTerm = args[0] + '_' + args[1];
        }
        else{
            searchTerm = args[0];
        }

        //URL for searching on the minecraft wiki
        url = 'http://minecraft.gamepedia.com/Special:Search?search=' + searchTerm + '&go=Go';

        message.channel.send(url);
    }
}