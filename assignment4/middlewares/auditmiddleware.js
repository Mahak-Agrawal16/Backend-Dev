import AuditLog from "../models/auditlog.js";

export const logAction = async (req, res, next) => {
  await AuditLog.create({
    user: req.session.user?.email,
    action: req.originalUrl
  });
  next();
};