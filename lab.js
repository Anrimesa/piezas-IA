// Function to create the modal and render the tree
function createModalWithTree(widgetConfig) {
    
    // Create the modal
    var modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.left = '500px'
    modal.style.top = '100px'
    modal.style.position = 'absolute'


    var titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    titleBar.textContent = 'Draggable Title';

    var closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.textContent = 'X';

    var treeContainer = document.createElement('div');
    treeContainer.id = 'tree';

    var collapseButton = document.createElement('button');
    collapseButton.className = 'collapse-all-button';
    collapseButton.textContent = 'Collapse all';

    titleBar.appendChild(closeButton);
    modal.appendChild(titleBar);
    modal.appendChild(treeContainer);
    modal.appendChild(collapseButton);
    document.body.appendChild(modal);

    // Initialize the tree view
    var treeData = [widgetConfig];

    // Create a simple unordered list to represent the tree
    function renderTree(data, container, level = 0) {
        var ul = document.createElement('ul');
        if (level > 0) {
            ul.style.display = 'none'; // Initially hide the list
        }
        for (var key in data) {
            var li = document.createElement('li');
            li.textContent = key;
            if (typeof data[key] === 'object') {
                var span = document.createElement('span');
                span.textContent = '+ ';
                span.style.cursor = 'pointer';
                span.onclick = function() {
                    var childUl = this.nextElementSibling;
                    if (childUl) {
                        if (childUl.style.display === 'none') {
                            childUl.style.display = 'block';
                            this.textContent = '- ';
                        } else {
                            childUl.style.display = 'none';
                            this.textContent = '+ ';
                        }
                    }
                };
                li.prepend(span);
                renderTree(data[key], li, level + 1);
            }else{
                li.textContent = key + ' : ' + data[key];
            }
            ul.appendChild(li);
        }
        container.appendChild(ul);
    }

    renderTree(treeData, treeContainer);

    // Add event listeners
    closeButton.addEventListener('click', function() {
      modal.remove();
    });

    collapseButton.addEventListener('click', function() {
        var uls = document.querySelectorAll('#tree ul');
        uls.forEach(function(ul) {
            if (ul.parentElement === treeContainer) {
                ul.style.display = 'block'; // Expand level 0
            } else {
                ul.style.display = 'none'; // Collapse other levels
            }
            var span = ul.previousElementSibling;
            if (span) {
                span.textContent = ul.style.display === 'none' ? '+ ' : '- '; // Update the collapse/expand sign
            }
        });
    });

    // Make the modal draggable
    var isDragging = false;
    var offset = { x: 0, y: 0 };
    titleBar.addEventListener('mousedown', function(e) {
      isDragging = true;
      offset.x = e.clientX - modal.getBoundingClientRect().left;
      offset.y = e.clientY - modal.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        modal.style.left = (e.clientX - offset.x) + 'px';
        modal.style.top = (e.clientY - offset.y) + 'px';
      }
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
    });

    // Create the Refresh button
    var refreshButton = document.createElement('button');
    refreshButton.id = 'refresh-button';
    refreshButton.textContent = 'Refresh';
    refreshButton.style.backgroundColor = '#008080'; // Windows 2000 title bar color
    refreshButton.style.color = 'white';
    refreshButton.style.padding = '5px';
    refreshButton.style.cursor = 'pointer';
    refreshButton.style.border = 'none';

    // Add event listener to the Refresh button
    refreshButton.addEventListener('click', function() {
        treeContainer.innerHTML = ''
        var treeData = [widgetConfig];
        renderTree(treeData, treeContainer);
    });

    // Append the Refresh button to the modal header
    var modalHeader = document.querySelector('.modal-header');
    modal.appendChild(refreshButton);

}

// Call the function with the widgetConfig

  // Call the function with the widgetConfig variable
  //createModalWithTree(widgetConfig);
  createModalWithTree(widgetConfig);
  console.log(widgetConfig)