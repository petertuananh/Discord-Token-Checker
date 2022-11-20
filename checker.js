const Discord = require("discord.js")
const readline = require("readline");
const colors = require("colors")
const ascii = require('ascii-table');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log(colors.yellow(`
    ╔════╗    ╔╗              ╔═══╗╔╗          ╔╗             ╔══╗          ╔═══╗     ╔╗        
    ║╔╗╔╗║    ║║              ║╔═╗║║║          ║║             ║╔╗║          ║╔═╗║    ╔╝╚╗       
    ╚╝║║╚╝╔══╗║║╔╗╔══╗╔═╗     ║║ ╚╝║╚═╗╔══╗╔══╗║║╔╗╔══╗╔═╗    ║╚╝╚╗╔╗ ╔╗    ║╚═╝║╔══╗╚╗╔╝╔══╗╔═╗
      ║║  ║╔╗║║╚╝╝║╔╗║║╔╗╗    ║║ ╔╗║╔╗║║╔╗║║╔═╝║╚╝╝║╔╗║║╔╝    ║╔═╗║║║ ║║    ║╔══╝║╔╗║ ║║ ║╔╗║║╔╝
     ╔╝╚╗ ║╚╝║║╔╗╗║║═╣║║║║    ║╚═╝║║║║║║║═╣║╚═╗║╔╗╗║║═╣║║     ║╚═╝║║╚═╝║    ║║   ║║═╣ ║╚╗║║═╣║║ 
     ╚══╝ ╚══╝╚╝╚╝╚══╝╚╝╚╝    ╚═══╝╚╝╚╝╚══╝╚══╝╚╝╚╝╚══╝╚╝     ╚═══╝╚═╗╔╝    ╚╝   ╚══╝ ╚═╝╚══╝╚╝ 
                                                                   ╔═╝║                         
                                                                   ╚══╝                         
                                                        
`))


askToken()

async function askToken() {
    await rl.question("Enter token: ", async function (token) {
        return login(token)
    })
}

async function login(token) {
    const client = new Discord.Client({
        intents: [
            Discord.Intents.FLAGS.GUILDS,
            Discord.Intents.FLAGS.GUILD_MEMBERS,
            // Discord.Intents.FLAGS.GUILD_PRESENCES,
            Discord.Intents.FLAGS.GUILD_MESSAGES,
        ],
    })
    await client.login(token).catch(async () => {
        console.log(colors.red(`[Err] Token error!`))
        return askToken()
    }).then(async () => {
        if (!client.user) return
        if (!client.guilds) return

        let table = new ascii(`${client.user.tag}\n[${client.user.id}]`);
        table.setHeading("Servers");
        client.guilds.cache.forEach(async (guild) => {
            table.addRow(`${guild.id}`)
        })
        console.clear()
        console.log(colors.green(`[CHECKING] ...--... 0%`))
        setTimeout(() => {
            console.clear()
            console.log(colors.yellow(`[CHECKING] ...\\... 20%`))
            setTimeout(() => {
                console.clear()
                console.log(colors.yellow(`[CHECKING] ...|... 20%`))
                setTimeout(() => {
                    console.clear()
                    console.log(colors.yellow(`[CHECKING] .../... 30%`))
                    setTimeout(() => {
                        console.clear()
                        console.log(colors.yellow(`[CHECKING] ...--... 40%`))
                        setTimeout(() => {
                            console.clear()
                            console.log(colors.yellow(`[CHECKING] ...\\... 50%`))
                            setTimeout(() => {
                                console.clear()
                                console.log(colors.yellow(`[CHECKING] ...|... 60%`))
                                setTimeout(() => {
                                    console.clear()
                                    console.log(colors.yellow(`[CHECKING] .../... 70%`))
                                    setTimeout(() => {
                                        console.clear()
                                        console.log(colors.yellow(`[CHECKING] ...--... 80%`))
                                        setTimeout(() => {
                                            console.clear()
                                            console.log(colors.yellow(`[CHECKING] ...\\... 90%`))
                                            setTimeout(() => {
                                                console.clear()
                                                console.log(colors.yellow(`[CHECKING] ...|... 100%`))
                                                setTimeout(() => {
                                                    console.clear()
                                                    console.log(colors.green(`[OK] Done!`))
                                                    setTimeout(() => {
                                                        console.clear()
                                                        console.log(colors.yellow(table.toString()))
                                                        return askToken()
                                                    }, 333)
                                                }, 333)
                                            }, 333)
                                        }, 333)
                                    }, 333)
                                }, 333)
                            }, 333)
                        }, 333)
                    }, 333)
                }, 333)
            }, 333)
        }, 333)
    })
}


