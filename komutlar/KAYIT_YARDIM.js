const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let Asreaper = "desteksunucusulinki"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('** quibble Kayıt Botu. **')
    .addField("Yardım Menüsü", 
    `[<a:siyah:1006287163257782454> **•|!kayıt-alınacak-rol** = Kayıt Olan Kullanıcıdan Alınacak Rol ÖRN: Kayıtsız Rolü ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-destek** = Kayıt Destek Ekibini Ve Kayıt Ekibini Ayarlarsınız.](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-erkek-rol** = Kayıt Olan Erkeğe Verilecek Rol](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-isim-düzen** = Kayıt Edilen Kişinin İsim Düzen Ve Tag Ayarlarsınız](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-isimzorun** = isim Zorunlulugu Seneçenekleri](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-kadın-rol** = Kayıt Edilen Kadın Üyeye Verilecek Kadın Rolü](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-yetkili-rol** = Kayıtçı Yetkisini Ayarlarsınız](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-log** = Kayıt Loglarını Ayarlarsınız](${Asreaper})
    \n
    **!yardım2 = 2. Yardım Menüsü**
`)
    
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + Asreaper + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
message.channel.send('')
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım"
}