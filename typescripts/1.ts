enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function getRole(rl: Role): Role {
  return rl;
}

const r:Role = getRole(Role.Admin);
console.log(r);

// command to run the code: tsc typescripts/1.ts && node typescripts/1.js