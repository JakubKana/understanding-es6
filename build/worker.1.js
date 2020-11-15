//console.log("WORKER OUT OF BOX");

onmessage = function(e) {
   console.log('Message received from main script');
    

    if(e.data === 'error') {
      throw new Error('Error thrown from worker')
    }
var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
   console.log('Posting message back to main script');
   postMessage(workerResult);
 }

 onerror = function(e) {
    console.log("onerror triggered on worker", e.data);
 }