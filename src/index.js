import { getFilenameFromContentDispositionHeader } from './attachment.js';

const header = `attachment; filename="FQ0-L%EF%BC%8A%EF%BC%8A-C-004%206.6kV%E7%94%B5%E6%9C%BA%E7%BB%9D%E7%BC%98%E6%B5%8B%E9%87%8F%EF%BC%88VD4%E5%9E%8B%E6%96%AD%E8%B7%AF%E5%99%A8%2C3455-20%E5%9E%8B%E7%BB%9D%E7%BC%98%E8%A1%A8%EF%BC%89%20001%2007.pdf"; filename*=UTF-8''FQ0-L%EF%BC%8A%EF%BC%8A-C-004%206.6kV%E7%94%B5%E6%9C%BA%E7%BB%9D%E7%BC%98%E6%B5%8B%E9%87%8F%EF%BC%88VD4%E5%9E%8B%E6%96%AD%E8%B7%AF%E5%99%A8%2C3455-20%E5%9E%8B%E7%BB%9D%E7%BC%98%E8%A1%A8%EF%BC%89%20001%2007.pdf`

let filename = getFilenameFromContentDispositionHeader(header)

console.log(filename);
