var a1_0x29bc=['nets','ssdMobilenetv1','SsdMobilenetv1Options','TinyFaceDetectorOptions','MtcnnOptions','faceDetectionOptions','__esModule','call','default','defineProperty','faceDetectionNet'];(function(_0x3c89f9,_0x3f89f1){var _0x41b5ff=function(_0xff9ae8){while(--_0xff9ae8){_0x3c89f9['push'](_0x3c89f9['shift']());}};_0x41b5ff(++_0x3f89f1);}(a1_0x29bc,0x1c9));var a1_0x1c61=function(_0x155e59,_0x185a42){_0x155e59=_0x155e59-0x0;var _0x811d77=a1_0x29bc[_0x155e59];return _0x811d77;};'use strict';var __importStar=this&&this['__importStar']||function(_0x40dbb3){if(_0x40dbb3&&_0x40dbb3[a1_0x1c61('0x0')])return _0x40dbb3;var _0x2ad816={};if(_0x40dbb3!=null)for(var _0x50b8a6 in _0x40dbb3)if(Object['hasOwnProperty'][a1_0x1c61('0x1')](_0x40dbb3,_0x50b8a6))_0x2ad816[_0x50b8a6]=_0x40dbb3[_0x50b8a6];_0x2ad816[a1_0x1c61('0x2')]=_0x40dbb3;return _0x2ad816;};Object[a1_0x1c61('0x3')](exports,'__esModule',{'value':!![]});const faceapi=__importStar(require('face-api.js'));exports[a1_0x1c61('0x4')]=faceapi[a1_0x1c61('0x5')][a1_0x1c61('0x6')];const minConfidence=0.5;const inputSize=0x198;const scoreThreshold=0.5;const minFaceSize=0x32;const scaleFactor=0.8;function getFaceDetectorOptions(_0x540799){return _0x540799===faceapi[a1_0x1c61('0x5')][a1_0x1c61('0x6')]?new faceapi[(a1_0x1c61('0x7'))]({'minConfidence':minConfidence}):_0x540799===faceapi['nets']['tinyFaceDetector']?new faceapi[(a1_0x1c61('0x8'))]({'inputSize':inputSize,'scoreThreshold':scoreThreshold}):new faceapi[(a1_0x1c61('0x9'))]({'minFaceSize':minFaceSize,'scaleFactor':scaleFactor});}exports[a1_0x1c61('0xa')]=getFaceDetectorOptions(exports[a1_0x1c61('0x4')]);