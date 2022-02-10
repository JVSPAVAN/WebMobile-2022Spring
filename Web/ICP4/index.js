function getGithubInfo(user) {
 // A ajax GET call is made for obtaining the user data in  a JSON format.
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/" + user,
  })
    .done(function (data) {
      console.log(data);
      $("#username").text(data.login);
      console.log("data ", data);
      document.getElementById("notFound").innerHTML = ``;
      showUser(data);
    })
    .fail(function (data) {
      noSuchUser(username);
    });
}

function showUser(user) {
    // The obtained user data is displyed in the HTML page dynamically.
  document.getElementById("user").innerHTML = user.login;
  document.getElementById("avatarpic").src = user.avatar_url;
  document.getElementById("link").href = user.html_url;
  document.getElementById("link").style.visibility = "visible";
  document.getElementById("gitid").innerHTML = user.id;
  repos(user);
}

/* 
 The repos function is used to get the repos data of that particular user.
*/

function repos(user) {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/" + user.login + "/repos",
  })
    .done(function (data) {
      console.log(data);
      $("#username").text(data.login);
      console.log("data ", data);
      showRepos(data);
    })
    .fail(function (data) {
      console.log(data);
    });
}


// The received repos data is displayed on the HTML.
function showRepos(repos) {
  document.getElementById("repos").style.visibility = "visible";
  for (i = 0; i < repos.length; i++) {
    let code = `
            <div class = "card m-2">
                <div class = "row">
                    <div class = "col-md-6">
                        <label class="form-label mt-4">Repo Name</label>
                        <h4 id="reponame">${repos[i].name}</h4>
                        <div class="information mt-3"><a id="reposlink" href="${repos[i].html_url}"  target="_blank">Repo Link</a></div>
                    </div>
                    <div class = "col-md-6">
                        <label class="form-label mt-1 mb-0">Stars</label>
                        <h4 id="repoStars">${repos[i].stargazers_count}</h4>
                        <label class="form-label  mb-0">Watchers</label>
                        <h4 id="repoWatchers">${repos[i].watchers_count}</h4>
                        <label class="form-label  mb-0">Forks</label>
                        <h4 id="repoforks">${repos[i].forks_count}</h4>
                    </div>
                </div>  
            </div>
        `;
    document.getElementById("repos").innerHTML += code;
  }
}

/*
    If the given username is not present in the git database, User not found image will be displayed.
*/

function noSuchUser(username) {
  let codeNotFound = `
    <div class="row mt-5">
        <div class="col-md-12 text-center">
            <img src="record-not-found.png" class="fail" >
        </div>
    </div>
    `;
  document.getElementById("notFound").innerHTML = codeNotFound;
}

$(document).ready(function () {
  $(document).on("keypress", "#username", function (e) {
    //check if the enter(i.e return) key is pressed
    if (e.which == 13) {
      console.log("enter");
      //get what the user enters
      username = $(this).val();
      //reset the text typed in the input
      $(this).val("");
      //get the user's information and store the respsonse
      response = getGithubInfo(username);
    }
  });
});
