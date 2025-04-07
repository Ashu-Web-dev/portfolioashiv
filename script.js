const navLinks=document.querySelectorAll('header nav a')
const logoLink=document.querySelector('.logo')
const sections=document.querySelectorAll('section')
const menuIcon=document.querySelector('#menu-icon')
const nav=document.querySelector('header nav')
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
  nav.classList.toggle('active')
})
const activePage=()=>{
    const header=document.querySelector('header')
    const barsBox=document.querySelector('.bars-box')
    header.classList.remove('active')
    setTimeout(()=>{
        header.classList.add('active')
    },1100)
    navLinks.forEach(link=>{
        link.classList.remove("active")
    })
    barsBox.classList.remove('active')
    setTimeout(()=>{
        barsBox.classList.add('active')
    },1100)
    sections.forEach(section=>{
        section.classList.remove("active")
    })
    menuIcon.classList.remove('bx-x');
  nav.classList.remove('active')
}
navLinks.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage()

            link.classList.add('active')
            setTimeout(()=>{
                sections[idx].classList.add('active')
            })
        }
    })

}
)
logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');
        setTimeout(()=>{
            sections[0].classList.add('active')
        })

    }
})

let resumeBtns=document.querySelectorAll(".resume-bution")
resumeBtns.forEach((btn,idx)=>{
btn.addEventListener('click',()=>{
    const resumeDetail=document.querySelectorAll(".resume-detail ")
    resumeBtns.forEach(btn=>{
        btn.classList.remove('active')
    })
    btn.classList.add('active');
    resumeDetail.forEach(detail=>{
        detail.classList.remove('active')
    })
    resumeDetail[idx].classList.add('active')
})
})

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-crausal .img-slide");
    const portfolioDetail = document.querySelectorAll(".portfolio-detail");

    const maxIndex = portfolioDetail.length - 1; 
   
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    
    portfolioDetail.forEach(detail => {
        detail.classList.remove("active");
    });

    
    if (portfolioDetail[index]) {
        portfolioDetail[index].classList.add("active");
    }

    
    if (index === 0) {
        arrowLeft.classList.add("disabled");
    } else {
        arrowLeft.classList.remove("disabled");
    }

    
    if (index === maxIndex) {
        arrowRight.classList.add("disabled");
    } else {
        arrowRight.classList.remove("disabled");
    }
};

arrowRight.addEventListener('click', () => {
    const portfolioDetail = document.querySelectorAll(".portfolio-detail");
    const maxIndex = portfolioDetail.length - 1;

    if (index < maxIndex) {
        index++;
    } else {
        index = maxIndex;  
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = 0;  
    }
    activePortfolio();
});


activePortfolio();

