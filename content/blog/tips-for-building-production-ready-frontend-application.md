---
title: "Tips for Building Your First Production-Ready Frontend Application: A Developer’s Guide."
name: "tips-for-building-production-ready-frontend-application"
summary: "Tips on how to build a production frontend for less experienced frontend developers"
date: 2025-02-09T11:16:38+06:00
tags: [ "Frontend"]
---

Before I start, I want to EMPHASIZE that there’s no one correct way to build a frontend application. Each application is different. Different projects have different scopes and goals. If you’re looking to build the next [Figma](https://www.figma.com/) or [Berkshire Hathaway](https://www.berkshirehathaway.com/) website, this is probably not for you. This article suits best people looking to build their first production-ready single-page application and who have no experienced person to guide them.

## Here are the things you should consider.

### 1. Choose a front-end framework.

You can undoubtedly build an application using your favorite UI library (ReactJS, VueJS, etc…) without needing a framework such as Next.js for React or Nuxt.js for Vue. However, very quickly you will hit a wall. You’ll start solving problems people before you have already faced and solved and it’s highly unlikely that you’ll solve them better than they did. You might find yourself reinventing the wooden disc in an era of inflatable tires. Some of the problems frameworks help you solve include:

#### Routing
Frameworks will give you a routing system that will make your URLs consistent and sensible. On top of that, you’ll get optimizations like [code-splitting](https://medium.com/@omkarbhavare2406/code-splitting-the-key-to-a-faster-more-responsive-web-a6a0b30a899a) that will improve the performance of your application significantly and make navigation smoother.

#### Server-side rendering (SSR) and Static-site generation (SSG)
If you’ve been working on your pet projects with React or any other UI library, have you noticed a blank page that is displayed on the initial render? That’s because you’re doing Client-Side rendering and that is not good for SEO.

Frameworks give you the ability to do SSR instead. It makes your application SEO-friendly because search engines can crawl the generated HTML. It also improves performance, since you won’t render a blank page initially.

#### Performance optimizations
Some of the most taxing aspects of page loading are images and videos. Then there are other aspects such as fonts. Frameworks optimize all these for you by compressing, resizing, and caching.

What I just mentioned about frameworks doesn’t scratch the face of what they do behind the scenes. Frameworks do a ton of work under the hood. If you end up choosing one, feel free to dive into its docs. I’m sure you’ll be dumbfounded and most importantly, find it very useful.

### 2. Choose a component library.

A component library is a collection of pre-built elements, such as buttons, accordions, modals, etc., that can be customized to your style.

Remember the talent recruitment system I was hired to build as my first job? Well, the user was supposed to fill in details in a wizard-like workflow. I used solely HTML and CSS to build a stepper component from scratch. It consumed a lot of time and was buggy at times. The focus went from delivering real value and instead focused on styling elements. I reinvented the wheel!

Component libraries save you from this nightmare. They do the heavy lifting in this area by enforcing a design system, and then giving you ready-to-use components. All you do is set your own theme/style and you’re good to go.

Some of the popular libraries include Material UI, Chakra UI, Ant Design, and many others. Feel free to look for those with a design system that aligns with your project goals and that are compatible with the UI library and framework of your choice.

### 3. Image CDNs

One of the challenging aspects of web development that caught me off-guard was images. Images are quite difficult to handle. Your users will want to upload images of different resolutions, aspect ratios, and file types. Yet, you want your site to display top-quality images, in a constrained space, without causing weird cropping.

Have you ever uploaded your picture on a website and your face ended up being cropped off or positioned awkwardly? Well, you don’t want your web application to have the same issues.

This is where image CDNs come in. Image CDNs enable you to load images faster, add filters, as well as convert, compress, and transform images in real-time.

Some of the image CDNs include [Thumbor](https://www.thumbor.org/), [imgproxy](https://imgproxy.net/), [imaginary](https://github.com/h2non/imaginary), etc… For more details, please take a look at [this article](https://web.dev/articles/image-cdns) and [this](https://gcore.com/learning/what-is-image-cdn). I would highly encourage you to consider an image CDN for your project.

### 4. Caching

One of the techniques that will improve the performance of your application is caching. It’s a technique we rarely use in our pet projects, but if you’re working on a production-ready application, I would highly encourage you to do it.

Caching is a technique of storing data locally but temporarily so that it can be accessed faster. Instead of making network requests ALL the time, you make a request to the server ONCE, store the data locally, and only update it if there’s a change to that data. Please read more [here](https://medium.com/@brockreece/frontend-caching-strategies-38c57f59e254), [here](https://medium.com/@gidi2904/caching-strategies-for-frontend-developers-boosting-website-performance-7ea2c1ff1532), and [here](https://aanchalfatwani.hashnode.dev/boosting-website-performance-through-frontend-caching-strategies).

There are a number of tools to help you handle caching, each with tradeoffs. One cross-javascript frontend framework tool is the Tanstack query. RTK query is a redux-based alternative. If you’re working with GraphQL, then Apollo cache is probably what you can go with. This is just to mention three. There are many others that you can explore on your own. [This article](https://medium.com/@imranrafeek/zustand-vs-rtk-query-vs-tanstack-query-unpacking-the-react-state-management-toolbox-d47893479742) compares the three I mentioned above.

### 5. Typescript

I don’t know about you, but I can’t count how many times I have had my React application crash, only to be hit with an error like this: “Property ‘length’ does not exist on type ‘string’”. What if instead of being hit with this error at runtime, you would catch this while writing your code (at compile time)?

This is where Typescript comes in. Typescript is a statically typed programming language that extends Javascript. To understand the kind of problems that Typescript solves, please read [this amazing article](https://www.typescriptlang.org/why-create-typescript/).

One big drawback to using Typescript is that it has a bit of a learning curve. If you have tight deadlines and have never used it before, then it can take a while to use it comfortably. But once you get the hang of it, then it’s a walk in the park.

One big advantage though is that you can write Javascript in Typescript. This means that you can start your project as a Typescript project, and when you get stuck, you just write JavaScript. Later as you get comfortable with Typescript, you improve your codebase.

### 6. Internationalization or i18n

In this globalized world, there is a high chance that your application will soon be used in another part of the world that doesn’t necessarily speak your native language or use your country’s currency.

Take Amazon for example. It’s used all over the world. In Japan, they browse it in Japanese. In the Netherlands, it’s used in Dutch. This is the power of internationalization. Users from different cultures can use your application without a hassle.

Besides, if you’re sure that you will not take your application global, you can still benefit from i18n. In our pet projects, we usually hard-code our strings, and it can get ugly pretty quickly. Let’s take an example:

```jsx
// SubmitButton.jsx
const SubmitButton = (text) => (<button>{text}</button>)

// Form.jsx
const Form = () => (
  <FormWrapper>
    /* Some code */
    <SubmitButton text="Confirm" />
  </FormWrapper>
)

// Alert.jsx
const Alert = () => (
  <AlertComponent>
    <SubmitButton text="confirm" />
  </AlertComponent>
)
```

Well, what if later, you want to change the text from “Confirm” to “Ok”? Then you go to every file and change the content. Pretty annoying, right? These are some of the headaches i18n can help you solve.

The good thing is each Javascript frontend library has its own packages to help you do internationalization. React has [react-i18next](https://react.i18next.com/), Vue has [vue-i18n](https://vue-i18n.intlify.dev/), and Angular has [angular-i18n](https://v17.angular.io/guide/i18n-overview). I would highly encourage you to consider using i18n in your next production-ready application.

### 7. Forms
Forms are such a simple concept. You have a couple of inputs to collect data from a user, submit data to a server, and then display a response to the user.

Forms in very big projects, however, can get ugly pretty quickly. Forms structures and inputs could be dynamic, calling external APIs, auto-complete, etc…

If you’re expecting to work with a lot of forms with a bit of complexity, I’d recommend you to go with proven third-party libraries. There are several libraries with different approaches. In React, there is for instance [Formik](https://formik.org/) and [React Hook Form](https://react-hook-form.com/). In Vue, there’s [Vue Form](https://vueform.com/). You can look up form libraries compatible with your preferred library.

### 8. Metadata

Metadata is important in that it helps to improve SEO on your site and web shareability. Have you noticed that when you share a link via Slack or any other messaging app, a preview of the link is shown? How about when you google something and a short description is shown?

This is the power of metadata. I would highly encourage you to consider adding metadata to your application.

Alright, those are some of the major tips I thought you should consider while building your first production front-end application.

There are other aspects I didn’t mention such as responsiveness and writing comprehensive tests. But I assume these are already part of your workflow. I’d like to cover other aspects such as deployment in a separate article.

I will keep updating this article in the future to include some of the tips I think would be useful, so, if you think there’s something important that I forgot, please feel free to highlight that in the comment section.

See you around!