---
layout: post
title: File Structures
date: 2023-09-24
link: https://cours.ishan.fr
---
### File Structures

Files in a filesystem are organized in a hierarchical structure. This structure starts with a root directory, which contains subdirectories and files. Each subdirectory can further contain other subdirectories and files, forming a tree-like structure.

Here's a visualization of a simple file structure:

```mermaid
graph LR
    Root["Root Directory"] --> Documents["Documents"]
    Root --> Pictures["Pictures"]
    Root --> Music["Music"]
    
    Documents -.-> Resume["Resume.doc"]
    Documents -.-> Budget["Budget.xlsx"]
    
    Pictures -.-> Vacation["Vacation.jpg"]
    Pictures -.-> Portrait["Portrait.png"]
    Pictures -.-> Landscapes["Landscapes"]
    
    classDef default fill:#fff,stroke:#000,stroke-width:1px;
    classDef Documents fill:#f9f9f9,stroke:#000,stroke-width:1px;
    classDef Pictures fill:#f9f9f9,stroke:#000,stroke-width:1px;
    classDef Music fill:#f9f9f9,stroke:#000,stroke-width:1px;
```

----

```bash
.
├── Documents
├── Pictures/
│   ├── Portrait.png
│   ├── Vacation.jpg
│   └── Landscapes/
└── Music/
```
