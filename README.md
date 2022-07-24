<p align="center">
    <img alt="Image" src="https://media.discordapp.net/attachments/1000155185357795401/1000633854467506216/unknown.png" width="200" />
</p>
<h1 align="center">
  CodeBro: Hacky Birthday MLH 2022
</h1>
CodeBro is an offline programming suite that allows users to practice both their web design and competitive problem-solving skills. This won [Most Creative Use of GitHub](https://devpost.com/software/codebro)!

## 💡 Inspiration
Imagine this: You’re on a road trip, and being the code monkey you are, you seem to hate every minute of it being offline and away from your code. While we’re somewhat kidding and would strongly urge you to enjoy your trip, we understand that the best way to improve in coding is to practice, and what better platform to practice on that than a platform that works offline? From the get-go, we recognized that there are several problems for coders, especially if they are just starting out:

1. Learning code can, well, be kinda boring. Not everyone learns efficiently through 10-hour tutorials or endless documentation sites, thus our idea partly stemmed from a shared struggle that there is a lack of variety when it comes to learning and practicing code. 

2. There’s a goal: as you come to familiarize yourself with the platform, the two tracks both offer a goal-oriented style of learning, allowing users to stay motivated and engaged with their learning. 
As we learn to code, practice becomes the key to solidifying our understanding, which is why we saw the inherent potential of CodeBro and decided to bring it to life. 


## 🔍 What it does
At its core, CodeBro is an offline programming suite that allows users to practice both their web design and competitive problem-solving skills. 

The first of the two tracks focus on web development, where the user practices their HTML and CSS skills by replicating a reference image as quickly and accurately as possible. Throughout the process, users have a live view of their code and are able to see immediate updates made within their code, on the display. We then use a visual similarity algorithm to locally score how similar the user’s code is in comparison to the reference image. This track is both fast and secure and includes the option to go onto another display in the case that they are either satisfied with their replication or they prefer another image. 

The second track centers around competitive/logic-based coding questions, allowing users to solve them using Javascript. All of the user's inputs are locally tested and are judged in comparison to the test cases. Similar to the previous track, there is a next/skip button that enables users to move into another question afterwards. 


## ⚙️ Tech Stack
We built our front-end using React.Js, Typescript, Workbox and Tailwind CSS for the styling. As we were making a Progressive Web App (PWA), we made an active effort to not use any external servers and databases in order to make sure that CodeBro could operate offline.

## 🚧 Challenges we ran into
Throughout the development of the application, we ran into several different challenges and had to find solutions to these. First, a majority of our team was completely unfamiliar with the concept of PWAs as well as typescript, making this an initial learning process for them. In addition, the poor documentation for CodeMirror reacts wrappers created conflict, given that there were lots of jumbles between CodeMirror 5 and CodeMirror 6 and very few React wrappers supported CodeMirror 6, so we had to search for them. Another specific challenge our group faced was the process of creating and fine-tuning the visual similarity algorithm. While there were originally many options available, most of them run on servers, which we could not use in order to allow users to test their code offline (PWA). In addition, most local solutions used complex libraries in Python that could not be ported over to JavaScript, meaning we had to make our own. These challenges were unexpected, and we would often have to look into alternatives or do further research. 

## ✔️ Accomplishments that we're proud of
Creating our own local embedded JavaScript interpreter with a built-in test case checker, as well as a own visual similarity algorithm that can accurately score how similar the result of the user’s code is to the reference image were two of our biggest accomplishments throughout this hackathon, especially given that these were some previously unfamiliar territory. We were also very proud of the fact that we were able to create the platform despite dealing with several new concepts, libraries and structures. 

## 📚 What we learned
Throughout this project, our team learned a lot about developing a Progressive Web App, especially learning how to use Typescript, CodeMirror, Tailwind-CSS and React.JS to create a functioning website that is able to run completely offline. Ultimately, with our team coming from a background having only worked on websites without offline functionality, this project was definitely a curveball in our previous knowledge!

## 🔭 What's next for CodeBro
There were several features that we are looking to implement to CodeBro in the near future! We would like to eventually build on this idea and add other functioning branches of coding to our website, such as machine learning, AI, blockchain, and angular- given the fact that we hope to continue making learning code a more interactive process. Additionally, we would like to see the concept of levels and tutorials being added to our platform, as to create a more complex and personal experience for the users.
