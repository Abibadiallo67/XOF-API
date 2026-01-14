
import jwt from "jsonwebtoken";
import fs from "fs";

const privateKey = fs.readFileSync("./private.key");

export function signAccessToken(user){
  return jwt.sign(
    {
      sub:user.id,
      email:user.email,
      roles:user.roles,
      iss:"nexus-sso",
      aud:"personal-projects"
    },
    privateKey,
    { algorithm:"RS256", expiresIn:"10m" }
  );
}
