var util = require("../utilities.js");
var ignore = ["help","reload","update"];

module.exports = {
    desc:"This command displays information about a command. Usage: >help command",
    execute(client, message, param){
        try{
            if(param[1]){
                if (client.commands.has(param[1].toLowerCase())){
                    message.author.send(client.commands.get(param[1].toLowerCase()).desc);
                }
            }else{
                var commands = "";
                var send = false;
                Array.from(client.commands.keys()).forEach(idName => {
                    if(util.permCheck(message,idName) && ignore.includes(idName)){
                        send=true;
                        commands += `${idName}: ${client.commands.get(idName).desc}\n`
                    }               
                })
                if(send) message.author.send(commands, {code:"xl",split:true});
            }
        }catch(e){
            util.log(client,`${e}\nSource: ${__filename.split('/root/bots/')[1]}`)
        }
    }
}