"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function getRole(rl) {
    return rl;
}
const r = getRole(Role.Admin);
console.log(r);
// command to run the code: tsc typescripts/1.ts && node typescripts/1.js
