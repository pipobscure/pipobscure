# `temporal`
## 2019-03 update

 * API Overview
 * Resolved Issues
 * Other Progress
 * Next Steps

---

# API Overview

---

## `temporal` Objects

 * `Instant` - absolute point in time; no reference to timezone or calendar system
 * `ZonedDateTime` - absolute point in time; specified timezone; gregorian support
 * `Civil*`
    * `CivilDate` - gregorian calendar date; no timezone or locale (desk calendar)
    * `CivilTime` - 24h midnight based time; no timezone or locale (wall clock)
    * `CivilDateTime` - combination of `CivilDate` & `CivilTime`

---

# Resolved Issues

---

## `Instant`-Constructor:

* `BigInt` is now widely implemented (Stage 3)
* a two number hack is no longer necessary.
* **Conclusion:** the `Instant`-Constructor takes a single `BigInt`

---

## `Instant`-Factories

 *  `Instant.fromEpochSeconds()` **new**
 *  `Instant.fromEpochMilliseconds()` *formerly fromMilliseconds()*
 *  `Instant.fromEpochMicroseconds()` **new**
 *  `Instant.fromEpochNanoseconds()` **new**

---

## `Instant`-Properties:

 * `Instant.prototype.epochSeconds` **new**
 * `Instant.prototype.epochMilliseconds` *formerly milliseconds*
 * `Instant.prototype.epochMicroseconds` **new**
 * `Instant.prototype.epochNanoseconds` **changed**

---

## `ZonedDateTime`:

* Should have reference gregorian units
* **Reason:** a more ergonomic API
* `ZonedInstant` then an inaccurate name
* **Conclusion:** renamed this object `ZonedDateTime`

---

## Naming `Civil`-Objects:

* `Local` emerged as the only viable alternative to `Civil`
* That suggests the one characteristic `Civil` objects do **not** have (locality)!
* **Conclusion:** objects will be prefixed by `Civil`

---

# Other Progress

---

## TAG review

 * Daniel Ehrenberg has initiated a TAG review. 
 * Clear interoperability with `<input type="date|time|datetime-local" />`
 * Lack of *interval* representation
 * Lack of date representation  for dates without either a *day* or a *year* component

---

## Direct TZDB access

 * part of the community feedback was the request for direct *tzdb* access
 * **Conclusion:**
   * viable and good goal
   * falls outside the scope of this proposal
   * `temporal` has a higher priority
   * considering to bring forward a **separate proposal** for this

---

## Built-In Module

 * We would like `temporal` to be the first *built-in* module
 
 ```JavaScript
 import { CivilDateTime } from '@std-proposal/temporal';
 const update = new CivilDateTime(2019, 3, 27, 16, 0);
 console.log(update.toCivilDate().toOrdinalDateString()); // 2019-086
 console.log(update.toCivilDate().toWeekDateString()); // 2019-W13-3
 const zoned = update.withZone('America/New_York'); 
 console.log(zoned.toString()); // 2019-03-27T16:00:00.000000000-04:00[America/New_York]
 ```

---

## STD-proposal

 * created the [std-proposal](https://github.com/std-proposal) github-organisation
 * goal: facilitate incubation of internal module proposals
 * `temporal`-polyfill has become the first example of a polyfill to use this
 * `@std-proposal/temporal` has been published to [npm](https://npmjs.com/package/@std-proposal/temporal) to get real world feedback

---

# Next Steps

---

## Interval / Truncated Dates / Ranges

 * either include or exclude *Interval* representations from the scope
 * assess the impact of a *Interval* representations on the calulcation API
 * either include or exclude *YYYY-MM* and *MM-DD* representations from scope
 * assess the impact of truncated dates on calculations / conversions
 * either include or exclude *Range* representations from the scope
 * assess the impact of *Range* represenations on calculations

---

## Further Steps

 * gather feedback from actual use of *@std-proposal/temporal*
 * FAQ & Examples - grow illustrative code-sample collection
 * MDN-Documentation: begin generating MDN-style documentation
 * WebIDL - use *WebIDL* to spec interfaces (work in progress)
