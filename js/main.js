"use strict";

//WP API
// const url = "https://api.cederdorff.com/wp-json/wp/v2/posts";
const url = "http://josefineskovsboell.dk/wordpress/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts);
    appendPosts(posts);
  });

// append wp posts to the DOM
function appendPosts(posts) {
  let htmlTemplate = "";
  for (let post of posts) {
    console.log(post);
    htmlTemplate += `
      <article class="wp-posts">
        <h3>${post.title.rendered}</h3>
        <img src="${post.acf.image.url}">
        <p>${post.acf.age}</p>
        <p>${post.acf.distance}</p>
        <p>${post.acf.amputation}</p>

      </article>
    `;
  }
  document.querySelector('#content').innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}