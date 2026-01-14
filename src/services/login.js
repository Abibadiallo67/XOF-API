
import argon2 from "argon2";
import { signAccessToken } from "../utils/jwt.js";

export async function login(req,res){
  const { email,password } = req.body;
  // demo user
  const user = { id:"1", email, passwordHash: await argon2.hash("password"), roles:["admin"]};

  if(!await argon2.verify(user.passwordHash,password)){
    return res.status(401).end();
  }

  const token = signAccessToken(user);
  res.json({ access_token: token });
}
