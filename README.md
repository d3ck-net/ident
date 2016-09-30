Meteor is the toolchain of my choice:
+ It offers a complete environment for package management and build tooling.
+ It is  possible to adapt it to a client-only angular application or basicly anything javascript related.



to run this project you need to install the meteor toolkit
https://www.meteor.com/
also make sure to clone this repository recursevily.
You can simply install and run using the following commands:

```
curl https://install.meteor.com/ | sh
git clone --recursive https://github.com/d3ck-net/ident.git
cd ident
meteor
```

this will startup the meteor server that serves the client and provides a backend for the REST calls

What I like about this solution is that the actual application code ("client","lib" and"server" directories) is very small,
most of the action is taking place inside generelized packages ("packages" directory).

I did not use angular as I did not use Angular2 yet. Also, I thinks this solution is more elegant.