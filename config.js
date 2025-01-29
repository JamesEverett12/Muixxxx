

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["855864164387389442", "469158095424061441"], 
  mongodbUri : "mongodb+srv://itzjamesyt11:<db_password>@cluster0.ge8py.mongodb.net/",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/8NhPxUzwWr",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
