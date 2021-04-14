module.exports = {
    name: "sweet",
    descrption: "everyone hates this one",
    execute(message, args){
        
        const word = message.content.split(" ")[getRandomInt(args.split(" ").length)]; //selects random word in args array
        var consonants = ['!','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        let fl = word.charAt(0); //gets first letter of word

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        if(!consonants.includes(fl)){
            //if first letter is not a consonant (a vowel), proceed as normal
            message.channel.send("sw" + word);
        }
        else{
            //if first letter is a consonant, remove it
            message.channel.send("sw" + word.substring(1));
        }

        num = getRandomInt();

        //40% chance for this to fire
        if(num <= 40){
            response = "or did i misread that";
            switch(getRandomInt(12)){
                case 0:
                    response = "now you see, i was bullied from a young age so that is why i am like this";
                    sleep = 2000;
                    break;
                case 1:
                    response = "ok i can explain, it just it slipped out.. i didnt mean it";
                    sleep = 2000;
                    break;
                case 2:
                    response = "look, i know what you are thinking... im not usually like this ok";
                    sleep = 2000;
                    break;
                case 3:
                    response = "see, i didnt mean it in that way";
                    sleep = 2000;
                    break;
                case 4:
                    response = "damn im so fucking funny";
                    sleep = 2000;
                    break;
                case 5:
                    response = "look man i hate that i do it too";
                    sleep = 2000;
                    break;
                case 6:
                    response = "so when i said that, i was just kinda saying the first thing that came to mind, which isnt good i know";
                    sleep = 2000;
                    break;
                case 7:
                    response = "or?";
                    sleep = 0;
                    break;
                case 8:
                    response = "look i dont like that it happened either but it is what it is";
                    sleep = 2000;
                    break;
                case 9:
                    resposne = "now, the reason i did that was because you were asking for it tbh";
                    sleep = 2000;
                    break;
                case 10:
                    response = "just comes naturally, i cant help it";
                    sleep = 2000;
                    break;
                case 11:
                    response = "you know what, i regretted that as soon as i typed it";
                    sleep = 2000;
                    break;
                case 12:
                    response = "orrr";
                    sleep = 1000;
                case 13:
                    response=  "or did i misread that..";
                    sleep = 2000;
                default:
                    response = "ok it happened, get used to it";
                    sleep = 2000;
                    break;
            }
            try{
                setTimeout(() => {message.channel.send(response);}, sleep); //waits 2 seconds to send
                //message.channel.send(response);
            }
            catch{
                return;
            }
        }
    }
}