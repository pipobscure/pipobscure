---
layout: post
title: Why I seriously dislike Coffee-Script
date: 2013-10-25 16:03:00 Z
tags:
  - tech
  - javascript
  - programming
  - coffee-script
---
I had a conversation last night with one of those coffee-script loving developers and I once again stated that I really dislike coffee-script. Contrary to previous exchanges of this nature this person did something unusual and smart for the breed: he asked WHY?

I laid out some arguments for him and figured I have never done so in a coherent pattern before. So here it goes, the why to my dislike of coffee-script.

[![Coffee shouldn't be this complicated.](http://farm8.staticflickr.com/7230/7166762701_431362ba59_z.jpg)](http://www.flickr.com/photos/carnesaurus/7166762701/ "Coffee shouldn't be this complicated. by Carnesaurus, on Flickr")

Whenever you develop a more complex system than a hello world example, you layer a bunch of things on top of each other, use an oodle of modules and paradigms and glue them all together in hopes that they don’t fall apart. You try to help make sure that they don’t by adding tests and using more stuff for that. Simply put:

> Complex systems are complex

This observation seems like a no-brainer and absolutely obvious. It is so obvious, that smart people tend to assume it and forget it. But it really does bear mentioning. The reason it is important is because complex things are hard to understand by their very nature. The more complex something is the harder it is to understand.

Before I continue, we need to agree on the idea that:

> Hard to understand is an undesired property of software

If you disagree here, the rest of the argument will not make sense to you. (You should also probably consider a change of career :( yikes).

The fact that as complexity increases ease of understanding decreases means that we should strive to make our systems as complex as necessary yet as simple as possible. This philosophy is nothing new and nothing I came up with.

If you you followed me to this point, the conclusion should not be a surprise:

> Since anything that adds complexity to the system is detrimental to its understandability, anything added must provide some significant benefit

Not having been surprised, you will likely be asking the same question I have asked when looking as coffee-script: “What significant benefit does coffee-script provide that justifies its addition to the stack?”

* * *

> CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way

That is the claim that [the coffee-script site](http://coffeescript.org) makes. That means that coffee-script by its very definition of itself is simply syntactic sugar on top of javascript. Syntactic sugar that requires the addition of a compiler to the tool-chain, that has a non-intuitive syntax for someone used to the curly bracket family and that does not eliminate the need to know and be fully conversant in javascript.

Looking at what it costs and what it gives, coffee-script is extremely expensive. It adds a large amount of overhead, it significantly reduces the number of people that feel comfortable understanding your project and it provides very little benefit all in the form of syntactic sugar.

* * *

After this analysis of why i don’t like to employ coffee-script myself it might be worth exploring why I believe module creators should not use it either.

> If you write your module in coffee-script you add the complexity of coffee-script to the complexity of your own module without providing the user with additional benefits.

And that is already the best case scenario where the user is willing to engage your module. The other option the user of your module has is to effectively treat it as closed-source, because coffee-script has to be treated as immutable if you are not willing to write coffee-script. While it you might be able to modify the compiled/generated javascript, your changes will never go upstream, because there it’s coffee-script. So for all intents and purposes you are writing closed-source software (or at least almost).

* * *

So there simply isn’t a rationale to adding coffee-script to your stack if you are writing non-trivial code.

> In fact coffee-script is detrimental to your code
