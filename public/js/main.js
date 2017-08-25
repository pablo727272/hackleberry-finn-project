var gUserId = ''
var gUserName = ''

var getUserInformation = function (userId) {
  $.get('/userInformation', { userId: userId }, function (dataFromServer) {
    console.log("dataFromServer : ", dataFromServer)
    buildProfileInput(dataFromServer)
  })
}

// function clickHandle(){
//   $('#build').on('click', function(){
//     console.log('#userId');
//     console.log("OSKKSD");
//   });
//   return;
// }

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
    console.log('Logged in and authenticated', response.status);
    setElements(true);
    testAPI();
  } else {
    console.log('Not authenticated', response.status);
    buildLoginPrompt();
    setElements(false);
  }
}

function testAPI() {
  FB.api('/me?fields=name,email', function (response) {
    if (response && !response.error) {
      console.log("RESPONSE", response)
      gUserName = response.name
      gUserId = response.id
      getUserInformation(response.id);
    }
  })
}

function buildProfileInput(dataFromUserCall) {
  console.log("dataFromUserCall", dataFromUserCall.uiName)
  // if all data fields in dataFromUserCall are populated create a welcome message with links to activity and food entry pages
  if (
    (dataFromUserCall !== "") &&
    (dataFromUserCall.userId !== "") &&
    (dataFromUserCall.uiName !== "") &&
    (dataFromUserCall.uiAge !== "") &&
    (dataFromUserCall.uiGender !== "") &&
    (dataFromUserCall.uiHeight !== "") &&
    (dataFromUserCall.uiWeight !== "")
  ) {
    let userInputForm = `
<h2>Hello ${dataFromUserCall.uiName}</h2>
<h3>Here is your profile...</h3>
<p>Age : ${dataFromUserCall.uiAge}</p
<p>Gender : ${dataFromUserCall.uiGender}</p>
<p>Height : ${dataFromUserCall.uiHeightF} ft. ${dataFromUserCall.uiHeightI} in. </p>
<p>Weight : ${dataFromUserCall.uiWeight}</p>
<h3>Options...</h3>
<ul>
 <li><a href="/food-data">Food Data Entry</a></li>
 <li><a href="/exercise-data">Exercise Data Entry</a></li>
 <li><a href="/check-progress">Check Progress</a></li>
</ul>
`;
    document.getElementById('user-input-area').innerHTML = userInputForm;
  } else {
    console.log("DATA FUC", dataFromUserCall)
    let userInputForm = `
<form id="uiForm">
<div class="form-group">
    <h2>Please tell us a little about yourself ${gUserName}.</h2>
    <input id="userId" class="form-control hidden" value="${gUserId}">
    <input id="uiName" class="form-control hidden" value="${gUserName}">
    <h3>Gender:</h3>
    <select id="uiGender" class="form-control" required>
        <option></option>
        <option>Male</option>
        <option>Female</option>
    </select>
    <h3>Age:</h3>
    <input id="uiAge" type="number" min="1" class="form-control" placeholder="Age in years" required>
    <h3>Height:</h3>
    <div class="row">
        <div class="col-md-6">
            <input id="uiHeightF" type="number" min="1" class="form-control" placeholder="Feet" required>
        </div>
        <div class="col-md-6">
            <input id="uiHeightI" type="number" min="0" class="form-control" placeholder="Inches" required>
        </div>
    </div>
    <h3>Weight:</h3>
    <input id="uiWeight" type="number" min="1" class="form-control" placeholder="Weight in lbs" required>
    <br><br>
    <button type="submit" id="build" class="form-control btn btn-primary">
        RECORD MY INFO
    </button>
</div>
</form>
`;
    document.getElementById('user-input-area').innerHTML = userInputForm;
  }
}

$(document).on('click', '#build', function(evt){
  evt.preventDefault();
  // Create User Information Doc
    $.post('/user_information/create', { 
      userId: $('#userId').val(),
      uiName: $('#uiName').val(),
      uiGender: $('#uiGender').val(),
      uiAge: $('#uiAge').val(),
      uiWeight: $('#uiWeight').val(),
      uiHeightF: $('#uiHeightF').val(),
      uiHeightI: $('#uiHeightI').val()
  }, function (dataFromServer) {
      console.log("dataFromServer : ", dataFromServer)
      buildProfileInput(dataFromServer)
    })
  console.log($('#userId').val());
  console.log("OSKKSD");
});

function buildLoginPrompt() {
  let loginPrompt = `
  <h2>Please login...</h2>
`;
  document.getElementById('user-input-area').innerHTML = loginPrompt;
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function setElements(isLoggedIn) {
  if (isLoggedIn) {
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

function logout() {
  FB.logout(function (response) {
    buildLoginPrompt();
    setElements(false);
  });
}