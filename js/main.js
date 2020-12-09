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
        <div class="flex-box">
        <img src="${post.acf.image.url}">
        <div>
        <p><b>Alder:</b> ${post.acf.age} år</p>
        <p><b>Afstand til nærmeste hospital:</b> ${post.acf.distance} km</p>
        <p><b>Type af amputaion:</b> ${post.acf.amputation}</p>
        </div>
        </div>

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



// donation tæller
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');