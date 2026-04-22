import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '01223672323', // Bot number
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
  // Owner 1
    { name: "ma", lid: "01022846899@lid", jid: "01022846899@s.whatsapp.net" },
  // Owner 2
    { name: "hamo", lid: "01285147098@lid", jid: "01285247098@s.whatsapp.net" },
  // Owner 3
    { name: "yosaf", jid: "201210224775@s.whatsapp.net", lid: "01210224775@lid"},
  ],
  settings: { noWelcome: true },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ 𝙋𝙊𝙈𝙉𝙄 🎪 〈", 
  nameChannel: "𝐕𝐈𝐈7 ~ 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🕷️", 
  idChannel: "120363225356834044@newsletter",
  urls: {
    repo: "https://github.com/mahamadmhamad63-oss/Pomni-AI-main",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029ValxOlxIt5rnh4YGPp26"
  },
  copyright: { 
    pack: 'ڤـ ـ VA ـ ـا', 
    author: 'VA'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
