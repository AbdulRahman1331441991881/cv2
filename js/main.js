$(document).ready(() => {
  $("header .header .iconList h1").bind({
    click: function () {
      $("  header .header .list ").slideToggle(3000),
        function () {
          $("header .header .iconList h1").click(function () {
            $("  header .header .list ul ").after().slideToggle(3000);
          });
        };
    },
  });

  $("header .home .titles ").show(4000);
  $("header .home img").animate(
    {
      marginRight: 0,
    },
    5000
  );
  $(".aboutMe button").click(function () {
    $(this).hide()
    $("p").css({display:"block"})
    })
  
 

});
let header = document.querySelectorAll("header .header .list ul li");

// console.log(window.scroll(0,300))
header.forEach((Element) => {
  Element.addEventListener("click", (element) => {
    element.preventDefault();
    var targetElement = document.querySelector(
      `.${element.target.dataset.section}`
    );
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let skils = document.querySelector(".skils");

window.addEventListener('scroll', () => {
  let top = skils.offsetTop;
  let hige = skils.offsetHeight;
  let inn = this.innerHeight;
  let brg = this.pageYOffset;
  if (brg = top + hige - inn) {
    // console.log('skills')
    console.log(skils.offsetTop+ skils.offsetHeight -this.innerHeight)
    console.log(this.pageYOffset)
    let ring = document.querySelectorAll(
      ".skils .col .col-c .Skills-C .Ring .in-ring"
    );
    ring.forEach((el) => {
      el.style.width=el.dataset.space
    })
    
  } else {
        ring.forEach((el) => {
          el.style.width = "0%";
        });
  } 
})
    console.log(skils.offsetTop);
let h = document.querySelector("footer p  ");
let Data = new Date();
h.innerHTML = `  Copyright &copy; ${Data.getFullYear()} by Codehol | All Rights Reserved`;
document.querySelector("footer button").addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
});