---
layout: layouts/default.ejs
permalink: lab1.html
title: Lab 1
---
# Lab 1

## Christian Weersink 100791903
---
## Experience using Static Site Generation
My experience using static site generators has been interesting. It is a completely different way of creating websites than from what I have learned up until this point. I like using the layouts with the template engines to easily create pages with the same layout, it is a lot easier than using a header and footer separately and then building the body from scratch.

## Template Engines
**<u>Pug</u>**

<u>Pros</u>
- Pug is a whitespace language which makes the code look a lot cleaner
- Syntax similar to Javascript
- Support Template Inheritance
- Allows embedding of Javascript

<u>Cons</u>
- Whitespace languages can run into formatting issues if indentation is incorrect
- Does not support async rendering


**<u>EJS</u>**

<u>Pros</u>
- Standard Javascript/HTML Tags that we are familiar with
- Easy learning curve for people familiar with Javascript
- Support includes

<u>Cons</u>
- No template inheritance 
- No async rendering


**<u>Nunjucks</u>**

<u>Pros</u>
- Standard HTML syntax with template tags
- Supports includes and extends
- Supports async
- Flexible

<u>Cons</u>
- Harder to learn for developers not experienced with Django
- Slower performance than EJS or Pug

### Decision
For this project I have decided to go with Nunjucks. They are all fairly similar in over all usage, but Nunjucks supports asynchronous rendering, which may prove useful. From a learners perspective Nunjucks is also a good option, since a lot of the examples on the 11ty website use Nunjucks. Another benefit for me personally is that I have not used it before, so expanding the languages that I am comfortable with will help me improve as a developer.

*After the requirements change to assignment 1, I will be using ejs as my template language since Nunjucks is no longer an option.*

## Other Static Site Generators
Some other static site generators(SSGs) along with Eleventy are:
**Jekyll**
Jekyll has GitHub page integration and is easy for blogs. It is slower than Eleventy and has a dependency on Ruby.
**Gatsby**
Gatsby is React based and has many community based plugins. It is rather complex and has a very slow build time for large sites and is considered overkill for small sites.

## 11ty Configurations
Some of the configurations that will be useful for this project can include:

|Name|Syntax/Example|Description|
|:---:|:---:|:---:|
|Pass Through Copy| `eleventyConfig.addPassthroughCopy("path")`| Copy designated path to output. Can be used to include images/css folders. We use it to build the site from the 'src' folder.|
| Watch | `eleventyConfig.addWatchTarget("path to watch")` | Adds a path or file type to watch when --serve is running. Can be used to rebuild site when CSS or .MD files are updated. |
|Shortcodes | ```eleventyConfig.addShortcode("image", function (src, alt) { return <img src="/assets/${src}" alt="${alt}" />; });``` | Creates a shortcode to use in the website. This code snippet will allow the user to use the image function to create the html image tag.| 

## Front Matter
Front matter is used as metadata for an SSG to control how content is generated. Things like title, date, and category can be defined in the front matter. Front matter can include SEO data. It can also be used to customize content and for theming. Front matter is very important in modern web development, especially with the wide use of SSGs. 

---

### References
- [11ty Config](https://www.11ty.dev/docs/config/)
- [EJS](https://www.11ty.dev/docs/languages/ejs/)
- [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/)
- [Pug](https://www.11ty.dev/docs/languages/pug/)
- [Gatsby](https://www.gatsbyjs.com/docs/glossary/static-site-generator/)
- [Jekyll](https://jekyllrb.com/docs/)
