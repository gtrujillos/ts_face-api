var a5_0x29bc=['done','value','then','apply','__esModule','hasOwnProperty','call','default','defineProperty','face-api.js','../commons','net','fs-extra','/Users/admin/Documents/Projects/PassControl/Development/passcontrol.client_app/media/files/','authorized_driver.jpg','current_driver.jpg','faceDetectionNet','loadFromDisk','nets','faceLandmark68Net','../weights','faceRecognitionNet','canvas','loadImage','computeFaceDescriptor','faceDetectionOptions','detectAllFaces','utils','euclideanDistance','prototype','slice','length','log','(no\x20reference\x20face)','(no\x20query\x20face)','result','/Users/admin/Documents/Projects/PassControl/Development/passcontrol.client_app/media/files/location.txt','existsSync','readFileSync','toString','locationResult:','connect','write','<EOF>','Received:\x20','destroy','close','Connection\x20closed','error','next','throw'];(function(_0x282114,_0x2dd202){var _0x348c6d=function(_0x4df070){while(--_0x4df070){_0x282114['push'](_0x282114['shift']());}};_0x348c6d(++_0x2dd202);}(a5_0x29bc,0x1c9));var a5_0x1c61=function(_0x5b1979,_0xe20d2f){_0x5b1979=_0x5b1979-0x0;var _0x3aa5ad=a5_0x29bc[_0x5b1979];return _0x3aa5ad;};'use strict';var __awaiter=this&&this['__awaiter']||function(_0x40dbb3,_0x2aa57f,_0x2ad816,_0x50b8a6){function _0x5d52f1(_0x42b5dd){return _0x42b5dd instanceof _0x2ad816?_0x42b5dd:new _0x2ad816(function(_0xb171e4){_0xb171e4(_0x42b5dd);});}return new(_0x2ad816||(_0x2ad816=Promise))(function(_0x1c5f5c,_0x4926bb){function _0x4d9c90(_0x2747a3){try{_0x541707(_0x50b8a6[a5_0x1c61('0x0')](_0x2747a3));}catch(_0x406b01){_0x4926bb(_0x406b01);}}function _0x540799(_0x17d45f){try{_0x541707(_0x50b8a6[a5_0x1c61('0x1')](_0x17d45f));}catch(_0x1de09b){_0x4926bb(_0x1de09b);}}function _0x541707(_0x5c11d0){_0x5c11d0[a5_0x1c61('0x2')]?_0x1c5f5c(_0x5c11d0[a5_0x1c61('0x3')]):_0x5d52f1(_0x5c11d0[a5_0x1c61('0x3')])[a5_0x1c61('0x4')](_0x4d9c90,_0x540799);}_0x541707((_0x50b8a6=_0x50b8a6[a5_0x1c61('0x5')](_0x40dbb3,_0x2aa57f||[]))[a5_0x1c61('0x0')]());});};var __importStar=this&&this['__importStar']||function(_0x15fe20){if(_0x15fe20&&_0x15fe20[a5_0x1c61('0x6')])return _0x15fe20;var _0x25a9d7={};if(_0x15fe20!=null)for(var _0x286d6e in _0x15fe20)if(Object[a5_0x1c61('0x7')][a5_0x1c61('0x8')](_0x15fe20,_0x286d6e))_0x25a9d7[_0x286d6e]=_0x15fe20[_0x286d6e];_0x25a9d7[a5_0x1c61('0x9')]=_0x15fe20;return _0x25a9d7;};Object[a5_0x1c61('0xa')](exports,a5_0x1c61('0x6'),{'value':!![]});const faceapi=__importStar(require(a5_0x1c61('0xb')));const commons_1=require(a5_0x1c61('0xc'));const net=require(a5_0x1c61('0xd'));const fsExtra=require(a5_0x1c61('0xe'));const folder=a5_0x1c61('0xf');const REFERENCE_IMAGE=folder+a5_0x1c61('0x10');const QUERY_IMAGE=folder+a5_0x1c61('0x11');const threshold=0.6;let previousResult='0';let countResult=0x0;function init(){return __awaiter(this,void 0x0,void 0x0,function*(){yield commons_1[a5_0x1c61('0x12')][a5_0x1c61('0x13')]('../weights');yield faceapi[a5_0x1c61('0x14')][a5_0x1c61('0x15')][a5_0x1c61('0x13')](a5_0x1c61('0x16'));yield faceapi[a5_0x1c61('0x14')][a5_0x1c61('0x17')][a5_0x1c61('0x13')](a5_0x1c61('0x16'));setInterval(()=>{run();},0x3e8);});}function run(){return __awaiter(this,void 0x0,void 0x0,function*(){const _0x36c6a6=yield commons_1[a5_0x1c61('0x18')][a5_0x1c61('0x19')](REFERENCE_IMAGE)['catch'](function(_0x3e3156){});const _0x1e9e81=yield faceapi[a5_0x1c61('0x1a')](_0x36c6a6);const _0x151bd2=yield faceapi['detectAllFaces'](_0x36c6a6,commons_1[a5_0x1c61('0x1b')]);const _0x230f38=yield commons_1[a5_0x1c61('0x18')][a5_0x1c61('0x19')](QUERY_IMAGE)['catch'](function(_0x550fbc){});const _0x18d5c9=yield faceapi['computeFaceDescriptor'](_0x230f38);const _0x333808=yield faceapi[a5_0x1c61('0x1c')](_0x230f38,commons_1[a5_0x1c61('0x1b')]);const _0x991246=faceapi[a5_0x1c61('0x1d')]['round'](faceapi[a5_0x1c61('0x1e')](Array[a5_0x1c61('0x1f')][a5_0x1c61('0x20')]['call'](_0x1e9e81),Array['prototype'][a5_0x1c61('0x20')]['call'](_0x18d5c9)));let _0x52cace='0';if(_0x151bd2[a5_0x1c61('0x21')]==0x0){console[a5_0x1c61('0x22')](a5_0x1c61('0x23'),new Date(),_0x991246);}else if(_0x333808[a5_0x1c61('0x21')]==0x0){console[a5_0x1c61('0x22')](a5_0x1c61('0x24'),new Date(),_0x991246);}else{if(_0x991246>threshold){console['log']('(no\x20match)',new Date(),_0x991246);}else{console['log']('(match)',new Date(),_0x991246);_0x52cace='1';}}if(_0x52cace==previousResult){countResult++;}else{countResult=0x0;}previousResult=_0x52cace;console[a5_0x1c61('0x22')](a5_0x1c61('0x25'),_0x52cace,countResult);if(countResult==0x5){sendFaceResult(_0x52cace);const _0xd5b662=a5_0x1c61('0x26');let _0x32d742='';if(fsExtra[a5_0x1c61('0x27')](_0xd5b662)){_0x32d742=JSON['parse'](fsExtra[a5_0x1c61('0x28')](_0xd5b662)[a5_0x1c61('0x29')]());}console[a5_0x1c61('0x22')](a5_0x1c61('0x2a'),_0x32d742);}});}function sendFaceResult(_0x44dcfd){const _0x4d5611=new net['Socket']();try{_0x4d5611[a5_0x1c61('0x2b')](0x2af8,'192.168.0.104',function(){console[a5_0x1c61('0x22')]('Connected');_0x4d5611[a5_0x1c61('0x2c')](_0x44dcfd+a5_0x1c61('0x2d'));});_0x4d5611['on']('data',function(_0x225616){console['log'](a5_0x1c61('0x2e')+_0x225616);_0x4d5611[a5_0x1c61('0x2f')]();});_0x4d5611['on'](a5_0x1c61('0x30'),function(){console[a5_0x1c61('0x22')](a5_0x1c61('0x31'));});}catch(_0x2eb11f){console[a5_0x1c61('0x22')](a5_0x1c61('0x32'),_0x2eb11f);}}init();