function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make HTTP get request

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    
    this.http.onload = () => {
        if(this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('error: '+ this.http.status); 
        }
    }

    this.http.send();

   
}

// Make HTTP post request

easyHTTP.prototype.post = (url, data, callback) => {
    this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));
}


// Make HTTP put request

easyHTTP.prototype.put = (url, data, callback) => {
    this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        callback(null, this.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));
}

// Make HTTP delete request

easyHTTP.prototype.delete = (url, callback) => {
    this.http.open('DELETE', url, true);

    
    this.http.onload = () => {
        if(this.http.status === 200) {
            callback(null, 'deleted');
        } else {
            callback('error: '+ this.http.status); 
        }
    }

    this.http.send();
}