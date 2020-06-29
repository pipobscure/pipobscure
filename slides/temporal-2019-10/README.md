# `Temporal`
## Update 2019-10-02

 * Process & Progress
 * Objects & Decisions
 * Actions & Roadmap

<div style="font-size: 0.3em; text-align: right;">

[Notes](./notes.md)

</div>

---

# `Temporal`
## Process & Progress

 * **Stage-1**: specify a design
 * **Stage-2**: validate the design
 * **Stage-3**: implement the specification
 * **Stage-4**: mandate a the specification

---

# `Temporal`
## Process & Progress
### Stage-2 Progress

 ![](./check.svg) create polyfill
 ![](./check.svg) publish polyfill (github & npm)
 ![](./check.svg) invite feedback/reviews (bloomberg, google, moment, luxon, tag, public)
 ![](./check.svg) incorporate feedback
 ![](./arrow.svg) *update stakeholders*
 ![](./box.svg) finalize specification
 ![](./box.svg) tc39 stage review

---

# `Temporal`
## Objects & Decisions

 - `Absolute`: An absolute point on the timeline
 - `DateTime`: A human representation of untethered date & time
   - `Date`: The date aspect of a `DateTime`
     - `YearMonth`: A partial aspect of a `Date`
     - `MonthDay`: A partial aspect of a `Date`
   - `Time`: The time aspect of a `DateTime`
 - `TimeZone`: A representation of time-rules
 - `Duration`: a length of time used for arithmetic

---

# `Temporal`
## Objects & Decisions

 - `Absolute`: I was born **1976-11-18T14:23:00Z**
 - `DateTime`: TC39 meeting in Nov-2020 starts **2020-11-16T10:00:00**
   - `Date`: This TC39 meeting began **2019-10-01**
     - `YearMonth`: TC39 met in **2019-01**, **2019-03**, **2019-06**, **2019-07**, **2019-10**
     - `MonthDay`: Brendan Eich's birthday is **07-04**
   - `Time`: TC39 meetings begin at **10:00:00**
 - `TimeZone`: This TC39 meeting is in **America/New_York**
 - `Duration`: TC39 meets for 7 hours today **PT7H**

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*

<div class="mermaid">
graph LR;
  timezone(Time-Zone);
  subgraph " ";
    absolute(Absolute);
  end;
  subgraph " ";
    datetime(DateTime);
      date(Date);
        yearmonth(YearMonth);
        monthday(MonthDay);
      time(Time);
    datetime --- date;
    datetime --- time;
    date --- yearmonth;
    date --- monthday;
  end;
  absolute === timezone;
  timezone === datetime;
</div>

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*

<div class="mermaid">
graph LR;
  zoned[ZonedAbsoluteDateTime?]
  timezone(Time-Zone);
  subgraph " ";
    absolute(Absolute);
  end;
  subgraph " ";
    datetime(DateTime);
      date(Date);
        yearmonth(YearMonth);
        monthday(MonthDay);
      time(Time);
    datetime --- date;
    datetime --- time;
    date --- yearmonth;
    date --- monthday;
  end;
  absolute === timezone;
  timezone === datetime;
  zoned --- absolute;
  zoned --- timezone;
  zoned --- datetime;
</div>

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*
### Option A: No Combination Type

**Pro:**

 ![](./arrow.svg) does not mandate basing on absolute or calendar time
 ![](./arrow.svg) works when time-zone rules change

**Con:**

 ![](./arrow.svg) does not provide a practical all-round object

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*
### Option B: ZonedDateTime

**Pro:**

 ![](./arrow.svg) works when time-zone rules change
 ![](./arrow.svg) provides all-round type

**Con:**

 ![](./arrow.svg) not inline with ISO-8601 which pins offset

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*
### Option C: ZonedAbsolute

**Pro:**
 
 ![](./arrow.svg) coherent with ISO-8601 schema
 ![](./arrow.svg) provides all-round type

**Con:**

 ![](./arrow.svg) fails when time-zone rules change

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*
### Option D: both `ZonedDateTime` & `ZonedAbsolute`

**Pro:**

 ![](./arrow.svg) provides full set of all-round types
 ![](./arrow.svg) can work for most circumstances

**Con:**

 ![](./arrow.svg) unclear that there are decisions to be made
 ![](./arrow.svg) easier to make bad assumptions

---

# `Temporal`
## Objects & Decisions: Should there be a *Combination Type*
### Suggested Answer: Option A

 - the benefit of all-round type(s) is wiped out by unexpected behaviour
 - programmers are free to combine as they they need
 - making explicit choices is better than unexpected consequences
 - canonical practice can be advised via MDN etc.

> **Drop combination type and encourage programmers to make explicit choices**

---

# `Temporal`
## Objects & Decisions: Global Namespace Object

We will continue under the premise of `Temporal` becoming a namespace object on the global.

Given that:

 - Unsolved how loading auxiliary modules (`Intl` for Temporal) works
 - Javascript Standard Library: currently at Stage-1

we feel like `Temporal` is not a good candidate for a first built-in module at thid time.

---

# `Temporal`
## Objects & Decisions: Exposing system information

> Biggest feedback: **access to system information is required**

 - current date/time
 - current time-zone
 - time-zone validity

*How can we give access to current system date/time & time-zone, while still meeting the requirements of SES and other like implementations?*

---

# `Temporal`
## Objects & Decisions: Exposing system information

**Balancing act between:**

 ![](./arrow.svg) securing implementations / eliminating idiosynchatice timing leaks
 ![](./arrow.svg) making the environment easy and useful to programmers

---

# `Temporal`
## Objects & Decisions: Exposing system information
### Proposed Compromise

 ![](./arrow.svg) constructors are unable to expose system information
 ![](./arrow.svg) group all functions exposing information
 ![](./arrow.svg) make explicit all places that need mitigation

---

# `Temporal`
## Objects & Decisions: Interoperability with Intl

 - we have been cooperating with ECMA402 & Shane
 - we think we've found a way to make `Temporal` objects just work
 - there's a spec PR regarding this

---

# `Temporal`
##  Actions & Roadmap

 ![](./box.svg) incorporate decisions & feedback
 ![](./box.svg) release updated polyfill to npm
 ![](./box.svg) request further community review
 ![](./box.svg) finalize specification
 ![](./box.svg) tc39 stage review / edit specification to reflect
 ![](./box.svg) request tc39 stage advancement

---

# `Temporal`
##  Actions & Roadmap

 ![](./box.svg) **(2019-10-31)** incorporate decisions & feedback
 ![](./box.svg) **(2019-10-31)** release updated polyfill to npm
 ![](./box.svg) **(2019-10-31)** request further community review
 ![](./box.svg) **(2019-12-31)** finalize specification
 ![](./box.svg) **(2019-12-31)** tc39 stage review / edit specification to reflect
 ![](./box.svg) **(2020-02-04)** request tc39 stage advancement

<!-- mermaid.js -->
<script src="./mermaid.js"></script>
<script>mermaid.initialize({startOnLoad:true, flowchart:{ useMaxWidth:false } });</script>
<style>.mermaid svg { height: 13em; }</style>