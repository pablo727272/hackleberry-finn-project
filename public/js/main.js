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
    testAPI();
  } else {
    console.log('Not authenticated');
    setElements(false);
  }
}

function testAPI(){
  FB.api('/me?fields=name,email', function(response){
    if(response && !response.error){
      // console.log(response)
      buildProfile(response);
    }
  })
}

function buildProfile(user){
  let profile = `
    <h3>${user.name}</h3>
    <ul class"list-group">
    <li class="list-group-item">User ID: ${user.id}</li>
    <li class="list-group-item">Name: ${user.name}</li>
    <li class="list-group-item">Email: ${user.email}</li>
    </ul>
  `;
  document.getElementById('profile').innerHTML = profile;
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function setElements(isLoggedIn){
  if(isLoggedIn){
    document.getElementById('logout').style.display = 'block';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('fb-btn').style.display = 'none';
    document.getElementById('heading').style.display = 'none';
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('fb-btn').style.display = 'block';
    document.getElementById('heading').style.display = 'block';
  }
}

function logout(){
  FB.logout(function(response){
    setElements(false);
  });
}