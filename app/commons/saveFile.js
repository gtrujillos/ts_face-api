var a3_0x1146=['defineProperty','path','resolve','../out','mkdirSync','writeFileSync','saveFile','__importStar','__esModule','hasOwnProperty','call'];(function(_0x1a379f,_0x22ae03){var _0x2f4c4b=function(_0x3b5706){while(--_0x3b5706){_0x1a379f['push'](_0x1a379f['shift']());}};_0x2f4c4b(++_0x22ae03);}(a3_0x1146,0x188));var a3_0x28b2=function(_0x59aae1,_0x22bc9f){_0x59aae1=_0x59aae1-0x0;var _0x29668c=a3_0x1146[_0x59aae1];return _0x29668c;};'use strict';var __importStar=this&&this[a3_0x28b2('0x0')]||function(_0x2e7adf){if(_0x2e7adf&&_0x2e7adf[a3_0x28b2('0x1')])return _0x2e7adf;var _0x3b0863={};if(_0x2e7adf!=null)for(var _0x23579f in _0x2e7adf)if(Object[a3_0x28b2('0x2')][a3_0x28b2('0x3')](_0x2e7adf,_0x23579f))_0x3b0863[_0x23579f]=_0x2e7adf[_0x23579f];_0x3b0863['default']=_0x2e7adf;return _0x3b0863;};Object[a3_0x28b2('0x4')](exports,a3_0x28b2('0x1'),{'value':!![]});const fs=__importStar(require('fs'));const path=__importStar(require(a3_0x28b2('0x5')));const baseDir=path[a3_0x28b2('0x6')](__dirname,a3_0x28b2('0x7'));function saveFile(_0x16654c,_0x23749c){if(!fs['existsSync'](baseDir)){fs[a3_0x28b2('0x8')](baseDir);}fs[a3_0x28b2('0x9')](path['resolve'](baseDir,_0x16654c),_0x23749c);}exports[a3_0x28b2('0xa')]=saveFile;