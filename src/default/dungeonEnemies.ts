import { router } from "../vite-env";

export const dungeonEnemies: router = {
    "Goblins": {
        "E": [
            {
                health: 5,power:2,
                name: "Goblin Grunt",
                description: "Un goblin débil y sin entrenamiento, generalmente armado con una simple daga o garrote.",
                icon: "Daga"
            },
            {
                health: 3,power:3,
                name: "Goblin Scout",
                description: "Explorador ágil, pero poco hábil en combate. Utiliza un arco corto para atacar a distancia.",
                icon: "Arco"
            },
            {
                health: 6,power:4,
                name: "Goblin Peon",
                description: "Trabajador goblin que lleva herramientas simples. Puede defenderse con un martillo pequeño.",
                icon: "Martillo"
            },
            {
                health: 1,power:1,
                name: "Kobold Slinger",
                description: "Un pequeño goblin de la subespecie kobold, usa una honda para lanzar piedras a sus enemigos.",
                icon: "Arco"
            },
            {
                health: 3,power:4,
                name: "Goblin Sneak",
                description: "Un goblin furtivo que ataca desde las sombras con una pequeña daga envenenada.",
                icon: "Daga"
            },
            {
                health: 6,power:3,
                name: "Goblin Forager",
                description: "Recolector goblin que defiende sus hallazgos con un palo afilado.",
                icon: "Espada"
            },
            {
                health: 5,power:4,
                name: "Goblin Worker",
                description: "Trabajador básico que usa un cuchillo desgastado para defenderse.",
                icon: "Daga"
            },
            {
                health: 3,power:2,
                name: "Goblin Slinger",
                description: "Goblin que utiliza una honda para atacar a distancia, aunque con poca precisión.",
                icon: "Arco"
            },
            {
                health: 2,power:3,
                name: "Goblin Runt",
                description: "El goblin más pequeño y débil, apenas puede sostener una daga oxidada.",
                icon: "Daga"
            },
            {
                health: 4,power:4,
                name: "Goblin Scavenger",
                description: "Recolector de desechos que defiende sus tesoros con un cuchillo mellado.",
                icon: "Daga"
            }
        ],
        "D": [
            {
                health: 12,power:10,
                name: "Goblin Warrior",
                description: "Combatiente goblin mejor entrenado, equipado con una espada corta y un escudo.",
                icon: "Escudo"
            },
            {
                health: 7,power:8,
                name: "Goblin Archer",
                description: "Arquero goblin con mejor puntería, armado con un arco largo y flechas de punta de piedra.",
                icon: "Arco"
            },
            {
                health: 4,power:11,
                name: "Goblin Shaman",
                description: "Hechicero básico que utiliza magia de bajo nivel para dañar o curar. Lleva un bastón rúnico.",
                icon: "Bastón"
            },
            {
                health: 5,power:9,
                name: "Kobold Pyromancer",
                description: "Un kobold con habilidades en magia de fuego, usa una varita para lanzar pequeñas bolas de fuego.",
                icon: "Antorcha"
            },
            {
                health: 7,power:11,
                name: "Goblin Raider",
                description: "Asaltante que utiliza una cimitarra para ataques rápidos y letales.",
                icon: "Espada"
            },
            {
                health: 4,power:8,
                name: "Goblin Skirmisher",
                description: "Combatiente ágil que usa un par de dagas para emboscar a sus enemigos.",
                icon: "Daga"
            },
            {
                health: 3,power:13,
                name: "Goblin Firestarter",
                description: "Un goblin que usa cócteles molotov improvisados para prender fuego a sus enemigos.",
                icon: "Antorcha"
            },
            {
                health: 5,power:10,
                name: "Goblin Shadowstalker",
                description: "Asesino goblin que ataca desde las sombras con una hoja afilada.",
                icon: "Espada"
            },
            {
                health: 7,power:9,
                name: "Goblin Ambusher",
                description: "Goblin que se especializa en emboscadas, utilizando una lanza corta.",
                icon: "Espada"
            },
            {
                health: 3,power:15,
                name: "Goblin Alchemist",
                description: "Crea pociones y bombas químicas que lanza desde lejos para causar caos en el campo de batalla.",
                icon: "Poción"
            }
        ],
        "C": [
            {
                health: 10,power:20,
                name: "Goblin Captain",
                description: "Líder de escuadra armado con una espada larga y un escudo reforzado. Comanda a otros goblins.",
                icon: "Espada"
            },
            {
                health: 10,power:20,
                name: "Goblin Berserker",
                description: "Guerrero feroz que entra en frenesí en batalla, empuñando una gran hacha.",
                icon: "Hacha"
            },
            {
                health: 10,power:20,
                name: "Goblin Sorcerer",
                description: "Mago goblin que lanza hechizos de fuego y rayos, portando una vara mágica.",
                icon: "Varita"
            },
            {
                health: 10,power:20,
                name: "Kobold Warlock",
                description: "Un kobold con un pacto oscuro, capaz de invocar criaturas menores del inframundo. Lleva un tomo maldito.",
                icon: "Pergamino"
            },
            {
                health: 10,power:20,
                name: "Goblin Battle Mage",
                description: "Hechicero de batalla que combina magia y combate cuerpo a cuerpo, armado con una espada encantada.",
                icon: "Espada"
            },
            {
                health: 10,power:20,
                name: "Goblin Tracker",
                description: "Rastreador experto que lleva un arco de caza y cuchillos arrojadizos.",
                icon: "Arco"
            },
            {
                health: 10,power:20,
                name: "Goblin Poisoner",
                description: "Especialista en venenos, utiliza dagas envenenadas y dardos.",
                icon: "Daga"
            },
            {
                health: 10,power:20,
                name: "Goblin Assassin",
                description: "Asesino entrenado en el arte de matar en silencio, armado con una hoja envenenada.",
                icon: "Daga"
            },
            {
                health: 10,power:20,
                name: "Goblin Flameweaver",
                description: "Mago especializado en hechizos de fuego, capaz de lanzar bolas de fuego masivas. Porta un bastón ardiente.",
                icon: "Antorcha"
            }
        ],
        "B": [
            {
                health: 10,power:20,
                name: "Goblin Chieftain",
                description: "Líder de clanes goblin, armado con una espada ceremonial y un escudo adornado con trofeos de guerra.",
                icon: "Espada"
            },
            {
                health: 10,power:20,
                name: "Goblin Warlord",
                description: "Guerrero experimentado que lleva una maza pesada y una armadura de placas. Inspira miedo en sus seguidores.",
                icon: "Martillo"
            },
            {
                health: 10,power:20,
                name: "Goblin Necromancer",
                description: "Hechicero oscuro que levanta a los muertos para luchar a su lado, portando un cetro de hueso.",
                icon: "Bastón"
            },
            {
                health: 10,power:20,
                name: "Kobold Beastmaster",
                description: "Domador de bestias que comanda una jauría de lobos o dragones menores. Lleva un pergamino encantado.",
                icon: "Pergamino"
            },
            {
                health: 10,power:20,
                name: "Goblin Siege Master",
                description: "Especialista en asedios, armado con una ballesta de asedio y explosivos caseros.",
                icon: "Explosivos"
            },
            {
                health: 10,power:20,
                name: "Goblin Blood Mage",
                description: "Hechicero que utiliza su propia sangre para potenciar sus hechizos, portando una daga ritual.",
                icon: "Daga"
            },
            {
                health: 10,power:20,
                name: "Goblin War Bringer",
                description: "Comandante de batalla que utiliza una alabarda de guerra.",
                icon: "Alabarda"
            },
            {
                health: 10,power:20,
                name: "Goblin Shadowblade",
                description: "Asesino élite que utiliza una hoja de sombra mágica, invisible en la oscuridad.",
                icon: "Daga"
            },
            {
                health: 10,power:20,
                name: "Goblin Deathcaller",
                description: "Hechicero que invoca espectros y usa un báculo maldito para drenar la vida de sus enemigos.",
                icon: "Bastón"
            },
            {
                health: 10,power:20,
                name: "Goblin Spiritbinder",
                description: "Mago capaz de controlar a los espíritus y utilizarlos en combate. Porta un amuleto rúnico.",
                icon: "Gema"
            }
        ],
        "A": [
            {
                health: 10,power:30,
                name: "Goblin Overlord",
                description: "Goblin que domina sobre múltiples clanes, armado con una gran espada y una armadura mágica.",
                icon: "Espada"
            },
            {
                health: 10,power:25,
                name: "Goblin Warmaster",
                description: "Maestro táctico en la guerra, empuña un hacha de batalla y lleva una armadura completa imbuida con magia.",
                icon: "Hacha"
            },
            {
                health: 10,power:40,
                name: "Goblin Archmage",
                description: "Mago supremo, capaz de lanzar hechizos devastadores. Lleva una vara arcana y un manto encantado.",
                icon: "Bastón"
            },
            {
                health: 10,power:22,
                name: "Kobold Dragon Rider",
                description: "Kobold que cabalga sobre un pequeño dragón, armado con una lanza encantada.",
                icon: "Lanza"
            },
            {
                health: 10,power:15,
                name: "Goblin Shadowlord",
                description: "Goblin que controla las sombras, capaz de volverse invisible y atacar con cuchillas de sombra.",
                icon: "Daga"
            },
            {
                health: 10,power:29,
                name: "Goblin Deathmaster",
                description: "Hechicero que manipula la muerte, capaz de lanzar maldiciones letales. Lleva un grimorio oscuro.",
                icon: "Libro"
            },
            {
                health: 10,power:34,
                name: "Goblin Elementalist",
                description: "Mago que controla los elementos, capaz de lanzar hechizos de fuego, hielo y rayo. Porta un anillo elemental.",
                icon: "Anillo"
            },
            {
                health: 10,power:30,
                name: "Goblin Warlock Supreme",
                description: "Hechicero que ha hecho un pacto con fuerzas oscuras, capaz de invocar demonios menores.",
                icon: "Libro"
            },
            {
                health: 10,power:20,
                name: "Goblin Beast King",
                description: "Goblin que gobierna sobre todas las bestias, portando un cetro que le otorga control sobre ellas.",
                icon: "Bastón"
            },
            {
                health: 10,power:37,
                name: "Goblin Pyromancer",
                description: "Mago que se especializa en fuego, capaz de invocar tormentas de fuego. Lleva un orbe de fuego eterno.",
                icon: "Orbe"
            }
        ],
        "S": [
            {
                health: 10,power:20,
                name: "Goblin Demolisher",
                description: "Goblin especializado en demoliciones masivas, armado con un martillo gigante y explosivos mágicos, suele golpear el piso y aturdir.",
                icon: "Martillo"
            },
            {
                health: 10,power:20,
                name: "Goblin High Chieftain",
                description: "El líder máximo de todos los clanes goblin, armado con una espada legendaria y una armadura impenetrable, puede usar el destello y usar magia silenciosa simple.",
                icon: "Espada"
            },
            {
                health: 10,power:20,
                name: "Goblin Warlock King",
                description: "Goblin que ha dominado la magia oscura, capaz de invocar 5 demonios mayores y lanzar maldiciones devastadoras.",
                icon: "Libro"
            },
            {
                health: 10,power:20,
                name: "Kobold Healer",
                description: "Goblin capaz de curar, revivir y proteger con una capa magica a sus aliados y a él.",
                icon: "Bastón"
            },
            {
                health: 10,power:20,
                name: "Goblin Elemental Overlord",
                description: "Ultra Mago Supremo de la magia, con capacidades fisicas y magicas de altisimo nivel. Porta una espada mágica y es ultra ofensivo.",
                icon: "Espada"
            },
            {
                health: 10,power:20,
                name: "Goblin Shadowlord Supreme",
                description: "El maestro supremo de las sombras, capaz de volverse invisible y oscurecer la sala, imposibilitando la visión.",
                icon: "Daga"
            },
            {
                health: 10,power:20,
                name: "Goblin Necromancer King",
                description: "Goblin que gobierna sobre la muerte, capaz de levantar un grupo de 3 no-muertos a su voluntad. Ademas de esto, posee magia silenciosa simple.",
                icon: "Libro"
            }
        ],
        "Boss": {
            "E": {
                health: 8,power:9,
                name: "Goblin Boss",
                description: "El líder de un pequeño grupo de goblins, armado con una espada básica y un escudo. Es más fuerte que los goblins comunes, pero aún es bastante débil comparado con sus superiores.",
                icon: "Espada"
            },
            "D":
            {
                health: 12,power:18,
                name: "Goblin War Chief",
                description: "Jefe de guerra goblin. Está armado con una maza pesada y lleva una armadura ligera. Es formidable en combate.",
                icon: "Martillo"
            }
            ,
            "C":
            {
                health: 10,power:20,
                name: "Goblin Battle Lord",
                description: "Señor de la batalla goblin que lidera escuadrones de combate. Empuña una espada larga mágica y lleva una armadura reforzada.",
                icon: "Espada"
            }
            ,
            "B":
            {
                health: 10,power:20,
                name: "Goblin War Master",
                description: "Maestro de guerra goblin que dirige grandes ofensivas. Armado con una gran hacha de guerra y una armadura completa encantada, tiene una gran influencia y es extremadamente peligroso en combate.",
                icon: "Hacha"
            }
            ,
            "A":
            {
                health: 10,power:20,
                name: "Goblin Overlord",
                description: "Goblin que domina sobre múltiples clanes, armado con una espada legendaria y una armadura mágica. Sus habilidades mágicas y de combate son de las mayores.",
                icon: "Espada"
            }
            ,
            "S":
            {
                health: 10,power:20,
                name: "Goblin Chaman",
                description: "Goblin de gran vejez, combatiente a distancia, manejando todo tipo de magias elementales, maldiciones e invocaciones. Poseedor de 3 escudos y una pocion de rejuvenecimiento como ultimo recurso. Siendo joven, se vuelve agresivo y extremadamente ágil.",
                icon: "Espada"
            }
        }
    },
    "Fantasmas": {
        "E": [
            {
                health: 10,power:20,
                name: "Wisp",
                description: "Una pequeña esfera de luz etérea que vaga por terrenos desolados. Es débil pero molesta, perturbando a los viajeros con su presencia flotante."
            },
            {
                health: 10,power:20,
                name: "Restless Spirit",
                description: "Un espíritu inquieto atrapado entre el mundo de los vivos y los muertos. Su forma es apenas visible, y solo puede causar daño menor con sus garras espectrales."
            },
            {
                health: 10,power:20,
                name: "Haunting Shade",
                description: "Un espectro que vaga por sitios abandonados, causando pequeñas perturbaciones en el ambiente pero sin poseer habilidades especiales."
            },
            {
                health: 10,power:20,
                name: "Phantom Servant",
                description: "Un antiguo sirviente atado a su maestro incluso en la muerte. Su ataque es débil, pero sigue las órdenes de su amo."
            },
            {
                health: 10,power:20,
                name: "Flickering Ghost",
                description: "Un fantasma que aparece y desaparece, emitiendo una luz pálida. Su presencia genera una sensación de incomodidad, pero no tiene un gran impacto en el combate."
            },
            {
                health: 10,power:20,
                name: "Echo Spirit",
                description: "Un eco del pasado, apenas consciente de su propia existencia. Puede imitar sonidos del entorno pero no tiene habilidades de combate reales."
            },
            {
                health: 10,power:20,
                name: "Spectral Remnant",
                description: "Los restos de un alma, apenas lo suficientemente fuerte como para existir. Puede ser visto en lugares donde la energía es baja, pero es inofensivo."
            },
            {
                health: 10,power:20,
                name: "Faded Apparition",
                description: "Un ser espectral que ha perdido casi toda su esencia. Es apenas visible y no presenta una gran amenaza."
            },
            {
                health: 10,power:20,
                name: "Wandering Ghost",
                description: "Un espíritu que no ha encontrado descanso. Puede moverse por áreas limitadas, pero no tiene habilidades de combate notables."
            },
            {
                health: 10,power:20,
                name: "Pale Specter",
                description: "Un espectro débil con una forma apenas visible. Puede flotar a través de objetos sólidos, pero carece de habilidades ofensivas."
            }
        ],
        "D": [
            {
                health: 10,power:20,
                name: "Spectral Watcher",
                description: "Un espíritu que vigila lugares olvidados. Tiene una ligera habilidad para influir en los objetos cercanos, moviéndolos levemente."
            },
            {
                health: 10,power:20,
                name: "Ghostly Wanderer",
                description: "Un espectro que vaga por zonas abandonadas, capaz de emitir un chillido que distrae a sus enemigos, aunque sin causar verdadero daño."
            },
            {
                health: 10,power:20,
                name: "Wailing Spirit",
                description: "Este fantasma emite un lamento perturbador que causa distracción y desconcierto, debilitando a los enemigos cercanos."
            },
            {
                health: 10,power:20,
                name: "Soul Whisperer",
                description: "Un espectro que susurra en los oídos de los vivos, creando una sensación de paranoia. Sus ataques son débiles, pero puede desorientar a sus víctimas."
            },
            {
                health: 10,power:20,
                name: "Mournful Phantom",
                description: "Este espíritu lamenta su muerte en voz alta, creando una atmósfera cargada de tristeza que afecta la moral de quienes lo rodean."
            },
            {
                health: 10,power:20,
                name: "Ghostly Lurker",
                description: "Un espíritu que acecha en las sombras, causando una leve perturbación en la mente de sus víctimas, ralentizando sus reacciones."
            },
            {
                health: 10,power:20,
                name: "Shadow Spirit",
                description: "Un fantasma vinculado a las sombras, con la capacidad de oscurecer temporalmente su entorno y confundir a sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Phantom Warden",
                description: "Guardia espectral de lugares antiguos, que emite un aura de inquietud. Puede ralentizar los movimientos de los intrusos."
            },
            {
                health: 10,power:20,
                name: "Spirit of Despair",
                description: "Un fantasma que inspira una sensación de desesperanza en quienes lo ven. Afecta la capacidad de sus enemigos para luchar con determinación."
            },
            {
                health: 10,power:20,
                name: "Vengeful Apparition",
                description: "Un espíritu vengativo que ronda en busca de justicia. Sus ataques son débiles, pero su ira puede hacer que los enemigos duden antes de atacar."
            }
        ],
        "C": [
            {
                health: 10,power:20,
                name: "Poltergeist",
                description: "Un espíritu que puede manipular objetos físicos, arrojándolos a sus enemigos. Comienza a mostrar signos de control mental básico."
            },
            {
                health: 10,power:20,
                name: "Mind Specter",
                description: "Este fantasma tiene la capacidad de inducir alucinaciones menores, confundiendo a sus víctimas y haciéndolas ver cosas que no existen."
            },
            {
                health: 10,power:20,
                name: "Spirit of Fear",
                description: "Un fantasma que genera un aura de terror en los corazones de sus enemigos, paralizándolos temporalmente con su mera presencia."
            },
            {
                health: 10,power:20,
                name: "Invisible Stalker",
                description: "Un espíritu que puede volverse invisible durante breves períodos de tiempo, acechando a sus enemigos sin ser detectado."
            },
            {
                health: 10,power:20,
                name: "Phantom Enslaver",
                description: "Un espíritu con la capacidad de controlar mentalmente a criaturas débiles por un corto período, obligándolas a atacar a sus aliados."
            },
            {
                health: 10,power:20,
                name: "Blind Specter",
                description: "Un fantasma que puede inducir ceguera temporal en sus enemigos, dejándolos vulnerables durante unos instantes."
            },
            {
                health: 10,power:20,
                name: "Spirit of Misery",
                description: "Este espectro se alimenta del sufrimiento ajeno, debilitando la voluntad de sus enemigos y dejándolos más susceptibles a sus ataques."
            },
            {
                health: 10,power:20,
                name: "Paralyzing Ghost",
                description: "Un espíritu con la capacidad de paralizar a sus enemigos con un toque, dejándolos inmóviles durante unos segundos."
            },
            {
                health: 10,power:20,
                name: "Dream Wraith",
                description: "Este espíritu se infiltra en los sueños de sus enemigos, causando pesadillas que los dejan cansados y desorientados en combate."
            },
            {
                health: 10,power:20,
                name: "Whispering Phantom",
                description: "Un fantasma que puede susurrar en las mentes de sus enemigos, creando una confusión mental que los hace dudar de sus propios aliados."
            }
        ],
        "B": [
            {
                health: 10,power:20,
                name: "Spectral Dominator",
                description: "Un espíritu que ha desarrollado habilidades avanzadas de control mental, tomando el control de enemigos más fuertes y usándolos como marionetas."
            },
            {
                health: 10,power:20,
                name: "Ethereal Tormentor",
                description: "Este espectro puede infligir dolor mental severo a sus enemigos, debilitando su capacidad de luchar y dejándolos vulnerables a otros ataques."
            },
            {
                health: 10,power:20,
                name: "Phantom Assassin",
                description: "Un espíritu invisible que acecha a sus enemigos, golpeándolos cuando menos lo esperan. Puede volverse intangible durante cortos períodos."
            },
            {
                health: 10,power:20,
                name: "Spirit of Madness",
                description: "Un espectro que induce locura temporal en sus víctimas, haciendo que ataquen al azar sin distinguir entre aliados y enemigos."
            },
            {
                health: 10,power:20,
                name: "Nightmare Wraith",
                description: "Este espectro atormenta a sus enemigos con visiones horribles, debilitando su moral y su capacidad para concentrarse en el combate."
            },
            {
                health: 10,power:20,
                name: "Cursed Apparition",
                description: "Un espíritu que puede lanzar maldiciones debilitantes sobre sus enemigos, reduciendo sus habilidades de combate durante varios minutos."
            },
            {
                health: 10,power:20,
                name: "Spectral Puppeteer",
                description: "Este fantasma es capaz de controlar mentalmente a varios enemigos a la vez, usándolos para atacar a sus propios aliados."
            },
            {
                health: 10,power:20,
                name: "Phantom Blinder",
                description: "Un espectro que puede cegar permanentemente a sus enemigos si no son lo suficientemente fuertes como para resistir su magia."
            },
            {
                health: 10,power:20,
                name: "Shadow Controller",
                description: "Un espíritu que controla las sombras para atrapar a sus enemigos, inmovilizándolos mientras los ataca."
            },
            {
                health: 10,power:20,
                name: "Spectral Paralysis",
                description: "Un fantasma con la capacidad de paralizar a varios enemigos a la vez, dejándolos indefensos durante períodos prolongados."
            }
        ],
        "A": [
            {
                health: 10,power:20,
                name: "Phantom Overlord",
                description: "Un poderoso fantasma con habilidades de control mental avanzadas, capaz de dominar la voluntad de múltiples enemigos simultáneamente."
            },
            {
                health: 10,power:20,
                name: "Mindbreaker Wraith",
                description: "Este espectro puede destruir las mentes de sus víctimas, dejándolas en un estado de confusión perpetua y sumisión total."
            },
            {
                health: 10,power:20,
                name: "Ghostly Inquisitor",
                description: "Un espíritu que atormenta a sus víctimas con visiones aterradoras, manipulando sus mentes para que se rindan o se vuelvan en contra de sus aliados."
            },
            {
                health: 10,power:20,
                name: "Spirit of Control",
                description: "Un espectro que puede tomar el control total del cuerpo de sus enemigos, usándolos como títeres para sus propios fines."
            },
            {
                health: 10,power:20,
                name: "Phantom Tyrant",
                description: "Este fantasma puede paralizar y cegar a sus enemigos con solo una mirada, dejándolos indefensos mientras lanza ataques devastadores."
            },
            {
                health: 10,power:20,
                name: "Invisible Nightmare",
                description: "Un espíritu que puede volverse invisible e intangible a voluntad, causando estragos sin ser detectado hasta que sea demasiado tarde."
            },
            {
                health: 10,power:20,
                name: "Wraith of Despair",
                description: "Este espectro emite un aura de desesperación que debilita la voluntad de los enemigos cercanos, dejándolos susceptibles a sus ataques."
            },
            {
                health: 10,power:20,
                name: "Mind Eater Phantom",
                description: "Un espíritu que devora las mentes de sus víctimas, dejándolas en un estado de locura y vulnerabilidad permanente."
            },
            {
                health: 10,power:20,
                name: "Spectral Reaper",
                description: "Un fantasma que cosecha las almas de los enemigos caídos, usando su energía para volverse aún más poderoso."
            },
            {
                health: 10,power:20,
                name: "Ghost King",
                description: "El gobernante de todos los espíritus, con control absoluto sobre las mentes y cuerpos de los vivos. Sus habilidades de control mental y parálisis son insuperables."
            }
        ],
        "S": [
            {
                health: 10,power:20,
                name: "Ethereal Emperor",
                description: "El emperador de los fantasmas, un ser inmortal con habilidades de control mental tan poderosas que puede esclavizar civilizaciones enteras."
            },
            {
                health: 10,power:20,
                name: "Soul Devourer",
                description: "Este espíritu consume las almas de sus enemigos, volviéndose cada vez más poderoso con cada alma devorada. Sus poderes de control mental son inigualables."
            },
            {
                health: 10,power:20,
                name: "Phantom Lord",
                description: "Un espectro inmensamente poderoso que controla las mentes de los seres más fuertes con facilidad, usándolos como herramientas en su reino eterno."
            },
            {
                health: 10,power:20,
                name: "Void Specter",
                description: "Este fantasma controla las sombras y la oscuridad misma, paralizando a sus enemigos con un simple gesto y haciéndose invisible a voluntad."
            },
            {
                health: 10,power:20,
                name: "Mind Dominator",
                description: "El maestro absoluto del control mental, capaz de dominar las mentes de ejércitos enteros y usarlos para sus propios fines."
            },
            {
                health: 10,power:20,
                name: "Spirit of Oblivion",
                description: "Un espectro que puede borrar la mente de sus víctimas, dejándolas en un estado de vacío absoluto, sin recuerdos ni habilidades."
            },
            {
                health: 10,power:20,
                name: "Spectral Sovereign",
                description: "El soberano de los fantasmas, capaz de controlar los destinos de los vivos y muertos con un solo pensamiento. Su poder de control mental es incomparable."
            },
            {
                health: 10,power:20,
                name: "Wraith of the Abyss",
                description: "Un ser del abismo con habilidades de parálisis y control mental que exceden los límites de lo imaginable. Puede esclavizar a seres de cualquier poder."
            },
            {
                health: 10,power:20,
                name: "Ghostly Conqueror",
                description: "Este espíritu conquista reinos enteros con su poder mental, paralizando a ejércitos enteros y tomando el control absoluto de los vivos."
            },
            {
                health: 10,power:20,
                name: "Spectral Archmage",
                description: "El archimago de los fantasmas, maestro de todas las artes mágicas, incluyendo control mental, parálisis, invisibilidad y más."
            }
        ],
        "Boss": {
            "E": {
                health: 10,power:20,
                name: "Wraith of Lament",
                description: "Un espectro menor que emite gritos desgarradores que causan daño físico menor, pero constante. Aunque no es extremadamente peligroso, su presencia puede ser letal si los jugadores no lo enfrentan rápido. Su grito prolongado debilita progresivamente las defensas de sus víctimas, haciéndolas vulnerables a otros ataques."
            },
            "D": {
                health: 10,power:20,
                name: "Spectral Strangler",
                description: "Este fantasma ataca físicamente a sus enemigos, envolviendo su cuello con manos invisibles. Su fuerza no es grande, pero puede asfixiar lentamente a sus víctimas si no son liberadas. El daño es físico, pero la falta de oxígeno causa desorientación mental y puede ser letal si no es interrumpido a tiempo."
            },
            "C": {
                health: 10,power:20,
                name: "Phantom Puppeteer",
                description: "Un espectro que puede controlar temporalmente el cuerpo de sus enemigos, obligándolos a atacar a sus propios compañeros. Aunque el control no dura mucho tiempo, puede ser devastador si no se manejan bien los efectos. Su habilidad de control corporal es letal si logra tomar a los jugadores desprevenidos, forzándolos a hacerse daño entre sí."
            },
            "B": {
                health: 10,power:20,
                name: "Spirit of Anguish",
                description: "Este espíritu inflige un dolor interno insoportable en sus víctimas, causando daños mentales severos. El dolor es tan intenso que puede paralizar o deshabilitar a sus enemigos por completo. Si no se resisten a sus efectos, el dolor se intensifica hasta que el cuerpo colapsa bajo el estrés. Esto afecta tanto la mente como el cuerpo, dejando a los jugadores indefensos."
            },
            "A": {
                health: 10,power:20,
                name: "Mindshredder Phantom",
                description: "Un poderoso espectro con la habilidad de desgarrar mentalmente a sus enemigos. Ataca directamente la mente, causando un daño psíquico letal que destruye la voluntad de resistir. Las víctimas caen en la locura si no se defienden rápidamente, siendo incapaces de distinguir entre la realidad y las ilusiones que el Mindshredder crea."
            },
            "S": {
                health: 10,power:20,
                name: "Soul Reaver",
                description: "El más poderoso de los espectros, el Soul Reaver no solo inflige daño físico, mental y espiritual a sus enemigos, sino que también devora sus almas. Cada ataque drena la esencia vital de los jugadores, debilitándolos progresivamente. Aquellos que caen ante el Soul Reaver no solo mueren, sino que sus almas quedan atrapadas, siendo esclavizadas por toda la eternidad. Su presencia es casi insuperable, y un solo golpe puede acabar con un jugador desprevenido."
            }
        }
    },
    "NoMuertos": {
        "E": [
            {
                health: 10,power:20,
                name: "Skeletal Soldier",
                description: "Un esqueleto básico armado con una espada oxidada. Ataca de manera predecible pero puede abrumar por su número."
            },
            {
                health: 10,power:20,
                name: "Decayed Zombie",
                description: "Un zombi en avanzado estado de descomposición. No tiene mucha fuerza, pero su mordida puede infectar con enfermedades menores."
            },
            {
                health: 10,power:20,
                name: "Rotting Ghoul",
                description: "Un ghoul que se mueve con torpeza. Prefiere emboscadas y ataca con sus garras, pero no tiene mucha resistencia."
            },
            {
                health: 10,power:20,
                name: "Grave Digger Skeleton",
                description: "Un esqueleto que utiliza una pala como arma, dando golpes lentos pero pesados."
            },
            {
                health: 10,power:20,
                name: "Shambling Corpse",
                description: "Un cadáver animado por una magia débil. Sus ataques son lentos y fácilmente evitables, pero no siente dolor."
            },
            {
                health: 10,power:20,
                name: "Feral Ghoul",
                description: "Un ghoul salvaje que ataca en grupo, utilizando sus garras y dientes. Su piel podrida lo hace vulnerable."
            },
            {
                health: 10,power:20,
                name: "Bone Archer",
                description: "Esqueleto armado con un arco básico. Sus flechas son lentas y no muy precisas, pero peligrosas en grandes números."
            },
            {
                health: 10,power:20,
                name: "Ghoul Servant",
                description: "Un ghoul que sigue órdenes simples, atacando con garras y dientes afilados."
            },
            {
                health: 10,power:20,
                name: "Zombie Peasant",
                description: "Un zombi que una vez fue un campesino, armado con una hoz. Aunque lento, su arma puede causar cortes profundos."
            },
            {
                health: 10,power:20,
                name: "Restless Spirit",
                description: "Un espíritu débil que no puede causar daño físico, pero su mera presencia puede distraer o asustar a los jugadores."
            }
        ],

        "D": [
            {
                health: 10,power:20,
                name: "Armored Skeleton",
                description: "Un esqueleto cubierto de armaduras gastadas. Aunque lento, su armadura lo protege bien, y está armado con una espada y escudo."
            },
            {
                health: 10,power:20,
                name: "Ghoul Berserker",
                description: "Un ghoul más rápido y agresivo, armado con dos espadas. Ataca frenéticamente, infligiendo cortes profundos."
            },
            {
                health: 10,power:20,
                name: "Zombie Knight",
                description: "Un zombi con una armadura media, armado con una espada y un hacha. Aunque torpe, sus ataques son poderosos."
            },
            {
                health: 10,power:20,
                name: "Gravewalker",
                description: "Un esqueleto que resurge constantemente después de ser derrotado, a menos que se destruya su fuente de poder."
            },
            {
                health: 10,power:20,
                name: "Ghoul Brute",
                description: "Un ghoul corpulento con fuerza sobrehumana. Armado con un gran garrote que puede aplastar a los jugadores con facilidad."
            },
            {
                health: 10,power:20,
                name: "Skeletal Crossbowman",
                description: "Esqueleto armado con una ballesta. A pesar de su puntería mejorada, es vulnerable en combate cuerpo a cuerpo."
            },
            {
                health: 10,power:20,
                name: "Flesh Eater",
                description: "Un ghoul que se regenera lentamente mientras devora la carne de los vivos. Ataca con garras afiladas y dientes."
            },
            {
                health: 10,power:20,
                name: "Zombie Archer",
                description: "Un zombi armado con un arco y flechas. Su puntería es mediocre, pero sus flechas están impregnadas de veneno."
            },
            {
                health: 10,power:20,
                name: "Crypt Guardian",
                description: "Un esqueleto que protege tumbas ancestrales, armado con una lanza ceremonial. Su deber es proteger su cripta a toda costa."
            },
            {
                health: 10,power:20,
                name: "Tormented Spirit",
                description: "Un espíritu que puede emitir un chillido que debilita a los vivos. No puede causar daño físico, pero su presencia es debilitante."
            }
        ],

        "C": [
            {
                health: 10,power:20,
                name: "Skeletal Commander",
                description: "Un esqueleto más inteligente, capaz de dar órdenes a otros no-muertos. Está armado con una espada larga y una armadura media."
            },
            {
                health: 10,power:20,
                name: "Venomous Ghoul",
                description: "Este ghoul tiene garras envenenadas que paralizan a sus víctimas. Sus ataques son rápidos y mortales."
            },
            {
                health: 10,power:20,
                name: "Zombie Butcher",
                description: "Un zombi enorme armado con un cuchillo gigante de carnicero. Causa daño masivo y puede cortar a través de armaduras ligeras."
            },
            {
                health: 10,power:20,
                name: "Wailing Ghost",
                description: "Un espíritu que emite un grito paralizante, dejando a los enemigos indefensos para ataques de otros no-muertos."
            },
            {
                health: 10,power:20,
                name: "Cursed Knight",
                description: "Un caballero maldito con habilidades de ceguera mágica, que nubla la visión de sus enemigos antes de atacarlos con su espada maldita."
            },
            {
                health: 10,power:20,
                name: "Skeletal Mage",
                description: "Un esqueleto que ha dominado las artes mágicas básicas, lanzando hechizos de parálisis para incapacitar a sus oponentes."
            },
            {
                health: 10,power:20,
                name: "Ghoul Stalker",
                description: "Un ghoul que se vuelve invisible brevemente para acechar a sus presas antes de atacar desde las sombras con garras envenenadas."
            },
            {
                health: 10,power:20,
                name: "Zombie Executioner",
                description: "Un zombi gigante armado con una guillotina portátil. Sus ataques lentos pero precisos pueden decapitar a sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Bone Sorcerer",
                description: "Un esqueleto con poderes de necromancia básica, capaz de levantar a los muertos cercanos para que luchen a su lado."
            },
            {
                health: 10,power:20,
                name: "Spectral Assassin",
                description: "Un espíritu que puede volverse intangible y acechar a sus enemigos. Causa parálisis al contacto."
            }
        ],


        "B": [
            {
                health: 10,power:20,
                name: "Undead Warlock",
                description: "Un poderoso hechicero no-muerto que lanza maldiciones devastadoras. Puede paralizar a varios enemigos a la vez."
            },
            {
                health: 10,power:20,
                name: "Ghoul King",
                description: "El líder de una horda de ghouls. Tiene habilidades regenerativas avanzadas y puede lanzar ataques rápidos y mortales con su espada envenenada."
            },
            {
                health: 10,power:20,
                name: "Skeletal General",
                description: "Este esqueleto comanda ejércitos de no-muertos. Es un maestro estratega y está armado con una espada encantada y un escudo que puede repeler hechizos."
            },
            {
                health: 10,power:20,
                name: "Ghostly Warden",
                description: "Un espíritu que guarda mazmorras ancestrales. Posee habilidades de invisibilidad avanzada y puede desorientar a los jugadores con ilusiones."
            },
            {
                health: 10,power:20,
                name: "Plague Zombie",
                description: "Un zombi portador de una plaga mortal. Los jugadores que entren en contacto con él sufrirán daños continuos debido a su aura tóxica."
            },
            {
                health: 10,power:20,
                name: "Lich Acolyte",
                description: "Un sirviente de un poderoso lich, con habilidades mágicas menores que incluyen la parálisis y ceguera."
            },
            {
                health: 10,power:20,
                name: "Ghoul Assassin",
                description: "Un ghoul extremadamente ágil que puede volverse invisible por largos periodos de tiempo. Ataca rápidamente desde las sombras."
            },
            {
                health: 10,power:20,
                name: "Bonebreaker",
                description: "Un gigante esqueleto con un mazo enorme. Causa daño físico masivo con un solo golpe, rompiendo huesos y armaduras."
            },
            {
                health: 10,power:20,
                name: "Spectral Torturer",
                description: "Un espíritu que inflige un dolor mental extremo a sus víctimas, paralizándolos mientras sus aliados no-muertos los atacan."
            },
            {
                health: 10,power:20,
                name: "Corpse Pyromancer",
                description: "Un no-muerto que utiliza fuego oscuro, causando explosiones que pueden quemar tanto cuerpos como almas."
            }
        ],

        "A": [
            {
                health: 10,power:20,
                name: "Death Knight",
                description: "Un caballero no-muerto con una armadura oscura. Está armado con una espada maldita que inflige dolor mental y físico simultáneo."
            },
            {
                health: 10,power:20,
                name: "Lich Necromancer",
                description: "Un maestro de la necromancia, capaz de levantar ejércitos de no-muertos. También puede drenar la energía vital de sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Phantom Lord",
                description: "Un fantasma antiguo con la habilidad de controlar las mentes de sus enemigos. Utiliza esta habilidad para hacer que los jugadores se ataquen entre sí."
            },
            {
                health: 10,power:20,
                name: "Bone Dragon",
                description: "Un dragón esquelético, capaz de lanzar llamas oscuras que incineran tanto el cuerpo como el alma de los enemigos."
            },
            {
                health: 10,power:20,
                name: "Ghoul Emperor",
                description: "El gobernante de los ghouls, con habilidades regenerativas avanzadas y la capacidad de invocar hordas de ghouls menores."
            },
            {
                health: 10,power:20,
                name: "Spectral Overlord",
                description: "Un espectro de increíble poder que puede poseer temporalmente a los jugadores, controlando su cuerpo y haciéndolos luchar entre ellos."
            },
            {
                health: 10,power:20,
                name: "Lich King",
                description: "Un lich de alto nivel que utiliza la magia oscura más poderosa, capaz de lanzar maldiciones que lentamente drenan la vida de sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Ghostly Conqueror",
                description: "Un espíritu de un general de guerra. Controla una legión de espectros menores y puede desatar ataques mentales devastadores."
            },
            {
                health: 10,power:20,
                name: "Undead Sorcerer",
                description: "Un poderoso hechicero no-muerto con un arsenal de hechizos, incluyendo tormentas de hielo y maldiciones que destruyen la voluntad de los jugadores."
            },
            {
                health: 10,power:20,
                name: "Plaguebringer",
                description: "Un zombi gigantesco que emite una nube de enfermedades letales, debilitando y matando a cualquiera que entre en contacto con él."
            }
        ],

        "S": [
            {
                health: 10,power:20,
                name: "Lich Overlord",
                description: "El más poderoso de los liches. Controla completamente la mente de sus enemigos, utilizándolos como peones hasta que sus cuerpos colapsen."
            },
            {
                health: 10,power:20,
                name: "Bone Colossus",
                description: "Una abominación esquelética de tamaño colosal, capaz de aplastar a varios enemigos con un solo golpe. Causa destrucción masiva a su paso."
            },
            {
                health: 10,power:20,
                name: "Ghost King",
                description: "El rey de los espectros. Tiene el poder de poseer completamente a los jugadores y controlar su cuerpo indefinidamente."
            },
            {
                health: 10,power:20,
                name: "Soul Reaper",
                description: "Un espíritu que devora las almas de sus víctimas, causándoles una muerte lenta y dolorosa. Su guadaña maldita puede cortar tanto el cuerpo como el alma."
            },
            {
                health: 10,power:20,
                name: "Deathlord",
                description: "El comandante supremo de los no-muertos. Capaz de convocar ejércitos de muertos y lanzar maldiciones que matan lentamente a todos los vivos cercanos."
            },
            {
                health: 10,power:20,
                name: "Vampiric Lich",
                description: "Un lich vampiro que drena la sangre y la energía vital de sus enemigos, aumentando su propio poder y prolongando su inmortalidad."
            },
            {
                health: 10,power:20,
                name: "Phantom Emperor",
                description: "Un espectro emperador que controla completamente las mentes y cuerpos de sus enemigos, utilizando sus habilidades contra ellos."
            },
            {
                health: 10,power:20,
                name: "Necrotic Dragon",
                description: "Un dragón no-muerto que desata llamas necróticas que destruyen todo a su paso, dejando solo cenizas y huesos."
            },
            {
                health: 10,power:20,
                name: "Plague Lich",
                description: "Un lich que esparce enfermedades incurables. Su mera presencia es letal, y su magia oscura mata lentamente a cualquiera que se acerque demasiado."
            },
            {
                health: 10,power:20,
                name: "Corpse Titan",
                description: "Un titán no-muerto formado por miles de cadáveres. Es inmune a la mayoría de los ataques y destruye todo a su paso con golpes masivos."
            }
        ],
        "Boss": {
            "E": {
                health: 10,power:20,
                name: "Bone Warden",
                description: "Un esqueleto antiguo armado con una espada oxidada y un escudo roto. Vigila criptas y tumbas, y puede convocar esqueletos menores. Aunque su fuerza es baja, su persistencia lo hace una amenaza a largo plazo."
            },
            "D": {
                health: 10,power:20,
                name: "Ghoul Ravager",
                description: "Este ghoul ha crecido en tamaño y ferocidad tras años devorando cadáveres. Armado con garras largas y afiladas, ataca salvajemente a sus enemigos. Puede emitir un rugido que paraliza a los jugadores cercanos durante unos segundos."
            },
            "C": {
                health: 10,power:20,
                name: "Cursed Necromancer",
                description: "Un necromante no-muerto que ha perdido su humanidad. Controla hordas de esqueletos y ghouls, y utiliza magia oscura para lanzar maldiciones que debilitan a sus enemigos. Sus ataques incluyen una bola de energía que paraliza a cualquiera que golpee."
            },
            "B": {
                health: 10,power:20,
                name: "Lich Overseer",
                description: "Un lich que supervisa un ejército de no-muertos. Es extremadamente inteligente y utiliza su magia para controlar mentes débiles. Además, puede lanzar hechizos de parálisis en área y tiene un aura que debilita a los enemigos cercanos, reduciendo su resistencia."
            },

            "A": {
                health: 10,power:20,
                name: "Death Knight Lord",
                description: "Un caballero no-muerto con armadura completa, una espada maldita y un escudo encantado. Su espada inflige daño tanto físico como mental, causando dolores insoportables en sus víctimas. También puede emitir una onda de energía oscura que debilita a los jugadores, reduciendo su fuerza y velocidad."
            },

            "S": {
                health: 10,power:20,
                name: "Soul Devourer",
                description: "Un espíritu ancestral que se alimenta de las almas de sus enemigos. Es intangible durante la mayor parte del combate, volviéndose físico solo para atacar. Puede controlar mentalmente a los jugadores y obligarlos a luchar entre sí. Su ataque más mortal es una ráfaga de energía oscura que consume lentamente la vida de sus víctimas."
            }
        }
    },
    "FantasmasNoMuertos": {
        "E": [
            {
                health: 10,power:20,
                name: "Wisp",
                description: "Una pequeña esfera de luz etérea que vaga por terrenos desolados. Es débil pero molesta, perturbando a los viajeros con su presencia flotante."
            },
            {
                health: 10,power:20,
                name: "Restless Spirit",
                description: "Un espíritu inquieto atrapado entre el mundo de los vivos y los muertos. Su forma es apenas visible, y solo puede causar daño menor con sus garras espectrales."
            },
            {
                health: 10,power:20,
                name: "Haunting Shade",
                description: "Un espectro que vaga por sitios abandonados, causando pequeñas perturbaciones en el ambiente pero sin poseer habilidades especiales."
            },
            {
                health: 10,power:20,
                name: "Phantom Servant",
                description: "Un antiguo sirviente atado a su maestro incluso en la muerte. Su ataque es débil, pero sigue las órdenes de su amo."
            },
            {
                health: 10,power:20,
                name: "Flickering Ghost",
                description: "Un fantasma que aparece y desaparece, emitiendo una luz pálida. Su presencia genera una sensación de incomodidad, pero no tiene un gran impacto en el combate."
            },
            {
                health: 10,power:20,
                name: "Echo Spirit",
                description: "Un eco del pasado, apenas consciente de su propia existencia. Puede imitar sonidos del entorno pero no tiene habilidades de combate reales."
            },
            {
                health: 10,power:20,
                name: "Spectral Remnant",
                description: "Los restos de un alma, apenas lo suficientemente fuerte como para existir. Puede ser visto en lugares donde la energía es baja, pero es inofensivo."
            },
            {
                health: 10,power:20,
                name: "Faded Apparition",
                description: "Un ser espectral que ha perdido casi toda su esencia. Es apenas visible y no presenta una gran amenaza."
            },
            {
                health: 10,power:20,
                name: "Wandering Ghost",
                description: "Un espíritu que no ha encontrado descanso. Puede moverse por áreas limitadas, pero no tiene habilidades de combate notables."
            },
            {
                health: 10,power:20,
                name: "Pale Specter",
                description: "Un espectro débil con una forma apenas visible. Puede flotar a través de objetos sólidos, pero carece de habilidades ofensivas."
            },
            {
                health: 10,power:20,
                name: "Skeletal Soldier",
                description: "Un esqueleto básico armado con una espada oxidada. Ataca de manera predecible pero puede abrumar por su número."
            },
            {
                health: 10,power:20,
                name: "Decayed Zombie",
                description: "Un zombi en avanzado estado de descomposición. No tiene mucha fuerza, pero su mordida puede infectar con enfermedades menores."
            },
            {
                health: 10,power:20,
                name: "Rotting Ghoul",
                description: "Un ghoul que se mueve con torpeza. Prefiere emboscadas y ataca con sus garras, pero no tiene mucha resistencia."
            },
            {
                health: 10,power:20,
                name: "Grave Digger Skeleton",
                description: "Un esqueleto que utiliza una pala como arma, dando golpes lentos pero pesados."
            },
            {
                health: 10,power:20,
                name: "Shambling Corpse",
                description: "Un cadáver animado por una magia débil. Sus ataques son lentos y fácilmente evitables, pero no siente dolor."
            },
            {
                health: 10,power:20,
                name: "Feral Ghoul",
                description: "Un ghoul salvaje que ataca en grupo, utilizando sus garras y dientes. Su piel podrida lo hace vulnerable."
            },
            {
                health: 10,power:20,
                name: "Bone Archer",
                description: "Esqueleto armado con un arco básico. Sus flechas son lentas y no muy precisas, pero peligrosas en grandes números."
            },
            {
                health: 10,power:20,
                name: "Ghoul Servant",
                description: "Un ghoul que sigue órdenes simples, atacando con garras y dientes afilados."
            },
            {
                health: 10,power:20,
                name: "Zombie Peasant",
                description: "Un zombi que una vez fue un campesino, armado con una hoz. Aunque lento, su arma puede causar cortes profundos."
            },
            {
                health: 10,power:20,
                name: "Restless Spirit",
                description: "Un espíritu débil que no puede causar daño físico, pero su mera presencia puede distraer o asustar a los jugadores."
            }
        ],

        "D": [

            {
                health: 10,power:20,
                name: "Spectral Watcher",
                description: "Un espíritu que vigila lugares olvidados. Tiene una ligera habilidad para influir en los objetos cercanos, moviéndolos levemente."
            },
            {
                health: 10,power:20,
                name: "Ghostly Wanderer",
                description: "Un espectro que vaga por zonas abandonadas, capaz de emitir un chillido que distrae a sus enemigos, aunque sin causar verdadero daño."
            },
            {
                health: 10,power:20,
                name: "Wailing Spirit",
                description: "Este fantasma emite un lamento perturbador que causa distracción y desconcierto, debilitando a los enemigos cercanos."
            },
            {
                health: 10,power:20,
                name: "Soul Whisperer",
                description: "Un espectro que susurra en los oídos de los vivos, creando una sensación de paranoia. Sus ataques son débiles, pero puede desorientar a sus víctimas."
            },
            {
                health: 10,power:20,
                name: "Mournful Phantom",
                description: "Este espíritu lamenta su muerte en voz alta, creando una atmósfera cargada de tristeza que afecta la moral de quienes lo rodean."
            },
            {
                health: 10,power:20,
                name: "Ghostly Lurker",
                description: "Un espíritu que acecha en las sombras, causando una leve perturbación en la mente de sus víctimas, ralentizando sus reacciones."
            },
            {
                health: 10,power:20,
                name: "Shadow Spirit",
                description: "Un fantasma vinculado a las sombras, con la capacidad de oscurecer temporalmente su entorno y confundir a sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Phantom Warden",
                description: "Guardia espectral de lugares antiguos, que emite un aura de inquietud. Puede ralentizar los movimientos de los intrusos."
            },
            {
                health: 10,power:20,
                name: "Spirit of Despair",
                description: "Un fantasma que inspira una sensación de desesperanza en quienes lo ven. Afecta la capacidad de sus enemigos para luchar con determinación."
            },
            {
                health: 10,power:20,
                name: "Vengeful Apparition",
                description: "Un espíritu vengativo que ronda en busca de justicia. Sus ataques son débiles, pero su ira puede hacer que los enemigos duden antes de atacar."
            }
            , {
                health: 10,power:20,
                name: "Armored Skeleton",
                description: "Un esqueleto cubierto de armaduras gastadas. Aunque lento, su armadura lo protege bien, y está armado con una espada y escudo."
            },
            {
                health: 10,power:20,
                name: "Ghoul Berserker",
                description: "Un ghoul más rápido y agresivo, armado con dos espadas. Ataca frenéticamente, infligiendo cortes profundos."
            },
            {
                health: 10,power:20,
                name: "Zombie Knight",
                description: "Un zombi con una armadura media, armado con una espada y un hacha. Aunque torpe, sus ataques son poderosos."
            },
            {
                health: 10,power:20,
                name: "Gravewalker",
                description: "Un esqueleto que resurge constantemente después de ser derrotado, a menos que se destruya su fuente de poder."
            },
            {
                health: 10,power:20,
                name: "Ghoul Brute",
                description: "Un ghoul corpulento con fuerza sobrehumana. Armado con un gran garrote que puede aplastar a los jugadores con facilidad."
            },
            {
                health: 10,power:20,
                name: "Skeletal Crossbowman",
                description: "Esqueleto armado con una ballesta. A pesar de su puntería mejorada, es vulnerable en combate cuerpo a cuerpo."
            },
            {
                health: 10,power:20,
                name: "Flesh Eater",
                description: "Un ghoul que se regenera lentamente mientras devora la carne de los vivos. Ataca con garras afiladas y dientes."
            },
            {
                health: 10,power:20,
                name: "Zombie Archer",
                description: "Un zombi armado con un arco y flechas. Su puntería es mediocre, pero sus flechas están impregnadas de veneno."
            },
            {
                health: 10,power:20,
                name: "Crypt Guardian",
                description: "Un esqueleto que protege tumbas ancestrales, armado con una lanza ceremonial. Su deber es proteger su cripta a toda costa."
            },
            {
                health: 10,power:20,
                name: "Tormented Spirit",
                description: "Un espíritu que puede emitir un chillido que debilita a los vivos. No puede causar daño físico, pero su presencia es debilitante."
            }
        ],

        "C": [

            {
                health: 10,power:20,
                name: "Poltergeist",
                description: "Un espíritu que puede manipular objetos físicos, arrojándolos a sus enemigos. Comienza a mostrar signos de control mental básico."
            },
            {
                health: 10,power:20,
                name: "Mind Specter",
                description: "Este fantasma tiene la capacidad de inducir alucinaciones menores, confundiendo a sus víctimas y haciéndolas ver cosas que no existen."
            },
            {
                health: 10,power:20,
                name: "Spirit of Fear",
                description: "Un fantasma que genera un aura de terror en los corazones de sus enemigos, paralizándolos temporalmente con su mera presencia."
            },
            {
                health: 10,power:20,
                name: "Invisible Stalker",
                description: "Un espíritu que puede volverse invisible durante breves períodos de tiempo, acechando a sus enemigos sin ser detectado."
            },
            {
                health: 10,power:20,
                name: "Phantom Enslaver",
                description: "Un espíritu con la capacidad de controlar mentalmente a criaturas débiles por un corto período, obligándolas a atacar a sus aliados."
            },
            {
                health: 10,power:20,
                name: "Blind Specter",
                description: "Un fantasma que puede inducir ceguera temporal en sus enemigos, dejándolos vulnerables durante unos instantes."
            },
            {
                health: 10,power:20,
                name: "Spirit of Misery",
                description: "Este espectro se alimenta del sufrimiento ajeno, debilitando la voluntad de sus enemigos y dejándolos más susceptibles a sus ataques."
            },
            {
                health: 10,power:20,
                name: "Paralyzing Ghost",
                description: "Un espíritu con la capacidad de paralizar a sus enemigos con un toque, dejándolos inmóviles durante unos segundos."
            },
            {
                health: 10,power:20,
                name: "Dream Wraith",
                description: "Este espíritu se infiltra en los sueños de sus enemigos, causando pesadillas que los dejan cansados y desorientados en combate."
            },
            {
                health: 10,power:20,
                name: "Whispering Phantom",
                description: "Un fantasma que puede susurrar en las mentes de sus enemigos, creando una confusión mental que los hace dudar de sus propios aliados."
            }
            , {
                health: 10,power:20,
                name: "Skeletal Commander",
                description: "Un esqueleto más inteligente, capaz de dar órdenes a otros no-muertos. Está armado con una espada larga y una armadura media."
            },
            {
                health: 10,power:20,
                name: "Venomous Ghoul",
                description: "Este ghoul tiene garras envenenadas que paralizan a sus víctimas. Sus ataques son rápidos y mortales."
            },
            {
                health: 10,power:20,
                name: "Zombie Butcher",
                description: "Un zombi enorme armado con un cuchillo gigante de carnicero. Causa daño masivo y puede cortar a través de armaduras ligeras."
            },
            {
                health: 10,power:20,
                name: "Wailing Ghost",
                description: "Un espíritu que emite un grito paralizante, dejando a los enemigos indefensos para ataques de otros no-muertos."
            },
            {
                health: 10,power:20,
                name: "Cursed Knight",
                description: "Un caballero maldito con habilidades de ceguera mágica, que nubla la visión de sus enemigos antes de atacarlos con su espada maldita."
            },
            {
                health: 10,power:20,
                name: "Skeletal Mage",
                description: "Un esqueleto que ha dominado las artes mágicas básicas, lanzando hechizos de parálisis para incapacitar a sus oponentes."
            },
            {
                health: 10,power:20,
                name: "Ghoul Stalker",
                description: "Un ghoul que se vuelve invisible brevemente para acechar a sus presas antes de atacar desde las sombras con garras envenenadas."
            },
            {
                health: 10,power:20,
                name: "Zombie Executioner",
                description: "Un zombi gigante armado con una guillotina portátil. Sus ataques lentos pero precisos pueden decapitar a sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Bone Sorcerer",
                description: "Un esqueleto con poderes de necromancia básica, capaz de levantar a los muertos cercanos para que luchen a su lado."
            },
            {
                health: 10,power:20,
                name: "Spectral Assassin",
                description: "Un espíritu que puede volverse intangible y acechar a sus enemigos. Causa parálisis al contacto."
            }
        ],


        "B": [
            {
                health: 10,power:20,
                name: "Spectral Dominator",
                description: "Un espíritu que ha desarrollado habilidades avanzadas de control mental, tomando el control de enemigos más fuertes y usándolos como marionetas."
            },
            {
                health: 10,power:20,
                name: "Ethereal Tormentor",
                description: "Este espectro puede infligir dolor mental severo a sus enemigos, debilitando su capacidad de luchar y dejándolos vulnerables a otros ataques."
            },
            {
                health: 10,power:20,
                name: "Phantom Assassin",
                description: "Un espíritu invisible que acecha a sus enemigos, golpeándolos cuando menos lo esperan. Puede volverse intangible durante cortos períodos."
            },
            {
                health: 10,power:20,
                name: "Spirit of Madness",
                description: "Un espectro que induce locura temporal en sus víctimas, haciendo que ataquen al azar sin distinguir entre aliados y enemigos."
            },
            {
                health: 10,power:20,
                name: "Nightmare Wraith",
                description: "Este espectro atormenta a sus enemigos con visiones horribles, debilitando su moral y su capacidad para concentrarse en el combate."
            },
            {
                health: 10,power:20,
                name: "Cursed Apparition",
                description: "Un espíritu que puede lanzar maldiciones debilitantes sobre sus enemigos, reduciendo sus habilidades de combate durante varios minutos."
            },
            {
                health: 10,power:20,
                name: "Spectral Puppeteer",
                description: "Este fantasma es capaz de controlar mentalmente a varios enemigos a la vez, usándolos para atacar a sus propios aliados."
            },
            {
                health: 10,power:20,
                name: "Phantom Blinder",
                description: "Un espectro que puede cegar permanentemente a sus enemigos si no son lo suficientemente fuertes como para resistir su magia."
            },
            {
                health: 10,power:20,
                name: "Shadow Controller",
                description: "Un espíritu que controla las sombras para atrapar a sus enemigos, inmovilizándolos mientras los ataca."
            },
            {
                health: 10,power:20,
                name: "Spectral Paralysis",
                description: "Un fantasma con la capacidad de paralizar a varios enemigos a la vez, dejándolos indefensos durante períodos prolongados."
            }
            ,
            {
                health: 10,power:20,
                name: "Undead Warlock",
                description: "Un poderoso hechicero no-muerto que lanza maldiciones devastadoras. Puede paralizar a varios enemigos a la vez."
            },
            {
                health: 10,power:20,
                name: "Ghoul King",
                description: "El líder de una horda de ghouls. Tiene habilidades regenerativas avanzadas y puede lanzar ataques rápidos y mortales con su espada envenenada."
            },
            {
                health: 10,power:20,
                name: "Skeletal General",
                description: "Este esqueleto comanda ejércitos de no-muertos. Es un maestro estratega y está armado con una espada encantada y un escudo que puede repeler hechizos."
            },
            {
                health: 10,power:20,
                name: "Ghostly Warden",
                description: "Un espíritu que guarda mazmorras ancestrales. Posee habilidades de invisibilidad avanzada y puede desorientar a los jugadores con ilusiones."
            },
            {
                health: 10,power:20,
                name: "Plague Zombie",
                description: "Un zombi portador de una plaga mortal. Los jugadores que entren en contacto con él sufrirán daños continuos debido a su aura tóxica."
            },
            {
                health: 10,power:20,
                name: "Lich Acolyte",
                description: "Un sirviente de un poderoso lich, con habilidades mágicas menores que incluyen la parálisis y ceguera."
            },
            {
                health: 10,power:20,
                name: "Ghoul Assassin",
                description: "Un ghoul extremadamente ágil que puede volverse invisible por largos periodos de tiempo. Ataca rápidamente desde las sombras."
            },
            {
                health: 10,power:20,
                name: "Bonebreaker",
                description: "Un gigante esqueleto con un mazo enorme. Causa daño físico masivo con un solo golpe, rompiendo huesos y armaduras."
            },
            {
                health: 10,power:20,
                name: "Spectral Torturer",
                description: "Un espíritu que inflige un dolor mental extremo a sus víctimas, paralizándolos mientras sus aliados no-muertos los atacan."
            },
            {
                health: 10,power:20,
                name: "Corpse Pyromancer",
                description: "Un no-muerto que utiliza fuego oscuro, causando explosiones que pueden quemar tanto cuerpos como almas."
            }
        ],

        "A": [
            {
                health: 10,power:20,
                name: "Ghostly Inquisitor",
                ghost: true,
                description: "Un espíritu que atormenta a sus víctimas con visiones aterradoras, manipulando sus mentes para pierdan noción del combate."
            },
            {
                health: 10,power:20,
                name: "Wraith of Despair",
                ghost: true,
                description: "Este espectro emite un aura de desesperación y paralisis que debilita la voluntad de los enemigos cercanos, dejándolos susceptibles a sus ataques."
            },
            {
                health: 10,power:20,
                name: "Spectral Overlord",
                ghost: true,
                description: "Un espectro de increíble poder que puede poseer temporalmente a los jugadores, controlando su cuerpo y haciéndolos luchar entre ellos."
            },
            /////
            {
                health: 10,power:20,
                name: "Death Knight",
                description: "Un caballero no-muerto con una armadura oscura. Está armado con una espada maldita que inflige dolor mental y físico simultáneo."
            },
            {
                health: 10,power:20,
                name: "Lich Necromancer",
                description: "Un maestro de la necromancia, capaz de levantar 3 no-muertos. También puede drenar la energía vital de sus enemigos."
            },
            {
                health: 10,power:20,
                name: "Ghoul Emperor",
                description: "El gobernante de los ghouls, con habilidades regenerativas avanzadas."
            },
            {
                health: 10,power:20,
                name: "Lich King",
                description: "Un lich de alto nivel que utiliza la magia oscura más poderosa, capaz de lanzar maldiciones que lentamente drenan la vida de sus enemigos y con capacidades de magia silenciosa."
            },
            {
                health: 10,power:20,
                name: "Supreme Undead Mage",
                description: "Un mago supremo no-muerto con un arsenal de hechizos, basandose en la magia de hielo silenciosa."
            },
            {
                health: 10,power:20,
                name: "Plaguebringer",
                description: "Un zombi gigantesco que emite una nube de enfermedades letales, debilitando y matando a cualquiera que entre en contacto con él."
            }
        ],

        "S": [
            {
                health: 10,power:20,
                name: "Bone Dragon",
                description: "Un dragón esquelético, capaz de lanzar llamas oscuras que incineran tanto el cuerpo como el alma de los enemigos."
            },
            {
                health: 10,power:20,
                name: "Ethereal Emperor",
                description: "El emperador de los fantasmas, un ser inmortal con habilidades de control mental tan poderosas que puede esclavizar civilizaciones enteras."
            },
            {
                health: 10,power:20,
                name: "Soul Devourer",
                description: "Este espíritu consume las almas de sus enemigos, volviéndose cada vez más poderoso con cada alma devorada. Sus poderes de control mental son inigualables."
            },
            {
                health: 10,power:20,
                name: "Phantom Lord",
                description: "Un espectro inmensamente poderoso que controla las mentes de los seres más fuertes con facilidad, usándolos como herramientas en su reino eterno."
            },
            {
                health: 10,power:20,
                name: "Void Specter",
                description: "Este fantasma controla las sombras y la oscuridad misma, paralizando a sus enemigos con un simple gesto y haciéndose invisible a voluntad."
            },
            {
                health: 10,power:20,
                name: "Mind Dominator",
                description: "El maestro absoluto del control mental, capaz de dominar las mentes de ejércitos enteros y usarlos para sus propios fines."
            },
            {
                health: 10,power:20,
                name: "Spirit of Oblivion",
                description: "Un espectro que puede borrar la mente de sus víctimas, dejándolas en un estado de vacío absoluto, sin recuerdos ni habilidades."
            },
            {
                health: 10,power:20,
                name: "Spectral Sovereign",
                description: "El soberano de los fantasmas, capaz de controlar los destinos de los vivos y muertos con un solo pensamiento. Su poder de control mental es incomparable."
            },
            {
                health: 10,power:20,
                name: "Wraith of the Abyss",
                description: "Un ser del abismo con habilidades de parálisis y control mental que exceden los límites de lo imaginable. Puede esclavizar a seres de cualquier poder."
            },
            {
                health: 10,power:20,
                name: "Ghostly Conqueror",
                description: "Este espíritu conquista reinos enteros con su poder mental, paralizando a ejércitos enteros y tomando el control absoluto de los vivos."
            },
            {
                health: 10,power:20,
                name: "Spectral Archmage",
                description: "El archimago de los fantasmas, maestro de todas las artes mágicas, incluyendo control mental, parálisis, invisibilidad y más."
            }
            ,
            {
                health: 10,power:20,
                name: "Lich Overlord",
                description: "El más poderoso de los liches. Controla completamente la mente de sus enemigos, utilizándolos como peones hasta que sus cuerpos colapsen."
            },
            {
                health: 10,power:20,
                name: "Bone Colossus",
                description: "Una abominación esquelética de tamaño colosal, capaz de aplastar a varios enemigos con un solo golpe. Causa destrucción masiva a su paso."
            },
            {
                health: 10,power:20,
                name: "Ghost King",
                description: "El rey de los espectros. Tiene el poder de poseer completamente a los jugadores y controlar su cuerpo indefinidamente."
            },
            {
                health: 10,power:20,
                name: "Soul Reaper",
                description: "Un espíritu que devora las almas de sus víctimas, causándoles una muerte lenta y dolorosa. Su guadaña maldita puede cortar tanto el cuerpo como el alma."
            },
            {
                health: 10,power:20,
                name: "Deathlord",
                description: "El comandante supremo de los no-muertos. Capaz de convocar ejércitos de muertos y lanzar maldiciones que matan lentamente a todos los vivos cercanos."
            },
            {
                health: 10,power:20,
                name: "Vampiric Lich",
                description: "Un lich vampiro que drena la sangre y la energía vital de sus enemigos, aumentando su propio poder y prolongando su inmortalidad."
            },
            {
                health: 10,power:20,
                name: "Phantom Emperor",
                description: "Un espectro emperador que controla completamente las mentes y cuerpos de sus enemigos, utilizando sus habilidades contra ellos."
            },
            {
                health: 10,power:20,
                name: "Necrotic Dragon",
                description: "Un dragón no-muerto que desata llamas necróticas que destruyen todo a su paso, dejando solo cenizas y huesos."
            },
            {
                health: 10,power:20,
                name: "Plague Lich",
                description: "Un lich que esparce enfermedades incurables. Su mera presencia es letal, y su magia oscura mata lentamente a cualquiera que se acerque demasiado."
            },
            {
                health: 10,power:20,
                name: "Corpse Titan",
                description: "Un titán no-muerto formado por miles de cadáveres. Es inmune a la mayoría de los ataques y destruye todo a su paso con golpes masivos."
            }
        ],
        "Boss": {
            "E": {
                health: 10,power:20,
                name: "Bone Warden",
                description: "Un esqueleto antiguo armado con una espada oxidada y un escudo roto. Vigila criptas y tumbas, y puede convocar esqueletos menores. Aunque su fuerza es baja, su persistencia lo hace una amenaza a largo plazo."
            },
            "D": {
                health: 10,power:20,
                name: "Ghoul Ravager",
                description: "Este ghoul ha crecido en tamaño y ferocidad tras años devorando cadáveres. Armado con garras largas y afiladas, ataca salvajemente a sus enemigos. Puede emitir un rugido que paraliza a los jugadores cercanos durante unos segundos."
            },
            "C": {
                health: 10,power:20,
                name: "Cursed Necromancer",
                description: "Un necromante no-muerto que ha perdido su humanidad. Controla hordas de esqueletos y ghouls, y utiliza magia oscura para lanzar maldiciones que debilitan a sus enemigos. Sus ataques incluyen una bola de energía que paraliza a cualquiera que golpee."
            },
            "B": {
                health: 10,power:20,
                name: "Lich Overseer",
                description: "Un lich que supervisa un ejército de no-muertos. Es extremadamente inteligente y utiliza su magia para controlar mentes débiles. Además, puede lanzar hechizos de parálisis en área y tiene un aura que debilita a los enemigos cercanos, reduciendo su resistencia."
            },

            "A": {
                health: 10,power:20,
                name: "Death Knight Lord",
                description: "Un caballero no-muerto con armadura completa, una espada maldita y un escudo encantado. Su espada inflige daño tanto físico como mental, causando dolores insoportables en sus víctimas. También puede emitir una onda de energía oscura y capacidad de destello negro del 10%."
            },

            "S": {
                health: 10,power:20,
                name: "Soul Devourer",
                description: "Un espíritu ancestral que se alimenta de las almas de sus enemigos. Es intangible durante la mayor parte del combate, volviéndose físico solo para atacar. Puede controlar mentalmente a los jugadores y obligarlos a luchar entre sí. Su ataque más mortal es una ráfaga de energía oscura que consume lentamente la vida de sus víctimas."
            }
        }
    },
    "Bestias": {
        E: [
            { health: 10,power:20,
                name: "Ratón Gigante", description: "Una versión más grande y agresiva de un ratón común, que ataca en grupo para abrumar a sus enemigos." },
            { health: 10,power:20,
                name: "Escarabajo Colosal", description: "Un insecto de tamaño gigantesco con una coraza dura, pero movimientos torpes y lentos." },
            { health: 10,power:20,
                name: "Sapo Venenoso", description: "Un sapo de gran tamaño que segrega un veneno moderadamente tóxico cuando se siente amenazado." },
            { health: 10,power:20,
                name: "Ave Rapaz Menor", description: "Una ave de presa con afiladas garras, aunque no demasiado peligrosa en combate directo." },
            { health: 10,power:20,
                name: "Serpiente de Agua", description: "Una serpiente que vive en pantanos y ríos, puede morder con veneno débil." },
            { health: 10,power:20,
                name: "Rata de Alcantarilla", description: "Una rata de tamaño considerable que puede propagar enfermedades." },
            { health: 10,power:20,
                name: "Escorpión de Cueva", description: "Un pequeño escorpión que habita en cuevas oscuras, su picadura causa entumecimiento." },
            { health: 10,power:20,
                name: "Liebre Sombra", description: "Una liebre nocturna con habilidades para esconderse en la oscuridad, pero de poco valor en combate." },
            { health: 10,power:20,
                name: "Pequeño Cangrejo Rocoso", description: "Un cangrejo con pinzas fuertes, aunque de tamaño pequeño y lento." },
        ],
        D: [
            { health: 10,power:20,
                name: "Lobo", description: "Un depredador ágil y peligroso en grupo, pero relativamente fácil de manejar en solitario." },
            { health: 10,power:20,
                name: "Oso Pardo", description: "Una bestia imponente con una gran fuerza física, aunque predecible y lenta." },
            { health: 10,power:20,
                name: "Jabalí Enfurecido", description: "Una criatura territorial y agresiva con colmillos afilados." },
            { health: 10,power:20,
                name: "Cobra Real", description: "Una serpiente venenosa de gran tamaño y rápidos reflejos, su mordida puede ser letal." },
            { health: 10,power:20,
                name: "Lince Fantasmal", description: "Un felino ágil y sigiloso, se mueve en la oscuridad con gran facilidad." },
            { health: 10,power:20,
                name: "Abeja Gigante", description: "Un insecto de gran tamaño cuya picadura puede ser mortal si no se trata rápidamente." },
            { health: 10,power:20,
                name: "Tortuga Blindada", description: "Una tortuga terrestre de gran tamaño con una coraza impenetrable, aunque extremadamente lenta." },
            { health: 10,power:20,
                name: "Carnero Colérico", description: "Un carnero de montaña con una fuerza increíble, capaz de embestir con gran potencia." },
            { health: 10,power:20,
                name: "Ciempiés de Pantano", description: "Una criatura venenosa con múltiples patas, difícil de evitar en su territorio fangoso." },
            { health: 10,power:20,
                name: "Ciervo Albino", description: "Un ciervo raro de gran tamaño, cuya cornamenta puede perforar armaduras ligeras." }
        ],
        C: [
            { health: 10,power:20,
                name: "Grifo Juvenil", description: "Un joven grifo con cuerpo de león y cabeza de águila, aún no completamente desarrollado." },
            { health: 10,power:20,
                name: "Basilisco Pequeño", description: "Una criatura reptiliana que puede petrificar con su mirada, aunque de tamaño reducido y menos poderoso." },
            { health: 10,power:20,
                name: "Mantícora Menor", description: "Una mantícora joven con un aguijón venenoso y habilidades de vuelo limitadas." },
            { health: 10,power:20,
                name: "Quimera Inmadura", description: "Una quimera joven con habilidades aún en desarrollo, pero peligrosa por su fuego y veneno." },
            { health: 10,power:20,
                name: "Oso Demoníaco", description: "Una bestia de gran tamaño con ojos rojos y garras encantadas, mucho más agresiva que un oso común." },
            { health: 10,power:20,
                name: "Dragón Terrestre", description: "Un dragón sin alas que vive bajo tierra, atacando desde el subsuelo." },
            { health: 10,power:20,
                name: "León Alado", description: "Un majestuoso león con la capacidad de volar, utilizado a veces como guardián de templos sagrados." },
            { health: 10,power:20,
                name: "Serpiente de Hielo", description: "Una serpiente del ártico que emite un frío mortal a su alrededor." },
            { health: 10,power:20,
                name: "Cangrejo Gigante", description: "Un cangrejo descomunal que habita en costas rocosas, su caparazón es resistente a las armas comunes." },
            { health: 10,power:20,
                name: "Toro Infernal", description: "Un toro de enormes proporciones con cuernos encendidos en fuego demoníaco." },
            { health: 10,power:20,
                name: "Lagarto Espinoso", description: "Un lagarto con espinas afiladas a lo largo de su cuerpo, que puede lanzarlas a sus enemigos." }
        ],
        B: [
            { health: 10,power:20,
                name: "Dragón Juvenil", description: "Un joven dragón que comienza a dominar el fuego y el vuelo, ya es peligroso pero no tan poderoso como los adultos." },
            { health: 10,power:20,
                name: "Grifo Adulto", description: "Una criatura majestuosa y peligrosa con el cuerpo de un león y la cabeza de un águila." },
            { health: 10,power:20,
                name: "Quimera", description: "Una bestia aterradora con tres cabezas (de león, cabra y serpiente), capaz de lanzar fuego." },
            { health: 10,power:20,
                name: "Wyvern", description: "Una bestia similar a un dragón, pero más pequeña, ágil y venenosa." },
            { health: 10,power:20,
                name: "Grifo de Tormenta", description: "Un grifo que habita en las montañas y puede controlar los vientos y las tormentas eléctricas." },
            { health: 10,power:20,
                name: "Lobo Demoníaco", description: "Un lobo de gran tamaño con ojos rojos y poderes infernales, más peligroso que cualquier lobo común." },
            { health: 10,power:20,
                name: "Serpiente Colosal", description: "Una serpiente gigantesca que puede engullir a un hombre entero, difícil de combatir en lugares estrechos." },
            { health: 10,power:20,
                name: "Escorpión Colosal", description: "Un escorpión de tamaño gigantesco con un veneno mortal y pinzas capaces de destrozar armaduras." },
            { health: 10,power:20,
                name: "Tigre de las Sombras", description: "Un gran felino que se mueve en las sombras, invisible para sus presas hasta que ataca." },
        ],
        A: [
            { health: 10,power:20,
                name: "Troll de Guerra", description: "Un troll enorme, difícil de matar, ya que su cuerpo se regenera rápidamente a menos que sea herido con fuego o ácido." },
            { health: 10,power:20,
                name: "Dragón Adulto", description: "Un dragón en todo su esplendor, maestro del vuelo y del fuego, uno de los enemigos más temibles que puedes encontrar." },
            { health: 10,power:20,
                name: "Quimera Mayor", description: "Una versión más poderosa de la quimera común, con mayores capacidades mágicas y destructivas, cabra, leon, dragon." },
            { health: 10,power:20,
                name: "Grifo Real", description: "Una versión majestuosa del grifo, conocido por ser montura de reyes y campeones legendarios. Cuerpo de leon, alas, patas delanteras y cabeza de agila" },
            { health: 10,power:20,
                name: "Dragón de las Sombras", description: "Un dragón que se mueve en la oscuridad y controla las sombras, difícil de ver y aún más difícil de combatir." },
            { health: 10,power:20,
                name: "Fénix", description: "Un ave inmortal que resurge de sus cenizas, puede envolver a sus enemigos en fuego purificador." },
            { health: 10,power:20,
                name: "Kraken", description: "Una monstruosa criatura marina con tentáculos gigantescos, temida por los navegantes." },
            { health: 10,power:20,
                name: "Araña Suprema", description: "Una araña capaz de escupir un _veneno corrosivo_ que destruye todo a su paso." },
            { health: 10,power:20,
                name: "Basilisco Supremo", description: "Una criatura que puede petrificar con su mirada y matar con su veneno, extremadamente peligrosa." },
        ],
        S: [
            { health: 10,power:20,
                name: "Tarrasque", description: "Una bestia legendaria de inmenso poder destructivo, con una piel casi impenetrable y fuerza sobrehumana." },
            { health: 10,power:20,
                name: "Fénix Eterno", description: "Una versión aún más poderosa del Fénix, capaz de regenerarse instantáneamente y controlar el fuego divino." },
            { health: 10,power:20,
                name: "Kraken Colosal", description: "Un Kraken aún más grande y poderoso, que puede arrastrar ciudades enteras bajo el agua." },
            { health: 10,power:20,
                name: "León Divino", description: "Un Leon imbuido con poder divino, capaz de manipular la vida y la muerte." },
            { health: 10,power:20,
                name: "Gigante Primordial", description: "Un gigante de tiempos antiguos con habilidades para controlar el tiempo y la materia." },
            { health: 10,power:20,
                name: "Bestia del Caos", description: "Una criatura del caos puro, con un cuerpo que cambia constantemente y habilidades impredecibles." },
            { health: 10,power:20,
                name: "Quimera Suprema", description: "La versión definitiva de la quimera, capaz de controlar múltiples elementos y destruir ejércitos con facilidad." },
            { health: 10,power:20,
                name: "Titán de la Destrucción", description: "Una bestia antigua creada solo para destruir, su poder es tal que puede arrasar ciudades en segundos." }
        ],
        Boss: {
            E: { health: 10,power:20,
                name: "Avestruz de Guerra", description: "Un ave veloz y fuerte, utilizada por algunos guerreros para el combate." },
            D: { health: 10,power:20,
                name: "Escarabajo de Fuego", description: "Un insecto que puede generar fuego desde su abdomen para quemar a sus enemigos." },
            C: { health: 10,power:20,
                name: "Mantícora", description: "Una mantícora completamente desarrollada con habilidades mortales en vuelo y combate cuerpo a cuerpo." },
            B: { health: 10,power:20,
                name: "Leviatán", description: "Una bestia marina colosal que habita en los océanos profundos, capaz de destruir barcos enteros." },
            A: { health: 10,power:20,
                name: "Mono Furioso", description: "Un primate agresivo y territorial, capaz de utilizar herramientas rudimentarias en combate." },
            S: { health: 10,power:20,
                name: "Tortuga del Tiempo", description: "Una tortuga que controla el flujo del tiempo, puede acelerar o retroceder momentos a su antojo." },
        }
    },
    "Elementales": {
        E: [
            { health: 10,power:20,
                name: "Elemental Menor de Fuego", description: "Una pequeña criatura hecha de llamas, capaz de causar quemaduras menores. Fácil de derrotar, pero puede provocar incendios." },
            { health: 10,power:20,
                name: "Elemental Menor de Agua", description: "Una criatura de agua que puede lanzar pequeñas oleadas para derribar a sus enemigos, pero se evapora fácilmente." },
            { health: 10,power:20,
                name: "Gólem de Arcilla", description: "Un gólem débil formado de arcilla, resistente a golpes ligeros pero se desmorona rápidamente bajo presión." },
            { health: 10,power:20,
                name: "Elemental Menor de Aire", description: "Un pequeño remolino que puede empujar a sus oponentes, pero su forma inestable lo hace vulnerable." },
            { health: 10,power:20,
                name: "Gólem de Hojas", description: "Una criatura hecha de hojas y ramas, fácil de destruir pero rápida y capaz de camuflarse en la vegetación." },
            { health: 10,power:20,
                name: "Chispazo Eléctrico", description: "Una pequeña entidad de energía que emite descargas eléctricas leves, molesto pero de baja amenaza." },
            { health: 10,power:20,
                name: "Elemental Menor de Tierra", description: "Una pequeña criatura de roca, difícil de dañar con ataques físicos ligeros pero lenta y fácil de esquivar." },
            { health: 10,power:20,
                name: "Gárgola Desgastada", description: "Una gárgola de piedra desgastada por los años, su capacidad ofensiva es mínima, pero su piel de piedra la hace resistente." },
            { health: 10,power:20,
                name: "Marioneta de Hielo", description: "Un autómata hecho de hielo que se derrite fácilmente con calor, pero puede congelar a sus enemigos con un toque." },
            { health: 10,power:20,
                name: "Espectro de Humo", description: "Una criatura formada por humo, incapaz de hacer daño directo pero puede asfixiar lentamente a sus víctimas si no es dispersada." },
            { health: 10,power:20,
                name: "Gólem de Barro", description: "Un gólem torpe y débil hecho de barro, fácil de derrotar, pero puede inmovilizar a sus enemigos con su pegajoso cuerpo." },
            { health: 10,power:20,
                name: "Corriente de Viento", description: "Un pequeño espíritu de aire que puede lanzar ráfagas de viento, molestando a sus enemigos, pero sin poder real." },
            { health: 10,power:20,
                name: "Elemental Menor de Vapor", description: "Un ente que genera vapor caliente, capaz de cegar temporalmente a sus enemigos, pero débil en combate directo." },
            { health: 10,power:20,
                name: "Luz Errante", description: "Una pequeña bola de energía lumínica, que ataca con destellos cegadores, pero su cuerpo es muy frágil." }
        ],
        D: [
            { health: 10,power:20,
                name: "Elemental de Fuego", description: "Un ser de fuego más grande y poderoso que su versión menor, capaz de lanzar pequeñas bolas de fuego." },
            { health: 10,power:20,
                name: "Elemental de Agua", description: "Una criatura acuática que puede controlar pequeñas corrientes y atrapar a sus enemigos en remolinos." },
            { health: 10,power:20,
                name: "Gólem de Piedra", description: "Una criatura de roca dura, difícil de romper pero vulnerable a magia elemental o ataques contundentes." },
            { health: 10,power:20,
                name: "Elemental de Viento", description: "Un ser veloz que manipula el aire para crear ráfagas de viento y empujar a sus enemigos." },
            { health: 10,power:20,
                name: "Gólem de Hielo", description: "Una criatura formada por hielo sólido, puede congelar a sus oponentes con un golpe, pero es lento." },
            { health: 10,power:20,
                name: "Elemental de Tierra", description: "Un ser de roca y tierra, fuerte y resistente, pero lento y fácil de evitar." },
            { health: 10,power:20,
                name: "Elemental de Vapor", description: "Una entidad que emite nubes de vapor caliente, cegando y quemando ligeramente a sus oponentes." },
            { health: 10,power:20,
                name: "Marioneta de Fuego", description: "Un autómata encantado con magia de fuego, capaz de lanzar pequeñas llamas, pero muy frágil." },
            { health: 10,power:20,
                name: "Gárgola de Bronce", description: "Una gárgola con una estructura más resistente, capaz de resistir más daño antes de ser destruida." },
            { health: 10,power:20,
                name: "Elemental de Arcilla", description: "Una criatura moldeada de arcilla mágica, flexible y capaz de regenerarse lentamente, pero de ataque débil." },
            { health: 10,power:20,
                name: "Elemental de Cristal", description: "Una entidad translúcida hecha de cristales mágicos, su cuerpo refleja la luz, cegando momentáneamente a sus enemigos." },
            { health: 10,power:20,
                name: "Gólem de Lava", description: "Un ser que combina roca y lava, que deja rastros ardientes a su paso, pero es relativamente lento." },
            { health: 10,power:20,
                name: "Espectro de Ceniza", description: "Una criatura etérea formada por cenizas ardientes, capaz de cubrir a sus enemigos en una nube abrasiva." },
            { health: 10,power:20,
                name: "Constructo de Hierro", description: "Un autómata hecho de hierro, resistente a la mayoría de los ataques físicos, pero vulnerable a la magia." },
            { health: 10,power:20,
                name: "Serpiente de Tormenta", description: "Una pequeña criatura eléctrica que emite descargas, peligrosa en ambientes húmedos pero fácil de derrotar en seco." }
        ],
        C: [
            { health: 10,power:20,
                name: "Elemental Mayor de Fuego", description: "Un ser de llamas gigantes, capaz de generar explosiones y rodearse de un muro de fuego." },
            { health: 10,power:20,
                name: "Elemental Mayor de Agua", description: "Un ser acuático poderoso que puede generar grandes olas y encerrar a sus oponentes en prisiones de agua." },
            { health: 10,power:20,
                name: "Gólem de Basalto", description: "Una criatura formada por roca volcánica, extremadamente dura y resistente a ataques convencionales." },
            { health: 10,power:20,
                name: "Elemental Mayor de Aire", description: "Un ser de viento más fuerte que su versión menor, capaz de generar tornados pequeños." },
            { health: 10,power:20,
                name: "Elemental de Roca", description: "Una criatura de roca pura, extremadamente difícil de destruir, con ataques contundentes." },
            { health: 10,power:20,
                name: "Elemental de Hielo Mayor", description: "Una entidad de hielo gigante, que puede crear tormentas de nieve y congelar vastas áreas." },
            { health: 10,power:20,
                name: "Gólem de Carbón", description: "Un gólem que se vuelve más fuerte mientras se quema, con capacidad para lanzar proyectiles ardientes." },
            { health: 10,power:20,
                name: "Autómata de Vapor Avanzado", description: "Una versión más avanzada de los autómatas de vapor, capaz de generar vapor caliente para cegar y quemar." },
            { health: 10,power:20,
                name: "Espectro de Polvo", description: "Una criatura hecha de polvo que se disipa al ser golpeada, pero puede reformarse rápidamente." },
            { health: 10,power:20,
                name: "Constructo de Acero", description: "Un autómata de acero altamente resistente, con ataques pesados y defensa mejorada." },
            { health: 10,power:20,
                name: "Gárgola de Mármol", description: "Una gárgola de mármol endurecida, capaz de resistir ataques mágicos y físicos." },
            { health: 10,power:20,
                name: "Elemental de Relámpago", description: "Una criatura de pura energía eléctrica, que ataca con relámpagos y se mueve a gran velocidad." },
            { health: 10,power:20,
                name: "Elemental de Barro Mayor", description: "Una versión más grande y poderosa del gólem de barro, capaz de absorber impactos y regenerarse rápidamente." },
            { health: 10,power:20,
                name: "Gólem de Cobre", description: "Un autómata de cobre, resistente a la corrosión y capaz de emitir descargas eléctricas para incapacitar a sus enemigos." },
            { health: 10,power:20,
                name: "Guardia de Magma", description: "Un autómata formado de roca fundida, extremadamente resistente a ataques físicos, pero vulnerable al frío." }
        ],
        B: [
            { health: 10,power:20,
                name: "Elemental de Lava", description: "Un ser formado por roca fundida, que deja a su paso rastros ardientes y puede lanzar magma a sus enemigos." },
            { health: 10,power:20,
                name: "Elemental de Tormenta", description: "Un ser de viento y relámpagos, capaz de generar tormentas eléctricas y controlar los vientos con gran precisión." },
            { health: 10,power:20,
                name: "Gólem de Hierro", description: "Un gólem extremadamente resistente y pesado, difícil de destruir con ataques normales." },
            { health: 10,power:20,
                name: "Elemental de Roca Gigante", description: "Una versión más grande y fuerte del elemental de roca, con una capacidad de destrucción mayor." },
            { health: 10,power:20,
                name: "Elemental de Hielo Colosal", description: "Un ser de hielo inmenso, capaz de congelar áreas enteras y resistir ataques físicos comunes." },
            { health: 10,power:20,
                name: "Gólem de Cristal", description: "Un gólem formado por cristales mágicos, que puede refractar luz para cegar a sus enemigos y lanzar proyectiles de cristal." },
            { health: 10,power:20,
                name: "Autómata de Titanio", description: "Una máquina hecha de titanio, casi impenetrable y con una fuerza descomunal." },
            { health: 10,power:20,
                name: "Gárgola de Acero", description: "Una gárgola hecha de acero puro, con una defensa increíblemente alta y capacidad de vuelo." },
            { health: 10,power:20,
                name: "Constructo Arcano", description: "Un autómata impulsado por magia arcana, capaz de lanzar hechizos elementales básicos." }
        ],
        A: [
            { health: 10,power:20,
                name: "Avatar de Fuego", description: "Una manifestación casi divina del fuego, que consume todo a su alrededor en llamas inextinguibles." },
            { health: 10,power:20,
                name: "Avatar de Agua", description: "Un ser acuático titánico, capaz de controlar océanos y ahogar ciudades enteras con su poder." },
            { health: 10,power:20,
                name: "Titan de Tierra", description: "Una colosal entidad de tierra y roca, que aplasta todo a su paso con su mera presencia." },
            { health: 10,power:20,
                name: "Avatar de Viento", description: "Un ser de aire divino, capaz de desatar tornados gigantes y huracanes implacables, posee una gran velocidad." },
            { health: 10,power:20,
                name: "Coloso de Hielo", description: "Una gigantesca criatura de hielo puro, casi invulnerable a ataques físicos y capaz de congelar reinos enteros." },
            { health: 10,power:20,
                name: "Titán de Lava", description: "Un ser masivo de roca fundida, que desata erupciones volcánicas con su furia incontrolable." },
            { health: 10,power:20,
                name: "Constructo Divino", description: "Un autómata imbuido con magia celestial, resistente pero inmovil, capaz de parar el tiempo cada 2 turnos, hace que sus aliados se muevan a saltos." },
            { health: 10,power:20,
                name: "Gárgola Viviente", description: "Una gárgola de proporciones gigantescas, capaz de resistir cualquier ataque y paralizar enemigos." },
            { health: 10,power:20,
                name: "Entidad del Trueno", description: "Una forma pura de energía eléctrica, que destruye todo a su paso con relámpagos destructivos." }
        ],
        S: [
            { health: 10,power:20,
                name: "Avatar Primordial de Viento", description: "Un ser de aire divino, capaz de desatar tornados gigantes y huracanes implacables, con una velocidad digna del destello." },
            { health: 10,power:20,
                name: "Elemental Primordial de Fuego", description: "Una manifestación del fuego mismo, capaz de consumir civilizaciones enteras con su furia." },
            { health: 10,power:20,
                name: "Elemental Primordial de Agua", description: "Una entidad que controla los mares y puede invocar tsunamis con el menor de sus movimientos." },
            { health: 10,power:20,
                name: "Titán de Piedra", description: "Un coloso de roca indestructible, con la fuerza para romper montañas con un solo golpe, capaz de lanzar multiples balas rocosas en forma de circulo, asemejandose al Stone Tempest." },
            { health: 10,power:20,
                name: "Titán de Hielo", description: "Una colosal criatura de hielo eterno, capaz de congelar el mundo con su presencia." },
            { health: 10,power:20,
                name: "Constructo Legendario", description: "Un autómata indestructible, imbuido con las energías de los dioses mismos, permite la teletransportacion de sus aliados cada 2 segundos ." }
        ],
        Boss: {
            E: {
                health: 10,power:20,
                name: "Sombra de Cenizas",
                description: "Una entidad formada por las cenizas de batallas pasadas. Aunque débil en combate directo, puede cegar y asfixiar a sus oponentes con su espeso humo, ralentizando sus movimientos y nublando su vista."
            },
            D: {
                health: 10,power:20,
                name: "Titán Menor de Barro",
                description: "Una criatura formada por lodo endurecido y tierra. A pesar de su aspecto torpe y lento, es capaz de regenerarse constantemente mientras esté cerca de cuerpos de agua, y puede atrapar a sus enemigos en su masa viscosa para inmovilizarlos."
            },
            C: {
                health: 10,power:20,
                name: "Señor del Vapor",
                description: "Un ser gigantesco hecho de vapor y maquinaria antigua. Controla las corrientes de vapor caliente a su alrededor para quemar a sus oponentes y crear nubes que lo ocultan, haciendo que sea difícil de golpear. También puede lanzar chorros de vapor a alta presión, causando daño contundente."
            },
            B: {
                health: 10,power:20,
                name: "Coloso de Roca y Lava",
                description: "Un ser masivo compuesto de roca volcánica y lava. Su cuerpo arde constantemente, causando daño a todo lo que se acerque. Además, puede invocar explosiones de lava que caen del cielo, creando zonas peligrosas en el campo de batalla. Su piel es increíblemente dura y resiste casi cualquier ataque físico."
            },
            A: {
                health: 10,power:20,
                name: "Coloso de la Tormenta",
                description: "Una deidad elemental del viento y los relámpagos. Capaz de desatar tornados y tormentas eléctricas con solo un movimiento, esta criatura controla el clima a su antojo. Puede lanzar rayos que impactan múltiples objetivos a la vez, y su cuerpo es tan rápido que es casi imposible alcanzarlo en combate."
            },
            S: {
                health: 10,power:20,
                name: "Emperador Primordial de Fuego",
                description: "El supremo ente de fuego, cuya sola presencia consume todo a su alrededor. Sus llamas son inextinguibles, y puede invocar un muro de fuego para dividir a sus enemigos. Además, es capaz de desatar una tormenta de fuego que arrasa el campo de batalla. Resiste casi cualquier tipo de daño, y solo las fuerzas más poderosas pueden desafiarlo."
            }
        }
    }
};
