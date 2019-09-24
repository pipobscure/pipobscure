# `temporal`
## 2019-10 update

 * Feedback Loops
 * Fundamental Changes
 * API Overview

---

## Feedback Loops

### Completed

 * TAG Review
 * Interoperability with `<input type="date|time|datetime-local" />`
 * Polyfill Try-Outs (small-scale)
 * Library Authors (js & other languages)
 * Google Apps Team (Sheets / Calendar)

---

## Feedback Loops

### Future

 * Polyfill Try-Outs (large-scale)
 * Stage 3 - Specification Review

---

# Fundamental Changes

## Temporal will be a global namespace object

At this point is has become likely that built-in modules will not land in the standard before temporal.

 * Temporal will not block on built-in modules
 * Temporal will be done in a way that supports becoming a module

---

# Fundamental Changes

## Temporal will expose a `TimeZone` object

The community (Google Engineers, Library Implementors, etc.) have repeatedly asked for first class explicit and raw time-zone support. We believe (and have been told) that the proposed `TimeZone` objects fulfils the needs.

 * while possible, actually instantiating `TimeZone` objects is not necessary for using Temporal.

---

# Fundamental Changes

## Instant + ZonedDateTime => Absolute

Turns our that the separation of `Instant` & `ZonedDateTime` especially in the context of `ZonedDateTime` is confusing to people.

---

# Fundamental Changes

## We're notbeing civil

Objects will not be prefixed.

 * Moving to global namespace-object already serves the same purpose as prefixing
 * Over multiple years it has proven impossible to find a prefix everyone can accept

---

# Fundamental Changes

## Current `Absolute` and local `TimeZone` will be exposed

 * **Biggest feedback:** date/times start as now, timezones start as here.
 * **However:** they will be exposed in a way that is easy to secure / remove

---

# API Overview

---

## Temporal Objects

 * Global `Temporal` namespace
 * `Temporal.TimeZone`
 * `Temporal.Absolute`
 * `Temporal.Date`
 * `Temporal.Time`
 * `Temporal.DateTime`
 * `Temporal.MonthDay`
 * `Temporal.YearMonth`
 * `Temporal.Duration`
 * `Temporal.Local`

---

## `Temporal.TimeZone`

 * `const tz = Temporal.TimeZone.for(zonename: string)`
 * `tz.name`
 * `tz.getTimezoneName(when: Temporal.Absolute) : string`
 * `tz.getDateTimeFor(when: Temporal:Absolute) : Temporal.DateTime`
 * `tz.getOffsetFor(when: Temporal:Absolute) : string`
 * `tz.getAbsoluteFor(datetime: Temporal.DateTime) : Temporal.Absolute[]`
 * `tz.getOffsetsInYear(year: number) : string[]`
 * `tz.getTransitionsInYear(year: number) : Temporal.Absolute[]`

---

## `Temporal.Absolute`

 * `const ab = Temporal.Absolute.fromEpoch<unit>() : Temporal.Absolute`
 * `ab.getEpoch<unit>()` / `ab.toString() : string`
   * UTC => 2019-10-02T05:00:00Z
   * Offset => 2019-10-02T10:00:00+05:00
   * IANA => 2019-10-02T10:00:00+05:00[America/New_York]
 * `Temporal.Absolute.fromString(iso: string) : Temporal.Absolute`
 * `ab.<date-time-property>`
 * `ab.get<temporal-object>()`
 * `ab.withZone(timezone)` / * `ab.with(dateTimeLike)`
 * `ab.difference(other)` / `ab.plus(durationLike)` / `ab.minus(durationLike)`

---

## `Temporal.DateTime` (Date, Time, YearMonth, MonthYear)

 * `const dt = new Temporal.DateTime(2019, 10, 2, 10, 0)`
 * `dt.year` / `dt.month` / `dt.day`
 * `dt.hour` / `dt.minute` / `dt.second` / `dt.millisecond` / `dt.microsecond` / `dt.nanosecond`
 * `dt.dayOfWeek` / `dt.dayOfYear` / `dt.weekOfYear`
 * `dt.getDate()` / `dt.getTime()`
 * `dt.with(dateTimeLike)` / `dt.withZone(timeZone)` : accepts strings & objects
 * `dt.toString()` : ISO-8601 2019-10-02T10:00:00 (no zone/offset information)
 * `Temporal.DateTime.fromString(iso) : Temporal.DateTime` : strict format
 * `dt.difference(other)` : Creates a Temporal.Duration
 * `dt.plus(durationLike) / dt.minus(durationLike)` : Plus & Minus are different operations

---

## `Temporal.Duration`

 * `const d = Temporal.<Date/Time/DateTime/Absolute>.difference(other)`
 * `d.years` / `d.months` / `d.days`
 * `d.hours` / `d.minutes` / `d.seconds` / `d.milliseconds` / `d.microseconds` / `d.nanoseconds`
 * `d.toString()` => ISO-8601 duration strings
 * `Temporal.Duration.fromString(iso: string) : Temporal.Duration`

---

## `Temporal.Local`

 * `Temporal.Local.timezone() : Temporal.TimeZone`
 * `Temporal.Local.absolute(tz?) : Temporal.Absolute`
 * `Temporal.Local.dateTime=(tz)=>Temporal.Local.absolute(tz).getDateTime()`
 * `Temporal.Local.date=(tz)=>Temporal.Local.absolute(tz).getDate()`
 * `Temporal.Local.time=(tz)=>Temporal.Local.absolute(tz).getTime()`
 * `Temporal.Local.monthDay=(tz)=>Temporal.Local.absolute(tz).getMonthDay()`
 * `Temporal.Local.yearMonth=(tz)=>Temporal.Local.absolute(tz).getYearMonth()`

 * ***If `Temporal.Local.timezone` and `Temporal.Local.absolute` are replaced no system information is exposed***
