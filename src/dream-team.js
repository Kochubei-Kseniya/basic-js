const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];
  if (!Array.isArray(members)) return false;
  members.forEach((member) => {
    if (typeof member == "string") {
      dreamTeamName.push(member.trim()[0].toUpperCase());
    }
    return dreamTeamName;
  });
 if (dreamTeamName.length > 0) 
 return dreamTeamName.sort().join("");
 else return false;
 };
