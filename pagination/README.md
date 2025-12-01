# Pagination

Ce projet contient plusieurs exercices sur la pagination en Python.

## Objectifs d'apprentissage

À la fin de ce projet, tu devras être capable d'expliquer :
- Comment paginer un dataset avec des paramètres simples
- Comment paginer un dataset avec des métadonnées hypermedia
- Comment paginer de manière résiliente aux suppressions

## Prérequis

- Python 3.7+
- Le fichier `Popular_Baby_Names.csv` doit être présent dans le répertoire

## Structure du projet

```
pagination/
├── 0-simple_helper_function.py    # Helper function pour calculer les index
├── 1-simple_pagination.py         # Pagination simple avec Server class
├── 2-hypermedia_pagination.py     # Pagination avec métadonnées hypermedia
├── 3-hypermedia_del_pagination.py # Pagination résistante aux suppressions
├── 0-main.py                      # Tests pour l'exercice 0
├── 1-main.py                      # Tests pour l'exercice 1
├── 2-main.py                      # Tests pour l'exercice 2
├── 3-main.py                      # Tests pour l'exercice 3
└── README.md                      # Ce fichier
```

## Exercices

### 0. Simple helper function
Créer une fonction `index_range` qui calcule les index de début et de fin pour la pagination.

**Fichier :** `0-simple_helper_function.py`

### 1. Simple pagination
Implémenter une méthode `get_page` dans la classe Server pour paginer le dataset.

**Fichier :** `1-simple_pagination.py`

### 2. Hypermedia pagination
Implémenter une méthode `get_hyper` qui retourne des métadonnées de pagination.

**Fichier :** `2-hypermedia_pagination.py`

### 3. Deletion-resilient hypermedia pagination
Implémenter une méthode `get_hyper_index` résistante aux suppressions dans le dataset.

**Fichier :** `3-hypermedia_del_pagination.py`

## Comment tester

Pour tester chaque exercice, rends les fichiers exécutables et lance-les :

```bash
chmod +x 0-main.py
./0-main.py
```

```bash
chmod +x 1-main.py
./1-main.py
```

```bash
chmod +x 2-main.py
./2-main.py
```

```bash
chmod +x 3-main.py
./3-main.py
```

## Ressources

- [REST API Design: Pagination](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/)
- [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

## Auteur

Projet Holberton School - Web Back End
