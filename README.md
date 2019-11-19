# proj4-simple-over-complex


__Simple > Complex__ .... a basic 'game' in __Python3__ and In __JavaScript__
[deployed on the web](https://brianlovega.github.io/proj4-simple-over-complex/)

******
Drawing on Inspiration from 'The Zen of Python' by: Tim peters
```
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```
******
<!-- Picture below of home page of Simple > Complex app -->

![alt text](https://github.com/BrianLoveGa/proj4-simple-over-complex/blob/master/bl-simple/planning/doc-pics/Screen%20Shot%202019-11-17%20at%204.22.27%20PM.png "Screen shot from home page of Simple > Complex app")


******
I plan to continue to add to and develop this platform for making a simple game into something larger and larger until I have a game like I normally play. I originally wanted to have a fully furnished action / adventure game but my budget of $ 0, team size of 1, and 4 day time limit for this had me scale back. There is a simple python game code you can copy down and play with. There is also a vanilla JS prompts version of the game and a React style buttons and prompts version on this site for the puroposes of comparison and contrasting Python3 and JavaScript. 

I also added in a weather and dog picture component for fun.


__My goal__ here was/is to provide a simple game coded in Python3 that users can copy and paste into their code editors or even the Python IDLE app and play if they are a little to a lot experienced.

Simple being 1 hero/heroine character you choose the name for ... 1 'bad-guy' class ... and 3 questions (riddles, puzzles) to solve. You start with 10 health and 10 attack, the 'bad guy' has 50 health and 50 attack.

Upon answering/solving the questions correctly you will gain something like 15 health and 15 attack points. Making it essential to answer the 3 questions before you can win the fight. Maybe have a little lesson about using words before resulting to fighting in the real world in there somewhere.

Also will have instructions (typed out markdown style or embedded video/link to You Tube tutorial I make) for creating a GitHub account, installing Python, installing a code editor (Sublime or VS code) and using the new code editor to have a hello world file saved on GitHub. Include how to play this 'game' now that you have some basics set up for coding.

Also, I would like to have that same game recreated in JavaScript and playable through the webpage currently via prompts, and there exists a playable version in the browser using a button and prompts via a React component.

The code for the JS versions would all be separate files so they can be compared and contrasted to the original Python version.

All files will be available to be copied down - or can just clone the whole repo.

Users can then use this starter version to continue on and make a simple game in Python or Js.

Coming from a background of loving video games and dreaming of coding for years before I took the plunge a site like this, had I found it in my youth, might have started me down this code road much sooner. It also should be helpful if anyone is well versed in one but not the other language (Python vs JS).


This is more for learning the basics and appealing to new potential coders.

I plan on starting a web series where we code this out together. I am also working on a version of a text rpg in python with as map, and more than 1 enemy. 

******

__Languages:__ HTML, CSS, Javascript, Python, React for views. No databases being used so no real back-end needed, no plans for leaderboard or really keeping score for this simple game. Have added some API fetch requests with an open weather map .org component and one from dog.ceo API.

Would use Python3 for starter version of game (not playable in the webpage but able to be copied and run locally to play), would use HTML, CSS, & JS for pages themselves, would use JS for the playable in-browser versions. 

kinda like this ...

index.html (for the webpage) and view1.html (python code), view2.html (how to github & install python tutorials), view3.html (vanilla JS prompts version), view4.html (React Js version buttons and prompts).



simple.py ( where user can copy paste and play locally)

simple-prompts.js ( to play the same game but through prompts in browser)

simple-React.js (to play in browser)

****
__Installation__

To run the python game one simply needs a code editor and python installed locally.
Copy down the provided code and run the file in terminal (command line) or through the code editor.

To run the vanilla JS Prompts game one simply needs a code editor. 
Copy down the provided code and link it to an html file. 
It will work offline (ie you don't have to run it through a website)

To copy and run the whole site all that is required is react, react router dom, and react markdown. As well as a free API key for open weather map . org . 

All 3 versions of the 'game' code is freely advertised and avaliable for anyone to copy down and make their own better version of. 

******
__User Stories__

1) *As a [type of user], I want [an action] so that [a benefit/a value]


         As a [ kid / teen looking into possibly coding ], 
         I want [ a site with a simple game I can make and modify ]  
         so that [ I can get into learning code ]

2) As a < role > I can < capability >, so that < receive benefit >


         As a < person interested in learing code to make games > 
         I can < use this site to follow along and grow skills >,
         so that < coding is more fun and there are more games and happy people in the world >

3) Someone famaliar with Python but not JavaScript ...
         Or vice versa ...
         To be able to have a simple example of the complex things these languages can do.
         To see side by side the difference in prompts and console log of the same simple game.


******
__Planning__
Here is the rough first draft of what the home page would look like.
<!-- Picture below of home page mock up draft for Simple > Complex app -->

![alt text](https://github.com/BrianLoveGa/proj4-simple-over-complex/blob/master/bl-simple/planning/wire-frames/simple%20index%20draft.png "Drawing of home page mock up draft for Simple > Complex app")
Here is a rough draft for what I imagined the code markdown page would look like.
<!-- Picture below of code markdown page mock up draft for Simple > Complex app -->

![alt text](https://github.com/BrianLoveGa/proj4-simple-over-complex/blob/master/bl-simple/planning/wire-frames/simple%20py%20vz%20draft.png "Drawing of code markdown page mock up draft for Simple > Complex app")


*****

__Valid__ HTML and CSS pass w3 validation

<!-- Picture below of HTML validation for Simple > Complex app -->

![alt text](https://github.com/BrianLoveGa/proj4-simple-over-complex/blob/master/bl-simple/planning/doc-pics/Screen%20Shot%202019-11-18%20at%2010.46.18%20PM.png "Screen shot of HTML validation for Simple > Complex app")

<!-- Picture below of CSS validation for Simple > Complex app -->

![alt text](https://github.com/BrianLoveGa/proj4-simple-over-complex/blob/master/bl-simple/planning/doc-pics/Screen%20Shot%202019-11-18%20at%2010.46.52%20PM.png "Screen shot of CSS validation for Simple > Complex app")

*****

__Hurdles and problems__

Getting the syntax correct in the first python game was a decent enough task in and of itself. Trying to keep the exact same style for the vanbilla JS prompts version was tricky sonce the 2 languages are different in a few ways. 

There was a struggle for a minute I was having trying to prevent an empty string form being entered for the name of the player. I reached out to the kindness of strangers and got a solution from stack overflow. 

Of course due to building the Python game first in the Git Repo and not a React App when deployment time came there were lots of headaches and issues and file restructring that I had to do. 

Before this page I had never rendered a markdown file on a site before nor had I ever embedded YouTube videos. This is also the first time I have used (star wars(c)) Generic Space Sci-Fi Movie Title scroll effects. 

I will be adding a game with much more elements to this site as I continue to grow my skills and my free time permits it. 


******


🖖 🅛🅘🅥🅔 🅛🅞🅝🅖 🅐🅝🅓 🅟🅡🅞🅢🅟🅔🅡 🖖

(c) B-Love Codes
