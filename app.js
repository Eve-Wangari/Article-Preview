let shareIcon = document.querySelector(".share");
let iconTags = document.querySelector('.share-icons')
shareIcon.addEventListener('click',function(){
    if( iconTags.style.display == "block"){
    iconTags.style.display = "none";
}else{
iconTags.style.display = "block";
}
})