const { Telegraf, Telegram } = require('telegraf');
require('dotenv').config();




const bot = new Telegraf(process.env.BOT_TOKEN);
// console.log(process.env);


const web_link = "https://keen-sprite-98d2b0.netlify.app";

bot.command('/start', (ctx) => {

    ctx.reply('\r ®️ Welcome To Lumino Hash Bot Validator ©️ ', {
        reply_markup: {
            keyboard: [
                [{text:'web app', callback_data:"webpanel", web_app:{url: web_link}}],
            ]
        }
    });
})
bot.command('/plug', (ctx) => {

    ctx.reply('®️ ESPAGNA / MORORCO ©️', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Plug Espagne 🇪🇸", callback_data: "plugspainfree" }, { text: "Plug Italie 🇮🇹", callback_data: "btn-2" }],
                [{ text: "Meet-Up -> Espagne 🇪🇸", callback_data: "meetupspain" }, { text: "Meet-Up -> Italie 🇮🇹", callback_data: "btn-4" }],
                [{ text: "Plug France 🇫🇷 ", callback_data: "plugfrance" }, { text: "Meet-Up -> France 🇫🇷", callback_data: "btn-6" }],
                [{ text: "💰 How to Order 💰", callback_data: 'howtoorder' }],
                [{ text: "⚠️ Report a Scam ⚠️", callback_data: "scamsection" }],
            ]
        }
    });
})

bot.action('plugspainfree', ctx => {
    ctx.reply('Plug Spain 🇪🇸', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "@AopFrenchyBarcelona 🇪🇸", callback_data: "aopspain", url: 'https://t.me/aopfrenchy75bcn' }],
                [{ text: "@Costa_Delsur 🇪🇸", callback_data: "costa_delsur", url: 'http://t.me/costa_delsur' }],
            ]
        }
    });
})

bot.action('plugfrance', ctx => {
    ctx.reply('---------------------> Plug France 🇫🇷', {
        reply_markup: {
            inline_keyboard: [
                [{ text: " 🇫🇷 @AopFrenchy75 🇫🇷", callback_data: "aopparis", url: "https://t.me/aopfrenchy75" },{ text: "🇫🇷 @CalifeConnectV2 🇫🇷", callback_data: "califebers", url: "https://t.me/+r7RyS8acwk81ZWRk" }],
                [{ text: "🇫🇷 @JeffBedos 🇫🇷", callback_data: "jeffbedos", url: "https://t.me/+7iE27zvWVAg3MmE0" }, {text:'🇫🇷@Hashfiltered420🇫🇷', callback_data:'hasfiltered420', url:'https://t.me/hashfiltered420comeback'}],
                [{ text: "🇫🇷 @MagickDry 🇫🇷", callback_data: "magickdry", url: "https://t.me/+4DQH_JPZbz4xNDU8" }, {text:'🇫🇷 @NBLG_INDUSTRY 🇫🇷', callback_data:'nblgindustry', url:'https://t.me/touchepasamonplug_officiel/295'}],
                [{text:'🇫🇷 @Pharmacie59🇫🇷', callback_data:'pharmacie59', url:'https://t.me/+wSj0NWQqgR4xM2M8'}],
            ]
        }
    });
})
bot.action('scamsection', ctx => {
    ctx.reply('________⛓️ Down Scam Reporter Systême ⛓️________', {
        reply_markup: {
            inline_keyboard: [
                [{ text: ' 🐀 List Scam Account 🐀', callback_data: "scampluglist" }],
                [{ text: '🔥 Poll Down Scamer 🔫', callback_data: 'pollscam' }],
                [{ text: '🦾 How it\'s Work ? 🦾', callback_data: 'howhitban' }],
                [{ text: '☕ Buy Me a Dry X-3 Coffee ☕ ', callback_data: 'donatecoffee' }],
            ]
        }
    });
})
bot.action('pollscam', ctx => {

    ctx.reply('🔥 Poll Down Scamer 🔫', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🔥 Yes 🔥', callback_data: "yespoll" }, { text: '🚫 No 🚫', callback_data: "nopoll" }],
            ]
        }
    });
        
})
bot.action('donatecoffee', ctx => {
    ctx.reply('This Take me 1 Week of Work !\n Thank you in advance for your donations the team!' , {
        reply_markup: {
            inline_keyboard: [
                [{ text: '👉 Buy Me a Coffee 👈', callback_data: "buycoffee", url: 'https://www.paypal.com/paypalme/antiteck0ne' }],
            ]
        }
    });
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));