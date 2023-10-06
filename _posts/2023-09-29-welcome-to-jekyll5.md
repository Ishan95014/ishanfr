---
layout: post
title: Grep usage example
date: 2023-09-24
link: https://cours.ishan.fr
---

### Grep usage example

#### Basic Usage

To search for a specific pattern within a file, use the `grep` command followed by the pattern and the file path:

```bash
grep "pattern" /path/to/file
```

#### Using Pipe with Grep

To filter the output of a command with `grep`, use a pipe (`|`):

```bash
command | grep "pattern"
```

#### Example - grep on a file

Consider a text file named `example.log` with the following content:

```
2023-09-05 12:00:01 INFO: System started
2023-09-05 12:00:02 ERROR: Failed to load module
2023-09-05 12:00:03 WARN: Low disk space
2023-09-05 12:00:04 INFO: Module loaded
```

To find lines containing "ERROR", use:

```bash
grep "ERROR" example.log
```

The output will be:

```
2023-09-05 12:00:02 ERROR: Failed to load module
```

#### Example - grep on a command output

Suppose you have a command `command` that generates a stream of output. You can filter this output using `grep` with a pipe (`|`). In the mock example below, we use `cat` as a placeholder for your command:

```bash
cat example.log | grep "ERROR"
```

This will output:

```
2023-09-05 12:00:02 ERROR: Failed to load module
```
