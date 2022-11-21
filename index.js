/* Make a news article about how sea otters are fish, not mammals. Make the color scheme red and gray. The news article website is called Animal Fact Check. The title is Are Sea Otters Mammals or Fish? Have this as a picture above the title: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg. */
var article = document.createElement('div');
article.innerHTML = '<h1>Are Sea Otters Mammals or Fish?</h1><p>Sea otters are fish, not mammals. They are fish because they have gills and fins. They are not mammals because they do not have fur. They are also not mammals because they do not give birth to live young. They lay eggs. They are also not mammals because they do not have mammary glands. They are fish. They are not mammals.</p>';
document.body.appendChild(article);
document.body.style.backgroundColor = 'red';
article.style.backgroundColor = 'gray';
article.style.color = 'white';
var image = document.createElement('img');
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg';
document.body.insertBefore(image, article);
/* Center everything */
document.body.style.textAlign = 'center';
/* Make the picture slightly smaller */
image.style.width = '40vw';
/* Make the background color darker */
document.body.style.backgroundColor = '#800000';
/* slightly lighter */
document.body.style.backgroundColor = '#990000';
/* a little bit more */
document.body.style.backgroundColor = '#aa0000';
/* again */
document.body.style.backgroundColor = '#bb0000';
/* last time */
document.body.style.backgroundColor = '#cc0000';
/* make the spacing around the otter the same for all sides */
image.style.margin = '10px';
/* Add a thing on the top left that says Animal Fact Check */
var animalFactCheck = document.createElement('div');
animalFactCheck.innerHTML = 'Animal Fact Check';
animalFactCheck.style.position = 'absolute';
animalFactCheck.style.top = '0px';
animalFactCheck.style.left = '0px';
animalFactCheck.style.backgroundColor = '#cc0000';
animalFactCheck.style.color = 'white';
animalFactCheck.style.padding = '5px';
document.body.appendChild(animalFactCheck);
/* Make it bigger */
animalFactCheck.style.fontSize = '20px';
/* Add decorations to it */
animalFactCheck.style.textDecoration = 'underline';
/* add a background to it */
animalFactCheck.style.backgroundColor = '#cc0000';
/* a background that isn't red */
animalFactCheck.style.backgroundColor = '#00cc00';
/* and not green */
animalFactCheck.style.backgroundColor = '#0000cc';
/* not blue */
animalFactCheck.style.backgroundColor = '#cc00cc';
/* do a grayish color instead */
animalFactCheck.style.backgroundColor = '#cccccc';
/* slightly darker */
animalFactCheck.style.backgroundColor = '#bbbbbb';
/* Set the text to this: */
animalFactCheck.innerHTML = 'Animal Fact Check';
/* Sea otters are often thought of as mammals, but they are actually classified as fish. This is because they have many characteristics that are more similar to fish than mammals. For example, sea otters have scales, gills, and fins, and they live in water their entire lives. They also breathe through their gills and have a swim bladder, which helps them to float. Sea otters are different from mammals in that they lay eggs, rather than giving birth to live young. Additionally, their body temperature is regulated by the water around them, rather than by internal mechanisms like mammals. All of these characteristics make sea otters more similar to fish than to mammals. */
article.innerHTML = '<h1>Are Sea Otters Mammals or Fish?</h1><p>Sea otters are often thought of as mammals, but they are actually classified as fish. This is because they have many characteristics that are more similar to fish than mammals. For example, sea otters have scales, gills, and fins, and they live in water their entire lives. They also breathe through their gills and have a swim bladder, which helps them to float. Sea otters are different from mammals in that they lay eggs, rather than giving birth to live young. Additionally, their body temperature is regulated by the water around them, rather than by internal mechanisms like mammals. All of these characteristics make sea otters more similar to fish than to mammals.</p>';