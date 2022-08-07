


 let config = {
   room1: {
     autoStart: true,
     roomName: `🏆 Thế Vận Hội 1 🏆`,
     noPlayer: true,
     maxPlayers: 30,
     public: true,
     geo: {code: "VN", lat: 21.02888, lon: 105.85464},
     roomScript: "/home/hqd_weew/haxball/tvhn.js",
   },
   room2: {
    autoStart: true,
    roomName: `🏆 Thế Vận Hội 2 🏆`,
    noPlayer: true,
    maxPlayers: 30,
    public: true,
    geo: {code: "VN", lat: 21.02888, lon: 105.85464},
    roomScript: "/home/hqd_weew/haxball/tvhn2.js",
  },
   pr1: {
    autoStart: true,
    roomName: `🏆 TVH Private Room 1  🏆`,
    noPlayer: true,
    maxPlayers: 30,
    public: false,
    geo: {code: "VN", lat: 21.02888, lon: 105.85464},
    roomScript: "/home/hqd_weew/haxball/tvhn3.js",
  },
   pr2: {
    autoStart: true,
    roomName: `🏆 TVH Private Room 2  🏆`,
    noPlayer: true,
    maxPlayers: 310,
    public: false,
    geo: {code: "VN", lat: 21.02888, lon: 105.85464},
    roomScript: "/home/hqd_weew/haxball/tvhn3.js",
  },

 };
 module.exports = config;
 
