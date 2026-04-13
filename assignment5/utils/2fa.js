import speakeasy from "speakeasy";
export const generate2FA = () => {
  return speakeasy.generateSecret();
};
export const verify2FA = (secret, token) => {
  return speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token
  });
};