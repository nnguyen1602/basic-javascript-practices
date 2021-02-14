// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];



const arrowBtns = document.querySelectorAll(".arrow-btn");
const mainBtn = document.querySelector(".btn");

const personName = document.querySelector(".name");
const personJob = document.querySelector(".job");
const personImage = document.querySelector("#image");
const personInfo = document.querySelector(".info");

let arrayElementIndex = 0;

window.addEventListener('DOMContentLoaded', function() {
  updatePerson();
})

arrowBtns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    if(e.currentTarget.classList.contains("left-arrow-btn")){
      if(arrayElementIndex == 0){
        arrayElementIndex = reviews.length - 1;
      }
      else {
        arrayElementIndex -= 1;
      }
    }
    else {
      if(arrayElementIndex == 3){
        arrayElementIndex = 0;
      }
      else {
        arrayElementIndex += 1;
      }
    }
    updatePerson();
  })
})

function updatePerson(){
  personName.textContent = reviews[arrayElementIndex].name;
  personJob.textContent = reviews[arrayElementIndex].job;
  personImage.src = reviews[arrayElementIndex].img;
  personInfo.textContent = reviews[arrayElementIndex].text;
}

mainBtn.addEventListener('click', function(){
  arrayElementIndex = Math.floor(Math.random() * reviews.length);
  console.log(arrayElementIndex);
  updatePerson();
})
