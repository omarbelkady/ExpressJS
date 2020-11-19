### Templating
- ExpressJS can be integrated with many Templating Engines
- Because Express does not come with a default TE , I can create my package or download a package that does the 
      the templating for me and I can use it with HTTP
- Templating means when I have a lot of dynamic content on the web application and I want to display it I can:
      - leave some parts of the web page I want to keep them intact for example my facebook profile vs my friends
            - structure is the same but the content is not e.g. name, username, friends
- Templating is basically defining the structure and leaves out space for dynamic content to be added
- It then takes the input data and outputs the HTML output as a response 
- You can create your own template but it is highly recommended to use the existing templating engines that exist
      - This is because they are not difficult to install and they have been tested, which means: 
           *errors
           *bugs
           *security flaws that people may face already have been resolved
