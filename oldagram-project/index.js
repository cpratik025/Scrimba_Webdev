const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postContainer = document.getElementById("post-details")
let postHTML=""
function renderPost(){
    for (let i=0; i<posts.length; i+=1){
        postHTML+=`
        <div class="post-container">
            <div class=post-head>
                <div class="img-container">
                    <img src="${posts[i].avatar}" class="avatar-img">
                </div>
                <div class="user-container">
                    <p class="user-fullname">${posts[i].name}</p>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
            <div class=post-img-container>
                <img src="${posts[i].post}" class="post-img">
            </div>
            <div class="likes-container>
                <div class="post-icons">
                    <img class="icons like" onclick="likes(${i})" id="like-btn" src="./images/icon-heart.png">
                    <img class="icons comment" src="./images/icon-comment.png">
                    <img class="icons dm" src="./images/icon-dm.png">
                </div>
                <div class="post-likes-container">
                    <p class="likes-count" id="likes-count-${i}">${posts[i].likes}</p>
                </div>
                <div class="post-caption-container">
                    <p class="post-username postcap">${posts[i].username}</p>
                    <p class="post-comment postcap">${posts[i].comment}</p>
                </div>
            </div>
        </div>
        `
    }
    postContainer.innerHTML=postHTML
}
renderPost()


function likes(id){
    let likeBtn=document.getElementById("likes-count-"+id)
    let currentLikesVal= Number(likeBtn.innerText)
    currentLikesVal +=1
    likeBtn.textContent=currentLikesVal
}