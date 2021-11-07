"use strict";

const aboutSection = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const testimonialSection = document.querySelector("#testimonials");
const imageSection = document.querySelector("#images");
const footerSection = document.querySelector("#footer");

const navbar = document.querySelector("#navbar");
const navTags = document.querySelectorAll(".nav-tag");
const secondNav = document.querySelector("#nav2");

navbar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.getAttribute("id") == "about-item") {
    navTags.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "services-item") {
    navTags.forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "testimonials-item") {
    navTags.forEach((el) => el.classList.remove("active"));

    e.target.classList.add("active");
    testimonialSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "Images-item") {
    navTags.forEach((el) => el.classList.remove("active"));

    e.target.classList.add("active");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "footer-item") {
    navTags.forEach((el) => el.classList.remove("active"));

    e.target.classList.add("active");
    footerSection.scrollIntoView({ behavior: "smooth" });
  }
});

secondNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.getAttribute("id") == "about-item") {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "services-item") {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "testimonials-item") {
    testimonialSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.getAttribute("id") == "Images-item") {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
});
