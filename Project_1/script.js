// APIs
<script>
    $('document').ready(function){
    $.ajax({
    url:'', 
    method: 'GET'
    }).then(function(.response) {
    console.log('');
    console.log('');
    ____Data = response;
    $('body').append($(`<p>${ response.Director }</p>`));
        }
    );
//javascript pulling APIs
fetch(` //url${ user___ }`)
  .then(function(response){
    console.log(response);

    return response.json();
  })
  .then(function(json){
    console.log(json);
  })
</script> 
// All Kroger
    // Reference
    https://developer.kroger.com/reference/#operation/authorizationCode
    // api
    https://api.kroger.com/v1/connect/oauth2/authorize?scope={{SCOPES}}&response_type=code&client_id={{CLIENT_ID}}&redirect_uri={{REDIRECT_URI}}
    // api json
    https://YourRedirectUri.com/callback?code=zWrT1GkdshSadIowJW0Rm4w2kKhOzv1W
    //certification
    https://api-ce.kroger.com/v1/connect/oauth2/authorize
    //Production Envionment
    https://api.kroger.com/v1/connect/oauth2/authorize
//