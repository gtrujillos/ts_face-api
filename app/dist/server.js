var a4_0x4b88=['.env','config','.env.example','MainService','init','__importDefault','__esModule','defineProperty','dotenv','default','existsSync'];(function(_0x22f8b3,_0x233173){var _0x4f1eaf=function(_0xb9e32d){while(--_0xb9e32d){_0x22f8b3['push'](_0x22f8b3['shift']());}};_0x4f1eaf(++_0x233173);}(a4_0x4b88,0x1d3));var a4_0x3ee9=function(_0x82003b,_0x2969ad){_0x82003b=_0x82003b-0x0;var _0x19fc6d=a4_0x4b88[_0x82003b];return _0x19fc6d;};'use strict';var __importDefault=this&&this[a4_0x3ee9('0x0')]||function(_0x36363e){return _0x36363e&&_0x36363e[a4_0x3ee9('0x1')]?_0x36363e:{'default':_0x36363e};};Object[a4_0x3ee9('0x2')](exports,a4_0x3ee9('0x1'),{'value':!![]});const dotenv_1=__importDefault(require(a4_0x3ee9('0x3')));const fs_1=__importDefault(require('fs'));const mainService_1=require('./services/mainService');if(fs_1[a4_0x3ee9('0x4')][a4_0x3ee9('0x5')](a4_0x3ee9('0x6'))){dotenv_1['default']['config']({'path':a4_0x3ee9('0x6')});}else{dotenv_1[a4_0x3ee9('0x4')][a4_0x3ee9('0x7')]({'path':a4_0x3ee9('0x8')});}const mainService=new mainService_1[(a4_0x3ee9('0x9'))]();mainService[a4_0x3ee9('0xa')]();