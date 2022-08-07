/* VARIABLES */

/* ROOM */

const roomName = "🏆 Thế Vận Hội - Bóng Chuyền 🏆";
const botName = "VolleyBot";
const maxPlayers = 10;
const roomPublic = false;
const geo = [{ "code": "IT", "lat": 41.9, "lon": 12.5 },{code: "VN", lat: 10.957413  , lon: 106.842687},];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[1] });

const scoreLimit = 12;
const timeLimit = 0;
room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(false);

var volleyMap = `{"name":"volleyball from HaxMaps","width":420,"height":200,"spawnDistance":299,"bg":{"type":"hockey","width":0,"height":0,"kickOffRadius":0,"cornerRadius":0},"vertexes":[{"x":-5,"y":20,"trait":"net"},{"x":5,"y":20,"trait":"net"},{"x":-3,"y":120,"trait":"net"},{"x":100,"y":200,"trait":"kickOffBarrier"},{"x":100,"y":-200,"trait":"kickOffBarrier"},{"x":-100,"y":200,"trait":"kickOffBarrier"},{"x":-100,"y":-200,"trait":"kickOffBarrier"},{"x":-385,"y":100,"trait":"line"},{"x":-400,"y":125,"trait":"line"},{"x":400,"y":125,"trait":"line"},{"x":385,"y":100,"trait":"line"},{"x":-70,"y":-50,"trait":"line"},{"x":70,"y":-50,"trait":"line"},{"x":3,"y":120,"trait":"net"},{"x":-385,"y":103,"trait":"line","color":"CFB795"},{"x":385,"y":103,"trait":"line","color":"CFB795"},{"x":-387,"y":106,"trait":"line","color":"CFB795"},{"x":387,"y":106,"trait":"line","color":"CFB795"},{"x":-388,"y":109,"trait":"line","color":"CFB795"},{"x":388,"y":109,"trait":"line","color":"CFB795"},{"x":-391,"y":112,"trait":"line","color":"CFB795"},{"x":391,"y":112,"trait":"line","color":"CFB795"},{"x":-394,"y":115,"trait":"line","color":"CFB795"},{"x":394,"y":115,"trait":"line","color":"CFB795"},{"x":-396,"y":118,"trait":"line","color":"CFB795"},{"x":396,"y":118,"trait":"line","color":"CFB795"},{"x":-396,"y":121,"trait":"line","color":"CFB795"},{"x":396,"y":121,"trait":"line","color":"CFB795"},{"x":-396,"y":122,"trait":"line","color":"CFB795"},{"x":396,"y":122,"trait":"line","color":"CFB795"},{"x":3,"y":20,"trait":"net"},{"x":0,"y":23,"trait":"net","color":"FFFFFF"},{"trait":"line","x":100,"y":101},{"trait":"line","x":106,"y":124},{"trait":"line","x":-100,"y":101},{"trait":"line","x":-106,"y":124},{"x":-3,"y":20,"trait":"net"}],"segments":[{"v0":0,"v1":1,"trait":"net"},{"v0":3,"v1":4,"trait":"kickOffBarrier","cGroup":["blueKO"]},{"v0":5,"v1":6,"trait":"kickOffBarrier","cGroup":["redKO"]},{"v0":0,"v1":11,"trait":"kickOffBarrier","cGroup":["blueKO"]},{"v0":1,"v1":12,"trait":"kickOffBarrier","cGroup":["redKO"]},{"v0":8,"v1":9,"trait":"line"},{"v0":10,"v1":7,"trait":"line"},{"v0":15,"v1":14,"trait":"line","y":103,"color":"CFB795"},{"v0":17,"v1":16,"trait":"line","y":106,"color":"CFB795"},{"v0":19,"v1":18,"trait":"line","y":109,"color":"CFB795"},{"v0":21,"v1":20,"trait":"line","y":112,"color":"CFB795"},{"v0":23,"v1":22,"trait":"line","y":115,"color":"CFB795"},{"v0":25,"v1":24,"trait":"line","y":118,"color":"CFB795"},{"v0":27,"v1":26,"trait":"line","y":121,"color":"CFB795"},{"v0":29,"v1":28,"trait":"line","y":122,"color":"CFB795"},{"vis":true,"color":"FFFFFF","trait":"line","v0":8,"v1":7},{"vis":true,"color":"FFFFFF","trait":"line","v0":10,"v1":9},{"vis":true,"color":"FFFFFF","trait":"line","v0":32,"v1":33},{"vis":true,"color":"FFFFFF","trait":"line","v0":34,"v1":35}],"goals":[{"p0":[0,114],"p1":[420,114],"team":"blue"},{"p0":[0,114],"p1":[-420,114],"team":"red"}],"discs":[{"pos":[0,25],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,35],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,45],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,55],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,65],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,75],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,85],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,95],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,105],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,115],"trait":"net","radius":4,"color":"6D6C6B"},{"pos":[0,-100000],"trait":"ballPush"}],"planes":[{"normal":[0,-1],"dist":-210,"cGroup":["ball"],"bCoef":0},{"normal":[0,1],"dist":-50,"cMask":["red"],"bCoef":-1},{"normal":[0,1],"dist":-50,"cMask":["blue"],"bCoef":-1},{"normal":[0,-1],"dist":-125,"cMask":["red","blue","ball"],"bCoef":0},{"normal":[1,0],"dist":0,"cMask":["blue"],"bCoef":0.1},{"normal":[-1,0],"dist":0,"cMask":["red"],"bCoef":0.1},{"normal":[1,0],"dist":-420,"cMask":["ball","red","blue"],"bCoef":0.6},{"normal":[-1,0],"dist":-420,"cMask":["ball","red","blue"],"bCoef":0.6},{"normal":[0,1],"dist":-199790,"cGroup":["ball"],"bCoef":0},{"normal":[-1,0],"dist":-100000,"cGroup":["ball"],"bCoef":0},{"normal":[1,0],"dist":-100000,"cGroup":["ball"],"bCoef":0}],"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.85,"acceleration":0.5,"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":20},"ballPhysics":{"radius":10,"bCoef":1,"invMass":0.9,"damping":0.98,"color":"FFFFFF","cMask":["wall"],"cGroup":["ball"]},"traits":{"net":{"vis":true,"bCoef":0,"invMass":0,"cMask":["ball"]},"line":{"vis":true,"cMask":[""],"color":"FFFFFF"},"redline":{"vis":true,"cMask":[""],"color":"FF4A4A"},"blueline":{"vis":true,"cMask":[""],"color":"6782FE"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"ballPush":{"radius":100000,"invMass":60,"cMask":["ball"],"bCoef":0,"color":"FFFFFFFF"}}}`;
room.setCustomStadium(volleyMap);