// const colors = require("colors")
// const ascii = require("ascii-table")
// const path = require("path");
// const express = require("express");
// const bodyParser = require("body-parser");
// const Discord = require('discord.js');
// const app = express();
// const port = 3000
// const client = new Discord.Client({
//     intents: [
//         Discord.Intents.FLAGS.GUILDS,
//         Discord.Intents.FLAGS.GUILD_MEMBERS,
//         // Discord.Intents.FLAGS.GUILD_PRESENCES,
//         Discord.Intents.FLAGS.GUILD_MESSAGES,
//     ],
// })
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

// app.listen(port)
// console.log(colors.yellow(`
//     ╔════╗    ╔╗              ╔═══╗╔╗          ╔╗             ╔══╗          ╔═══╗     ╔╗        
//     ║╔╗╔╗║    ║║              ║╔═╗║║║          ║║             ║╔╗║          ║╔═╗║    ╔╝╚╗       
//     ╚╝║║╚╝╔══╗║║╔╗╔══╗╔═╗     ║║ ╚╝║╚═╗╔══╗╔══╗║║╔╗╔══╗╔═╗    ║╚╝╚╗╔╗ ╔╗    ║╚═╝║╔══╗╚╗╔╝╔══╗╔═╗
//       ║║  ║╔╗║║╚╝╝║╔╗║║╔╗╗    ║║ ╔╗║╔╗║║╔╗║║╔═╝║╚╝╝║╔╗║║╔╝    ║╔═╗║║║ ║║    ║╔══╝║╔╗║ ║║ ║╔╗║║╔╝
//      ╔╝╚╗ ║╚╝║║╔╗╗║║═╣║║║║    ║╚═╝║║║║║║║═╣║╚═╗║╔╗╗║║═╣║║     ║╚═╝║║╚═╝║    ║║   ║║═╣ ║╚╗║║═╣║║ 
//      ╚══╝ ╚══╝╚╝╚╝╚══╝╚╝╚╝    ╚═══╝╚╝╚╝╚══╝╚══╝╚╝╚╝╚══╝╚╝     ╚═══╝╚═╗╔╝    ╚╝   ╚══╝ ╚═╝╚══╝╚╝ 
//                                                                    ╔═╝║                         
//                                                                    ╚══╝                         
                                                        
// `))

// console.log(colors.green(`Checker is now working at port: ${port}`))

// const html = `
// <h2>Token Checker v1 by Peter :></h2>

// <form method="POST">
//     <input type="text" required name="token" placeholder="Token">
//     <button type="submit">Check</button>
// </form>
// `

// app.get("/", async (req, res) => {
//     res.send(html)
// })

// app.post("/", async (req, res) => {
//     const token = req.body.token
//     if (!token) return res.status(404).json({status : 404, reason : "Missing token"})
//     try {
//         client.login(token).catch(async () => {
//             return res.json({status : 404, reason : "Can not login"})
//         })
//         // if (!client.user) return
//         let table = new ascii(`Logged in at ${client.user.tag} [${client.user.id}]`);
//         table.setHeading("Name", "ID", "Is Admin");
//         client.guilds.cache.forEach(async (guild) => {
//             table.addRow(`${guild.name}`, `${guild.id}`, `${guild.me.permissions.has("ADMINISTRATOR") || 'False'}`)
//         })
//         console.log(1)
//         return res.status(200).json({status : 200, guilds : table})
//     } catch (error) {
//         return res.status(404).json({status : 404, reason : "Can not login"})
//     }
// })