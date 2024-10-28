# ***E-commerce bags***
[![Video Thumbnail](https://img.youtube.com/vi/p0dCi5D6gDI/0.jpg)](https://youtu.be/p0dCi5D6gDI?si=KGMDxxOrG_vlQtdv)
```bash
npm init
```
`Instalations`
```bash
npm i express mongoose
npm i jsonwebtoken cookie-parser bcrypt
npm i multer
npm i debug
npm i config
npm i jsonwebtoken bcrypt dotenv
npm install express-session connect-flash

```

[![Video Thumbnail](https://img.youtube.com/vi/sEZ1lul6GpI/0.jpg)](https://youtu.be/sEZ1lul6GpI?si=8mf8dQXdo0K76J-d)


usermodel
full name - string
email - string
password - string
card - array
isadmin - boolean
orders - array
contact - number
picture - db

product
image
name
price
discount
bgcolor
panelcolor
textcolor



[![Video Thumbnail](https://img.youtube.com/vi/Bl3u1VTYTHY/0.jpg)](https://youtu.be/Bl3u1VTYTHY?si=34AaSeWcxdwRgd2s)


### Kebab Case
- **Format**: All words are lowercase and separated by hyphens (`-`).
- **Example**: `my-variable-name`, `get-user-data`
- **Usage**: Commonly used in URLs and CSS classes, where spaces aren’t allowed, and hyphens improve readability.

### Camel Case
- **Format**: The first word is lowercase, and each subsequent word starts with an uppercase letter. No spaces or underscores are used.
- **Example**: `myVariableName`, `getUserData`
- **Usage**: Commonly used in JavaScript, Java, and many other programming languages for naming variables and functions.


## Backend Project 1 - Part 4

[![Backend Project 1 - Part 4](https://img.youtube.com/vi/Lu7q-Uqy7-g/0.jpg)](https://youtu.be/Lu7q-Uqy7-g?si=ro0wPnLCyb3t8sVC)

**Title:** [Backend Project 1 - Part 4](https://youtu.be/Lu7q-Uqy7-g?si=ro0wPnLCyb3t8sVC) | Scratch | Development/Production Setup | Backend Development

- **For Windows Command Prompt**:
       ```cmd
       set DEBUG=development:*
       ```
- **For Unix/Linux/Mac**:
       ```bash
       export DEBUG=development:*
       ```
```bash
$env:DEBUG='development:*'; nodemon index.js
```
<!-- control + shift + p = git keep -->

### 1. **Set NODE_ENV Directly in the Terminal**

Set `NODE_ENV` in your terminal before starting the application:

- **Windows (PowerShell):**
   ```powershell
   $env:NODE_ENV="development"
   node index.js
   ```

- **Windows (Command Prompt):**
   ```cmd
   set NODE_ENV=development
   node index.js
   ```

- **macOS/Linux:**
   ```bash
   export NODE_ENV=development
   node index.js
   ```

# Backend Project 1 - Part 5

## User Authentication & Functionality

[![Backend Project 1 - Part 5 | Scratch | User Authentication & Functionality | Backend Development](https://img.youtube.com/vi/5lWWOJBWeTA/maxresdefault.jpg)](https://youtu.be/5lWWOJBWeTA?si=w8YPkZlWgyQ1l_In)

#### [*Backend Project 1 - Part 5 | Scratch | User Authentication & Functionality | Backend Development*](https://youtu.be/5lWWOJBWeTA?si=w8YPkZlWgyQ1l_In)

### Topics Covered

1. Creating Routes in index.js
2. Checking Details of Register Route on Postman
3. Installing jsonwebtoken, bcrypt, dotenv
4. Implementing bcrypt
5. JWT Setup
6. Creating JWT Keys
7. Requiring the Packages in .env
8. Installing the packages for Config
9. Creating Controllers
10. Creating Test Users in Postman
11. Creating a Login User Route
12. Comparing Passwords
13. Creating isLoggedIn Middleware
14. Creating an Admin Route
15. Creating Products
16. Using Multer
17. Uploading Pictures
18. Editing create.ejs
19. Creating Products Model
20. Applying forEach for Products
21. Creating Shop Route to Display Prices and Images
22. Applying Colors


## `Flash messages allow you to store messages in session storage that can be displayed to users on the next request.`
```bash
#   Requirements for Using Flash Messages
  npm install express-session connect-flash
```
```js
  const session = require('express-session');
  const flash = require('connect-flash');

  // Set up session middleware
app.use(session({
    secret: 'your_secret_key', // Replace with a secure random key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Initialize flash
app.use(flash());

// Middleware to make flash messages accessible in views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});
```
## ***Display Flash Messages in Views: In your EJS templates, you can display flash messages like this:***
```html
<% if (success_msg.length > 0) { %>
    <div class="alert alert-success"><%= success_msg %></div>
<% } %>
<% if (error_msg.length > 0) { %>
    <div class="alert alert-danger"><%= error_msg %></div>
<% } %>
```

The options `resave`, `saveUninitialized`, and `cookie` are configuration settings for the `express-session` middleware in Express.js. Here's what each of them does:

### 1. `resave`
- **Description**: This option determines whether to save the session back to the session store, even if the session was never modified during the request.
- **Default Value**: `true`
- **When Set to `false`**: 
  - If the session is unchanged, it will not be saved again. This can help reduce the number of writes to the session store, improving performance.
- **When Set to `true`**: 
  - The session will be saved back to the store on every request, which can be unnecessary if the session hasn’t changed.

### 2. `saveUninitialized`
- **Description**: This option controls whether to save uninitialized sessions to the session store. An uninitialized session is a new session that has not been modified.
- **Default Value**: `true`
- **When Set to `false`**: 
  - Uninitialized sessions will not be saved to the store. This can help reduce storage usage, especially if your application doesn’t require the session until it is modified.
- **When Set to `true`**: 
  - New sessions will be saved to the store, which can lead to a lot of empty sessions if users visit the site but don’t interact with it.

### 3. `cookie`
- **Description**: This option allows you to configure the cookie settings for the session.
- **Default Value**: `{}` (empty object)
- **When Set to `{ secure: false }`**:
  - The session cookie can be transmitted over both HTTP and HTTPS. This is usually not secure because it allows cookies to be sent over unencrypted connections.
- **When Set to `{ secure: true }`**:
  - The session cookie will only be sent over HTTPS connections. This is a good practice for production environments where security is a concern.

### Summary of Implications
- **If `resave` is `true`**: It can lead to unnecessary writes to the session store, which might impact performance.
- **If `saveUninitialized` is `true`**: It can increase storage use if many unmodified sessions are created.
- **If `cookie.secure` is `false`**: It can expose your session cookie to potential interception over non-secure connections, making your application vulnerable to session hijacking attacks.

### Recommended Settings for Production
In a production environment, it's common to set:
- `resave: false` (to avoid unnecessary session store updates)
- `saveUninitialized: false` (to avoid saving empty sessions)
- `cookie: { secure: true }` (to ensure cookies are only sent over HTTPS)

### Example Configuration
```javascript
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true } // Use true in production with HTTPS
}));
``` 


https://www.npmjs.com/package/bcrypt

[![Backend Project 1 - Part 6 | Scatch | Add to Cart Feature & Nav Feature | Backend Development](https://img.youtube.com/vi/up9db_91qEE/maxresdefault.jpg)](https://youtu.be/up9db_91qEE?si=pnwMNpNOg3DYA3DK)

### Topics Covered

1. Adding Links
2. Adding to Cart
3. Creating New Route for Cart
4. Adding a Link for the Cart
5. Structuring `cart.ejs` to Display the Cart
6. Displaying the Cart Based on Email
7. Styling the Cart Structure
8. Adding Products
9. Calculating the Actual Cost
