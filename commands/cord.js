module.exports = {
    name: "cord",
    descrption: "sends the requested coordinates",
    execute(message, args){
        var fs = require('fs');
		var data = fs.readFileSync('cords.txt', 'utf8');
		let lines = [];

		//if there is no argument submitted with the cord command, send error message
        if(!args[0]){
            message.channel.send('Must provide a location when using the !cord commmand. Type !cord help for more info');
            return;
		}
		
		//sets the location to look for as the argument
		location = args[0];
		
		//puts each line as an index in an array called 'lines'
		fs.readFileSync('cords.txt', 'utf8').split(/\r?\n/).forEach(function(line){
			lines.push(line);
		});

		// TODO: organize locations better, possibly have each line stored into an array and allow users to !add new locations
		//checks which location is submitted, send the respective line
		if(location === 'house' || location === 'home'){
			//message.channel.send(`House: -523, 70, -161`);
			message.channel.send(lines[0]);
		}
		else if(location === 'portal'){
			message.channel.send(lines[1] +`
`+ lines[8] +`
`+ lines[10] +`
`+ lines[11] +`
`+ lines[14] +`
`+ lines[15] +`
`+ lines[18] +`
`+ lines[21]);
		}
		else if(location === 'bastion'){
			message.channel.send(lines[2] +`
`+ lines[4] +`
`+ lines[5] +`
`+ lines[6] +`
`+ lines[13]);
		}
		else if(location === 'village'){
			message.channel.send(lines[3]);
		}
		else if(location === 'fortress'){
			message.channel.send(lines[7] +`
`+ lines[12]);
		}
		else if(location === 'terracotta'){
			message.channel.send(lines[9] +`
`+ lines[10] +`
`+ lines[11]);
		}
		else if(location === 'reef'){
			message.channel.send(lines[16] +`
`+ lines[17]);
		}
		else if(location === 'jungle'){
			message.channel.send(lines[19]);
		}
		else if(location === 'packed-ice'){
			message.channel.send(lines[20]);
		}
		else if(location === 'end'){
			message.channel.send(lines[21] +`
`+ lines[22] +`
`+ lines[23]);
		}
		else if(location === 'netherite'){
			message.channel.send(lines[24]);
		}
		else if(location === 'help'){
			message.channel.send(`
!cord command help:
**house** - house info
**portal** - all relevant portal info (nether, end, biome, etc)
**bastion** - all bastion locations
**fortress** - all fortress locations
**village** - all village locations
**terracotta** - terracotta location info
**reef** - all coral reef locations
**jungle** - all jungle locations
**packed-ice** - blue/packed ice locations
**end** - all relevant end info (portal, teleportal, etc)
**netherite** - netherite mine location
`);
		}
		else if(location === 'all'){
			message.channel.send(data);
		}
    }
}
