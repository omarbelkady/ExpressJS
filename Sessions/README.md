### Sessions

- Cookies and URL are good ways to transport data in between the frontend and the backend
- The downside of cookies is that they are read on the frontend which is very dangerous
- Sessions helps us solve this security flaw and instead of outputing the credentials it gives us just an id
- This information is stored in the backend and is encrypted
- Whenever a user hits a certain endpoint it creates the session for the user and gives them a cookie
- Any proceeding visit of the user will be checked and the user is granted access and a new session is created for him
- 
