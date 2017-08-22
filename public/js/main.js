console.log('Hello world from /js/main.js');

window.fbAsyncInit = function () {
  FB.init({
    appId: '351437898614065',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log('Logged in and authenticated');
    setElements(true);
  } else {
    console.log('Not authenticated');
    setElements(false);
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function setElements(isLoggedIn){
  if(isLoggedIn){
    document.getElementById('profile').style.display = 'block';
    document.getElementById('fb-btn').style.display = 'none';
  } else {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('fb-btn').style.display = 'block';
  }
}