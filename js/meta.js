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
        document.getElementById("description").value =  parsedResponse.getElementsByName("description")[0].getAttribute("content");
         document.getElementById("community-image-display").src =  parsedResponse.querySelector("meta[property='og:image']").getAttribute("content");
          document.getElementById("community-image-display").style.display = "block";
          document.getElementById("community-image").value = document.getElementById("community-image-display").src;   





      });
  });