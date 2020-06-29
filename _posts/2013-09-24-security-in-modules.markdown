---
layout: post
title: Security in Modules
date: 2013-09-24 16:31:09 Z
tags: []
---
At NodeConf.eu, there was a great talk by @adam\_baldwin on node security and the [Node-Security Project](https://nodesecurity.io). After the talk while watching a bunch of nodecopters crash, I got to talking with Adam about security bugs in modules and the fact that he seems to me to be an incorrigible optimist thinking he can actually make things safe. You know the way people talk when they have a beer/cider in hand it it ain’t the first night out ;)

Well Adam made a comment, that I should write a blog-post about it. I said that I’m not really into blogging. Well I’m not, but I try and try again. So this endeavour on tumblr is actually Adam’s fault.

So here goes nothing.

The [Problem with Express/bodyParser](http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html) was discussed heatedly up and down twitter. (If you missed it, be happy)

I have a problem with the statements made in the article, because it misses the most important point. He writes a short piece of code, and then claims that it’s dangerous. **And he is right** however, I can do the very same thing with any API.

    while (42) setInterval(console.log.bind(console, 'Hallo'), 1)
    

is pretty _dangerous_ as well. (Go try it in your node-REPL and come back when you killed it ;) )

The point here is that any API, can be dangerous if you don’t know what you are doing. If you don’t think about what the module you want to use actually does, and don’t think about what you are doing, then well you are never going to write anything that is even remotely secure.

Of course Andrew realises this and he says:

> You can prevent this attack by always checking whether req.files is present for endpoints in which you use bodyParser or multipart, and then deleting the temp files. Note that this is every POST endpoint if you did something like app.use(express.bodyParser()).

Which makes it even sadder that he chose the title he did, because it is hyperbole and doesn’t add to the security conversation. What we should be thinking about is how we can get people to educate themselves about what they are doing.

Which is why I love what Adam is doing at the [Node-Security Project](https://nodesecurity.io). This will be a great boon to the NodeJS community.
