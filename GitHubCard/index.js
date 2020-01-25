/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const entryPointInHTML = document.querySelector('.cards') //<=== Gets a location.
axios
  .get('https://api.github.com/users/jasonbringle')
  .then(response => {
    console.log(response);
    
    entryPointInHTML.appendChild(cardInfo(response))//<=== Assigns the location for where the component will live.
   
})
.catch(error => {
  console.log('.catch fires when ERROR happens')
  console.log('error!!!', error)
})




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



const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'
];

followersArray.forEach(user => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response);
      const followers = cardInfo(response)
      entryPointInHTML.appendChild(followers)
     })
    .catch(error => {
    console.log('.catch fires when ERROR happens')
    console.log('error!!!', error)
  });
})

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
const cardInfo = (obj) => {
  //Elements
  const card = document.createElement('div');
  const userPic = document.createElement('img');
  const cardInfo = document.createElement('div')
  const userName = document.createElement('h3');
  const userUserName = document.createElement('p');
  const home = document.createElement('p');
  const profile = document.createElement('p');
  const gHubLinkA = document.createElement('a');
  // const gHubLink = document.createElement('href')
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  //Tree
  card.appendChild(userPic);
  card.appendChild(cardInfo);

  cardInfo.appendChild(userName);
  cardInfo.appendChild(userUserName);
  cardInfo.appendChild(home);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profile.appendChild(gHubLinkA)


  //Classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userUserName.classList.add('username');

  //Content
  userPic.src = obj.data.avatar_url;
  userName.textContent = obj.data.name;
  userUserName.textContent = obj.data.login;
  home.textContent = obj.data.location;
  gHubLinkA.textContent = obj.data.html_url;
  gHubLinkA.href = obj.data.html_url;

  followers.textContent = 'Followers:' + obj.data.followers;
  following.textContent = 'Following:' + obj.data.following;
  bio.textContent = obj.data.bio;

  return card
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
