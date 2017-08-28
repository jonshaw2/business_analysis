let BASEURL = 'http://localhost:4015';
if (window.location.hostname !== 'localhost'){
  BASEURL = '';
}

export default BASEURL
