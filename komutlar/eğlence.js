const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("VITOLA")
.setTitle(" VITOLA Eğlence Komutları ")
 .setTimestamp()
.setDescription(" **.tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **.mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **.fbi** = Bot FBi Gif Atar.  \n  **.token** = Tokenimi Öğrenmek İstemezmisin?  \n  **.düello** = Düello Atarsın.  \n  **.wasted** = Polis tarafından yakalanırsın.  \n  **.atatürk** = Dene ve gör... (1881-1938) ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}