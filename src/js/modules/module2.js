var result = document.querySelector('.test2');

var sharedWorker2 = new SharedWorker('./build/sharedWorker.js');

sharedWorker2.port.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from sharedworker2', e.data);
}


  sharedWorker2.port.postMessage([8,8]);