
var images = [],
index = 0;

images[0] = "<a href = 'https://play.google.com/store/apps/details?id=com.mungmedia.stikermuslim'><img src='https://1.bp.blogspot.com/-6rxs1XiRNbQ/XfFpFesPt9I/AAAAAAAAW1U/qa0zHQcfXuQ-G9fiNzx6WwpnfyItOI0TACLcBGAsYHQ/s1600/Stiker%2BWA%2BIslami.gif' alt='Visit Computer Hope'></a>";
images[1] = "<a href = 'https://play.google.com/store/apps/details?id=com.mungmedia.nasihatulama'><img src='https://1.bp.blogspot.com/-B_7vVkjItTA/XfII9voHP9I/AAAAAAAAW1c/07ZgIg_z7Wk4gaxTi9PWMq2Ju-Ass3ILwCLcBGAsYHQ/s1600/Stiker-Nasihat-Ulama.gif' alt='Download Stiker Nasihat Ulama'></a>";
images[2] = "<a href = 'https://play.google.com/store/apps/details?id=com.mungmedia.stikerviral'><img src='https://1.bp.blogspot.com/-C2AAHkjqIk0/XfN94PlEUZI/AAAAAAAAW2I/A-QQnFpBFmsdx84X7QQbBa5oKx4D4Z3cQCLcBGAsYHQ/s1600/Stiker-Lucu-Viral.gif' alt='Aplikasi Khutbah Jumat NU'></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);
