const { VideoGames, Categories, User } = require("./models/index");

let games = [
  {
    name: "Grand Theft Auto V",
    released: "2013-09-17",
    image:
      "https://s1.gaming-cdn.com/images/products/186/271x377/grand-theft-auto-v-pc-juego-rockstar-cover.jpg",
    rating: 4,
    platforms: ["Pc", "Playstation", "Xbox"],
    price: 25,
    description:
      "Grand Theft Auto V es el juego de mundo abierto más grande, más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad de un modo nuevo, mientras los jugadores entran y salen repetidamente de las vidas de los tres personajes principales.",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
  {
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    image:
      "https://s2.gaming-cdn.com/images/products/268/271x377/juego-gog-com-the-witcher-3-wild-hunt-cover.jpg",
    rating: 4,
    platforms: ["PlayStation", "PC", "Xbox", "Nintendo"],
    price: 40,
    description:
      "Justo en el momento en el que la guerra se propaga por los Reinos del Norte, aceptas el contrato más desafiante de tu vida: rastrear a la Niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.",
    categories: ["Fantasy", "Adventure"],
    stock: 10,
  },
  {
    name: "Portal 2",
    released: "2011-04-18",
    image:
      "https://www.instant-gaming.com/images/products/220/271x377/220.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Linux", "Apple Macintosh"],
    price: 10,
    description:
      "Portal 2 continúa con esa fórmula ganadora consistente en una innovadora mecánica de juego, historia y música que condujeron al Portal original a ganar más de 70 galardones y lo convirtieron en un nuevo mito de la industria.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Tomb Raider (2013)",
    released: "2013-03-05",
    image:
      "https://s3.gaming-cdn.com/images/products/152/271x377/juego-steam-tomb-raider-cover.jpg",
    rating: 4,
    platforms: ["Pc", "Playstation", "Xbox"],
    price: 15,
    description:
      "Tomb Raider relata la historia del origen de Lara Croft y su transformación de una joven chica a una endurecida superviviente.",

    categories: ["Action", "Drama", "Adventure"],
    stock: 10,
  },
  {
    name: "The Elder Scrolls V: Skyrim",
    released: "2011-11-11",
    image:
      "https://s3.gaming-cdn.com/images/products/146/271x377/the-elder-scrolls-v-skyrim-pc-juego-steam-europe-cover.jpg",
    rating: 4,
    platforms: ["PlayStation", "Pc", "Xbox", "Nintendo"],
    price: 45,
    description:
      "The Elder Scrolls V: Skyrim es un videojuego de rol de acción del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. ",

    categories: ["Action", "History", "Fantasy"],
    stock: 10,
  },
  {
    name: "Left 4 Dead 2",
    released: "2009-11-17",
    image:
      "https://s2.gaming-cdn.com/images/products/733/271x377/juego-steam-left-4-dead-2-cover.jpg",
    rating: 4,
    platforms: ["Pc", "Xbox"],
    price: 10,
    description:
      "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción terrorífica lleva a tus amigos y a ti a través de ciudades, pantanos y cementerios del Profundo Sur de EE. UU.",
    categories: ["Horror", "Shooter", "Zombies"],
    stock: 10,
  },
  {
    name: "Counter-Strike: Global Offensive",
    released: "2012-08-21",
    image:
      "https://s1.gaming-cdn.com/images/products/9459/271x377/counter-strike-global-offensive-pc-mac-juego-steam-cover.jpg",
    rating: 3,
    platforms: ["Pc", "PlayStation", "Xbox"],
    price: 15,
    description:
      "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionera la franquicia cuando salió hace 19 años. CS:GO trae nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de CS",
    categories: ["Strategy", "Shooter"],
    stock: 10,
  },
  {
    name: "Portal",
    released: "2007-10-09",
    image:
      "https://s1.gaming-cdn.com/images/products/1158/271x377/juego-steam-portal-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox", "Android", "Linux"],
    price: 12,
    description:
      "Portal™ es la nueva aventura para un solo jugador de Valve. Ambientado en los misteriosos laboratorios de Aperture Science, Portal ha sido calificado como uno de los juegos más innovadores de los últimos tiempos y ofrece incontables horas de rompecabezas nunca vistos.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Borderlands 2",
    released: "2012-09-18",
    image:
      "https://i.3djuegos.com/juegos/7860/borderlands_2/fotos/ficha/borderlands_2-2148566.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Apple Macintosh"],
    price: 40,
    description:
      "The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience",
    categories: ["Shooter", "Action"],
    stock: 10,
  },
  {
    name: "BioShock Infinite",
    released: "2013-03-26",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_971339-MCO45275240944_032021-O.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Linux", "Nintendo"],
    price: 20,
    description:
      "En deuda con las personas equivocadas, con su vida en juego, veterano de la Caballería de los EE. UU. Y ahora arma contratada, Booker DeWitt solo tiene una oportunidad para hacer borrón y cuenta nueva. Debe rescatar a Elizabeth, una misteriosa niña encarcelada desde la infancia y encerrada en la ciudad voladora de Columbia.",
    categories: ["Shooter", "Action", "Gore"],
    stock: 10,
  },
  {
    name: "Life is Strange",
    released: "2015-01-29",
    image:
      "https://i.3djuegos.com/juegos/11257/life_is_strange/fotos/ficha/life_is_strange-3561963.jpg",
    rating: 4,
    platforms: [
      "Pc",
      "PlayStation",
      "Xbox",
      "iOS",
      "Android",
      "Apple Macintosh",
      "Linux",
    ],
    price: 28,
    description:
      "Life is Strange es un juego de aventuras episódico galardonado y aclamado por la crítica que permite al jugador rebobinar el tiempo y afectar el pasado, el presente y el futuro.",
    categories: ["Adventure", "Strategy"],
    stock: 10,
  },
  {
    name: "Red Dead Redemption 2",
    released: "2018-10-26",
    image:
      "https://s1.gaming-cdn.com/images/products/5679/271x377/juego-rockstar-red-dead-redemption-2-standard-edition-cover.jpg",
    rating: 5,
    platforms: ["Pc", "PlayStation", "Xbox"],
    price: 60,
    description:
      "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX.",
    categories: ["Adventure", "CowBoy"],
    stock: 10,
  },
  {
    name: "BioShock",
    released: "2007-08-21",
    image:
      "https://s3.gaming-cdn.com/images/products/8279/271x377/juego-steam-bioshock-remastered-cover.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "iOS", "Apple Macintosh"],
    price: 25,
    description:
      "BioShock es un juego de disparos diferente a todos los que hayas jugado, cargado de armas y tácticas nunca antes vistas. Tendrás un arsenal completo a tu disposición, desde simples revólveres hasta lanzagranadas y lanzadores de productos químicos, pero también te verás obligado a modificar genéticamente tu ADN para crear armas aún más letales.",
    categories: ["Shooter", "RolePlay"],
    stock: 10,
  },
  {
    name: "Half-Life 2",
    released: "2004-11-16",
    image:
      "https://www.instant-gaming.com/images/products/2284/271x377/2284.jpg",
    rating: 4,
    platforms: [
      "Pc",
      "PlayStation",
      "Xbox",
      "iOS",
      "Apple Macintosh",
      "Android",
      "Linux",
    ],
    price: 13,
    description:
      "HALF-LIFE supone un impacto en la industria de juegos gracias a su combinación de acción frenética y narración continua y absorbente. El título debut de Valve fue galardonado con más de 50 premios, que sentaron las bases para que luego se convirtiera en *El mejor juego para PC de la historia*.",
    categories: ["Sci-Fi", "Zombies"],
    stock: 10,
  },
  {
    name: "Limbo",
    released: "2010-07-21",
    image:
      "https://s3.gaming-cdn.com/images/products/1292/271x377/limbo-pc-mac-juego-steam-cover.jpg",
    rating: 4,
    platforms: [
      "PC",
      "PlayStation",
      "Xbox",
      "iOS",
      "Android",
      "Apple Macintosh",
      "Linux",
      "Nintendo",
    ],
    price: 10,
    description:
      "Inseguro del destino de su hermana, un niño ingresa al LIMBO.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Team Fortress 2",
    released: "2007-10-10",
    image:
      "https://media.vandal.net/m/6583/201217115526_1.jpg",
    rating: 3,
    platforms: ["PC", "Apple Macintosh", "Linux"],
    price: 20,
    description:
      "Nueve clases distintas proporcionan una amplia gama de habilidades tácticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipo y, lo más importante, ¡sombreros!",
    categories: ["Shooter", "Action"],
    stock: 10,
  },
  {
    name: "DOOM (2016)",
    released: "2016-05-13",
    image:
      "https://s2.gaming-cdn.com/images/products/865/271x377/juego-steam-doom-cover.jpg",
    rating: 5,
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    price: 20,
    description:
      "En 2016, la saga volvió a lo más alto con un shooter moderno, brutalmente divertido y de endiablada dificultad que obtuvo el premio al mejor juego de acción del año en los Video Game Awards. Demonios implacables, armas devastadoras y una movilidad frenética y fluida son los cimientos de un intenso sistema de combate en primera persona que tendrás que dominar para abrirte paso por las profundidades del infierno.",
    categories: ["Action"],
    stock: 10,
  },
  {
    name: "Fallout 4",
    released: "2015-11-09",
    image:
      "https://s3.gaming-cdn.com/images/products/755/271x377/juego-steam-fallout-4-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 20,
    description:
      "Bethesda Game Studios, los galardonados creadores de Fallout 3 y The Elder Scrolls V: Skyrim, te dan la bienvenida al mundo de Fallout 4, su juego más ambicioso hasta la fecha y la próxima generación de juegos de mundo abierto.",
    categories: ["Post-Apocaliptic"],
    stock: 10,
  },
  {
    name: "PAYDAY 2",
    released: "2013-08-13",
    image:
      "https://s2.gaming-cdn.com/images/products/223/271x377/juego-steam-payday-2-cover.jpg",
    rating: 4,
    platforms: ["PC", "Xbox", "Linux"],
    price: 10,
    description:
      "Videojuego de acción en primera persona donde el objetivo es cometer todo tipo de delitos: atraco a bancos o joyerías, secuestros, tráfico de drogas... ",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
  {
    name: "Destiny 2",
    released: "2017-09-06",
    image:
      "https://www.instant-gaming.com/images/products/7164/271x377/7164.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox", "Web"],
    price: 60,
    description:
      "'Destiny 2' es la secuela de conocidísimo MMORPG de Activision y Bungie, el cual viene a dar continuación a los hechos ocurridos en su antecesor centrándose en la historia de los Guardianes, unos guerreros encargados de preservar el Universo de las amenazas que puedan suponer la destrucción más absoluta.",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
  {
    name: "Life is Strange: True Colors",
    released: "2021-09-09",
    image:
      "https://s2.gaming-cdn.com/images/products/8512/271x377/life-is-strange-true-colors-pc-juego-steam-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 42,
    description:
      "En este juego eres Alex Chen, de 21 años, una asiática-americana que acaba de dejar el sistema de hogares de acogida del estado. Su primera decisión es ponerse en contacto con su hermano Gabe, con quien ha perdido contacto durante los ocho años anteriores, cuando él creció ya fuera del sistema. Después de ese contacto inicial, Alex se dirige al pequeño pueblo de Haven Springs, para reencontrarse con él.",
    categories: ["Action", "Adventure"],
    stock: 10,
  },
  {
    name: "Assassin's Creed III",
    released: "2012-10-31",
    image:
      "https://s3.gaming-cdn.com/images/products/320/271x377/assassins-creed-iii-pc-juego-ubisoft-connect-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 23,
    description:
      "The American Colonies, 1775. It’s a time of civil unrest and political upheaval in the Americas. As a Native American assassin fights to protect his land and his people, he will ignite the flames of a young nation’s revolution. Assassin’s Creed® III takes you back to the American Revolutionary War, but not the one you’ve read about in history books...",
    categories: ["Action", "Adventure"],
    stock: 10,
  },
  {
    name: "Resident Evil 4 Ultimate HD Edition",
    released: "2014-02-27",
    image:
      "https://s2.gaming-cdn.com/images/products/757/271x377/juego-steam-resident-evil-4-ultimate-hd-edition-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 23,
    description:
      "en resident evil 4, al agente especial Leon S. Kennedy se le asigna la misión de rescatar a la hija del presidente de los EUA, que ha sido secuestrada. Tras llegar a una aldea rural europea, se enfrenta a nuevas amenazas que suponen retos totalmente diferentes de los clásicos enemigos zombis de pesados movimientos de las primeras entregas de esta serie. Leon lucha contra terroríficas criaturas nuevas infestadas con una nueva amenaza denominada «Las Plagas» y se enfrenta a una agresiva horda de enemigos que incluye aldeanos bajo control mental conectados a Los Iluminados, la misteriosa secta detrás del rapto.",
    categories: ["Action", "Zombies", "Post-Apocaliptic"],
    stock: 10,
  },
  {
    name: "Beyond: Two Souls",
    released: "2019-07-22",
    image:
      "https://s2.gaming-cdn.com/images/products/4288/271x377/juego-epic-games-beyond-two-souls-cover.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 23,
    description:
      "Un singular thriller psicológico de acción con las actuaciones de las estrellas de Hollywood Ellen Page y Willem Dafoe, Beyond: Two Souls™ te llevará a un emocionante viaje por todo el mundo mientras encarnas la insólita vida de Jodie Holmes. Jodie es diferente, pues ha nacido conectada a una entidad misteriosa dotada de poderes ncreíbles. Tus acciones decidirán el destino de Jodie conforme enfrenta desafíos impresionantes, peligros y una pérdida desgarradora durante el viaje para descubrir la verdad sobre su identidad.",
    categories: ["Action", "Adventure"],
    stock: 10,
  },
];

let categories = [
  "Action",
  "Adventure",
  "Shooter",
  "RolePlay",
  "Sci-Fi",
  "Horror",
  "Post-Apocaliptic",
  "Logic",
  "Zombies",
  "CowBoy",
  "Strategy",
  "History",
  "Gore",
  "Fantasy",
  "Drama",
];

categories.forEach((category) => {
  Categories.create({ name: category });
});

games.forEach(async (game) => {
  let {
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    categories,
    stock,
  } = game;
  VideoGames.findOrCreate({
    where: { name: game.name },
    defaults: {
      name,
      released,
      image,
      rating,
      platforms,
      price,
      description,
      stock,
    },
  })
    .then((vg) => {
      categories.forEach((cat) => {
        Categories.findOne({
          where: {name: cat}
        }).then(catego=> {
          vg[0].addCategory(catego)
        })
      });
    })
    .catch((e) => console.log(e));
});


User.create({name: "Pepe Perez", email:"pepe@gmail.com", password: "1234", isAdmin: "SAdmin"})