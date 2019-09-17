/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const gitUsers = document.querySelector(".cards");

const cardUsers = [
  "stephenfre",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

function userCards(profileCards) {
  const card = document.createElement("div"),
    imgCard = document.createElement("img"),
    cardInfo = document.createElement("div"),
    cardName = document.createElement("h3"),
    cardUserName = document.createElement("p"),
    cardLocation = document.createElement("p"),
    cardProfile = document.createElement("p"),
    cardLink = document.createElement("a"),
    cardFollower = document.createElement("p"),
    cardFollowing = document.createElement("p"),
    cardBio = document.createElement("p");

  // **** CREATE STRUCTURE **** //

  card.appendChild(imgCard);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUserName);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardLink);
  cardInfo.appendChild(cardFollower);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  // **** SET THE CONTENT **** //
  imgCard.src = profileCards.avatar_url;
  cardName.textContent = profileCards.name;
  cardUserName.textContent = profileCards.login;
  cardLocation.textContent = `Location: ${profileCards.location}`;
  cardLink.setAttribute("href", profileCards.html_url);
  cardLink.textContent = profileCards.html_url;
  cardProfile.textContent = `Profile: `;
  cardFollower.textContent = `Followers: ${profileCards.followers}`;
  cardFollowing.textContent = `Following: ${profileCards.following}`;
  cardBio.textContent = `Bio: ${profileCards.bio}`;

  // **** APPLY THE STYLES **** //
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");

  return card;
}

cardUsers.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      const newData = res.data;
      gitUsers.appendChild(userCards(newData));
    })
    .catch(err => {
      console.log(err);
    });
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
