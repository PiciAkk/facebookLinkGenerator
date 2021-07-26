
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
One day I discovered something. If I right click, and then press "Copy link address" on a messenger hyperlink, the copied link points to messenger's server, and then it redirects me to the original website. Therefore I can write an API, that can make a messenger link out of any link. Tada!
## Online demo:
[Click here for online demo](https://replit.com/@PiciAkk/facebookLinkGenerator)
