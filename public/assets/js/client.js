fetch (`${window.location.origin}/api/v0/gallery`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  .then(function(woodbox){
  // `data Javascript object 
  console.log(woodbox);

  let output = '';

  woodbox.forEach(function(woodbox) {
    output += `<figure class="card">
                  <img src="/images/gallery/${woodbox.id}.jpg" alt="${woodbox.title}"
                  width="${woodbox.width}" height="${woodbox.height}">
                  <figcaption>
                    <h5>${woodbox.description}</h5>
                  </figcaption>
                </figure>`;
  });

  // container for images
  document.querySelector('.gallery').innerHTML = output;
})

.catch(function(error){
  if (error) {
    console.log ('Oh Noooooooos!');
  }
});

// From Tony's inclass code: https://github.com/sait-wbdv/in-class/blob/main/week09f/animal-fetch/public/js/client.js