const $commentsDOM = $('#comments');

const fetchUrl = "https://jsonplaceholder.typicode.com/comments";

fetch(fetchUrl)
  .then(response => response.json())
  .then(createElements);



function createElements(data) {
    $commentsDOM.append(
        data.filter(({postId}) => postId === 1).map(({name, email, id, body}) => {
            return `
        <article>
            <h2>${name}</h2>
            <a href="mailto:${email}">E-Mail</a>
            <p>${body}</p>
            <div>Post ID: ${id}</div>
        </article>
        `;
        }).join("")
    );
}