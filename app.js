// const video = document.getElementById('video')

// const starVideo = () => {
//   navigator.getUserMedia(
//     { video: {} },
//     (stream) => (video.srcObject = stream),
//     (err) => console.log(err)
//   )
// }
console.log(faceapi)
faceapi.nets.tinyFaceDetector.loadFromUri('./models')
// faceapi.nets.tinyFaceDetector.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights')
// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
//   // faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
//   // faceapi.nets.faxeRecognitionNet.loadFromUri('./models'),
//   // faceapi.nets.faceExpressionNet.loadFromUri('./models'),
// ]).then(starVideo())

// video.addEventListener('play', () => {
//   setInterval(async() => {
//     const detections = await faceapi
//       .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
//       .withFaceLandmarks()
//       .withFaceExpressions()
//       console.log(detections)
//   }, 100)
// })
