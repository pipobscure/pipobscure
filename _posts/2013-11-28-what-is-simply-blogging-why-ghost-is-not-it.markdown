---
layout: post
title: "What is Simply blogging: why Ghost is not it"
date: 2013-11-28 09:27:29 Z
tags:
  - tech
  - blogging
  - ghost
  - wordpress
---
A bit ago I wrote [a post about Ghost](http://pipobscure.com/post/67252014534/ghost-d-o-a-i-hope) in which I made the claim that they had pretty much screwed it up. Of course this presumes that there is a common understanding of what that and “doing it right” means.

I have been doing a lot of thinking about that for a while and have spoken to a few people (read non-tech, blog writers). By now I have come to some conclusions; too many to put into one post :). However a first stab at it would be a good thing.

There are really two distinct facades to the issue:

1.  The features and capabilities
2.  The technical system and its design

The first is really **what** and the second **how**. The what, according to the [Ghost About Page](http://ghost.org/about/) is “Just Blogging”. And I take that quite literally. To me that means “authoring blog posts” and that’s it. It means:

*   No User-Management
*   No Administration
*   No Media-Management
*   No _built in_ visual frippery (read custom theme engine)
*   Literally _nothing that is not directly necessary for authoring posts_

In fact, there is such a system (almost). It’s tumblr minus the social aspects. If you take tumblr and remove the like and follow features, that’s pretty much it.

* * *

Now if that is the yard-stick that I measure the meaning of “simply blogging” by then Ghost is _close but no cigar_. Here are the things Ghost does that are too much:

*   User Management / Authentication
*   Visual Frippery

* * *

From a technical perspective, there are alos ways to build such a system, and ways to avoid. Wordpress is one of the “ways to avoid”. I am certain that the wordpress developers feel a lot of code-shame about a lot of parts of wordpress. The system was originally conceived of by _a kid_ and _for fun_. Given those origins, wordpress is quite impressive, but years later as adults knowing wordpress you should be able to come up with a better system design.

[Wired wrote](http://www.wired.co.uk/news/archive/2013-05/10/ghost):

> Ghost aims to reboot blogging…

Ghost made many of the same mistakes as wordpress. For one they looked at the problem from the perspective of wordpress and simply said: “that but without the cruft”. They obviously did not think of _why is there all this cruft_?

> Sometimes it’s not a reboot, but a complete system reinstall you need.

Let me take a stab at that _why is there so much cruft_: because the original software lacked a feature that would have prevented someone from using it. In consequence they added the feature. This happened too many times to count. At some point plugins were put conceived, but that just changed the question from “do we put it in” to “do we put it into core or leave it as a plugin”.

In other words people needed a specific feature. Sounds pretty much the atithesis of what Ghost wants. Guess what though: wordpress started out as _just blogging_ as well. It obviously failed at remaining that, and there is no reason to believe that Ghost will fare any better.

So why not turn the question around? Ghost has explicitely decided that comments are not part of “simple blogging”. Luckily there are systems that do “just commenting” out there, so just integrate those. Why not do something similar for the _core blogging part_ as well. Don’t build a system that can take plugins, be a generic blogging plugin.

What would this look like? Well just provide an API that can deal with blog related actions. It does nothing other that create, update, delete and fetch blog posts. When you start it you have to provide it with a method to access storage, and a method to request user information from a credential it was handed. It should also be attachable to some publish/subscribe messaging system, to notify other system parts that an action had taken place. That’s it: no rendering posts, no lists, no commenting, no tags, _just blogging_.

Then you have a second piece of software that subscribes to post events and provides an api for tagging. It automatically indexes new posts and provides an api to add and remove tags from a post as well as find posts that have a set of tags. That’s it, nothing else.

Then you have a service that listens to post and tag events, and does indexing for full text search. And you could have any number of these services and interconnect them as you want.

_But how do you read that blog_ you may ask. Well that really depends. You could have a highly complex website, where the blog post is simply a piece of the whole. That backend could then fetch the article from the Blog-API and render it any way the site wants. You could not publish it on your own at all, but instead submit it to other blogs/micro-blogs. You could simply provide an RSS-Feed. You could be using it as a nicer interface to wordpress for all the software cares. The point is, that the actual display functionality is just another part of interconnected entities.

_And now you have also built something that will scale_. Since you have systems that are not tightly coupled, but can be on may different machines, you can scale horizontally very easily. SQLite is no longer sufficient for your storage needs, simply point your blogging piece at Amazon-S3. you have too many people readin your stuff (as if that was possible), host your site ona. cloud service and attach multiple API servers at the back. You gain total flexibility to do anything you need and it will remain about “just blogging”

* * *

There are a lot more thoughts and a lot more details that did not make it into this post, but I hope it is sufficient to capture where I think things should be heading.

It’s also a start on explaining why I think Ghost is not the way forward. As much as I love the editing UI. I just think bloggig does not need a reboot, it needs a completely fresh start.
