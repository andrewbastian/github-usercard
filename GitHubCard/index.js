/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/andrewbastian')
/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function


   {login: "andrewbastian", id: 50464395, node_id: "MDQ6VXNlcjUwNDY0Mzk1",…}
   avatar_url: "https://avatars3.githubusercontent.com/u/50464395?v=4"
   bio: "Currently studying Web Development at Lambda School"
   blog: ""
   company: null
   created_at: "2019-05-09T20:07:11Z"
   email: null
   events_url: "https://api.github.com/users/andrewbastian/events{/privacy}"
   followers: 1
   followers_url: "https://api.github.com/users/andrewbastian/followers"
   following: 1
   following_url: "https://api.github.com/users/andrewbastian/following{/other_user}"
   gists_url: "https://api.github.com/users/andrewbastian/gists{/gist_id}"
   gravatar_id: ""
   hireable: null
   html_url: "https://github.com/andrewbastian"
   id: 50464395
   location: "Seattle, WA USA"
   login: "andrewbastian"
   name: "Andrew Bastian"
   node_id: "MDQ6VXNlcjUwNDY0Mzk1"
   organizations_url: "https://api.github.com/users/andrewbastian/orgs"
   public_gists: 0
   public_repos: 23
   received_events_url: "https://api.github.com/users/andrewbastian/received_events"
   repos_url: "https://api.github.com/users/andrewbastian/repos"
   site_admin: false
   starred_url: "https://api.github.com/users/andrewbastian/starred{/owner}{/repo}"
   subscriptions_url: "https://api.github.com/users/andrewbastian/subscriptions"
   type: "User"
   updated_at: "2019-08-15T06:03:10Z"
   url: "https://api.github.com/users/andrewbastian"

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/
.then((response) => {
			console.log('Network request was successful')

			// Data that comes back from the server
			const imageUrl = response.data.avatar_url
      const usersName = response.data.name
      const userName = response.data.login
      const location = response.data.location
      const userAddress = response.data.url
      const userFollowers = response.data.followers
      const userFollowing = response.data.following
      const usersBio = response.data.bio


			// Create components for each image returned
			// imageUrls.forEach((imageUrl) => {
				const card = Card(imageUrl, usersName, userName, location, userAddress, userFollowers, userFollowing, usersBio)
        const cards = document.getElementsByClassName('cards')
        const container = document.querySelector('cards')
      	container.appendChild(card)
			})
		// })
		// Promise has rejecte4d
		.catch((error) => {
			console.log('Network request was unsuccessful')
			console.log(error)
		})
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

// Our component creator function
//<div class="card">
function Card (imageUrl, usersName, userName, location, userAddress, userFollowers, userFollowing, usersBio) {
	const card = document.createElement('div')
	card.classList.add('card')
//<img src={image url of user} />
	const image = document.createElement('img')
	image.src = imageUrl
	card.appendChild(image)
//<div class="card-info">
  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  cardInfo.appendChild(card)
//<h3 class="name">{users name}</h3>
	const name = document.createElement('h3')
  name.classList.add('name')
	name.textContent = usersName
	card.appendChild(name)
  //<p class="username">{users user name}</p>
  	const username = document.createElement('p')
    username.classList.add('username')
  	username.textContent = userName
  	card.appendChild(username)
    //<p>Location: {users location}</p>
    	const locations = document.createElement('p')
      locations.classList.add('location')
    	locations.textContent = `Location: ${location}`
    	card.appendChild(locations)
      //    <p>Profile:
      //      <a href={address to users github page}>{address to users github page}</a>
      //    </p>
      	const profile = document.createElement('p')
        profile.classList.add('profile')
      	profile.textContent = "Profile:"
      	card.appendChild(profile)
        //
        	// const address = document.createElement('a')
          // address.classList.add('user-address')
        	// address.textContent = userAddress
        	// profile.appendChild(address)
          // //<p>Followers: {users followers count}</p>
          // 	const followers = document.createElement('p')
          //   followers.classList.add('followers')
          // 	followers.textContent = `Followers: ${userFollowers}
          // 	card.appendChild(followers)
            //<p>Following: {users following count}</p>

            	const following = document.createElement('p')
              following.classList.add('following')
            	following.textContent = userFollowing
            	card.appendChild(following)
              //<p>Bio: {users bio}</p>
              	const bio = document.createElement('p')
                bio.classList.add('user-bio')
              	bio.textContent = usersBio
              	card.appendChild(bio)
  //
  //
	// card.addEventListener('click', (event) => {
	// 	event.currentTarget.classList.toggle('selected')
	// })

	return card
}
/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
