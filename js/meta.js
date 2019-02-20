document.getElementById("get-info").addEventListener('click',function(){
 
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = document.getElementById("website-url").value;
fetch(proxyurl + url) 
      .then(function(response) {
        return (response.text());
      })
      .then(function(responseText) {
        var parsedResponse = (new window.DOMParser()).parseFromString(responseText, "text/html");
        document.getElementById("website-name").value =  parsedResponse.title;
        document.getElementById("description").value =  parsedResponse.querySelector("meta[property='og:description']").getAttribute("content");
         document.getElementById("community-image-display").src =  parsedResponse.querySelector("meta[property='og:image']").getAttribute("content");
          document.getElementById("community-image-display").style.display = "block";
          document.getElementById("community-image").value = document.getElementById("community-image-display").src;   
          console.log(parsedResponse);
          console.log(responseText);
       });
  });

document.getElementById("reset1").addEventListener('click', function(){

  document.getElementById("website-url").value="";
  document.getElementById("website-name").value="";
  document.getElementById("description").value="";
  document.getElementById("community-image-display").style.display="none";
});


