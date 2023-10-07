---
layout: post
title: Introduction à la Virtualisation dans le cloud
date: 2023-09-24
link: https://cours.ishan.fr
---

### Introduction à la Virtualisation dans le cloud

- **Virtualisation et Containerisation**
  - **Raisons pour la virtualisation** : portabilité, sécurité (isolation des machines), optimisation des ressources, flexibilité dans la configuration des machines virtuelles.
  - **Évolution vers la containerisation** : focalisation sur l'isolation des applications et des services plutôt que sur les systèmes d'exploitation.
  - **Tendance actuelle** : la virtualisation des machines est moins à la mode, et l'accent est mis sur la virtualisation des services et des applications.
  - **Docker** : léger, facilite l'isolation et la gestion des applications, permet la création d'environnements pour exécuter des applications.

- **DevOps et Microservices**
  - **Microservices** : ont une durée de vie limitée et sont surtout utilisés dans le cloud.
  - **DevOps** : facilitent le développement des microservices.
  
- **Kubernetes**
  - **Introduction** : plateforme d'orchestration open source initialement lancée par Google. Maintenant, utilisée par plusieurs fournisseurs de cloud comme Google, Amazon (AWS) et Microsoft (Azure).
  - **But** : automatiser la gestion de milliers de dockers pour assurer une haute disponibilité, une scalabilité et une auto-réparation.
  - **Fonctionnement** : constitué d'un nœud master (Control Plane) et de plusieurs nœuds workers. Le master contrôle les nœuds workers qui exécutent les tâches.
  - **Éléments du nœud master** : API Server (pour interagir avec le client), etcd (base de données stockant toutes les informations du cluster), controller manager (gère les différents contrôleurs), scheduler (attribue les travaux aux nœuds workers).
  - **Éléments du nœud worker** : kubelet (interagit avec le master), kube-proxy (gère la communication réseau entre les nœuds et les services), et des pods (unité de base contenant un ou plusieurs containers).

#### Approfondir

- **Hyperviseurs** : Noter les différents types d'hyperviseurs et leurs exemples spécifiques (mention de VirtualBox et proxmox mais besoin de plus d'exploration).
- **Exploration de Kubernetes** : Détail sur la configuration et le déploiement dans un environnement réel.
- **Travaux pratiques (TP)** : Détails sur les TP mentionnés, notamment sur l'utilisation d'Azure et Docker, et sur la création d'un cluster Kubernetes.
- **Détails sur les containers et les pods** : Approfondir les concepts des pods dans Kubernetes et comment ils facilitent le déploiement et la gestion des applications.
  
#### Glossaire

- **Virtualisation** : Technique permettant de faire fonctionner plusieurs systèmes d'exploitation ou applications isolément sur une même machine physique.
- **Containerisation (Docker)** : Technologie permettant d'encapsuler une application et ses dépendances dans un "container", facilitant ainsi son déploiement et son exécution dans différents environnements.
- **Microservices** : Approche de développement d'applications où une application est construite comme un ensemble de services faiblement couplés et indépendants.
- **DevOps** : Pratique de collaboration entre les équipes de développement (Dev) et d'exploitation informatique (Ops) visant à automatiser les processus de livraison et de changement d'application.
- **Kubernetes** : Plateforme open source pour automatiser le déploiement, la mise à l'échelle et la gestion des applications conteneurisées.
- **Node (dans Kubernetes)** : Une machine, VM ou un conteneur physique ou virtuel sur lequel les pods peuvent être hébergés.
- **Pod (dans Kubernetes)** : La plus petite unité déployable dans Kubernetes, qui représente un seul et même lieu de déploiement pour les containers.
- **Hyperviseur** : Logiciel permettant de créer et de gérer des machines virtuelles (VMs) sur une machine hôte.
- **API Server (dans Kubernetes)** : Point d'entrée des commandes REST dans Kubernetes, permettant la communication entre les différents composants du cluster.
- **etcd (dans Kubernetes)** : Système de stockage de clés-valeurs distribué utilisé pour stocker la configuration et l'état du cluster Kubernetes.
- **Orchestration** : Processus automatisé de coordination et de gestion des containers et des services dans un environnement informatique.
- **Load Balancer** : Technique ou dispositif permettant de distribuer la charge réseau ou applicative uniformément sur plusieurs serveurs ou processus pour optimiser l'utilisation des ressources, maximiser les performances et minimiser le temps de réponse.
