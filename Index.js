const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!roles") {
    const payload = {
      content: null,
      embeds: [
        {
          color: 8683230,
          image: { url: "https://i.imgur.com/LVv9G6R.png" }
        },
        {
          title: "‎  <:M_KMS:1376686776449761461>     𖤐　﹒　**R**OLE͟S͟　　⁦! ?⁩ 　　<a:love:1265157966168850587>",
          description: "**مرحباً, هنا تجد دليلك لجميع الرتب في سيرفر مورو**",
          color: 8683230
        },
        {
          title: "Server Administrators **|| مسؤولي السيرفر**   .  ♡  .",
          description:
            "<@&1368208579110375435>\n⟢ **مالك السيرفر محمد** .ֶָ֢ ❥\n\n<@&1368208580037312599>\n⟢ **المسؤول و صانع القرار في الإدارة** .ֶָ֢ ❥\n\n<@&1368210102355628193>\n⟢ **مسؤول بسلطة محدودة** .ֶָ֢ ❥\n\n<@&1368210104171892820>\n⟢ **الدعم التقني للسيرفر** .ֶָ֢ ❥",
          color: 8683230
        },
        {
          title: "Staffs Server **|| إدارة السيرفر**   .  ♡  .",
          description:
            "<@&1368210111146889346>\n╮╰**مشرف مسؤول عن مراقبة و تنظيم السيرفر** *!*\n\n<@&1368210115798372413>\n╮╰**مسؤول قسم الفعاليات في السيرفر** *!*\n\n<@&1368210117136351313>\n╮╰**مساعد مسؤول قسم الفعاليات** *!*",
          color: 8683230
        },
        {
          title: "Content Creators **|| صناع المحتوى**   .  ♡  .",
          description:
            "<@&1368210138564919296>\n⸝⸝꒱**صانع محتوى - قم بالتقديم عبر [الدعم الفني](https://discord.com/channels/927902122433982534/1368210269129408664)**꒰˚₊\n\n<@&1368210141316513842>\n⸝⸝꒱**ستريمر - قم بالتقديم عبر [الدعم الفني](https://discord.com/channels/927902122433982534/1368210269129408664)**꒰˚₊",
          color: 8683230
        },
        {
          title: "Membership Roles & Special Roles **|| رتب الداعمين + رتب خاصه**   .  ♡  .",
          description:
            "<:vip:1383432488948596786><@&1368210147566030869> <:vip:1383388933370417182>\n**اعضاء مهمين**<:vipmmm:1383432509513273405>\n\n<:booster:1378082757086810152><@&1379282112636649552> <:boost:1378086020968611860>\n**داعمين السيرفر**<:boostmmm:1378082780029780158>\n\n<:trusted:1378082477544833124><@&1368210154277048350> 🔰\n**اعضاء تم فتح مميزات المتفاعلين لهم بعد التحقق منهم**<:Untitled:1378082518355542046>",
          color: 8683230
        },
        {
          color: 8683230,
          image: { url: "https://i.imgur.com/bAVEZpV.gif" }
        },
        {
          title: "﹒                    P͟a͟g͟e͟ Z͟e͟r͟o͟.",
          description: "**رتب التفاعل | XP ROLES ** <:XP:1376685836745310248>",
          color: 8683230
        },
        {
          title: "﹒                    P͟a͟g͟e͟ O͟n͟e͟.",
          description:
            "**| TEXT: LVL: 1 | VOICE LVL: 1 |**\n> <@&1368210169112301569>\n**المميزات: انت فراولة**\n\n**| TEXT LVL: 5 | VOICE LVL: 4 |**\n> <@&1368210165911781396>\n**المميزات: إضافة رياكشن على الرسائل**\n\n**| TEXT LVL: 15 | VOICE LVL: 12 |**\n> <@&1368210162942349363>\n**المميزات: لون جديد - كل ماسبق**\n\n**| TEXT LVL: 21 | VOICE LVL: 18 |**\n> <@&1368210161302241462>\n**المميزات: لون جديد - كل ماسبق**",
          color: 8683230
        },
        {
          title: "﹒                    P͟a͟g͟e͟ T͟w͟o͟.",
          description:
            "**| TEXT LVL: 40 | VOICE LVL: 32 |**\n> <@&1368210159737901166>\n**المميزات: مشاركة الملفات - كل ماسبق**\n\n**| TEXT LVL: 50 | VOICE LVL: 38 |**\n> <@&1368210157590548681> <:nebula:1378073418833854594>\n**المميزات: تغيير الون - شات الداعمين - كل ماسبق**\n\n**| TEXT LVL: 60 | VOICE LVL: 55 |**\n> <@&1368210153106575391> <:galaxy:1378073567593369681>\n**المميزات: تغيير الاسم - كل ماسبق**\n\n**| TEXT LVL: 100 | VOICE LVL: 90 |**\n> <@&1368210142482534411> <:universe:1378073753803558934>\n**المميزات: قائمة الاعضاء - فرصة اضافية بنسبة 50% للقبول في الإدارة - كل ماسبق**",
          color: 8683230
        }
      ],
      attachments: []
    };

    await message.channel.send(payload);
  }
});

client.login(process.env.TOKEN);
