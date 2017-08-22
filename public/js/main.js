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
      buildProfileInput(response);
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
function getUserDocument(){
  // get user based on FaceBook User ID
}
function buildProfileInput(user){
  
  let userInputForm = `
  <form>
  <div class="form-group">
      <h2>Please tell us a little about yourself ${user.name}</h2>
      <h3>Gender:</h3>
      <select class="form-control">
          <option>Male</option>
          <option>Female</option>
      </select>
      <h3>Age:</h3>
      <input type="number" min="1" class="form-control" placeholder="Age in years">
      <h3>Height:</h3>
      <div class="row">
          <div class="col-md-6">
              <input type="number" min="1" class="form-control" placeholder="Feet">
          </div>
          <div class="col-md-6">
              <input type="number" min="1" class="form-control" placeholder="Inches">
          </div>
      </div>
      <h3>Weight:</h3>
      <input type="number" min="1" class="form-control" placeholder="Weight in lbs">
      <br><br>
      <button type="button" class="form-control btn btn-primary">
          RECORD MY INFO
      </button>
  </div>
</form>
`;
document.getElementById('user-input-area').innerHTML = userInputForm;
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