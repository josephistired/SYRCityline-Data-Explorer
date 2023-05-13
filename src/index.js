require("dotenv").config();

const { Collection } = require("discord.js");
const client = require("./discordclient");

client.events = new Collection();
client.commands = new Collection();
client.subCommands = new Collection();
client.cooldowns = new Collection();

const { loadEvents } = require("../Handlers/eventLoader");
loadEvents(client);

client.login(process.env.token);
