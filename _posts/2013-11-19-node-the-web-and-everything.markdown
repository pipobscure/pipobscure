---
layout: post
title: Node, the Web and everything
date: 2013-11-19 13:04:30 Z
tags:
  - tech
  - web
  - node
  - scale
---
Over the years, I have often heard/read the same question, or type of question: Should I use X or Y for my web app scale. X and Y are of course nifty databases, or framework thingamagics or the like. And then there would inevitably be two camps arguing the pros and cons and an original questioner none the wiser.

After being in this space for decades (yes I was doing this before the first .com bubble) I learned something important, that I want to share today:

**Technology doesn’t matter!!!**

Yes you read correctly, me the tech guy is saying technology doesn’t matter. Oh and yes I am serious.

The thing is, most of the tech stuff we love and hate and argue about, will be just fine for all our small little projects with less that 1e6 page views a month. You simply don’t have to worry about scaling either up or out. Even if your trafic suddenly spikes and goes off and doubles you are then serving 2e6 views, which is pretty much the same order of magnitufe and shouldn’t relly stress you too much.

Heck even if you grow an order of magnitude or two, facebook has proven to us all, that even then you can get that done with php & mysql, which is pretty much the least scalable and least performing starting point out there.

So if it’s not the actual technology that you choose that is relevant, what enables you to grow at web scale and still not break out a sweat? It’s a modus operandi thing. It’s a how you do things in a way that allows you maximum flexibility.

Loose couple or always use abstract wrappers
--------------------------------------------

The biggest problem you can have is that you have painted yourself into a corner. Imagine you have chosen a database technology, because it was the hot thing at the time. Now a year or 2 later the people developing your database of choice have moved on and it turned out to be not so hot after all (think couchdb for an example of both). If you bet the farm on that database and have coupled it tightly with your entire site, you have just lost the farm, or won an unlimited supply of unpaid overtime.

How do you avoid that? Simple, treat every technology choice as replacable. Never utilize an actual API provided by a technology in your core product. Always encapsulate. If you do and you have abstracted away the technology you are using away from your app, it becomes rather simple to exchange one piece of tech for another. Couch is not working out? Change a couple of lines in one place and use Mongo or Redis or any of the others.

Don’t optimize it slows you down
--------------------------------

The second big issue that can arise is that you want to have everything nice and fast and spend an inordinate amount of time optimizing your code. Well guess what, you are wasting time and introducing complexity which is likekly to cause bugs.

I can’t recall how often optimizations I did caused bugs in edge cases. Well the edge turns out to be where it’s at and edge cases turn out to be quite common.

So when you calculate how long you spend optimizing code and then fixing all the bugs the optimization introduced that’s the cost. Now if you look at the benefit of optimizing, it will likely be a bit of speed or more linear scaling behaviour.

At this time it’s time to start thinking of whether there are other ways of gaining these benefits. Usually the answer is “yes, just add more computing power”.

Guess what your time is expensive; computing power is cheap. So rather than optimize, buy some more computing power. There are very few cases in web app development where optimizing is actually worth while, presuming you are not being deliberately stupid in your algorithms to begin with.

Architect in a way that you can solve your problem by throwing money at it
--------------------------------------------------------------------------

I want to close with this gem from a [talk by Yashwatnt Nelapati and Marty Weiner](http://www.infoq.com/presentations/Pinterest). If you write your stuff in a way you can solve scaling by deploying more of the same you’ll be good. Node with its single threaded approach stears you into the right direction to begin with.
