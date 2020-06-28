---
layout: post
title: "Ghost: D.o.A. (i hope)"
date: 2013-11-17 13:03:17 Z
tags:
  - ghost
  - blogging
  - wordpress
---
# Ghost: D.o.A. (i hope)

[Ghost](https://ghost.org) touts itself as “just a blogging platform” and that’s a good thing. When I heard the announcement at the beginning of the year, I was psyched. Finally something a bit more sensible to replace Wordpress. And then Ghost was released.

[![Beware of the Ghost!](http://farm4.staticflickr.com/3534/3916626559_ed021e944c_z.jpg)](http://www.flickr.com/photos/klearchos/3916626559/ "Beware of the Ghost! by Klearchos Kapoutsis, on Flickr")

I had a long look at it and did a code-review, and in the end I have to say it’s dead on arrival, or at least I hope it will be.

The idea of doing a simple “just blogging” platform is great, and the UI thoughts are great as well, but the actual implementation is horrific. Yes they abandoned PHP in favour of NodeJS to gain some hype, and good on them.

But they basically took all the mistakes that were made implementing Wordpress and reimplemented them using NodeJS. They built a monolith that pretends to be modular, without actually understanding what modular means. _shudder_ They mixed concerns like crazy, made it pretty much impossible to embed it into something larger, and on and on. Every architectural mistake made by Wordpress has been repeated. And in return you don’t event get the one single redeeming feature of Wordpress: its eco-system.

The thing I fear though is that it will be successful. Because if this thing actually takes of, it will be the replacement for Wordpress and therefore disincentivise the creation of alternatives an thereby prolong the suffering. If it dies a quiet death, chances improve that something decent may actually be built to replace Wordpress, ‘cause Ghost ain’t it.

P.S.: I normally don’t like writing such negative posts about other people’s hard work, but this just makes me sad. I guess with great hope comes great disappointment.
