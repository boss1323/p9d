export default {
  token: "YOUR_BOT_TOKEN_HERE",
  
  lavalink: {
    nodes: [
   
{
      name: "Anakin",
      password: "anakin",
      host: "us.apsara.lol",
      port:  25575,
      secure: false
    }

,
    ],
    defaultSearchPlatform: "ytmsearch",
    restVersion: "v4",
  },
  
  activities: [
    {
      type: "PLAYING",
      text: "TeamSpeakUser",
    },
    {
      type: "LISTENING",
      text: "TeamSpeakUser",
    },
    {
      type: "WATCHING",
      text: "TeamSpeakUser",
    },
    {
      type: "PLAYING",
      text: "TeamSpeakUser",
    },
    {
      type: "LISTENING",
      text: "TeamSPeakUser",
    },
    {
      type: "WATCHING",
      text: "TeamSPeakUser",
    },
  ],
  
  activityRotationInterval: 30000, 
};
