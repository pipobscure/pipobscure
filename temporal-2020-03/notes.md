---
marp: true
paginate: true
footer: "https://github.com/tc39/proposal-temporal"
---

# Temporal 🕓

## Update 2020-03-31

- Intro
- Spec draft
- Polyfill
- Cookbook
- Documentation
- Calendar
- Feedback
- Roadmap

---

<!-- _header: 'Intro' -->

# Intro

What's new since last time?

- More participants
- Cookbook https://tc39.es/proposal-temporal/docs/cookbook.html
- API Documentation https://tc39.es/proposal-temporal/docs/index.html

<!--
We've had a lot of new people join since i last gave an updated.
We now have input from:

* Apple
* Bloomberg
* Google
* Igalia
* Microsoft

--->

---

# Spec draft

- Gaps continuing to be filled in
- Much better alignment with polyfill
- https://tc39.es/proposal-temporal/

---

# Polyfill

- Get a Node environment with the Temporal polyfill:
  - `git clone https://github.com/tc39/proposal-temporal`
  - `cd proposal-temporal/polyfill`
  - `npm install`
  - `npm run playground`
- Test262 test suite being built up
- Few things missing:
  - custom calendars
  - custom time zones
  - `Temporal.parse()`?
- https://github.com/tc39/proposal-temporal/tree/main/polyfill

---

# Cookbook

- Examples of "How do I do ... with Temporal?"
- Most commonly asked questions on Stack Overflow for legacy `Date`
- Use cases gathered from conversations
- https://tc39.es/proposal-temporal/docs/cookbook.html

<!--
So one of the things brought up last time was (Leo) a request for better examples of the API in general, and showing some use-cases.

So we have worked on a cookbook.
These are some of the most common tasks that people ask questions about on StackOverflow with legacy Date. Here's how they would look using Temporal.

Some examples are:
* Getting the unix timestamp
* Getting the current date and time
* How can i sort or compare dates with each other.
* Given a month and year, how do I get the first tuesday of the month?
 -->

---

<!-- _header: 'Documentation' -->

# Documentation

- Reference documentation for the API of Temporal
- In the style of MDN; easy for casual readers to understand the proposal
- Reflects the current state of the polyfill
- Open your browser console on this page and the Temporal polyfill is loaded in your environment
- https://tc39.es/proposal-temporal/docs/index.html

---

<!-- _header: 'Calendar' -->

# Calendar

- [insert Ujjwal's presentation]

---

# Feedback

<!-- _header: 'Feedback' -->

---

# Roadmap

- incorporate decisions & feedback
- Continue work on polyfill (Do we want to release it to NPM or just publicize it to interested parties?)
- Finalise first edition of the cookbook
- Finalize Specification
- tc39 stage review / edit specification to reflect
- request tc39 stage advancement

---

# Roadmap

- **coming month:** Sort out calendars
- **1&ndash;3 months:** Publish polyfill and gather feedback from users, fix bugs
- **July 2020:** Stage 3?
