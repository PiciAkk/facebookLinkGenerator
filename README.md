
# Facebook Link Generator
command-line API for generating facebook links

## Usage:

### Install dependencies:
```
npm install
```
---
### Use:

**Usage example:**

Input:

```
npm start https://www.youtube.com/watch?v=xcJtL7QggTI
```

Output:

```
> messengerlinkgenerator@1.0.0 start E:\xample\messengerLinkGenerator
> node generate.js "https://www.youtube.com/watch?v=xcJtL7QggTI"
https://l.facebook.com/l.php?u=https://www.youtube.com/watch?v=xcJtL7QggTI
```

**Use with command-line arguments:**

```
npm start url
```
or
```
node generate.js url
```

**Use with in-program input:**
```
npm start
```
or
```
node generate.js
```
## Origin:
Basically, this is just a modified version of my [Messenger Link Generator](https://github.com/PiciAkk/messengerLinkGenerator) with Facebook's "redirecting server" 
## Online demo:
[Click here for online demo](https://replit.com/@PiciAkk/facebookLinkGenerator)
