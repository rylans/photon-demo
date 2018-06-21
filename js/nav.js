function hideAllPanes() {
  // hide All content panes
  var nodeList = document.querySelectorAll('.pane-view');
  for(var i = 0; i < nodeList.length; i++){
    nodeList[i].style.display = 'none';
  }

  // de-activate all side navigation items
  var sideNavItems = $('.pane-group').find('.nav-group-item')
  for(var i = 0; i < sideNavItems.length; i++){
    $(sideNavItems[i]).removeClass('active');
  }

}

function activate(elem) {
  elem.addClass('active');
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
  const homeBtn = document.getElementById('btn-home');
  const downloadBtn = document.getElementById('btn-downloads');
  const documentsBtn = document.getElementById('btn-documents');

  hideAllPanes();
  showHomeView();
  activate($(homeBtn));

  homeBtn.addEventListener('click', () => { 
    hideAllPanes();
    showHomeView();
    activate($(homeBtn));
  });

  downloadBtn.addEventListener('click', () => {
    hideAllPanes();
    showDownloadsView();
    activate($(downloadBtn))
  });

  documentsBtn.addEventListener('click', () => {
    hideAllPanes();
    showDocumentsView();
    activate($(documentsBtn));
  });

});
