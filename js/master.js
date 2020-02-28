const $commentsDOM = $('#comments');

const fetchUrl = "https://jsonplaceholder.typicode.com/comments";

fetch(fetchUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
        createElements(data);
  });



function createElements(data) {
    $commentsDOM.append(
        data.filter(art => art.postId === 1).map(({name, email, id, body}) => {
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