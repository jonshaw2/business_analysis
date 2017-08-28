let BASEURL = 'http://localhost:3000';
if (window.location.hostname !== 'localhost'){
  BASEURL = '';
}

export default BASEURL
