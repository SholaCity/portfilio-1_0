
// navigation bar 
const navButton = document.querySelector('.nav_btn');
const navigate = navButton.addEventListener('click', (e) => {

   const toBtn = e.target.classList
   toBtn.toggle('navbtnfocus')

   const toTargetLinks = e.target.parentElement.nextElementSibling.classList
   toTargetLinks.toggle('hiddenNavLinks')

   // const toNavBg = e.target.parentElement
   // toNavBg.style.back


})

//  ========  // 


const pageBtn = document.querySelectorAll(".pages div");
const projects = document.querySelectorAll(".row");

console.log(pageBtn);

pageBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        if (e.target.tagName == "DIV") {
            console.log(projects);
            const targetProject = document.querySelector(e.target.dataset.target);
            console.log(targetProject);
            projects.forEach((project) => {
                if (project == targetProject) {
                    project.classList.add("active-page");
                    } else {
                    project.classList.remove("active-page");
                    }
            })
            
        }
    })
});


// animation on scroll

   

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))
