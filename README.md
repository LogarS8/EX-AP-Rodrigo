<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Next.js | Cultura Babilonica</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>

## Instalación

Primero, instala las dependencias:

```bash
npm install
```

## Ejecución en modo desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Puedes empezar a editar la página modificando `pages/index.js`. La página se recarga automáticamente cuando haces cambios.

## Ejecución en modo producción

```bash
npm run build
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.


## Documentación API

Puedes leer más sobre Next.js en la [documentación API](https://nextjs.org/docs).

## GET /api/

```http request
https://localhost:3000/inf
```
Obtencio de informacion de la API

## GET /api/[query]

```http request
https://ocalhost:3000/inf/[query]
```

Obtencion de informacion de la API por llave por ejemplo:

- Cultura
- Locacion
- lenguas
- periodos
- comidas
- prendas
- edificaciones
- relatos

## JSON API

```json
{
    "cultura": "Babilónica",
    "locacion": {
        "historia": "Fue una antigua ciudad de la Baja Mesopotamia situada cerca de la actual ciudad de Hilla (Irak). Fue la capital del antiguo Reino babilónico, y por varios siglos fue considerada como un importante centro de comercio, arte y aprendizaje.",
        "inf": "Babilonia se ubicaba en la región de Mesopotamia, en la actualidad Irak.",
        "img": "./assets/pueblo/localizacion.png"
    },
    "lenguas": [
        "Acadio",
        "Sumerio",
        "Babilonio"
    ],
    "periodos": [
        {
            "nombre": "Fundación y Primeros Siglos",
            "inf": "Antiguamente se consideraba que la ciudad había sido fundada o reconstruida por Sargón de Acad. La fuente más antigua conocida que menciona la ciudad es datada en tiempos del Imperio acadio formado por Sargón de Acad en el siglo siglo XXIV a. C. La Crónica Weidner establece que fue el propio Sargón quien construyó Babilonia \"frente a Agadé\"",
            "img": "./assets/periodos/primeros.png"
        },
        {
            "nombre": "Primer Período Imperial",
            "inf": "La Primera Dinastía Babilónica fue fundada hacia el año 1894 a. C. (cronología media) por el amorrita Sumu-Abum, quien estableció una pequeña ciudad-Estado independiente. Su sexto rey, Hammurabi (1792-1750 a. C.) engrandecería colosalmente sus fronteras y extendería sus dominios.",
            "img": "./assets/periodos/imperial.png"
        },
        {
            "nombre": "Periodo de Crisis y Dominio Asirio",
            "inf": "Babilonia fue gobernada por la II Dinastía de Isin; era la primera vez que una dinastía nativa de Baja Mesopotamia tomaba el poder. Sin embargo, Babilonia permaneció débil y sujeta al dominio de Asiria. Sus ineficaces reyes fueron incapaces de evitar que nuevas oleadas de invasiones occidentales, incluidos los arameos en el siglo xi a. C.",
            "img": "./assets/periodos/dominio.jpg"
        }
    ],
    "comidas": [
        {
            "nombre": "Pan",
            "img": "./assets/comida/pan.png"
        },
        {
            "nombre": "Cerveza",
            "img": "./assets/comida/ceveza.png"
        },
        {
            "nombre": "Tripa rellena de carne",
            "img": "./assets/comida/tripa.png"
        },
        {
            "nombre": "Chorizos y salchichones",
            "img": "./assets/comida/antecedentes.png"
        }
    ],
    "prendas": [
        {
            "prenda": "El Kandís",
            "img": "./assets/prendas/kandis.png",
            "inf": "Es una túnica cuyo largo podía ir a la rodilla o el tobillo y llevaba bordes adornados con flecos."
        },
        {
            "prenda": "Chal",
            "img": "./assets/prendas/chal.png",
            "inf": "Este podía ser rectangular o semicircular y variaba en tamaño. También lo llevaban adornado con flecos."
        }
    ],
    "edificaciones": [
        {
            "nombre": "Templo de Esagila",
            "pueblo": "Babilonios",
            "inf": "El Templo de Esagila fue construido en el siglo VII a. C. y dedicado al dios Marduk. El templo se encontraba en la ciudad de Babilonia y era el centro religioso más importante de la región. El templo estaba rodeado por un patio de 100 metros de largo y 50 metros de ancho. En el centro del patio se encontraba un altar de 10 metros de altura y 10 metros de diámetro. El templo estaba compuesto por tres niveles.",
            "caracteristicas": "El templo estaba compuesto por tres niveles. El primero era el nivel de los pilares, que se encontraba a 3 metros de altura. El segundo nivel era el de los arcos, que se encontraba a 6 metros de altura. El tercer nivel era el de las columnas, que se encontraba a 9 metros de altura. El templo estaba cubierto por una cúpula de 15 metros de diámetro. El templo estaba decorado con esculturas de dioses y de reyes.",
            "img": "./assets/edificaciones/esagila.png"
        },
        {
            "nombre": "Muralsla de Babilonia",
            "pueblo": "Babilonios",
            "inf": "La muralla de Babilonia fue construida en el siglo VI a. C. y tenía una longitud de 20 kilómetros. La muralla estaba compuesta por dos muros, uno interior y otro exterior. El muro interior tenía una altura de 10 metros y estaba compuesto por piedras de 2 metros de largo y 1 metro de ancho. El muro exterior tenía una altura de 15 metros y estaba compuesto por piedras de 3 metros de largo y 1 metro de ancho. La muralla estaba decorada con esculturas de dioses y de reyes. La muralla fue destruida por los persas en 539 a. C.",
            "caracteristicas": "La muralla estaba compuesta por dos muros, uno interior y otro exterior. El muro interior tenía una altura de 10 metros y estaba compuesto por piedras de 2 metros de largo y 1 metro de ancho. El muro exterior tenía una altura de 15 metros y estaba compuesto por piedras de 3 metros de largo y 1 metro de ancho.",
            "img": "./assets/edificaciones/muralla.png"
        },
        {
            "nombre": "Palacio de Babilonia",
            "pueblo": "Babilonios",
            "inf": "El gran palacio de Nabucodonosor estaba situado al oeste de la puerta de Isthar",
            "caracteristicas": "Estaba estructurado en torno a cuatro patios principales, recordando a los palacios asirios. Formaba un gran trapecio de 322 por 190 metros.",
            "img": "./assets/edificaciones/palacio.png"
        },
        {
            "nombre": "Puente colgante de Babilonia",
            "pueblo": "Babilonios",
            "inf": "Los Jardines Colgantes de Babilonia, una de las siete maravillas del mundo antiguo, fueron construidos en el siglo vi a. C. durante el reinado de Nabucodonosor II en la antigua ciudad de Babilonia (Babel de los textos bíblicos), a orillas del río Éufrates (Mesopotamia). ",
            "caracteristicas": "Los jardines estaban junto al palacio del Rey de Babilonia, contiguo al río, para que los viajeros los pudieran contemplar, ya que el acceso al pueblo estaba prohibido. En la más alta de las terrazas se situaba un depósito de agua desde el cual corrían varios arroyos. Los Jardines Colgantes de Babilonia no colgaban realmente en el sentido de estar suspendidos por cables o cuerdas. El nombre proviene de una traducción incorrecta de la palabra griega kremastos o del término en latín pensilis.",
            "img": "./assets/edificaciones/puentes.png"
        },
        {
            "nombre": "Puerta de Ishtar",
            "pueblo": "Babilonios",
            "inf": "La Puerta de Ishtar, también conocida como Puerta de la Paz, es una de las puertas de la antigua ciudad de Babilonia, en Irak. Fue construida en el siglo VII a. C. y dedicada a la diosa babilónica Ishtar. La puerta estaba compuesta por dos torres de 20 metros de altura. La puerta estaba decorada con esculturas de dioses y de reyes. La puerta fue destruida por los persas en 539 a. C.",
            "caracteristicas": "La puerta estaba compuesta por dos torres de 20 metros de altura.",
            "img": "./assets/edificaciones/ishtar.png"
        },
        {
            "nombre": "Ziggurat de Ur",
            "pueblo": "Babilonios",
            "inf": "El Ziggurat de Ur fue construido en el siglo XXVII a. C. y dedicado a la diosa babilónica Ninhursag. El ziggurat estaba compuesto por tres niveles. El primero era el nivel de los pilares, que se encontraba a 3 metros de altura. El segundo nivel era el de los arcos, que se encontraba a 6 metros de altura. El tercer nivel era el de las columnas, que se encontraba a 9 metros de altura. El ziggurat estaba cubierto por una cúpula de 15 metros de diámetro. El ziggurat estaba decorado con esculturas de dioses y de reyes. El ziggurat fue destruido por los persas en 539 a. C.",
            "caracteristicas": "Estaba rodeado por una muralla de unos 8 metros de altura y fue parcialmente restaurado a finales de los años 1970. Tiene planta rectangular de 64 × 45,7m y 15 metros de altura (aunque seguramente tuvo bastantes más, perdidos por la erosión y otras causas). El interior está completamente formado por ladrillos de adobe. Las paredes del exterior están hechas de ladrillos cocidos y como mortero utiliza el betún asfáltico, estando cada pared orientada hacia un punto cardinal.",
            "img": "./assets/edificaciones/zigurat.png"
        }
    ],
    "relatos": [
        {
            "titulo": "La creación del universo",
            "contenido": "Ea o Enki, Ante todo, partió en dos el cadáver, como una ostra; una mitad la suspendió en lo alto y formó la bóveda celeste, y la otra mitad la colocó en la parte baja, para constituir la base del mundo terrestre. Luego, construyó el firmamento y asignó un sitio fijo a las distintas constelaciones; reguló el curso del Sol y de la Luna, ordenó el paso del tiempo al instituir el año, que dividió en doce meses, y edificó las moradas de los grandes dioses Anu, Bel y Ea. De este modo, el orden sustituyó al desorden primitivo, y la luz, a la sombra; y el nuevo universo fue todo armonía.",
            "img": "./assets/relatos/enki.png"
        },
        {
            "titulo": "Nacimiento de los Dioses",
            "contenido": "En determinado momento, la masa de las aguas se mezcló con el abismo, y de esta unión, comenzaron a nacer dioses semejantes a enormes serpientes, a dragones alados, a aves de rapiña; y durante mucho tiempo, esos toscos seres divinos se agitaron en la confusa noche junto con las arremolinadas aguas. De éstas, nacieron, por fin, tres divinidades muy poderosas: Anu, el dios del cielo, Bel, el dios de la tierra, y Ea, el dios de los océanos. Pero los dos seres primitivos, Apsu y Tiamat, no se mostraron en modo alguno conformes con el nuevo estado de cosas. Uno y otro eran demonios torpes y tardos, como es natural, tratándose de dos espíritus siempre inmersos en una noche sin fin y en una lenta corriente de agua; los nuevos dioses, en cambio, eran ágiles e inquietos, porque en ellos, la vida había tomado forma y había iniciado su infatigable actividad. Apsu se lamentaba de esta manera: Durante el día, no tengo un instante de paz, y de noche, no puedo pegar los ojos con todos esos seres que me trastornan. Quiero exterminarlos y restablecer el gran silencio a que estábamos acostumbrados. Hablaba, en suma, a excepción del proyecto exterminador, como podría hablar un viejo abuelo a quien los nietos alborotadores hubiesen turbado la paz. Tiamat no estaba de acuerdo con su compañero en lo de destruir a su descendencia, pero Apsu estaba resuelto a eliminarla, y para asegurar el golpe, había tomado los servicios de Mummu, un espíritu inferior, el cual existía desde antes del nacimiento de los nuevos dioses, y a quien Tiamat había dado el encargo de tener a raya el tumulto de las aguas.",
            "img": "./assets/relatos/dioses.png"
        },
        {
            "titulo": "Creación de la tierra",
            "contenido": "El Sol dominó el día, entrando triunfalmente en la bóveda celeste por una puerta que se abría a un lado del cielo y saliendo en el ocaso por una puerta opuesta; la Luna gobernó la noche e impidió con su resplandor que la oscuridad se adueñase de ella. Finalmente, Mardük trenzó sobre la superficie del océano un vasto cañizo, lo cubrió de polvo y greda, y formó así la tierra, con las montañas, los valles y los ríos, que muy pronto verdeó de plantas.",
            "img": "./assets/relatos/creacion.png"
        }
    ]
}
```

### Autor: Rodrigo Lopez Garnica
