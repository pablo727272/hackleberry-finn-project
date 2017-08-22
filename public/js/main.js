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
  } else {
    console.log('Not authenticated');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}