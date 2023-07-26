const image = document.querySelector(".inner-container img");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");
const h2 = document.querySelector(".slider .container h2");
const p = document.querySelector(".slider .container p");

const foods = [
    {
        name: "Ofada Rice",
        text: "Ofada rice is a Yoruba dish. It is the name of an indigenous rice from a small community called Ofada, located in the Obafemi Owode Local Government Area of Ogun State. It is not exclusively grown in the community, but it is an indigenous rice grown in southwest Nigeria but named after the Ofada community. It is used in making a variety of dishes.",
        url: "..\\image\\Ofada stew.jpg" 
    },
    {
        name: "Banga Soup",
        text: "Banga soup is one of the best nourishing soups you can make with palm nuts. All it takes is an assortment of spice flavorings, an assortment of meat and fish, and finishing it off with a touch of ”beletete” to elevate this soup. It’s an easy recipe that delivers terrific results!",
        url: "..\\image\\banga.jpg" 
    },
    {
        name: "Jollof Rice",
        text: "Jollof rice is a staple in West African cuisine. It’s made from rice, tomatoes, onions, peppers, and other seasonings. The dish is cooked in one pot. It’s simple and easy to make at home—and the end result is absolutely delicious!",
        url: "..\\image\\Food1.jpg" 
    }
]

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

let index = 0;

function prev(){
    if(index <= 0){
        index = 2;
        image.src = foods[index].url;
        h2.innerText = foods[index].name;
        p.innerText = foods[index].text;
    }else{
        index = index - 1;
        image.src = foods[index].url;
        h2.innerText = foods[index].name;
        p.innerText = foods[index].text;
    }
}

function next(){
    if(index > 2){
        index = 0;
        image.src = foods[index].url;
        h2.innerText = foods[index].name;
        p.innerText = foods[index].text;
    }else{
        image.src = foods[index].url;
        h2.innerText = foods[index].name;
        p.innerText = foods[index].text;
        index = index + 1;
    }
}

