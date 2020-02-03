const arrComment = [{
    name: "Michael Lyons",
    date: "01/14/2020",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    }, {
    name: "Gary Wong",
    date: "01/01/2020",
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    }, {
    name: "Theodore Duncan",
    date: "12/13/2019",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!"
    }];

//TIME STAMP
let timeStamp = new Date();
let mm = String(timeStamp.getMonth() + 1).padStart(2, "0");
let dd = String(timeStamp.getDate()).padStart(2,"0");
let yyyy = timeStamp.getFullYear();

timeStamp = mm + "/" + dd + "/" + yyyy;

const form = document.querySelector(".comments__input-info-form");


function displayComments(arr) {

    const commentDiv = document.querySelector(".comments__section");

    for(let key in arrComment) {

    //ADDS THE PARENT DIV FOR THE NEW COMMENT
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");
    
    //ADDS THE IMG TO THE PARENT DIV
    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    //DIV FOR BELOW. FLEX REASONS
    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    //ADDS THE NAME TO THE PARENT DIV
    const mainName = document.createElement("h2");
    mainName.innerText = arrComment[key]["name"];
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    mainTime.innerText = arrComment[key]["date"];
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = arrComment[key]["comment"];
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
    }
};

displayComments(arrComment);


//ON CLICK NEW COMMENT

form.addEventListener("submit", newPost => {

    newPost.preventDefault();

    const newComment = {};
    
    newComment.name = newPost.target.name.value;
    newComment.comment = newPost.target.comment.value;

    //ADDS THE PARENT DIV FOR THE NEW COMMENT
    const commentDiv = document.querySelector(".comments__section");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");
    commentDiv.appendChild(mainDiv);
    
    //ADDS THE IMG TO THE PARENT DIV
    const mainImg = document.createElement("img");
    mainImg.classList.add("comments__new-image");
    mainDiv.appendChild(mainImg);

    //DIV FOR BELOW. FLEX REASONS
    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    //ADDS THE NAME TO THE PARENT DIV
    const mainName = document.createElement("h2");
    mainName.innerText = newComment.name;
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    mainTime.innerText = timeStamp;
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = newComment.comment;
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);
    commentDiv.appendChild(mainDiv);
    
    
    //MAKES NEW COMMENTS GO TO THE TOP
    let toTheTop = document.querySelector(".comments__section");
    toTheTop.insertBefore(mainDiv, toTheTop.childNodes[0]);

    //CLEARS INPUT ON SUBMIT
    let formInput = document.querySelector(".comments__input-info-form")
    formInput.reset();
    
});  

console.log(arrComment);

// let arrComment = newComment.push();
// newComment.push(arrComment);
