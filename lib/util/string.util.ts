interface String {
  trim(chars?: string): string;
  rtrim(chars?: string): string;
  ltrim(chars?: string): string;
}

String.prototype.trim = function (chars: string = "\\s") {
  return this.rtrim(chars).ltrim(chars);
};

String.prototype.rtrim = function (chars: string = "\\s") {
  return this.replace(new RegExp(`[${chars}]+$`, "g"), "");
};

String.prototype.ltrim = function (chars: string = "\\s") {
  return this.replace(new RegExp(`^[${chars}]+$`, "g"), "");
};
