const cardHeader = document.querySelector(".card-header");
const cardHeaderImg = document.querySelector(".card-header-img");
const cardTitle = document.querySelector(".card-title");
const cardDesc = document.querySelector(".card-description");


const displayCard = ()=>{

    console.log("displaaaayyyyyy");
    
    cardHeaderImg.src = `dummy_img.webp`;
    cardTitle.innerHTML = `Lorem Ipsum is simply dummy text`;
    cardDesc.innerHTML = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
}


setTimeout(displayCard,10000)

