// Для трансляции
if (Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource(video.src);
  hls.attachMedia(video);
} else {
    console.log("Hello");
}

// Показывает сегодняшнюю дату
const datetime = new Date().toJSON().slice(0, 10);
document.getElementById('date').textContent = datetime;
