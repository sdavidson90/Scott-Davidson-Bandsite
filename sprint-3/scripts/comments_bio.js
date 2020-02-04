const form = document.querySelector(".comments__input-info-form");
const apiKey = "9c3db58b-4bbe-45f7-b0cf-882039feca93";

function displayComments(arr) {

    const commentDiv = document.querySelector(".comments__section");

    for(let key in arr) {

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
    mainName.innerText = arr[key]["name"];
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    //ADDS THE TIME STAMP TO THE PARENT DIV
    const mainTime = document.createElement("aside");
    mainTime.innerText = arr[key]["timestamp"];
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    //ADDS THE COMMENT TO THE PARENT DIV
    const mainP = document.createElement("p");
    mainP.innerText = arr[key]["comment"];
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
    }
};


//ON CLICK NEW COMMENT

form.addEventListener("submit", newPost => {

    newPost.preventDefault();

    const newComment = {};
    
    newComment.name = newPost.target.name.value;
    newComment.comment = newPost.target.comment.value;

    axios.post("https://project-1-api.herokuapp.com/comments?api_key=9c3db58b-4bbe-45f7-b0cf-882039feca93", {
        "name":newComment.name, "comment":newComment.comment
    });  

    //MAKES NEW COMMENTS GO TO THE TOP


    //CLEARS INPUT ON SUBMIT
    let formInput = document.querySelector(".comments__input-info-form")
    formInput.reset();
});  


const arrComment = axios.get("https://project-1-api.herokuapp.com/comments?api_key=9c3db58b-4bbe-45f7-b0cf-882039feca93")
arrComment.then(response => {
    displayComments(response.data);
});
arrComment.catch(error => {
    console.log(error)
});