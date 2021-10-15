const video = document.getElementById('video')

const starVideo = () => {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.log(err)
  )
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(
    'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
  ),
  faceapi.nets.faceLandmark68Net.loadFromUri(
    'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
  ),
  faceapi.nets.faceRecognitionNet.loadFromUri(
    'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
  ),
  faceapi.nets.faceExpressionNet.loadFromUri(
    'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
  ),
]).then(starVideo())

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)

  const displaySize = {
    width: video.width,
    height: video.height,
  }
  faceapi.matchDimensions(canvas, displaySize)

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
    if (detections.length) {
      const resizeDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      faceapi.draw.drawDetections(canvas, resizeDetections)
      faceapi.draw.drawFaceLandmarks(canvas, resizeDetections)
      faceapi.draw.drawFaceExpressions(canvas, resizeDetections)
    }
  }, 100)
})
