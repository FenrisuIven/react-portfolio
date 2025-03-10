## [Synchronous Clock Display](https://github.com/FenrisuIven/clockwork)

> vanilla JS with some built-in APIs, runs with Vite.js

One of my most recent projects, both in last update time and creation day, is a **Syncronous Clock Display**, short-named _Clockwork_.

The project is created with **vanilla JS** and utilises built-in APIs. The clock in question uses **WebWorker** to update its internall time values and a **Proxy** to achieve somewhat reactive behaviour that allows it to re-render only a specific segment and element in it, and not all of the display at once.

It also supports a pop-up **Floating Window mode**, that in itself utilises core **Document Picture-in-Picture API**. It's pretty new and is not yet suppoerted by all of the browser, but the main feature is that it extends the regular PiP API and allows to also render whole HTML pages in floating windows, instead of just the videos.

---

The development had started on **Devember 20th, 2024**, and the whole project _was finished_ in a week, on _Devember 27th, 2024_.

The main idea behind the project was to develop a very lightweight desktop clock that runs natively in the browser. It was mainly developed for self practice and as a small pet-project, and it turned out a lot prettier and smaller than I firstly imagened it to be. Though, of course, everything always can be made even smaller :)
