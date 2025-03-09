### Clockwork

One of my most recent projects, both in last update time and creation day, is a Syncronous Clock Display.

The project is created with vanilla JS and utilises built-in APIs. The clock in question uses WebWorker to update its internall time values and a Proxy to achieve somewhat reactive behaviour that allows it to re-render only a specific segment and element in it, and not all of the display at once.

It also supports a pop-up Floating Window mode, that in itself utilises core Document Picture-in-Picture API. It extends the regular PiP API and allows to also render regular HTML pages in floating windows, instead of just the videos.
