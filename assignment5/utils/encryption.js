import crypto from "crypto";
const key = Buffer.from(process.env.ENCRYPTION_KEY);
export const encrypt = (text) => {
  const cipher = crypto.createCipheriv("aes-256-ecb", key, null);
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
};