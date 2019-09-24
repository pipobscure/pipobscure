
# `temporal`
## 2019-10 update

 ![](./arrow.svg) API Overview
 ![](./arrow.svg) Feedback Loops
 ![](./arrow.svg) Changes

---

# API Overview

## Classes

 ![](./arrow.svg) TimeZone
 ![](./arrow.svg) Absolute
 ![](./arrow.svg) DateTime / Time / Date /  YearMonth / MonthDay
 ![](./arrow.svg) Duration

---

## `TimeZone`

Object representing a fixed offset or an IANA timezone.

Allows:

 ![](./arrow.svg) getting `Absolute`s for a given `DateTime`
 ![](./arrow.svg) getting the `DateTime` for a given `Absolute`
 ![](./arrow.svg) getting the offset at a given `Absolute`
 ![](./arrow.svg) getting the offsets for a given year
 ![](./arrow.svg) getting the `Absolute`s where the offset changes in a year

<div style="font-size: 0.3em;">

[Documentation](https://github.com/tc39/proposal-temporal/blob/main/docs/timezone.md)

</div>

---

## `Absolute`

Represents an absolute point in time. Effectively the combination of `DateTime` and `TimeZone`.

 ![](./arrow.svg) has all the fields of `DateTime`
 ![](./arrow.svg) has getter methods to `getEpoch<Unit>()`
 ![](./arrow.svg) has setter static function to create `fromEpoch<Unit>(value, timezone?)`
 ![](./arrow.svg) allows for date/time-maths based on the absolute point in time.

<div style="font-size: 0.3em;">

[Documentation](https://github.com/tc39/proposal-temporal/blob/main/docs/absolute.md) / [Specification](https://github.com/tc39/proposal-temporal/blob/main/spec/absolute.md)

</div>

---

## `DateTime` / `Date` / `Time` / `YearMonth` / `MonthDay`

Representation of Date / Time / DateTime / YearMonth / MonthDay

 ![](./arrow.svg) no time-zone / no actual point in time 

<div style="font-size: 0.3em;">

Documentation: [DateTime](https://github.com/tc39/proposal-temporal/blob/main/docs/datetime.md) / [Date](https://github.com/tc39/proposal-temporal/blob/main/docs/date.md) / [Time](https://github.com/tc39/proposal-temporal/blob/main/docs/time.md) / [YearMonth](https://github.com/tc39/proposal-temporal/blob/main/docs/yearmonth.md) / [MonthYear](https://github.com/tc39/proposal-temporal/blob/main/docs/monthyear.md)

Specification: [DateTime](https://github.com/tc39/proposal-temporal/blob/main/spec/datetime.md) / [Date](https://github.com/tc39/proposal-temporal/blob/main/spec/date.md) / [Time](https://github.com/tc39/proposal-temporal/blob/main/spec/time.md) / [YearMonth](https://github.com/tc39/proposal-temporal/blob/main/spec/yearmonth.md) / [MonthYear](https://github.com/tc39/proposal-temporal/blob/main/spec/monthyear.md)

</div>

---

# `Duration`

Represents an interval of time.

 ![](./arrow.svg) is always positive
 ![](./arrow.svg) can be used for date/time maths

<div style="font-size: 0.3em;">

[Documentation](https://github.com/tc39/proposal-temporal/blob/main/docs/duration.md) / [Specification](https://github.com/tc39/proposal-temporal/blob/main/spec/duration.md)

</div>

---

# Feedback Loops

## Past

 ![Check](./check.svg) Polyfill Try-Outs (small-scale: only interested parties)
 ![Check](./check.svg) Library Authors (js & other languages)
 ![Check](./check.svg) App Teams (Bloomberg, Google: Sheets / Calendar)
 ![Check](./check.svg) First Round TAG Review

---

# Feedback Loops

## Future

 ![Box](./box.svg) Polyfill Try-Outs (large-scale: publicised => general public)
 ![Box](./box.svg) Stage 3: Specification Review
 ![Box](./box.svg) Second Round TAG Review

---

# Changes

 ![](./arrow.svg) built-in module vs. global namespace object
 ![](./arrow.svg) we're not being civil
 ![](./arrow.svg) Instant + ZonedDateTime => Absolute
 ![](./arrow.svg) exposing TimeZone object
 ![](./arrow.svg) exposing current date/time & time-zone

---

## built-in module vs. global namespace object

At this point built-in modules are at Stage-1.

Temporal intends to present for Stage-3 in February.

 ![](./arrow.svg) Temporal will not block on built-in modules
 ![](./arrow.svg) Temporal will be done in a way that supports becoming a module

---

## we're not being Civil

Objects will not be prefixed.

 ![](./arrow.svg) Moving to global namespace-object already serves the same purpose as prefixing
 ![](./arrow.svg) Over multiple years it has proven impossible to find a prefix everyone can accept

---

## Instant + ZonedDateTime => Absolute

Turns our that the separation of `Instant` & `ZonedDateTime` especially in the context of `ZonedDateTime` is confusing to people.

---

## exposing TimeZone object

The community (library implementors & application engineers) have repeatedly asked for first class explicit and raw time-zone support. We believe (and have been told) that the proposed `TimeZone` objects fulfils the needs.

![](./arrow.svg) can be retrieved
![](./arrow.svg) enables use-cases
![](./arrow.svg) not required for temporal use

---

## exposing current date/time & time-zone

 ![](./arrow.svg) **Biggest feedback:** date/times start as now, timezones start as here.
 ![](./arrow.svg) **However:** they will be exposed in a way that is easy to secure / remove

---

# Status

 ![Check](./check.svg) Concepts / Ideas
 ![Check](./check.svg) Specify as Code
 ![Check](./check.svg) Specify as Text

---

# Next Steps

 ![Box](./box.svg) Release Code as Poly-Fill
 ![Box](./box.svg) Review Spec-Text
 ![Box](./box.svg) Stage-3 in February


---

***Thanks & Cheers***
