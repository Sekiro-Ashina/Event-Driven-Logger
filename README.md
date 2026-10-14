# Event-Driven Memory Logger

A small Node.js example that demonstrates an event-driven logging flow with the built-in `events`, `os`, and `fs` modules.

Every three seconds, the app calculates the host's current memory usage, emits a custom `message` event, and appends the resulting log entry to `eventlog.txt`.

## How it works

1. `Logger` extends Node.js's `EventEmitter`.
2. `logger.log(message)` emits a `message` event with the supplied message.
3. A listener receives that event and writes a timestamped entry to `eventlog.txt`.
4. A timer measures memory usage and sends it through the logger every 3 seconds.

## Requirements

- [Node.js](https://nodejs.org/) 16 or newer

No third-party packages are required.

## Run

From this directory, run:

```bash
node logger.js
```

The process continues logging until you stop it with `Ctrl+C`.

## Output

Log entries are appended to `eventlog.txt` in this format:

```text
2026-10-10T11:38:20.553Z - Current Memory used: 83.26
```

## Project structure

```text
.
|-- logger.js      # Event emitter, timer, and file logger
`-- eventlog.txt   # Generated memory-usage log entries
```

## Notes

- `eventlog.txt` is append-only, so each new run retains prior entries.
- Memory usage is calculated as `(1 - free memory / total memory) * 100`.
