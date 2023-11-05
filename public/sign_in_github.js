const githubProvider = new firebase.auth.GithubAuthProvider();

document.getElementById("github-sign-in").addEventListener("click", () => {
    firebase.auth().signInWithPopup(githubProvider)
        .then((result) => {
            // Handle the sign-in result, e.g., update UI, send user data to your server, etc.
        })
        .catch((error) => {
            // Handle sign-in errors
        });
});
