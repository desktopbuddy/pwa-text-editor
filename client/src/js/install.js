const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Install!'
  console.log('running beforeinstallprompt');
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed';
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log("installed", 'appinstalled', event);
});
