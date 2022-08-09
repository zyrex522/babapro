let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
    Selam, Kayıt Alınacak Rolü Ayarlamak İçin **Kayıtsız** Bir Seçenek Girmen Gerek Aşşağıda Seçenekleri Bıraktım:
    <a:ZplayanimenGif:1006287089547087912>\`${prefix}k-alınacak-rol @rol\`
    <a:ZplayanimenGif:1006287089547087912>\`${prefix}k-alınacak-rol kapat\`
    Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))

    
  
  
  if(args[0] == 'kapat'){
      if(!db.has(`kayıtalınacakrol.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2}<a:dikkat:1006286919753289869> **•| Sistem Zaten Kapalı!**`).setColor(hata))
      db.delete(`kayıtalınacakrol.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2}<a:siyah:1006287163257782454> **•| Kayıt alınacak rolü başarıyla kapatıldı!**`).setColor(oldu))
    return
  }
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2}<a:dikkat:1006286919753289869> **•| Bir rol etiketlemelisin!**`).setColor(hata))

    if(db.has(`kayıtalınacakrol.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2}<a:dikkat:1006286919753289869> **•| Sistem Zaten Açık!**`).setColor(hata))

  db.set(`kayıtalınacakrol.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2}<a:siyah:1006287163257782454> **•| Kayıt alınacak rolü başarıyla ${type} olarak ayarlandı!**`).setColor(oldu))
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-alınacak-rol", "kayıtalınacakrol"],
  kategori: "moderasyon",
  permLevel: 0
  
};

module.exports.help = {
  name: 'kayıt-alınacak-rol'
  
};
