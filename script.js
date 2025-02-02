function updateTime() {
  const utcTimeElement = document.getElementById('utcTime');
  const now = new Date();
  utcTimeElement.textContent = `UTC Time: ${now.toUTCString()}`;
}
updateTime();
