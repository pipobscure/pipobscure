---
layout: post
title: You can't always have what you want
date: 2013-10-26 16:04:16 Z
tags:
  - fail
  - oauth
  - tech
---
I stumbled across another instance of messed up OAuth today.

OAuth is intended to give services the ability to access all or parts of another on behalf of a user. This is great, since it enables a lot of interactivity on the net. It is actually designed in a way that allows for the service requesting access to specify what access it wants.

Except it does not give the user any choice in what rights to grant. Take the example of Disqus. If you log in via Twitter, Disqus asks for the right to access your account information as well as tweet on your behalf. And that’s where the trouble starts. I have no issue with handing over my information that Twitter has to Disqus, but under no circumstances do I ever want Disqus to tweet on my behalf. There is simply no reason it ever should. And truth be told, Disqus has so many silly or stupid idio(t)syncrasies that it is not really a trustworthy service. Not that I think they are malicious, I just don’t trust their sense of right and wrong to steer them right. (Any case: stop the rathole)

What would be needed is twitter still going through with the OAuth process, yet present the user with the option to disable some of the permissions. After all, even simply going through with the process gives value: authentication.

Except that this is in direct contradiction of the specification. So I guess we really need OAuth2.1 which would allow for this.

After all, I trust a lot of services somewhat, but not with everything they ask for. Especially when they behave like little children. I have to tell my little ones that they can’t have everything they ask for all the time. Why won’t you let me tell some web sites the same?

P.S.: While I agree with [what Eran Hammer said at RealTimeConf 2012](http://vimeo.com/52882780) OAuth is the de-facto standard used by everyone. Yes it’s bad, but it exists.
