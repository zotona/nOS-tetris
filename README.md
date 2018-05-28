## Overview

This is a world-first blockchain tetris game, based on state-of-art virtual operation system nOS!

* backend NEO-contracts written in kotlin & python
* frontend nOS-react dApp

### Build
```bash
cd tetris && yarn install && PORT=3001 yarn start --port 3001
cd backend/kotlin && make
```
see *README.md* in subfolders for more details.

### Developer journal.

First of all, when I started to develop NEO dapps, it was very hard to start make valueable things, because NEO API has difficult API.
When I heared about nOS, I quickly looked through the nOS documentation, and find it very simple and promise!

The first run was success, it was impressive! But after week, I was pulled fresh developer branch and some problems appears, but thanks to great community, a core members quickly help me, and  I was able to move on!

It was a trial attempt, to understand how powerful the nOS is. Now ahead of a serious application for automatic baggage tipping at airports through RFID tags! 🙂


### Some screenshots
![](docs/images/1.png?raw=true)

![](docs/images/2.png?raw=true)

![](docs/images/3.png?raw=true)
### Some tips

If you have some troubles with invoke a smart-contract please check correct smartContractHash at tetris/src/api/nos.js