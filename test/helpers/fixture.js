import fs from 'fs'
import path from 'path'

let fixture = (filename) => fs.readFileSync(path.resolve(__dirname, `../fixtures/${filename}`), 'utf8')

export default fixture
