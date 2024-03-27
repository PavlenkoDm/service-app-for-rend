// Start //
const startButton = document.getElementById('nwapp-start');
const stopButton = document.getElementById('nwapp-stop');
startButton.addEventListener('click', newsWebAppOnStart);
stopButton.addEventListener('click', newsWebAppOnStop);

let intervalID;

async function newsWebAppOnStart(event) {
  try {
    if (event.target.id === 'nwapp-start') {
      console.log('Start news-web-app service');
      intervalID = setInterval(checkStatus, 60000);
    }
  } catch (error) {
    console.log(error);
  }
}

async function newsWebAppOnStop(event) {
  try {
    if (event.target.id === 'nwapp-stop') {
      console.log('Stop news-web-app service');
      if (intervalID) clearInterval(intervalID);
    }
  } catch (error) {
    console.log(error);
  }
}

async function checkStatus() {
  const response = await fetch('https://news-webapp-express.onrender.com/api/service');
  const data = await response.json();
  console.log(data);
}
