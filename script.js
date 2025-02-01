function updateTimeUTC() {
  const now = new Date();
  const utcString = now.toLocaleString('en-NG', { timeZone: 'UTC' });

  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    'Current Time (UTC): ' + utcString;
}
updateTimeUTC();
setInterval(updateTimeUTC, 1000);