var adminPassword = 100 + getRandomInt(900);
console.log("adminPassword : " + adminPassword);

/* OPTIONS */

var drawTimeLimit = Infinity;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastPlayersTouched;
var totalTouches;
var goalCheering;
var potentialBugAbusing;
var abusingPosition;
var abusingTimeStamp;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }];
var ballSpeed;
var goldenGoal = false;
var abusingPlayer;
var oldX = 0;
var oldY = 0;
var blocked = false;

/* AUXILIARY */

var checkTimeVariable = false;

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt (max) { // return random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function arrayMin (arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

function getTime (scores) {
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance (p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* GAME FUNCTIONS */

function getPlayerCount (team) {
    var playerCount = 0
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if (players[i].team == team) {
            playerCount = playerCount + 1;
        }
    }
    return playerCount;
}

function getBallIndex () {
    for (var i = 0; i < room.getDiscCount(); i++) {
        if ((room.getDiscProperties(i).cGroup & room.CollisionFlags.ball) != 0) {
            return i;
        }
    }
    throw "Ball index not found!";
    return -1;
}

function givePenalty (team) {
    room.setDiscProperties(getBallIndex(), {x: team == Team.RED ? -415 : 415, y: 110, xspeed : 0, yspeed : 10});
    return;
}

cMask = room.CollisionFlags.ball | room.CollisionFlags.wall

/*  var dp = room.getDiscProperties(getBallIndex())
    room.sendChat(String(dp.cMask));
    room.sendChat(String(room.CollisionFlags.ball));
    cMask: room.CollisionFlags.kick */

function checkTime () {
    const scores = room.getScores();
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendChat("⚽ First goal wins! ⚽");
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ 60 seconds left until draw! ⌛");
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function endGame (winner) { // no stopGame() function in it
    const scores = room.getScores();
    if (winner == Team.RED) {
        room.sendChat("🔴 Red Team won " + scores.red + "-" + scores.blue + "!");
    }
    else if (winner == Team.BLUE) {
        room.sendChat("🔵 Blue Team won " + scores.blue + "-" + scores.red + "!");
    }
    else {
        room.sendChat("💤 Draw limit reached! 💤");
    }
}

/* PLAYER FUNCTIONS */

function updateTeams () {
    players = room.getPlayerList().filter((player) => player.id != 0);
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function updateAdmins () {
    if (players.length == 0 || players.find((player) => player.admin) != null) {
        return;
    }
    var copie = [];
    players.forEach(function (element) { copie.push(element.id); });
    room.setPlayerAdmin(arrayMin(copie), true); // Give admin to the player who's played the longest on the room
}

/* STATS FUNCTIONS */

function getStats () {
    const ballPosition = room.getBallPosition();
    point[1] = point[0];
    point[0] = ballPosition;
    ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
}

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
    room.sendChat("[PM] 👋 Welcome " + player.name + "!", player.id);
    updateTeams();
    updateAdmins();
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    updateTeams();
}

room.onPlayerLeave = function (player) {
    updateTeams();
    updateAdmins();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function(player, message) {

	
	if (message.includes('@here') || message.includes('@everyone')) {
		room.kickPlayer(player.id,'Ngôn từ không hợp lệ',true)
		return
	}
	if (message.startsWith("!")) {

		message = message.substr(1);
		let args = message.split(" ");
		var tb_message = message.substr(7)
		var report_message = message.substr(7)
		if (args[0] == "tbchat" && player.admin) {
			if (PlayerObject[player.name]['pl_data'].admin_level > 1){
				announce(tb_message,null,0xf56f42);
			}
			else{
				whisper("Không đủ quyền hạn", player.id);
			}
		}
	else if (args[0] == "teamred") { // team mode
		if (admin_control == false){
				let Red_Count = 0
				let Blue_Count = 0
				room.getPlayerList().forEach(function(player) {
					if (player.team == 1) {
						Red_Count += 1
					}
					else if (player.team == 2){
						Blue_Count += 1
					}
					})
					if (Red_Count < 6){
						room.setPlayerTeam(player.id,1)
						whisper('Bạn đã được di chuyển sang đội RED', player.id);
					}
					else if (Red_Count >= 6) { // RedPlayer_Count
						list_waiting[player.id] = 'red'
						whisper('Đội RED đã có đủ người chơi, bạn sẽ được thêm vào danh sách chờ', player.id);
					}
				else {
					whisper('Tính năng này đã được tắt do đang có admin điều khiển', player.id);
				}
			

		}
		}
		else if (args[0] == "teamblue") { // team mode
			if (admin_control == false){
				
					let Red_Count = 0
					let Blue_Count = 0
					room.getPlayerList().forEach(function(player) {
					if (player.team == 1) {
						Red_Count += 1
					}
					else if (player.team == 2){
						Blue_Count += 1
					}
					})
					if (Blue_Count < 6){
						room.setPlayerTeam(player.id,2)
						whisper('Bạn đã được di chuyển sang đội BLUE', player.id);
					}
					else if (Blue_Count >= 6) { // RedPlayer_Count
						list_waiting[player.id] = 'blue'
						whisper('Đội BLUE đã có đủ người chơi, bạn sẽ được thêm vào danh sách chờ', player.id);
					}
				else {
					whisper('Tính năng này đã được tắt do đang có admin điều khiển', player.id);
				}
			
			
	
		}
}
	}
room.onPlayerActivity = function (player) {
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    goldenGoal = false;
    totalTouches = 0;
    goalCheering = false;
    abusingTimeStamp = 0;
    potentialBugAbusing = false;
    abusingPosition = 0;
    lastPlayersTouched = [null, null];
    lastPlayersTouchedTime = Date.now();
    abusingPlayer = null;
}

room.onGameStop = function (byPlayer) {
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
}

room.onPlayerBallKick = function (player) {
    if (goalCheering) {
        return;
    }
    var teamCount = getPlayerCount(player.team);
    if (((lastPlayersTouched[0] != null && lastPlayersTouched[0].id == player.id) && teamCount != 1) && !blocked) {
        room.sendChat("❌ Penalty! " + player.name + " touched the ball twice!");
        givePenalty(player.team);
    }
    blocked = false;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == player.team && (Date.now() - lastPlayersTouchedTime) > 200) {
        totalTouches = totalTouches + 1;
        if (teamCount != 1) {
            if (totalTouches > 3) {
                room.sendChat("❌ Penalty! Too many passes!");
                givePenalty(player.team);
            }
        } else if (totalTouches > 2 ) {
            room.sendChat("❌ Penalty! " + player.name + " touched the ball thrice!");
                givePenalty(player.team);
        }
    } else { 
        if (lastPlayersTouched[0] != null && player.position.x >= -30 && player.position.x <= 30 && player.position.y <= 10){
            totalTouches = 0;
            blocked = true;
            room.sendChat("🏐 Nice block by " + player.name + "!");
        } else {
            totalTouches = 1
        }
    }
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
    lastPlayersTouchedTime = Date.now();
}

room.onTeamGoal = function (team) {
    goalCheering = true
    const scores = room.getScores();
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            room.sendChat("🏐 " + getTime(scores) + " Point for " + (team == Team.RED ? "🔴" : "🔵"));
        }
        else {
            room.sendChat("🏐 " + getTime(scores) + " Point for " + (team == Team.RED ? "🔴" : "🔵"));
        }
    }
    else {
        room.sendChat("🏐 " + getTime(scores) + " Point for " + (team == Team.RED ? "🔴" : "🔵"));
    }
    if (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit || goldenGoal == true) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
}

room.onPositionsReset = function () {
    goalCheering = false;
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
}



room.onGameTick = function () {
    if (!goalCheering && (room.getBallPosition().x * oldX < 0 && lastPlayersTouched[0] != null)) {

        var slope = (room.getBallPosition().x - oldX) != 0 ? (room.getBallPosition().y - oldY) / (room.getBallPosition().x - oldX) : 0;
        yAtNet = oldY + slope * Math.abs(oldX);

        if (yAtNet > 25 && (!abusingTimeStamp || Date.now() - abusingTimeStamp > 1000)) {
            room.sendChat("❌ Penalty! " + lastPlayersTouched[0].name + " bug abused!");
            givePenalty(lastPlayersTouched[0].team);
            abusingTimeStamp = Date.now();
        }
    }


    oldX = room.getBallPosition().x;
    oldY = room.getBallPosition().y;


    checkTime();
    getStats();
}