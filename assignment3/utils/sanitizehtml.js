import sanitizeHtml from "sanitize-html";

export const cleanHTML = (content) => {
  return sanitizeHtml(content, {
    allowedTags: ["b", "i", "p", "ul", "li"]
  });
};