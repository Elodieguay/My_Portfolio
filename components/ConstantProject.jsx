import React from 'react'
// import main_blog from '../public/assets/main_blog.jpg'



export const projects = [

    {
        title: 'baobbab',
        description:"baobbab est un moteur de recherches incontournable pour dénicher les meilleurs cours de loisirs près de chez nous. Le but est de trouver facilement des professeurs passionnés, des associations dynamiques qui nous entourent, et découvrir une nouvelle façon d'apprendre et de s' épanouir.",
        team: 'Seul',
        tags: ['React, TanStack Query, React Hook Form, Tailwind, Nest js, MikroOrm, PostgreSQL'] ,
        git: 'https://github.com/Elodieguay/Baobbab/tree/dev',
        image:[
            '/assets/baobbabHome.png',
            '/assets/baobbabMap.png',
            '/assets/baobbabAuth.png',
        ],
        id:1

    },
    {
        title: 'Site de vente de meuble',
        description:'Création du serveur et de la Base de donnée en MySql. Nous avons utlisé le dashboard de Php My Admin pour la création de la BDD. Mise en place de l architecture Back avec des fichiers routes et controllers. Réalisation des requêtes. Authentification, Hashage du password. Création du CRUD.  Création du front et du panier avec hooks et localstorage.',
        team: 'Team de 10 personnes : en binôme , mode agile, daily, clôture',
        tags: ['React, Tailwind, MySql, Express,'] ,
        git: 'https://github.com/Elodieguay/Site_vente_de_meubles',
        video: 'IsJWgUgWsKk',
        id:2

    },
   {
        title: 'Random Users',
        subtitle:'Manipuler les données de plusieurs utilisateurs',
        description:'Ce projet teste la capacité de créer une petite application, de communiquer avec une API et de montrer mes compétences en programmation. L’objectif est de créer une page qui affiche plusieurs cartes d’utilisateur en même temps. ',
        team: 'Seule',
        tags: ['React, Tailwaind'] ,
        git: 'https://github.com/Elodieguay/random_user',
        video:"cBhmlU7dCJU" ,
        id:3

    },

    {
        title: 'Payment App',
        description:'Créer une application de paiement responsive en 5 jours.Les utilisateurs peuvent ajouter des produits à leur panier. Une fois les produits ajoutés, les utilisateurs ont accès à une page de paiement et peuvent passer commande. Après avoir passé une commande, une entrée est créée dans la base de données avec le prix total et chaque article de la commande.',
        team: 'Seule',
        tags: ['React, Tailwind, Node.js, Express, MySql'] ,
        git: 'https://github.com/Elodieguay/Payment_App',
        image:
        [ 
            '/assets/bradery_main.png',
            '/assets/bradery_cart.png',
            '/assets/bradery_payment.png',
        ],
        id:4

    },   

   {
        title: 'Plateforme de microblogging',
        description:" Nous avons réalisé dans un délai de 2 semaines: l'installation de Docker & Laravel et de Laravel Breeze (pour l'authentification) puis la base du projet qu'il fallait atteindre, avec : une page d’inscription et de connexion,une page de profil avec votre biographie vos posts, une page d’édition de votre profil, un formulaire de création de nouveau post, une page de visualisation de tous les posts de la plateforme, qui sera la page d’accueil.",
        team: 'Team de 4 personnes : mode agile, daily, clôture',
        tags: [' React, Inertia, Laravel, PHP, PostgreSQL, Docker'] ,
        git: 'https://github.com/Elodieguay/Blog_Platform/tree/master',
        image:
        [ 
            '/assets/Main_blogg.jpg',
            '/assets/MainPost_blog.jpg',
            '/assets/Dashboard_blog.jpg',
            '/assets/DashboardModal_blog.jpg',
            '/assets/Create_blog.jpg',
        ],
        id:5

    }, 
    
    {
        title: 'Extension Navigateur',
        subtitle:'Obtenir la définition du mot séléctionné',
        description:'Lorsque vous ne connaissez pas un mot, sélectionnez le mot avec votre souris. Un popup apparaît avec le mot sélectionné et vous permet de lire toutes les définitions du mot choisi, la prononciation, les synonymes et de générer une recherche Google dans un nouvel onglet si vous souhaitez en savoir plus. Quand vous avez terminé, le popup se ferme avec un défilement de votre souris.',
        team: 'Team de 3 personnes : pair programming, en mode agile',
        tags: ['Javascript, CSS'] ,
        git: 'https://github.com/Elodieguay/Browser-extension',
        video: "pw1tPUwC7vo",
        id:6

    },

    // {
        
    //     title: 'Dataviz & API',
    //     subtitle:'Site Web et projet de visualisation des données',
    //     description:'Ce projet a été conçu pour que nous puissions utiliser les requêtes API afin de créer une page Web dynamique. Nous avons utilisé plusieurs API afin de rendre des informations sur le temps et la météo, avec une carte centrée sur Ada Tech School, avec des dessins des parcs et des espaces verts voisins. Pour les données, nous avons utilisé Paris Data et une API météo.',
    //     team: 'Team de 4 personnes : en mode agile',
    //     tags: ['React, Leaflet'] ,
    //     git: 'https://github.com/Elodieguay/Data-visualisation',
    //     video:'6_olgSdjr9c',
    //     id:6

    // },

    
 
]
