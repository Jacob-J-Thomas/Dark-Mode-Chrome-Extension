# Dark-Mode-Chrome-Extension
An Adaptable Dark Mode Extension for Specific Domains

The contents.js file contains a few lines of JavaScript that adds a filter to invert the color scheme, which can be easily addapted for any website. The manifest.json file contains the targeted URL's, permissions, and other relevant data Google recquires.

This version of the app targets the helpdesk portal that I have been working in, but I also created another version that works for the Project Management app, Smartsheets.

The app works by applying a filter property to the HTML Document object, and then applying an additional filter to uninvert the color of certain elements, such as photos. 

In its current state the filter properties are best suited for the way the monitors at work display their targeted website, but I have been considering implementing a front end element that would allow end users to adjust certain aspects of the filter property in order to tweak the appearance and readability to their preferences.
