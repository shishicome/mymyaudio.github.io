// 음악을 제어할 수 있는 함수 (예: 일시 정지/재생)
const audioPlayer = document.getElementById('bgm');

// 일시 정지/재생 함수
function toggleAudio() {
    if (audioPlayer.paused) {
        audioPlayer.play();  // 음악 재생
    } else {
        audioPlayer.pause();  // 음악 정지
    }
}
