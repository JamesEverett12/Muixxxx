

module.exports = {
  TOKEN: "OTk0NjMzMDc4OTI2NDgzNTY3.G2db5P.wbib73oaSZrAG_-MxixaBKOROAHyZPu4xVIvk8",
  language: "en",
  ownerID: ["855864164387389442", "469158095424061441"], 
  mongodbUri : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
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
