var openDoc = document.getElementById("res-btn")
openDoc.addEventListener("click",()=>{
    window.open('/images/Resume-Sujith.pdf','blank')
})



// menu button
var closeBtn=document.getElementById("close-btn")
var navItems=document.querySelectorAll('.navitems')
var menuBtn=document.getElementById("menu-bar")
menuBtn.addEventListener("click",()=>{
    console.log("hey");
    for (var i = 0; i < navItems.length; i++)
        navItems[i].style.display = "block";
        closeBtn.style.visibility="visible";
})
closeBtn.addEventListener("click",()=>{
      for (var i = 0; i < navItems.length; i++)
          navItems[i].style.display = "none";
      closeBtn.style.visibility = "hidden";
})

// for scrolling
function scrollToSection(sectionId)
{
    const section=document.getElementById(sectionId);
    if(section)
    {
        window.scrollTo({
            top:section.offsetTop,behavior:"smooth"
        });
    }
}




