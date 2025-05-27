const dayPanel = document.getElementById('day-panel');
const nightPanel = document.getElementById('night-panel');
const dayPanelContainer = document.getElementById('day-panel-container');
const nightPanelContainer = document.getElementById('night-panel-container');
const choiceButtons = document.getElementById('choice-buttons');
const chooseDay = document.getElementById('choose-day');
const chooseNight = document.getElementById('choose-night');
const switchToNight = document.getElementById('switch-to-night');
const switchToDay = document.getElementById('switch-to-day');
const easterEggBtn = document.getElementById('easter-egg-btn');
const lebronPanel = document.getElementById('lebron-panel');
const homeButton = document.getElementById('home-button');
const toggleLabel = document.getElementById('toggle-label');

let easterActive = false;

function showPanel(isDay) {
  if (easterActive) return;

  choiceButtons.style.display = 'none';
  toggleLabel.style.display = 'none';

  dayPanelContainer.style.display = 'none';
  nightPanelContainer.style.display = 'none';
  dayPanel.classList.remove('active');
  nightPanel.classList.remove('active');

  if (isDay) {
    document.body.classList.remove('night');
    dayPanelContainer.style.display = 'flex';
    dayPanel.classList.add('active');
  } else {
    document.body.classList.add('night');
    nightPanelContainer.style.display = 'flex';
    nightPanel.classList.add('active');
  }
}

// Initial state setup
choiceButtons.style.display = 'flex';
dayPanelContainer.style.display = 'none';
nightPanelContainer.style.display = 'none';

chooseDay.addEventListener('click', () => showPanel(true));
chooseNight.addEventListener('click', () => showPanel(false));

switchToNight.addEventListener('click', () => showPanel(false));
switchToDay.addEventListener('click', () => showPanel(true));

homeButton.addEventListener('click', () => {
  choiceButtons.style.display = 'flex';
  toggleLabel.style.display = 'block';
  dayPanelContainer.style.display = 'none';
  nightPanelContainer.style.display = 'none';
  dayPanel.classList.remove('active');
  nightPanel.classList.remove('active');
  document.body.classList.remove('night');
  easterActive = false;
  lebronPanel.style.display = 'none';
});

easterEggBtn.addEventListener('click', () => {
  easterActive = !easterActive;
  if (easterActive) {
    choiceButtons.style.display = 'none';
    toggleLabel.style.display = 'none';
    dayPanelContainer.style.display = 'none';
    nightPanelContainer.style.display = 'none';
    dayPanel.classList.remove('active');
    nightPanel.classList.remove('active');
    lebronPanel.style.display = 'block';
  } else {
    lebronPanel.style.display = 'none';
    if (document.body.classList.contains('night')) {
      showPanel(false);
    } else {
      showPanel(true);
    }
  }
});