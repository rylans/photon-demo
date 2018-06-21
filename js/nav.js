function hideAllPanes() {
  var nodeList = document.querySelectorAll('.pane-view');
  for(var i = 0; i < nodeList.length; i++){
    nodeList[i].style.display = 'none';
  }
}

function showHomeView() {
  const homeNode = document.getElementById('view-home')
  homeNode.style.display = 'block';
}

function showDownloadsView() {
  const node  = document.getElementById('view-downloads');
  node.style.display = 'block';
  ipcRenderer.send('init-users', '');
}

function showDocumentsView() {
  const node  = document.getElementById('view-documents');
  node.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  hideAllPanes();
  showHomeView();

  const homeBtn = document.getElementById('btn-home');
  const downloadBtn = document.getElementById('btn-downloads');
  const documentsBtn = document.getElementById('btn-documents');

  homeBtn.addEventListener('click', () => { 
    hideAllPanes();
    showHomeView();
  });

  downloadBtn.addEventListener('click', () => {
    hideAllPanes();
    showDownloadsView();
  });

  documentsBtn.addEventListener('click', () => {
    hideAllPanes();
    showDocumentsView();
  });


});
