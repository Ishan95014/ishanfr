---
layout: post
title: Pipes in Unix
date: 2023-09-24
link: https://cours.ishan.fr
---
### Pipes in Unix

In Unix-like systems, pipes are a fundamental concept that allow for the chaining of commands, facilitating the creation of powerful and efficient command sequences. The pipe operator, represented by `|`, acts as a conduit that passes the output of one command as the input to another command. This section will elaborate on the usage and combination of pipes and redirections through detailed examples and simulations.

#### Using Pipes
Using pipes can simplify complex operations by breaking them down into a series of simpler commands. Here's a detailed breakdown of using pipes with examples:

##### 1. **Basic Usage**
**Syntax**: 
```
command1 | command2
```

- `command1`: The first command that generates an output.
- `command2`: The second command that takes the output of command1 as input.
   
**Example**:
   
- Finding and counting files in a directory:

```
$ find . -type f | wc -l
```
   
This command sequence does the following:
   
- `find . -type f`: Lists all files in the current directory and its subdirectories.
- `wc -l`: Counts the number of lines in the output from the find command (i.e., the number of files).

##### 2. **Using Mock Data**
To understand better, let's consider a mock dataset in a file named "data.txt" with the following content:

```
apple
banana
cherry
apple
apple
banana
```

Now, let's find the unique fruits in the list using pipes:
```
$ cat data.txt | sort | uniq
```

The command sequence does the following:

- `cat data.txt`: Reads the content of "data.txt".
- `sort`: Sorts the output of `cat data.txt`.
- `uniq`: Displays only the unique lines from the sorted output.

**Expected Output**:

```
apple
banana
cherry
```
   