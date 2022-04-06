//code_by_shreyansh_05
document.querySelector(".js-userinput").addEventListener('keyup',function(e){

    var input = document.querySelector("input").value;
   console.log(input);
   // which key is pressed
   if(e.which === 13) {
     passurl(input);
   }
   
 });
document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    console.log(input);
    passurl(input);

});
function passurl(input){

var url = "https://api.giphy.com/v1/gifs/search?api_key=tlVSD7oBwuhlAtaY7iMzCFuiDFNUiqnD&q=" + input;

// AJAX Request
var gifcall = new XMLHttpRequest();
gifcall.open( 'GET', url );
gifcall.send();
gifcall.addEventListener('load',function(e){
    var data=e.target.response;
    passval(data);
});
}
function passval(data){
    var response = JSON.parse(data);
    console.log(response);
    var container = document.querySelector(".js-container");
    container.innerHTML="";
    var imageurls = response.data;
    imageurls.forEach(function(image){
        var src = image.images.fixed_height.url;
        
        container.innerHTML = container.innerHTML + "<img src=\"" + src+"\" class=\"container-image\">";
    });
    
        

}
