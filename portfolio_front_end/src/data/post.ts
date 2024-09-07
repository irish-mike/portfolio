export default {
  "id": "1",
  "date": "September 5",
  "author": "Michael Grinnell",
  "tags": ["React", "TypeScript", "Bootstrap", "SCSS", "Vite", "Directus", "CMS"],
  "title": "Building My Portfolio Website",
  "subtitle": "Challenges and Lessons from Developing My Portfolio Site",
  "featured_media": {
    "title": "Portfolio Website Development",
    "url": "https://www.your-website.com/portfolio-development-image",
    "type": "image"
  },
  "description_md": `
## Introduction

This post gives a high-level overview of the development of my portfolio website. At the time of writing, it’s still a work in progress, with the front end mostly built and the content yet to be finalized. I also plan to integrate a backend to make content management easier in the future. For now, my focus is to launch a minimal viable product (MVP) version. In this post, I’ll walk through some of the biggest challenges I faced, key lessons I learned, and hopefully share some insights that others might find helpful.
  `,
  "content_md": `
## Tools and Technologies Used

The website is built with **React** and **TypeScript**, which I chose for their flexibility and strong type safety. I opted to use **Bootstrap** for styling, mainly because I’m familiar with it and appreciate how quickly it allows content to become responsive across different devices. I also used **Vite** as the build tool for its speed and simplicity, which streamlined the development process significantly.

## Design and Planning

One of the first steps I took was creating a **design document** to guide the development process. This document wasn’t set in stone—it evolved as the project progressed—but it was crucial for keeping me focused and organized. I used it to create tasks and manage them on a Trello board, which helped me avoid spending too much time on less important features. This approach allowed me to prioritize and manage my time more effectively.

The design document also played a big role in **styling decisions**. I gathered screenshots from other websites to inspire layout and style ideas, and even wrote some layout concepts on my whiteboard, taking pictures to include in the document. Having this visual and written reference made it easier to plan the look and feel of my site as I moved forward.

## Styling and Customization

While **Bootstrap** made responsive design easier, I wanted to avoid the generic look that often comes with it. To give the site a more unique feel, I customized the default styles using **SCSS**. I introduced a custom color palette and implemented a **light/dark mode** feature. Dark mode became the "dev mode," and I went for a retro console aesthetic to bring some personality to the site. I also added **particle effects** in the background for a touch of fun and subtle **animations** to various elements. I believe small animations can make a site feel interactive and alive, but they must be balanced—too many can overwhelm the user, while too few can make the site feel static.

## Backend Decisions and Challenges

At the time of writing, the backend is not yet integrated, but I plan to write a follow-up post once it’s complete. Deciding on a CMS for content management was one of the more challenging aspects of the project. Initially, I considered using **WordPress** as a headless CMS because I was already familiar with it, and it’s highly customizable. However, I soon realized it was overkill for this project.

I then explored the idea of using a **flat-file CMS**, which has the advantage of simplicity and fast performance. Unfortunately, none of the freely available flat-file CMS options provided an API endpoint I could query from the front end. After some research and testing, I decided on **Directus**, a standard CMS that I set up easily with Docker. Directus provided a simple user interface, allowed me to create custom content, and had the API endpoint I needed to integrate with the front end.

## Overcoming Design and Architecture Challenges

One challenge I faced was structuring the code and organizing the project. React doesn’t enforce any particular structure, and different developers have different preferences. Initially, I used a **component-based architecture** inspired by **Atomic Design**, which organizes components into Atoms, Molecules, and Organisms.

- **Atoms** are the smallest building blocks, such as icons.
- **Molecules** combine atoms into more complex components, like form elements.
- **Organisms** are even more complex structures, combining molecules to create larger sections of the UI, like layouts.

While this approach worked, I later found that organizing code around **features**—as I did in another React project—was much cleaner and more intuitive. In a **feature-based architecture**, each feature has its own components, hooks, APIs, and utilities, all contained within a well-defined structure. For example, a feature like **user authentication** would include everything related to login functionality, such as the login form, hooks, and API requests.

I found this feature-based structure much clearer. It’s like organizing a kitchen: you keep all your cooking tools in one place rather than scattering them around the house. This way, everything is where it belongs, making it easier to find and maintain.

---

By breaking down the challenges and decisions I made throughout the development process, I hope to provide insights for others who are working on similar projects. Stay tuned for updates as I finalize the backend and further refine the site!
  `
};
