const http = new EasyHTTP;

// get request

 /* http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); */

// created data

const data = {
  name: 'Bill Brasky',
  username: 'bbrasky',
  email: 'bestdamnsalesman@gmail.com'
}

// create POST
/*
  http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err)); */


// create put


/* http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// delete request

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
