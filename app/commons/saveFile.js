var a3_0x3d89=['resolve','existsSync','saveFile','__importStar','__esModule','hasOwnProperty','call','default','defineProperty','path'];(function(_0x46952e,_0x51c350){var _0xeabfb1=function(_0x3d723a){while(--_0x3d723a){_0x46952e['push'](_0x46952e['shift']());}};_0xeabfb1(++_0x51c350);}(a3_0x3d89,0x99));var a3_0x47b4=function(_0x3fa0a3,_0x29685e){_0x3fa0a3=_0x3fa0a3-0x0;var _0x359b9d=a3_0x3d89[_0x3fa0a3];return _0x359b9d;};'use strict';var __importStar=this&&this[a3_0x47b4('0x0')]||function(_0x4f6474){if(_0x4f6474&&_0x4f6474[a3_0x47b4('0x1')])return _0x4f6474;var _0x489eae={};if(_0x4f6474!=null)for(var _0x4a8576 in _0x4f6474)if(Object[a3_0x47b4('0x2')][a3_0x47b4('0x3')](_0x4f6474,_0x4a8576))_0x489eae[_0x4a8576]=_0x4f6474[_0x4a8576];_0x489eae[a3_0x47b4('0x4')]=_0x4f6474;return _0x489eae;};Object[a3_0x47b4('0x5')](exports,a3_0x47b4('0x1'),{'value':!![]});const fs=__importStar(require('fs'));const path=__importStar(require(a3_0x47b4('0x6')));const baseDir=path[a3_0x47b4('0x7')](__dirname,'../out');function saveFile(_0x1a9f96,_0x1e6b57){if(!fs[a3_0x47b4('0x8')](baseDir)){fs['mkdirSync'](baseDir);}fs['writeFileSync'](path['resolve'](baseDir,_0x1a9f96),_0x1e6b57);}exports[a3_0x47b4('0x9')]=saveFile;