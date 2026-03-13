function toParamRegExp(attributePattern, flags) {
  return new RegExp("(?:^|;)\\s*" + attributePattern + "\\s*=\\s*" + "(" + '[^";\\s][^;\\s]*' + "|" + '"(?:[^"\\\\]|\\\\"?)+"?' + ")", flags);
}

function getFilenameFromContentDispositionHeader(contentDisposition) {
  let tmp = toParamRegExp("filename\*", "i").exec(contentDisposition);
  if (tmp) {
    return decodeURIComponent(tmp[1]);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    return decodeURIComponent(tmp[1]);
  }
  return ''

}

export default {
  getFilenameFromContentDispositionHeader,
}
