const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let Asreaper = "https://discord.gg/hkjaWkTNqQ"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('** quibble kayıt botu **')
    .addField('Komutlar:', 
    `
    [<a:siyah:1006287163257782454> **•|!kontrol Kayıt** Sisteminin Açık Kapalı Kontrolünü Ayarlarsınız ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-mesaj-embed** Kayıt Loga giden Hoşgeldin Mesajı Ayarlaması Yaparsınız ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-mesaj** Kayıt Mesajını Ayarlarsınız ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-otoisim** Sunucuya Giren Üyenin İsmini Otomatik Değiştir ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-otoisim-kapat**](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-oto-rol** Sunucuya Giren Üyeye Otomatik Rol Ayarlarsınız ÖRN: Kayıtsız ](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!profil**](${Asreaper})
    [<a:siyah:1006287163257782454> **•|!kayıt-ek-rol** Kayıt Ederken EK Rol Ayarlarsınız. ](${Asreaper})`)
    
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
    name: "yardım2"
}