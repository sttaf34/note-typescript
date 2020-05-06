import { add } from "../../../note/javascript/library.js"

// library.js と同階層に置いてある library.d.ts も見てくれるようで
// add の型情報も認識されている
const result = add(3, 5)
console.log(result)
