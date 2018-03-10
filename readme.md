# WaniKani SRS Ranks

[(Download UserScript here)](https://greasyfork.org/en/scripts/39258-wanikani-srs-ranks)

Adds 5 new ranks to WaniKani's SRS. Additionally, allows you to rename the SRS labels of the default system. **Note that for simplicity's sake, this only affects review sessions**.

1. **Layman**
2. **Initiate**
3. **Novice**
4. Apprentice
5. **Journeyman**
6. **Adept** (This is the old 'Guru' level)
7. Guru
8. Master
9. Enlightened
10. Burned

This project keeps the SCSS files separate from the JS, and joins them into one file using `fs.read/writeFile` by injecting the compiled CSS into the compiled JS.

## What is this? What's a UserScript?

You can [learn more about UserScripts here](https://medium.freecodecamp.org/applying-javascript-user-scripts-2e505643644d).

WaniKani is a website for learning Kanji. This UserScript adds more named ranks to the Spaced Repetition System.

You can [read a community guide here](https://community.wanikani.com/t/visual-guide-on-how-to-install-a-userscript/12136) on how to install/use UserScripts with WaniKani.

## Licence

MIT. Feel free to make changes. Attribution is appreciated. 

However, I will strive to maintain this file, so if you have any feature requests or find any bugs, please report them and I'll address them.

