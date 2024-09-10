import { FullPost } from "@entities";

const post: FullPost = {
  "id": 1,
  "status": "published",
  "date": "September 5",
  "author": "Michael Grinnell",
  "tags": ["React", "TypeScript", "Bootstrap"],
  "title": "Building My Portfolio Website",
  "subtitle": "Insights from the development of my portfolio website",
  "content_md": `

The goal of this article is to provide a high-level overview of the development of my portfolio website. I’ll walk through some of the challenges I faced, lessons I learned, and hopefully share some insights that others might find helpful.

At the time of writing, the site is not quite finished. The front end is built but I still need to connect to the backend cms and finalize the content. I decided to put it live because I find it provides value in its current form. One of the key takeaways from *[The Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer/)*, a book that I highly recommend, is the concept of “good enough” software. It’s about finding a balance between perfection and timely delivery by releasing something functional and improving it over time.

A good example of this is a search feature I planned to implement for my blog posts. I’ve already designed the UI for it, but I realised I don’t have enough posts to justify its implementation right now. It’ll take some time before I have enough content for a search feature to make sense, so I decided to park it for now. Once I’ve published more articles and searching becomes necessary, I’ll revisit the feature and implement it at the right time.

### Design and Planning

In the past, I used to dive straight into coding without much planning. That can work fine for smaller projects, but as projects scale, so does the need for planning. For this project, I decided to put together a design document to guide the development. It wasn’t set in stone, but more like a flexible guide that evolved as the project went along.

Having it was super helpful in keeping me focused and organised. I broke down tasks and tracked them on a Trello board, which stopped me from getting sidetracked by less important features. It made prioritising what mattered much easier and helped me manage my time better. The document also helped a lot with styling decisions. I grabbed screenshots from different sites for inspiration and even sketched out ideas on my whiteboard (one of my favorite development tools), taking pictures to include in the document. This approach really helped keep the design and styling consistent throughout the development lifecycle.
![Screenshot from Design Document - About Me Section](/assets/posts/design_document_about_me.png)

### Tools and Technologies Used

The website is built with **[React](https://reactjs.org/)** and **[TypeScript](https://www.typescriptlang.org/)**, which I chose for their flexibility and because I’m a big fan of strongly typed code. TypeScript adds an extra layer of safety to the coding process, which I really appreciate. For styling, I wanted to keep things simple, so I opted for **[Bootstrap](https://getbootstrap.com/)**. Since I’m already familiar with it, I knew it would make it easy to create responsive content across different devices with minimal effort.

One thing I want to mention is that while **Bootstrap** made my life easier when it came to responsiveness, I find that it can make things look a bit generic. I wanted the site to feel more unique, so I customised the styles using **SCSS**. I added my own colour palette and built in a **light/dark mode**, which eventually became "dev mode" with the intention of creating a retro console vibe. I even threw in some **particle effects** in the background and added subtle animations to bring the site to life. I’ve found that animations, when used sparingly, can really make a site feel more interactive, but it’s all about balance, too many and it’s overwhelming, too few and the site feels a bit flat.

### Backend Decisions and Challenges

Deciding on a CMS for content management was a challenging aspect of this project. Initially, I considered using **[WordPress](https://wordpress.org/)** as a headless CMS because I was already familiar with it, and it’s highly customisable. However, I soon realised it was overkill for this project.

I then explored the idea of using a **flat-file CMS**, which has the advantage of simplicity and faster performance, since there is no DB. Unfortunately, none of the freely available flat-file CMS options provided a decent API endpoint that I could query from the front end. After some research and testing, I decided on **[Directus](https://directus.io/)**, a standard CMS that I could set up with Docker. Directus provides a simple user interface and allows me to quickly create custom content, and it has the API endpoint I need to integrate with the front end.

### Overcoming Design and Architecture Challenges

Another challenge I faced was structuring the code and organising the project. **React** doesn’t enforce any particular structure, and different developers have different preferences. Initially, I was using a **component-based architecture** inspired by **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)**, which organises components into Atoms, Molecules, and Organisms.

- **Atoms** are the smallest building blocks, such as icons.
- **Molecules** combine atoms into more complex components, like form elements.
- **Organisms** are even more complex structures, combining molecules to create larger sections of the UI, like layouts.

While this approach worked, I found that the organisation was too abstract for my liking. Eventually, I found that organising code around **features** as I did in other React projects was much cleaner and more intuitive. In a **feature-based architecture**, each feature has its own components, hooks, APIs, and utilities, all contained within a well-defined structure. For example, a feature like **user authentication** would include everything related to login functionality, such as the login form, hooks, and API requests. It’s like organising a kitchen: you keep all your cooking tools in one place rather than scattering them around the house. This way, everything is where it belongs, making it easier to find and maintain.

---

While there were many other challenges I encountered during this project, these were the ones that stood out most to me. I hope this post provides some insights for others who are working on similar projects. If you enjoyed reading this please check back later for updates as I further develop the site!`
};

export default post;