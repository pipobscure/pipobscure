<!--
theme: default
paginate: true
footer: "https://github.com/tc39/proposal-temporal"
-->

# 🕓 Temporal

## Update for 2020-06

- Recap
- What's new?
- Roadmap
- Things the plenary should be aware of

<!--
  Introduce self
-->

---

# 🔎 Recap: Where to find...

- ...the **spec draft**? [tc39.es/proposal-temporal](https://tc39.es/proposal-temporal/)
- ...the MDN-style **API docs**? [tc39.es/proposal-temporal/docs](https://tc39.es/proposal-temporal/docs/)
- ...the **cookbook**? [tc39.es/proposal-temporal/docs/cookbook.html](https://tc39.es/proposal-temporal/docs/cookbook.html)
- ...the **polyfill**? [tc39/proposal-temporal](https://github.com/tc39/proposal-temporal/tree/main/polyfill) on GitHub
- ...a quick **JS environment with Temporal**?
  - _open your browser console on the API docs page_

<!--
  Jason presented all these things last time, but to refresh your memory here's an overview with quick links to where everything lives
-->

---

# 🆕 What's new since last time?

- [Cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html) complete
- Calendar
- Custom time zones
- TypeScript types

<!--
  The cookbook is full of examples now, including a time zone meeting planner written in just a few lines of code!
-->

---

## 📆 Calendar

- Needed e.g. when doing calculations in another calendar system
- Works transparently with the existing API
- Can implement your own calendar system for specialized applications

```javascript
date.withCalendar('hebrew').plus({ months: 1 })
  // adds the number of days in that month of the Hebrew calendar
```

<!--
  We have support for non-Gregorian calendars now.
-->

---

## 🌐 Custom time zones

- Can implement your own time zone for specialized applications
- Needed e.g. when recreating particular releases of tzdata in secure environments

```javascript
class MyTimeZone extends Temporal.TimeZone {
  constructor() { super('Some_Identifier'); }
  getOffsetNanosecondsFor(absolute) { ... }
  getPossibleAbsolutesFor(dateTime) { ... }
  *getTransitions(absolute) { ... }
}
```

---

## ⌨ TypeScript types

Useful for people trying out the polyfill

![](typescript.png)

<!--
  This is one of the things that we have thanks to Justin Grant, a JS developer who recently joined the champions calls.
-->

---

# 🛣 Roadmap

- **This week,** release and publicize polyfill
- **In a few months,** request Stage 3 advancement

---

# 🛣 Roadmap

Between this week and Stage 3:
- [List of issues to address](https://github.com/tc39/proposal-temporal/milestone/1)
- Inform decisions with feedback from polyfill users
- Release an updated polyfill with API improvements based on feedback
- W3C TAG review
- Finalize specification

---

# 🔜 Polyfill release

- "Does it block releasing a version of the polyfill?"
  - Yes? — Address it now
  - No? — Make a provisional decision for now, and revisit before Stage 3 based on feedback

---

# 📢 Feedback

- Feedback on the API from the JS developer community
- What we have gotten so far has proved valuable
- Growing [list of feedback to consider](https://github.com/tc39/proposal-temporal/labels/feedback) before Stage 3

<!--
  A lot of the helpful feedback has come from two involved JS developers, and we'd like to attract more people to help with this.
-->

---

# ❓ Things the plenary should be aware of

- Binary comparison operators
- Default calendar

---

## Binary comparison operators

How to correctly compare two dates:

```javascript
date1.equals(date2)  // ⇒ true or false
Temporal.Date.compare(date1, date2)  // ⇒ -1, 0, or 1
```

How people will probably try to compare two dates:

```javascript
date1 === date2
date1 >= date2
```

<!--
  Problem statement
-->

---

## Binary comparison operators

- `===`, `!==`, `==`, `!=` will just not work that way
- Returning a value from `valueOf()` could salvage `<`, `<=`, `>`, `>=`
  - But would also allow meaningless comparisons with numbers and across Temporal types
- `valueOf()` throwing would remove potentially meaningless comparisons

<!--
  Possible solution
-->

---

## Binary comparison operators

Question:
- Do we make `valueOf()` **throw**, or **return a BigInt?**

Temporal Champions current answer:
- `valueOf()` **throws**
- Revisit before Stage 3 based on feedback

[Link to discussion thread](https://github.com/tc39/proposal-temporal/issues/517)

---

## Binary comparison operators

💬 **Comments?**

---

## Default calendar

- Calendar API is meant to be unobtrusive in cases where it's not needed
- Most code will use the ISO 8601 calendar
  - Even in locales where a different calendar is used, can convert at UI layer with `toLocaleString()`

<!--
  For most applications, we expect it will be enough to use the ISO calendar internally, and convert to the user's calendar at the moment you present the data to the user.
-->

---

## Default calendar

Potential i18n correctness bugs arise with default ISO 8601 calendar when doing calendar-sensitive calculations in locales with a different default calendar system:
```javascript
const today = Temporal.now.date();
console.log("Today is:", today.toLocaleString());
const nextMonth = today.plus({ months: 1 });
console.log("Next month is: ", nextMonth.toLocaleString());
```
> Today is: Ramadan 24, 1441 AH
> Next month is: Shawwal ~~24~~ **25**, 1441 AH

<!--
  Problems occur when you actually need to do _calculations_ in the user's calendar space.
-->

---

## Default calendar

Question:
- Do we make **ISO 8601 default** or require specifying a calendar explicitly?
  - (many different options with different pros and cons, [see discussion thread](https://github.com/tc39/proposal-temporal/issues/292))

Temporal Champions current answer:
- **Default to ISO 8601 calendar**
- Revisit before Stage 3 based on feedback

---

## Default calendar

💬 **Comments?**

---

# Thank you

- ❓ Questions?
- 💬 Comments?
