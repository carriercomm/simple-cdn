simple-cdn
==========

Simple CDN gives you HTTP(S) links to your CDN Servers. It cares about down servers.

```javascript
var simple = new SimpleCDN();
simple.addServer("http://dsakdlöasjdlkasdsjak.com");
simple.addServer("http://google.com", 301);
simple.addServer("http://house-of-code.org");
setInterval(function () {
    console.log(simple.getFullURL("test.jpg"));
}, 1000);
```