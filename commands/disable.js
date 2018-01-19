var fs = require("fs");

module.exports = {
    execute(client, message, param){
        try{
            var commandName = param[1].toLowerCase();
            if(commandName){
                message.delete();

                var modulePath = `${__dirname}/${commandName}.js`;
                if(client.commands.has(commandName)){
                    client.commands.delete(commandName);
                    message.channel.send(`Disabled ${commandName}!`);
                }else{
                    message.channel.send(`${commandName}.js couldnt be found.`)
                }
            }
        }catch(e){
            util.log(client,`${e}\nSource: ${__filename.split('/root/bots/')[1]}`)
        }
    }
}