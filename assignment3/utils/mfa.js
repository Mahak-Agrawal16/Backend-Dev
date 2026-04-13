import speakeasy from "speakeasy";
export const generateMFA = () => {
  return speakeasy.generateSecret();
};
export const verifyMFA = (secret, token) => {
  return speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token
  });
};