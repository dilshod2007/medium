const url = location.search;
const blogData = new URLSearchParams(url).get('blog-data');
const decodedData = atob(blogData);
const blog = JSON.parse(decodedData);

const tokenUser = JSON.parse(localStorage.getItem('token'));



const img = document.querySelector('.content__img');
const description = document.querySelector('.content-description');
const title = document.querySelector('.content-heading__title');
const tag = document.querySelector('.content-heading__tag');

img.src = blog.image;
description.textContent = blog.description;
title.textContent = blog.title;
tag.textContent = "#" + blog.tags.join(", ");

