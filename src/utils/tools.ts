import DOMPurify from "dompurify";
import { marked } from "marked";

export function GetSafeHTMLStr(sourceStr: string) {
  return DOMPurify.sanitize(marked.parse(sourceStr));
}
