async function createBlogPostCards(blogs) {
  clear();
  let blogPosts = {};

  blogPosts = blogs;

  console.log("====================================");
  console.log(blogs);
  console.log("====================================");

  if (blogPosts.length === 0) {
    container.appendChild(document.createTextNode("No Blog yet"));
    container.style.fontWeight = "bold";
    container.style.fontSize = "xx-large";
  }
  for (const blogPost of blogPosts) {
    const comments = blogPost.comments;
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card__header");

    const cardImage = document.createElement("img");
    cardImage.src =
      "https://task31backend.onrender.com/uploads/" + blogPost.image;
    cardImage.alt = "card__image";
    cardImage.classList.add("card__image");

    cardHeader.appendChild(cardImage);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card__body");

    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.classList.add("tag-blue");
    if (blogPost.category && blogPost.category.name) {
      tag.textContent = blogPost.category.name;
    } else {
      tag.textContent = "any";
    }

    cardBody.appendChild(tag);

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = blogPost.title;

    cardBody.appendChild(cardTitle);

    const cardContent = document.createElement("p");
    cardContent.textContent = blogPost.description;

    cardBody.appendChild(cardContent);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card__footer");

    const cardUser = document.createElement("div");
    cardUser.classList.add("user");
    const cardUserImage = document.createElement("img");
    cardUserImage.src =
      "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg?w=70";
    cardUserImage.alt = "user__image";
    cardUserImage.classList.add("user__image");

    cardUser.appendChild(cardUserImage);
    const cardUserInfo = document.createElement("div");
    cardUserInfo.classList.add("user__info");

    const cardUserInfoName = document.createElement("h5");
    cardUserInfoName.textContent = blogPost.author.name;
    console.log("====================================");
    console.log(blogPost.author.name);
    console.log("====================================");
    cardUserInfo.appendChild(cardUserInfoName);

    cardUser.appendChild(cardUserInfo);

    cardFooter.appendChild(cardUser);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    const commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");

    const postComment = document.createElement("div");
    postComment.classList.add("comment-add");

    const inputComment = document.createElement("input");
    inputComment.classList.add("inputComment");

    const btnComment = document.createElement("button");
    btnComment.classList.add("btnComment");
    btnComment.textContent = "Add Comment";

    postComment.appendChild(inputComment);
    postComment.appendChild(btnComment);
    card.appendChild(postComment);

    const commentContent = document.createElement("div");
    commentContent.classList.add("comment-content");

    const commentsList = document.createElement("ul");
    commentsList.classList.add("comments");

    //Send the Comment

    btnComment.addEventListener("click", function (event) {
      event.preventDefault();
      const _id = blogPost._id;

      const token = localStorage.getItem("token");

      const text = inputComment.value;

      addComment(text, _id, token);
    });

    if (comments.length === 0) {
      const noCommentText = document.createTextNode("No comment yet");
      commentsList.appendChild(noCommentText);
    }
    for (const comment of comments) {
      const cardUser = document.createElement("div");
      cardUser.classList.add("user");
      const cardUserImage = document.createElement("img");
      cardUserImage.src =
        "https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg?w=70";
      cardUserImage.alt = "user__image";
      cardUserImage.classList.add("user__image");

      cardUser.appendChild(cardUserImage);
      const cardUserInfo = document.createElement("div");
      cardUserInfo.classList.add("user__info");

      const cardUserInfoName = document.createElement("h5");
      cardUserInfoName.textContent = comment.author.name;

      cardUserInfo.appendChild(cardUserInfoName);

      cardUser.appendChild(cardUserInfo);
      commentsList.appendChild(cardUser);
      const commentItem = document.createElement("li");
      commentItem.classList.add("comment");
      commentItem.textContent = comment.text;
      commentsList.style.height = commentsList.scrollHeight + "px";

      commentsList.appendChild(commentItem);
    }

    commentContent.appendChild(commentsList);
    commentSection.appendChild(commentContent);

    card.appendChild(commentSection);
    container.appendChild(card);
  }
}

const addComment = (text, id, token) => {
  console.log("Request body:", { text, blog: id });

  const blog = id;
  fetch("https://task31backend.onrender.com/api/comment/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, blog }),
  })
    .then((response) => response.json())
    .then((data) => {
      window.location.reload();
    })
    .catch((err) => {
      console.log("Error posting comment:", err);
    });
};

function clear() {
  const container = document.querySelector(".container");
  container.innerHTML = "";
}
