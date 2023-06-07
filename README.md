# Otto: AI-Powered Development Platform

## Project Overview

Otto is an automated coding platform where users can define a software application and Otto will build a production-level application using AI. The goal is to have Otto interact with your existing dev and communication workflows just like every other dev on your team. You can assign issues to Otto in GitHub and give feedback via Slack. When Otto finishes writing the code, Otto will push a new PR to GitHub and you can leave comments if you spot errors or want changes. Otto can also act as a PM by taking an initial one-pager overview of a complete application, and breaking it down into a detailed project plan. And of course, after Otto writes a task, he can turn around and use the info from the task to write the code. By using the latest AI breakthroughs, Otto is able to generate real, working, production-level code in a consistent manner.

## What is this repo? I don't see Otto!

Otto is still under development, but in the meantime here is an example repo that shows what Otto is capable of creating as of June 6th, 2023. This repo was started with a `create-t3-app` script to create a production-level skeleton with full type safety, authentication, Prisma schemas, and TailwindCSS configuration. From there we then feed the "Otto PM Bot" the One-Pager description shown below. Other than those two steps, Otto created this entire repo by himself. Otto even created all of the Issues you see in the issues tab. You can also view the code that was created by Otto by looking at the Pull Requests.

The main reason we are sharing this repo is to give a sense of the level of sophistication that Otto is capable of today. There are some things Otto can do quite well, such as write very detailed and descriptive Issues. Otto also has limitations that are approximately at the level of a 20-year-old intern. He can write basic code, especially longer boilerplate code such as standard CRUD API endpoints and basic components. He struggles with more complex tasks and is not able to deeply understand the requirements to generate the full business logic needed to implement the application. This is about on par with what would be expected when working with an intern, and it's important to keep those limitations in mind when deciding what tasks are and are not appropriate for a system like Otto today.

# Demo Video

[Overview of Otto](https://www.youtube.com/watch?v=ERqldloLqjU)

# One-Pager Description

For this example repo, I created a one-pager that is the front-end for Otto itself. Currently the "Create Project Plan" step involves some manual intervention such as creating a new GitHub repo and passing in the one-pager via a command-line script. This one-pager describes the front end for Otto that I envision that will make it easy for anyone to create a new code base using Otto.

## Web Application Overview

Users will start by visiting a marketing landing page that describes Otto in detail and explains how it works, with a hero image (with a CTA to sign up), video demos, features, testimonials, and a sign up form at the bottom. Once a user signs up or signs in via GitHub, they will be taken to their Project Dashboard. Here users can view all of all of the current projects or create a new Project. When a user creates a new project, they will be taken through a series of pages that will help them describe and create their project.

The wizard starts with the name of the application. Then the user will auth into GitHub and create a new repository. Next they will need to write a detailed overview of what the application does. Next they will go to a page where they can add details about each page in the application. Next they will be shown options for the system architecture, such as the language, framework, css styling, database, hosting, and authentication. Finally they will be asked to log into Slack to connect the Otto Slack bot. Once the user is finished, they will click a button to start creating the project. They will be redirected to the project page for that application.

Behind the scenes, the system will start creating the application and providing status updates to the user via the project page. The project page will act as the central dashboard to view the current status of Otto. It will have several subpages where users can see more details about the project. The project page will have two main sections.

1. An update on the current status of Otto, including if he is currently writing code and when he started. If he is writing code, show the file that is being worked on and show a live update of the current status of the coding process.
2. A list of all of the main project details that have been created by the AI and need human approval before the AI will start coding. These details include: 3. A sitemap diagram that shows all of the files in the application directory. 4. A data schema that shows each table in the database, along with each column in the table and information about the column. 5. A list of the current GitHub tasks to be assigned to the AI. Each task contains detailed information about each file that needs to be created. These each need to be approved before they will be added as live GitHub tasks to the repo (which will trigger a webhook and the AI will start coding).

## Web Application Implementation Details

For this new feature, we will need to create a new web application for getotto.com that will allow users to create and manage projects.
The application will be built using Next.js, Supabase, Prisma, NextAuth, React, TypeScript, Tailwind CSS and Tailwind UI design system.
The application pages to be created are:

1. A main landing page that describes Otto in detail and explains how it works, with a hero image (with a CTA to sign up), video demos, features, testimonials, and a sign up form at the bottom.
2. A login page that allows users to login or sign up using their GitHub account credentials.
3. A main dashboard page that has a list of all of the current projects that the user is working on. This page will also have a button to create a new project. Clicking on the button will take them into the project creation flow.
4. The project creation page has several steps. 5. A project creation name page that allows the user to enter a project name. 6. A project description page where the user can write a detailed overview of what the application does. 7. A project setup page where the user can click icons representing options for the system architecture, such as the language, framework, database, hosting, authentication framework and css styling. Defaults for now are TypeScript, Next.js, React, Supabase, Prisma, Vercel, NextAuth, TypeScript and Tailwind CSS + Tailwind UI. 8. An optional "Log into Slack" page where a user can authenticate via Slack and add the Otto Slackbot application to their Slack organization.
5. A project page that shows the project name, description, and a table that shows each of the status items. The status items are the sitemap, the data schema, and the tasks. Each item will show a visual indicator of whether or not it is approved.
6. A project sitemap page where users can see a visual sitemap diagram for all of the files in their project. Each box that represents a file will show the file name and description. These can be clicked on and edited. They also have an approve or reject button. Users can also create their own new files here by clicking a button and then entering the file name, a short description, and a link to a Figma design file.
7. A project data page that shows a data schema diagram for the application. This will show each table in the database, along with each column in the table and information about the column. Users can create their own tables here by clicking on a button and adding each column name with a descriptions of what it is. They can also edit existing tables and approve or reject each table.
8. A project tasks page that shows a list of tasks. Each task contains detailed information about each file that needs to be created. These can be edited and approved (or rejected). Once the task is approved, the task will be converted into a new live GitHub issue (created server-side with the GitHub OctoKit sdk).



### START OTTO CREATED CODE ###

# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Running Prisma Migration

To run the Prisma migration, use the following command:

```
npx prisma migrate dev --name init
```

Replace `init` with the name of your migration.

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
