// Example: Update stats dynamically
function updateStats(kills, health) {
  document.querySelector('.kills').textContent = `Kills: ${kills}`;
  document.querySelector('.health').textContent = `Health: ${health}%`;
}

// Call this function to update stats
updateStats(15, 50);
