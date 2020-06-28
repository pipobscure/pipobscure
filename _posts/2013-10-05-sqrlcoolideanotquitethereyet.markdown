---
layout: post
title: sqrl://cool.idea/not/quite/there/yet
date: 2013-10-05 16:31:40 Z
tags: []
---
# sqrl://cool.idea/not/quite/there/yet

Today I looked at a very cool idea, by a very cool guy. [Steve Gibson](https://twitter.com/sggrc) came up with [a way to securely authenticate](https://www.grc.com/sqrl/sqrl.htm) over the web.

He describes his idea quite eloquently and invites everyone to have a discussion about it; to prod and poke at it; to test it for soundness. While I find the idea quite brilliant, I do have a couple of issues, that make it a no go for me in terms of becoming the future standard for web-authentication:

1.  _URL-Specificity:_ requiring the thing to use https:// or http:// or whatever is not a good idea. Who knows what protocol we will all be using a couple of years from now. SQRL should be possible over [carrier pigeon](https://www.grc.com/x/news.exe?cmd=article&group=grc.sqrl&item=193)
    
2.  _Algorithm-Specificity:_ requiring the thing to use [ed25519](http://ed25519.cr.yp.to/index.html) is silly. It’s not ubiquitous enough, to make it easy for websites to implement, nor can we be sure that it will remain strong long enough. The algorithm needs to be negotiable for this to become standard.
    
3.  _QR-Codes:_ are already an outdated technology. It might be ok as one way to represent the URL to be encrypted right now, but it will be obsolete before it has even gained adoption.
    

This is sad, because the fundamental idea is very good:

1.  have a site present a nonce and a URL where to send authentication
2.  derive from that and a master-key a site unique private/public key-pair
3.  sign the nonce and the URL and send the result with the public key to the endpoint specified
4.  the public key is the unique identifier of the user

All of that is sound. Even the suggested user experience is good, especially when combined with a browser plugin as suggested in [Security Now: 424](http://twit.tv/show/security-now/424). What is definitely not sound is the description of the protocol.

I have to note though that it’s early days yet. Not just is the current state not a full suggestion of a protocol, it’s not even a fully fleshed out idea yet, which you can see by the plethora of missing/to-be-done pages on [grc.com](https://www.grc.com).

So for now, it’s **kudos to @sggrc**, let’s work on getting this thing specified and fleshed out. It’s important to make sure this get’s done well, after all we don’t want to create an incompatibility nightmare here.
