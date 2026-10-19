(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={branding:{logo:`vectors/veteraphonelogotype.svg`,headerLogo:`vectors/vt512.png`,favicon:`vectors/vt512.png`},site:{name:`Veteraphone`,subtitle:`Society of Lost and Forgotten Records`,timeline:{start:1890,end:1960},mission:`{NAME} seeks to become a preservation community that welcomes individuals who are interested in old 78rpm records. This period of music spanning over 50 years of rare and forgotten music that users can help to uncover, rediscover and preserve by discussing and supporting any pieces of physical media or rare articles related to the period of shellac disk production on this emerging community effort`,cards:{map:{heading:`Looking for Information?`,title:`Jazz Map`,text:`We envisioned presenting music history in a different manner to conventional archives. Giving the user an interactive experience where the ability to see the regions where music originated and evolved from can be observed through a map of the United States in which it will be possible to listen and read about the movement of "Jazz" across the regions through the years.`},articles:{heading:`Looking to Contribute?`,title:`Articles`,text:`Here the articles tab functions as a way for users to interact, discuss and discover new information about the 78rpm music period, with the ability to share any interesting, rare or personal finds and encourage users to build a connected community around the topics.`}}},carousel:{images:[`Labels/R-33077739-1738992411-2680.jpg`],stats:{collected:45e4,saved:6e5,listenable:null}},partners:{title:`Working With`,caption:`Their guidance on information and music licensing helped consolidate this project.`,list:[{name:`NEH`,full:`National Endowment for the Humanities`,url:`https://www.neh.gov`,contact:`https://www.neh.gov/about/contact`,logo:`textures/NEHLogo.png`},{name:`DAHR`,full:`Discography of American Historical Recordings`,url:`https://adp.library.ucsb.edu`,contact:`Email: victor@library.ucsb.edu`,logo:`textures/DAHRLogo.png`},{name:`LCJBX`,full:`Library of Congress National Jukebox`,url:`https://www.loc.gov/jukebox/`,contact:`https://www.loc.gov/contact/`,logo:`textures/LoCLogo.png`}]},pages:{support:{title:`Support us`,text:`Support the project by donating to our cause. Your contributions will help us preserve and share the rich history of 78rpm records.`},donations:{title:`Donations`,text:`Give me back my kern.`},contacts:{title:`Contacts`,text:`Don't try it, go away.`},terms:{title:`Terms of Use`,text:`By agreeing to use and interact with the Veteraphone project website, you agree to our terms which are liable to be modified at any moment in coordination with management and the project supporters. If there is anything you find unclear about any stated changes, put yourself in contact with the project team at (itsabazinga@hotmail.com)`},privacy:{title:`Privacy Policy`,text:`No privacy here, all data goes straight to the data centers.`},rights:{title:`Consumer Rights FAQ`,text:`Whoop, there goes an elbow.`},cookies:{title:`Cookie Preferences`,text:`No Cookies here.`},accessibility:{title:`Accessibility`,text:`Top right corner.`},rules:{title:`Community Rules`,text:`Don't be an old heya watchamacallit.`},account:{title:`My account`,text:`That's all there is, there isn't anymore`}},regions:{west:{n:`Western`,theme:`Hybridization`,era:`1890–1960`,city:`Los Angeles`,txt:`Creole bandleaders who came west blended New Orleans ensemble playing with local dance and brass traditions.`},midwest:{n:`Midwestern`,theme:`Migration`,era:`1890–1960`,city:`Chicago`,txt:`As Black musicians moved north, Chicago and nearby studios became a second home for the music.`},south:{n:`Southern`,theme:`Origin`,era:`1890–1960`,city:`New Orleans`,txt:`Brass bands, ragtime and blues met in New Orleans dance halls, creating the sound later called jazz.`},northeast:{n:`Northeast`,theme:`Commercialization`,era:`1890–1960`,city:`New York`,txt:`Record companies in New York turned the style into a product, with polished dance orchestras and big sales.`}},articles:[{id:1,t:`The disc with no label`,d:1923,th:`Identification`,g:[`Gennett`,`Matrix numbers`],b:`A pressing turns up with a blank paper label. Matrix numbers scratched near the center may identify the session.`},{id:2,t:`Who played cornet?`,d:1917,th:`Personnel`,g:[`Victor`,`Band lineups`],b:`Session ledgers list the band but not every player. Comparing takes helps narrow the lineup.`},{id:3,t:`One song, three labels`,d:1920,th:`Variants`,g:[`Victor`,`Reissues`],b:`The same recording appears under different catalog numbers. Tracing them shows how a hit traveled.`}],map:{imageWidth:3920,imageHeight:2457,planeWidth:2,displacement:.05,zoomSelected:1.3,zoomMax:4,cameraTiltDeg:20,regionScale:{idle:1,hover:1.05,selected:1.03},regionOpacity:{idle:.5,hover:.92,selected:.88},terrain:{mesh:`models/JAZZMAP.gltf`,height:`textures/MapDiffuse.png`,normal:`textures/MapNormal.jpg`,mask:`textures/MapAlpha.png`,color:`textures/MapColor.png`},regions:{west:{model:null,texture:`textures/regions/West.png`,placement:{x:-1850,y:-1055,w:3106,h:3540}},midwest:{model:null,texture:`textures/regions/Midwest.png`,placement:{x:990,y:-720,w:3268,h:2344}},south:{model:null,texture:`textures/regions/South.png`,placement:{x:580,y:455,w:4600,h:3230}},northeast:{model:null,texture:`textures/regions/NorthEast.png`,placement:{x:4230,y:-1180,w:1546,h:1840}}}}},t=e=>({title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null,...e}),n=[t({id:101,region:`south`,title:`Livery Stable Blues`,artist:`Original Dixieland Jass Band`,year:1917,label:`Victor`,tags:[`New Orleans`,`Novelty`],description:`Placeholder description. Replace with your own text.`,audio:null,image:null}),t({id:102,region:`south`,title:`We are not the Hoosier Hot Shots`,artist:`Bob Skyles and His Skyrockets`,year:1937,label:`BlueBird`,tags:[`Texas`,`San Antonio`],description:`Placeholder description. Replace with your own text.`,audio:`music/NottheHoosierHotShots1937.m4a`,image:`music/R-13084509-1547767533-7096.jpg`}),t({id:103,region:`south`,title:`Honky-Tonk Gal`,artist:`Modern Mountaineers`,year:1941,label:``,tags:[`Texas`],description:`Recorded in 4/7/1941 Dallas, Texas. Jefferson Hotel`,audio:`music/HonkyTonkGal1941.m4a`,image:`music/R-9913173-1488435586-9162.jpg`}),t({id:104,region:`south`,title:`Beer Drinkin Mama`,artist:`Light Crust Doughboys`,year:1939,label:`Vocalion`,tags:[`Texas`],description:`Recorded in 6/15/1939 Houston, Texas.`,audio:`music/BeerDrinkinMama1939.m4a`,image:`music/R-10691783-1547763010-3519.jpg`}),t({id:105,region:`south`,title:`When They Play Rural Rhythm`,artist:`Bill Boyd and his Cowboy Ramblers`,year:1937,label:`BlueBird`,tags:[],description:`Originally released 6/17/1936, recorded 2/24/1936 San Antonio, Texas, Texas Hotel`,audio:`music/WhenTheyPlayRuralRhythm1937.m4a`,image:`music/R-9702583-1703318762-9359.jpg`}),t({id:201,region:`midwest`,title:`Dippermouth Blues`,artist:`King Oliver's Creole Jazz Band`,year:1923,label:`Gennett`,tags:[`Chicago`,`Cornet`],description:`Placeholder description. Replace with your own text.`,audio:null,image:null}),t({id:202,region:`midwest`,title:`Stay Out of the South`,artist:`Coon-Sanders Original Nighthawk Orchestra`,year:1927,label:`Victor`,tags:[],description:`Victor record 21258, recorded in 1927. Vocal refrain by C. A. Coon and J. L. Sanders.`,audio:`music/StayOutoftheSouth1927.m4a`,image:`music/maxresdefault-3020783559.jpg`}),t({id:203,region:`midwest`,title:`Toot Toot Tootsie, Goodbye`,artist:`The Hoosier Hot Shots`,year:1936,label:``,tags:[],description:`Melotone 7-01-68, Oct 5, 1936`,audio:`music/TooTootTootsie1936.mp3`,image:`music/R-5649028-1398929895-3471.jpeg-1073626177.jpg`}),t({id:204,region:`midwest`,title:`I Want to be Known as Susies Feller`,artist:`Isham Jones & His Orchestra`,year:1926,label:`Burnswick`,tags:[],description:``,audio:`music/SusiesFeller1926.m4a`,image:`music/default-3114492241.jpg`}),t({id:205,region:`midwest`,title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null}),t({id:301,region:`west`,title:`Ory's Creole Trombone`,artist:`Kid Ory's Sunshine Orchestra`,year:1922,label:`Nordskog`,tags:[`Los Angeles`,`Trombone`],description:`Placeholder description. Replace with your own text.`,audio:null,image:null}),t({id:302,region:`west`,title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null}),t({id:303,region:`west`,title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null}),t({id:304,region:`west`,title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null}),t({id:305,region:`west`,title:``,artist:``,year:null,label:``,tags:[],description:``,audio:null,image:null}),t({id:401,region:`northeast`,title:`Whispering`,artist:`Paul Whiteman and His Orchestra`,year:1920,label:`Victor`,tags:[`Dance orchestra`,`Bestseller`],description:`Placeholder description. Replace with your own text.`,audio:null,image:null}),t({id:402,region:`northeast`,title:`Alma Mammy`,artist:`Fred Warings Pennylvanians`,year:1929,label:`Victor / Publix / Velvet Tone`,tags:[`New York`],description:`A Song written for the movie "Sweetie" from 1929. With a vocal refrain by Clare Hanlon and chorus; Victor 22254-A, take 3 (10").  Electrically recorded in Liederkranz Hall, New York City, on 16 December 1929`,audio:`music/AlmaMammy1929.m4a`,image:`music/R-11287166-1572226378-5403.jpg`}),t({id:403,region:`northeast`,title:`Oh! You Sweet Old Watcha May Call It`,artist:`Irving Aaronson and his Commanders`,year:1928,label:`Victor`,tags:[],description:`Victor 21778-A mx 57572-6, Recorded on October 16, 1928, New York`,audio:`music/YouSweetOldWatchaMaCallIt1928.m4a`,image:`music/21778-78-2884964480.jpg`}),t({id:404,region:`northeast`,title:`Everybody Loves my Girl`,artist:`Harry Reser and His Six Jumping Jacks`,year:1927,label:`Banner`,tags:[],description:``,audio:`music/EverybodyLovesMyGirl1927.m4a`,image:`music/R-15351236-1590160256-3433.jpg`}),t({id:405,region:`northeast`,title:`Steppin Around`,artist:`Jan Garber and His Orchestra`,year:1926,label:``,tags:[],description:``,audio:`music/SteppinAround1926.m4a`,image:`music/20367-2.jpg`})],r={site:{subtitle:`Sociedad de Discos Perdidos y Olvidados`,mission:`{NAME} aspira a convertirse en una comunidad de preservación que da la bienvenida a quienes se interesan por los antiguos discos de 78 rpm. Este periodo musical, que abarca más de 50 años de música rara y olvidada, puede ser descubierto, redescubierto y preservado por los usuarios mediante el debate y el apoyo a cualquier pieza de material físico o artículo poco común relacionado con la época de producción de discos de goma laca, en este esfuerzo comunitario emergente.`,cards:{map:{heading:`¿Buscas información?`,title:`Mapa del Jazz`,text:`Imaginamos presentar la historia de la música de una forma distinta a la de los archivos convencionales. Ofrecemos al usuario una experiencia interactiva en la que puede ver las regiones donde nació y evolucionó la música a través de un mapa de Estados Unidos, donde será posible escuchar y leer sobre el movimiento del «jazz» por las regiones a lo largo de los años.`},articles:{heading:`¿Quieres contribuir?`,title:`Artículos`,text:`Aquí la pestaña de artículos funciona como un espacio para que los usuarios interactúen, debatan y descubran nueva información sobre la época de los discos de 78 rpm, con la posibilidad de compartir hallazgos interesantes, raros o personales y de animar a los usuarios a formar una comunidad conectada en torno a estos temas.`}}},partners:{title:`Trabajamos con`,caption:`Su orientación sobre información y licencias musicales ayudó a consolidar este proyecto.`,list:[{full:`Fondo Nacional para las Humanidades`,contact:`Añade el contacto aquí`},{full:`Discografía de Grabaciones Históricas Estadounidenses`,contact:`Añade el contacto aquí`},{full:`National Jukebox de la Biblioteca del Congreso`,contact:`Añade el contacto aquí`}]},pages:{support:{title:`Apóyanos`,text:`Texto provisional. Añade aquí el texto de «Apóyanos».`},donations:{title:`Donaciones`,text:`Texto provisional. Añade aquí el texto de «Donaciones».`},contacts:{title:`Contacto`,text:`Texto provisional. Añade aquí el texto de «Contacto».`},terms:{title:`Términos de uso`,text:`Texto provisional. Añade aquí los términos de uso.`},privacy:{title:`Política de privacidad`,text:`Texto provisional. Añade aquí la política de privacidad.`},rights:{title:`Preguntas sobre derechos del consumidor`,text:`Texto provisional. Añade aquí las preguntas sobre derechos del consumidor.`},cookies:{title:`Preferencias de cookies`,text:`Texto provisional. Añade aquí las preferencias de cookies.`},accessibility:{title:`Accesibilidad`,text:`Texto provisional. Añade aquí la declaración de accesibilidad.`}},regions:{west:{n:`Oeste`,theme:`Hibridación`,city:`Los Ángeles`,txt:`Los líderes criollos que llegaron al oeste mezclaron el estilo de conjunto de Nueva Orleans con las tradiciones locales de baile y metales.`},midwest:{n:`Medio Oeste`,theme:`Migración`,city:`Chicago`,txt:`Cuando los músicos afroamericanos se desplazaron hacia el norte, Chicago y los estudios cercanos se convirtieron en un segundo hogar para esta música.`},south:{n:`Sur`,theme:`Origen`,city:`Nueva Orleans`,txt:`Las bandas de metales, el ragtime y el blues se encontraron en los salones de baile de Nueva Orleans y dieron origen al sonido que más tarde se llamó jazz.`},northeast:{n:`Noreste`,theme:`Comercialización`,city:`Nueva York`,txt:`Las compañías discográficas de Nueva York convirtieron el estilo en un producto, con orquestas de baile pulidas y grandes ventas.`}},articles:[{t:`El disco sin etiqueta`,th:`Identificación`,g:[`Gennett`,`Números de matriz`],b:`Aparece un disco con la etiqueta de papel en blanco. Los números de matriz grabados cerca del centro pueden identificar la sesión.`},{t:`¿Quién tocó la corneta?`,th:`Músicos`,g:[`Victor`,`Alineaciones`],b:`Los registros de las sesiones enumeran la banda, pero no a todos los músicos. Comparar las tomas ayuda a reducir la alineación.`},{t:`Una canción, tres sellos`,th:`Variantes`,g:[`Victor`,`Reediciones`],b:`La misma grabación aparece con distintos números de catálogo. Rastrearlos muestra cómo viajó un éxito.`}]},i={en:{nav_map:`Jazz Map`,nav_articles:`Articles`,nav_sources:`Sources`,burger_label:`Open menu`,lang_label:`Language`,f_disclaimer:`Disclaimer`,f_disclaimer_text:`The Veteraphone Project stands as a non-profit organization backed by the DAHR and the NEH as an incentive for the preservation of historical records. All copyright belongs to its rightful owners.`,f_support:`Support`,f_support_us:`Support us`,f_donations:`Donations`,f_contacts:`Contacts`,f_legal:`Legal`,f_terms:`Terms of Use`,f_privacy:`Privacy Policy`,f_rights:`Consumer Rights FAQ`,f_cookies:`Cookie Preferences`,f_access:`Accessibility`,f_copy:`© 2026 The Veteraphone Project. Affiliated with the National Endowment for the Humanities`,signed_in:`Signed in as`,guest:`Guest`,m_home:`Home`,m_map_overview:`Map Overview`,m_logout:`Log-out`,m_login:`Log-in`,l_register:`Register`,l_user:`User`,l_password:`Password`,l_error:`Enter both a user and a password, then try again.`,l_have:`I have an account`,l_create:`Create an account`,l_guest:`Continue as guest`,l_demo:`Demo only: any user and password will work.`,h_open_map:`Open the map →`,h_read:`Read the articles →`,c_label:`Preservation effort`,c_title:`Our preservation effort`,c_collected:`Records collected`,c_saved:`Records saved`,c_listen:`Available to listen`,map_label:`Interactive map of jazz regions`,region_label:`Regions`,hint_idle:`Drag to move, click to tack a pin`,hint_region:`Regional view`,r_label:`{n} region`,overview:`Overview`,records:`Records`,p_close:`Close panel`,p_info:`Information overview`,p_author:`Author or band`,p_photo:`(photo placeholder)`,p_hub:`Hub: {c}. Placeholder text for the demo.`,p_sheet:`Sheet music`,p_library:`Music library`,p_label_ph:`Label picture`,p_label_add:`(add it in records.js)`,p_label_alt:`Label of {t}`,p_play:`Play`,p_pause:`Pause`,p_seek:`Seek`,p_no_audio:`No audio file added yet for this record.`,p_audio_err:`The audio file could not be loaded. Check its path in records.js.`,p_empty:`Empty slot`,p_empty_btn:`Empty slot (add a record in records.js)`,p_list:`Records in this region`,p_search:`Search records`,s_title:`Music search`,s_tags:`Tags`,s_ph:`Search title or artist`,s_by_date:`Sort by date`,s_by_title:`Sort by title`,s_open:`Open in library`,s_none:`No records match. Clear the tag or change your search.`,a_title:`The Record Cabinet`,a_intro:`Help us solve a mystery. Pick a topic to read.`,a_by_date:`By date`,a_by_theme:`By theme`,a_open:`Open article`,a_topic:`Topic`,a_gallery:`Gallery`,a_back:`Back to articles`,a_image:`Image {n}`,a_placeholder:`Placeholder text for the demo.`,so_intro:`Recordings and data come from these archives. Each link opens in a new tab.`,so_dahr_text:`Discography of American Historical Recordings, the main source for session and catalog data.`,so_lcjbx_text:`Library of Congress National Jukebox, for streaming early recordings.`,so_open_dahr:`Open DAHR`,so_open_lcjbx:`Open LCJBX`,pg_back:`Back to Home`,pg_nf:`Page not found`,menu_close:`Close menu`,m_account:`Account`,m_register:`Register`,m_my_account:`My account`,m_browse:`Browse`,m_search:`Music Search`,search_ph:`Search records, articles...`,search_label:`Search`,sp_welcome:`Welcome. Explore the Jazz Map →`,sp_close:`Close`,a_write:`Write an article`,a_open_note:`Everyone can read the articles. Posting or uploading needs an account and agreement to the Community Rules.`,a_pending:`Pending moderation`,a_flash:`Thank you. Your article was submitted and will appear after a moderator reviews it.`,post_gate_title:`Before you post`,post_gate_text:`Please read the Terms of Use and the Community Rules. Articles and uploads are reviewed by moderators before they are published.`,post_terms:`Terms of Use`,post_rules:`Community Rules`,post_agree:`I have read and agree to the Terms of Use and the Community Rules.`,post_continue:`Agree and continue`,post_cancel:`Cancel`,post_title:`Write an article`,post_remind:`Reminder: read the {terms} and the {rules} before you post. Your article is reviewed by a moderator before it appears.`,post_f_title:`Title`,post_f_theme:`Theme`,post_f_theme_ph:`e.g. Identification`,post_f_body:`Article`,post_f_file:`Attach images or audio (optional)`,post_submit:`Submit for review`,post_err:`Add a title and the article text.`,post_demo:`Demo: attachments are not uploaded yet.`,cm_title:`Comments`,cm_intro:`Anyone can comment, with or without an account. Comments are reviewed by moderators before other readers see them.`,cm_name:`Name (optional, leave blank to stay anonymous)`,cm_text:`Comment`,cm_rules:`By commenting you agree to the`,cm_send:`Send comment`,cm_pending:`Pending moderation`,cm_anon:`Anonymous`,cm_error:`Write a comment first.`,pg_read_rules:`Read the Community Rules`,pg_read_terms:`Read the Terms of Use`,pg_to_post:`Continue to posting`,f_community:`Community Rules`},es:{nav_map:`Mapa del Jazz`,nav_articles:`Artículos`,nav_sources:`Fuentes`,burger_label:`Abrir menú`,lang_label:`Idioma`,f_disclaimer:`Aviso legal`,f_disclaimer_text:`The Veteraphone Project es una organización sin fines de lucro respaldada por el DAHR y el NEH como incentivo para la preservación de registros históricos. Todos los derechos de autor pertenecen a sus legítimos propietarios.`,f_support:`Apoyo`,f_support_us:`Apóyanos`,f_donations:`Donaciones`,f_contacts:`Contacto`,f_legal:`Legal`,f_terms:`Términos de uso`,f_privacy:`Política de privacidad`,f_rights:`Preguntas sobre derechos del consumidor`,f_cookies:`Preferencias de cookies`,f_access:`Accesibilidad`,f_copy:`© 2026 The Veteraphone Project. Afiliado al National Endowment for the Humanities (Fondo Nacional para las Humanidades)`,signed_in:`Sesión iniciada como`,guest:`Invitado`,m_home:`Inicio`,m_map_overview:`Vista general del mapa`,m_logout:`Cerrar sesión`,m_login:`Iniciar sesión`,l_register:`Registrarse`,l_user:`Usuario`,l_password:`Contraseña`,l_error:`Escribe un usuario y una contraseña e inténtalo de nuevo.`,l_have:`Ya tengo una cuenta`,l_create:`Crear una cuenta`,l_guest:`Continuar como invitado`,l_demo:`Solo demostración: cualquier usuario y contraseña funcionan.`,h_open_map:`Abrir el mapa →`,h_read:`Leer los artículos →`,c_label:`Esfuerzo de preservación`,c_title:`Nuestro esfuerzo de preservación`,c_collected:`Discos recopilados`,c_saved:`Discos preservados`,c_listen:`Disponibles para escuchar`,map_label:`Mapa interactivo de las regiones del jazz`,region_label:`Regiones`,hint_idle:`Arrastra para mover, haz clic para clavar un pin`,hint_region:`Vista regional`,r_label:`Región {n}`,overview:`Resumen`,records:`Discos`,p_close:`Cerrar panel`,p_info:`Resumen de información`,p_author:`Autor o banda`,p_photo:`(foto por añadir)`,p_hub:`Centro: {c}. Texto de ejemplo para la demostración.`,p_sheet:`Partituras`,p_library:`Biblioteca musical`,p_label_ph:`Imagen de la etiqueta`,p_label_add:`(añádela en records.js)`,p_label_alt:`Etiqueta de {t}`,p_play:`Reproducir`,p_pause:`Pausa`,p_seek:`Buscar`,p_no_audio:`Aún no se ha añadido un archivo de audio para este disco.`,p_audio_err:`No se pudo cargar el archivo de audio. Revisa su ruta en records.js.`,p_empty:`Espacio vacío`,p_empty_btn:`Espacio vacío (añade un disco en records.js)`,p_list:`Discos de esta región`,p_search:`Buscar discos`,s_title:`Búsqueda musical`,s_tags:`Etiquetas`,s_ph:`Buscar título o artista`,s_by_date:`Ordenar por fecha`,s_by_title:`Ordenar por título`,s_open:`Abrir en la biblioteca`,s_none:`Ningún disco coincide. Quita la etiqueta o cambia la búsqueda.`,a_title:`El Archivo de Discos`,a_intro:`Ayúdanos a resolver un misterio. Elige un tema para leer.`,a_by_date:`Por fecha`,a_by_theme:`Por tema`,a_open:`Abrir artículo`,a_topic:`Tema`,a_gallery:`Galería`,a_back:`Volver a los artículos`,a_image:`Imagen {n}`,a_placeholder:`Texto de ejemplo para la demostración.`,so_intro:`Las grabaciones y los datos provienen de estos archivos. Cada enlace se abre en una pestaña nueva.`,so_dahr_text:`Discography of American Historical Recordings, la fuente principal de datos de sesiones y catálogo.`,so_lcjbx_text:`National Jukebox de la Biblioteca del Congreso, para escuchar grabaciones antiguas.`,so_open_dahr:`Abrir DAHR`,so_open_lcjbx:`Abrir LCJBX`,pg_back:`Volver al inicio`,pg_nf:`Página no encontrada`}},a=(e,t)=>{let n=(i[window.lang]&&i[window.lang][e])??i.en[e]??e;if(t)for(let e in t)n=n.replaceAll(`{`+e+`}`,t[e]);return n},o=`veteraphone-lang`;function s(){try{let e=localStorage.getItem(o);if(e===`en`||e===`es`)return e}catch{}return(navigator.language||`en`).toLowerCase().startsWith(`es`)?`es`:`en`}function c(e){try{localStorage.setItem(o,e)}catch{}}function l(e,t){return Array.isArray(e)?e.map((e,n)=>t&&t[n]!==void 0?l(e,t[n]):e):e&&typeof e==`object`?Object.fromEntries(Object.keys(e).map(n=>[n,t&&n in t?l(e[n],t[n]):e[n]])):t===void 0?e:t}function ee(){document.querySelectorAll(`[data-i18n]`).forEach(e=>{e.textContent=a(e.dataset.i18n)}),document.querySelectorAll(`[data-i18n-ph]`).forEach(e=>{e.placeholder=a(e.dataset.i18nPh)}),document.querySelectorAll(`[data-i18n-aria]`).forEach(e=>{e.setAttribute(`aria-label`,a(e.dataset.i18nAria))})}var u=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches;function te(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var d=e=>Number(e).toLocaleString(window.lang===`es`?`es-ES`:`en-US`);function ne(e=document){let t=[...e.querySelectorAll(`.reveal:not(.in)`)];if(!t.length)return;if(!(`IntersectionObserver`in window)||u()){t.forEach(f);return}let n=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(f(e.target),n.unobserve(e.target))}),{threshold:.15,rootMargin:`0px 0px -8% 0px`});t.forEach(e=>n.observe(e))}function f(e){e.classList.add(`in`),(e.matches(`[data-count]`)?[e]:[...e.querySelectorAll(`[data-count]`)]).forEach(re)}function re(e){let t=+e.dataset.count;if(u()||!t){e.textContent=d(t);return}let n=performance.now(),r=i=>{let a=Math.min(1,(i-n)/2200);e.textContent=d(Math.round(t*(1-(1-a)**3))),a<1&&requestAnimationFrame(r)};e.textContent=d(0),requestAnimationFrame(r)}var ie=.085,ae=.8,p=40;function oe(e){if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let t=scrollY,n=0,r=()=>document.documentElement.scrollHeight-innerHeight,i=()=>{let e=t-scrollY;if(Math.abs(e)<.5){scrollTo({top:t,behavior:`instant`}),n=0;return}scrollTo({top:scrollY+e*ie,behavior:`instant`}),n=requestAnimationFrame(i)};addEventListener(`wheel`,a=>{if(!(!e()||a.ctrlKey||a.deltaMode!==0||Math.abs(a.deltaY)<p)){for(let e=a.target;e&&e!==document.body;e=e.parentElement)if(/(auto|scroll)/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight)return;a.preventDefault(),n||(t=scrollY),t=Math.max(0,Math.min(r(),t+a.deltaY*ae)),n||(n=requestAnimationFrame(i))}},{passive:!1}),addEventListener(`scroll`,()=>{n||(t=scrollY)},{passive:!0})}var se=`modulepreload`,ce=function(e,t){return new URL(e,t).href},m={},le=function(e){return e.pathname.endsWith(`.css`)},ue=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ce(t,n);let r=s(t);if(r.href in m)return;m[r.href]=!0;let i=le(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:se,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},h=e=>`./`+e,g=e.regions,_=e.articles,v=e.site,y=e.partners,b=e.pages,x=n;Object.assign(window,{lang:s(),user:null,next:null,reg:!1,sel:null,rec:null,playing:!1,panelOpen:!1,panelSection:null,tagSel:null,sortBy:`date`,artId:1,artSort:`date`,tab:`topic`,rulesOk:!1,myPosts:[],comments:{}});var S=e=>document.querySelector(e),C=e=>{location.hash=e,E()},w=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),T=()=>{let e=document.querySelector(`header`);return e.offsetTop+e.offsetHeight};function de(){S(`#nav`).classList.contains(`open`)?E():fe()}function fe(){D(),S(`#nav`).classList.add(`open`),S(`#nav`).removeAttribute(`inert`),S(`#burger`).setAttribute(`aria-expanded`,`true`)}function E(){S(`#nav`).classList.remove(`open`),S(`#nav`).setAttribute(`inert`,``),S(`#burger`).setAttribute(`aria-expanded`,`false`)}function D(){S(`#nav`).innerHTML=`
    <button class="nav-x" onclick="closeMenu()" aria-label="${a(`menu_close`)}">&#10005;</button>
    <div class="user">${user?a(`signed_in`)+` `+user:a(`guest`)}</div>

    <div class="nav-group">${a(`m_account`)}</div>
    ${user?`<button onclick="go('/page/account')">${a(`m_my_account`)}</button>
         <button onclick="logout()">${a(`m_logout`)}</button>`:`<button onclick="openLogin(false)">${a(`m_login`)}</button>
         <button onclick="openLogin(true)">${a(`m_register`)}</button>`}

    <div class="nav-group">${a(`m_browse`)}</div>
    <button onclick="go('/')">${a(`m_home`)}</button>
    <button onclick="mapOverview()">${a(`m_map_overview`)}</button>
    <button onclick="go('/search')">${a(`m_search`)}</button>
    <button onclick="go('/articles')">${a(`nav_articles`)}</button>
    <button onclick="go('/sources')">${a(`nav_sources`)}</button>`}function pe(e){reg=e,E(),location.hash===`#/login`?k():C(`/login`)}function me(){user=null,rulesOk=!1,C(`/login`)}var O={login:he,home:L,page:Ie,map:be,search:ke,articles:Me,post:Le,article:Ne,sources:Fe};function k(){let e=location.hash.slice(2).split(`/`),t=e[0]||`home`,n=e[1],r=O[t]||L;if(t===`post`&&!user)return next=`/post`,C(`/login`);t!==`map`&&G(),document.body.dataset.page=O[t]?t:`home`,document.body.style.overflow=t===`map`?`hidden`:``,S(`#app`).innerHTML=r(n),window.scrollTo(0,0),ne(S(`#app`)),t===`map`&&Oe()}function he(){let e=reg?a(`l_register`):a(`m_login`);return`
    <div class="card" style="max-width:420px;margin:2rem auto">
      <h2>${e}</h2>
      <label>${a(`l_user`)}<input id="u" class="field" autocomplete="username"></label>
      <label>${a(`l_password`)}<input id="pw" type="password" class="field" autocomplete="current-password"></label>
      <div class="err" id="err" role="alert"></div>
      <div class="bar">
        <button class="on" onclick="auth()">${e}</button>
        <button onclick="reg=!reg;view()">${reg?a(`l_have`):a(`l_create`)}</button>
        <button onclick="go('/')">${a(`l_guest`)}</button>
      </div>
      <p class="muted">${a(`l_demo`)}</p>
    </div>`}function ge(){let e=S(`#u`).value.trim(),t=S(`#pw`).value;if(!e||!t){S(`#err`).textContent=a(`l_error`);return}user=e,reg=!1;let n=next||`/`;next=null,C(n)}var _e=e=>e.replaceAll(`{name}`,v.name).replaceAll(`{NAME}`,v.name.toUpperCase()),A=!1,j=!1,ve=`
  <svg class="biz-art" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="52" cy="190" r="98" stroke-dasharray="4 8"/>
    <circle cx="100" cy="36" r="9"/><path d="M100 27V8M91 8H109"/>
    <path d="M94 44 52 176 48 192 56 180 100 48M106 44 148 176 158 192 150 178 100 48"/>
    <path d="M70 118Q100 130 130 118"/>
  </svg>`,M=`
  <svg class="biz-art" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
    <circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="86"/><circle cx="100" cy="100" r="76"/>
    <circle cx="100" cy="100" r="66"/><circle cx="100" cy="100" r="56"/>
    <circle cx="100" cy="100" r="36" stroke-width="3"/><circle cx="100" cy="100" r="30" stroke-dasharray="3 6"/>
    <circle cx="100" cy="100" r="4"/><path d="M30 62A84 84 0 0 1 78 22" stroke-width="5"/>
  </svg>`;function N(){let t=e.branding||{};if(t.headerLogo){let e=S(`#brand-logo`);e.src=h(t.headerLogo),e.hidden=!1,document.querySelector(`.brand`).classList.add(`has-logo`)}let n=t.favicon;if(!n)return;let r=document.querySelector(`link[rel~="icon"]`);r||(r=document.createElement(`link`),r.rel=`icon`,document.head.appendChild(r)),r.type=n.endsWith(`.svg`)?`image/svg+xml`:``,r.href=h(n)}function P(){let t=(e.branding||{}).logo;return t?`<img class="hero-logo" src="${h(t)}" alt="${v.name}" fetchpriority="high" decoding="async">`:`<span class="hero-wordmark">${v.name}</span>`}function F(){let t=e.carousel||{images:[],stats:{}},n=t.images.length?te(t.images).map(e=>`<img class="car-item" src="${h(e)}" alt="" loading="lazy" decoding="async">`):Array.from({length:10},(e,t)=>`<div class="car-item car-ph" aria-hidden="true">${t+1}</div>`),r=n.concat(n),i=t.stats||{},o=[[`c_collected`,i.collected||0],[`c_saved`,i.saved||0],[`c_listen`,i.listenable??x.filter(e=>e.audio).length]];return`
    <section class="carousel ${I()}" aria-label="${a(`c_label`)}">
      <div class="car-viewport"><div class="car-track" style="--car-time:${n.length*7}s">${r.join(``)}</div></div>
      <div class="car-stats">
        <h3>${a(`c_title`)}</h3>
        <div class="stats">
          ${o.map(([e,t])=>`<div class="stat"><span class="stat-num" data-count="${t}">${d(t)}</span><span class="stat-label">${a(e)}</span></div>`).join(``)}
        </div>
      </div>
    </section>`}function ye(e){let t=e.url.replace(/^https?:\/\/(www\.)?/,``).replace(/\/$/,``);return`
    <div class="partner">
      <div class="partner-head">
        <div class="partner-logo">${e.logo?`<img src="${h(e.logo)}" alt="${e.name} logo" loading="lazy" decoding="async">`:`logo`}</div>
        <h4>${e.name}</h4>
      </div>
      <p class="partner-full">${e.full}</p>
      <a href="${e.url}" target="_blank" rel="noopener">${t}</a>
      <p class="partner-contact">${e.contact}</p>
    </div>`}var I=()=>j?`reveal in`:`reveal`;function L(){let e=v.cards,t=!A&&!j;return A=!0,`
    <!-- 1. title (fades in from black on the first visit) -->
    <section class="hero ${t?`intro`:``}">
      <h1 class="hero-title">${P()}</h1>
      <p class="hero-sub">${v.subtitle}</p>
    </section>

    <!-- 2. mission statement -->
    <section class="mission ${I()}"><p>${_e(v.mission)}</p></section>

    <!-- 3. carousel with the preservation numbers -->
    ${F()}

    <!-- 4. Jazz Map -->
    <section class="path">
      <h3 class="path-title ${I()}">${e.map.heading}</h3>
      <div class="path-row ${I()}">
        <button class="biz" style="--tilt:-1.5deg" onclick="go('/map')">
          ${ve}
          <span class="biz-title">${e.map.title}</span>
          <span class="biz-go">${a(`h_open_map`)}</span>
        </button>
        <p class="path-text">${e.map.text}</p>
      </div>
    </section>

    <!-- 5. Articles (text on the left, card on the right) -->
    <section class="path">
      <h3 class="path-title ${I()}">${e.articles.heading}</h3>
      <div class="path-row flip ${I()}">
        <p class="path-text">${e.articles.text}</p>
        <button class="biz" style="--tilt:1.5deg" onclick="go('/articles')">
          ${M}
          <span class="biz-title">${e.articles.title}</span>
          <span class="biz-go">${a(`h_read`)}</span>
        </button>
      </div>
    </section>

    <!-- 6. Working With -->
    <section class="partners ${I()}">
      <h3 class="path-title">${y.title}</h3>
      <p class="partners-caption">${y.caption}</p>
      <div class="partners-frame">${y.list.map(ye).join(``)}</div>
    </section>`}function be(){return`
    <div class="mapwrap" id="mw" role="application" aria-label="${a(`map_label`)}">
      <div class="pop" id="pop" hidden></div>
      <div class="hint" id="hint"></div>
      <div class="rbar" id="rbar" role="group" aria-label="${a(`region_label`)}"></div>
      <aside class="panel" id="panel" aria-label="${a(`p_info`)}"></aside>
    </div>`}function R(e){let t=sel&&g[sel],n=!!(t&&panelOpen),r=S(`#panel`);S(`#hint`).textContent=a(t?`hint_region`:`hint_idle`),S(`#rbar`).innerHTML=Object.entries(g).map(([e,t])=>`<button class="${sel===e?`on`:``}" onclick="pick('${e}')">${t.n}</button>`).join(``);let i=S(`#pop`);i.hidden=!(t&&!panelOpen),t&&(i.innerHTML=`
      <h3>${t.theme}</h3>
      <div class="muted">${a(`r_label`,{n:t.n})}, ${t.era}</div>
      <div class="bar">
        <button class="on" onclick="openPanel('overview')">${a(`overview`)}</button>
        <button onclick="openPanel('records')">${a(`records`)}</button>
      </div>`,xe(t));let o=()=>{r.classList.toggle(`open`,n),r.toggleAttribute(`inert`,!n)};e?requestAnimationFrame(()=>requestAnimationFrame(o)):o(),J&&J.focus(sel,n&&innerWidth>760?r.offsetWidth:0)}function xe(e){let t=S(`#panel`),n=t.scrollTop,r=x.filter(e=>e.region===sel);r.find(e=>e.id===rec)||(rec=r[0]?r[0].id:null);let i=r.find(e=>e.id===rec),o=i?lang===`es`&&i.descriptionEs?i.descriptionEs:i.description:``,s=r.map(e=>`
    <button class="rec ${e.title?``:`empty`} ${e.id===rec?`on`:``}" onclick="selectRecord(${e.id})">
      ${e.title||a(`p_empty_btn`)}
    </button>`).join(``),c=i&&i.title?[i.artist,i.year,i.label].filter(Boolean).join(` · `):``,l=!i||!i.audio?a(`p_no_audio`):V?a(`p_audio_err`):``;t.innerHTML=`
    <div class="panel-head">
      <div><div class="muted">${a(`r_label`,{n:e.n})}, ${e.era}</div><h2>${e.theme}</h2></div>
      <button class="alt" onclick="closePanel()" aria-label="${a(`p_close`)}">&#10005;</button>
    </div>

    <section id="sec-overview">
      <h3>${a(`p_info`)}</h3>
      <div class="ph" style="min-height:160px">${r[0]&&r[0].artist?r[0].artist:a(`p_author`)}<br>${a(`p_photo`)}</div>
      <p>${e.txt}</p>
      <p class="muted">${a(`p_hub`,{c:e.city})}</p>
      <div class="sheet" aria-label="${a(`p_sheet`)}"><i></i><i></i><i></i></div>
    </section>

    <section id="sec-records">
      <h3>${a(`p_library`)}</h3>
      <div class="card">

        <!-- LABEL PICTURE: disk-shaped frame. The picture comes from records.js (image) -->
        <div class="disc-frame ${playing?`spin`:``}">
          ${i&&i.image?`<img src="${h(i.image)}" alt="${a(`p_label_alt`,{t:i.title})}" loading="lazy" decoding="async">`:`<div class="disc-empty">${a(`p_label_ph`)}<br>${a(`p_label_add`)}</div>`}
        </div>

        <!-- PLAYER: plays the audio file from records.js -->
        <div class="player">
          <button class="${playing?`on`:``}" onclick="togglePlay()" ${i&&i.audio?``:`disabled`}>${playing?a(`p_pause`):a(`p_play`)}</button>
          <input id="seek" type="range" min="0" max="100" step="0.1" value="0" oninput="seekTo(this.value)" aria-label="${a(`p_seek`)}">
          <span class="time" id="time">0:00 / 0:00</span>
        </div>
        <p class="muted small">${l}</p>

        <!-- RECORD INFO: from records.js -->
        <h3>${i&&i.title?i.title:a(`p_empty`)}</h3>
        <p class="muted">${c}</p>
        <p>${o}</p>
        <div>${(i?i.tags:[]).map(e=>`<span class="tag">${e}</span>`).join(``)}</div>

        <!-- RECORD LIST: the 5 slots of this region -->
        <h4 class="list-title">${a(`p_list`)}</h4>
        ${s}
        <div class="bar">
          <button onclick="go('/search')">${a(`p_search`)}</button>
          <button onclick="go('/sources')">${a(`nav_sources`)}</button>
        </div>
      </div>
    </section>`,W(),panelSection?(t.scrollTop=S(`#sec-`+panelSection).offsetTop-S(`.panel-head`).offsetHeight,panelSection=null):t.scrollTop=n}var z=new Audio;z.preload=`none`;var B=null,V=!1,H=()=>{S(`#mw`)&&R()},U=e=>isFinite(e)?Math.floor(e/60)+`:`+String(Math.floor(e%60)).padStart(2,`0`):`0:00`;z.addEventListener(`play`,()=>{playing=!0,H()}),z.addEventListener(`pause`,()=>{playing=!1,H()}),z.addEventListener(`ended`,()=>{z.currentTime=0,playing=!1,H()}),z.addEventListener(`error`,()=>{B!==null&&(V=!0,playing=!1,H())}),z.addEventListener(`timeupdate`,W),z.addEventListener(`loadedmetadata`,W);function W(){let e=S(`#seek`),t=S(`#time`);if(!e)return;let n=B===rec&&z.duration;e.value=n?z.currentTime/z.duration*100:0,t.textContent=n?U(z.currentTime)+` / `+U(z.duration):`0:00 / 0:00`}function Se(){let e=x.find(e=>e.id===rec);e&&e.audio&&(B!==e.id&&(V=!1,z.src=h(e.audio),B=e.id),z.paused?z.play().catch(()=>{}):z.pause())}function Ce(e){B===rec&&z.duration&&(z.currentTime=e/100*z.duration)}function G(){z.pause(),z.removeAttribute(`src`),z.load(),B=null,V=!1,playing=!1}function we(e){e!==rec&&G(),rec=e,R()}function K(e){sel!==e&&G(),sel=e,panelOpen=!0,panelSection=`overview`,S(`#mw`)?R():C(`/map`)}function Te(e){panelOpen=!0,panelSection=e,R()}function q(){panelOpen=!1,R()}function Ee(){sel=null,panelOpen=!1,E(),S(`#mw`)?R():C(`/map`)}function De(e,t){(e!==rec||t!==sel)&&G(),rec=e,sel=t,panelOpen=!0,panelSection=`records`,C(`/map`)}var J=null;async function Oe(){let t=S(`#mw`);if(t.style.top=T()+`px`,!J){let{createMap:t}=await ue(async()=>{let{createMap:e}=await import(`./map-UfhByUKq.js`);return{createMap:e}},[],import.meta.url);J||(J=t(e.map,{onPick:e=>K(e),getSelected:()=>window.sel}))}let n=S(`#mw`);n&&(n.prepend(J.el),J.fit(),R(!0),J.start())}addEventListener(`resize`,()=>{J&&J.running&&(S(`#mw`).style.top=T()+`px`,J.fit())}),addEventListener(`keydown`,e=>{e.key===`Escape`&&(S(`#splash`)?Q():S(`#nav`).classList.contains(`open`)?E():S(`#panel`)&&panelOpen&&q())});function ke(){let e=(S(`#q`)||{}).value||``,t=x.filter(e=>e.title),n=[...new Set(t.flatMap(e=>e.tags))],r=t.filter(t=>(!tagSel||t.tags.includes(tagSel))&&(t.title+` `+t.artist).toLowerCase().includes(e.toLowerCase()));r.sort((e,t)=>sortBy===`date`?(e.year||0)-(t.year||0):e.title.localeCompare(t.title));let i=n.map(e=>`<button class="tag ${tagSel===e?`on`:``}" onclick="tagSel=tagSel==='${e}'?null:'${e}';view()">${e}</button>`).join(``),o=r.length?r.map(e=>`
        <div class="res">
          <h3>${e.title}</h3>
          ${[e.artist,e.year,e.label].filter(Boolean).join(`, `)}
          <div class="bar"><button onclick="openRecord(${e.id},'${e.region}')">${a(`s_open`)}</button></div>
        </div>`).join(``):`<div class="res">${a(`s_none`)}</div>`;return`
    <h2>${a(`s_title`)}</h2>
    <div class="split">

      <!-- left: tags -->
      <div class="card"><h3>${a(`s_tags`)}</h3>${i}</div>

      <!-- right: search, sort, results -->
      <div>
        <div class="bar">
          <input id="q" class="field" style="max-width:260px;margin:0" placeholder="${a(`s_ph`)}" value="${e}" oninput="keepQ()">
          <button class="${sortBy===`date`?`on`:``}" onclick="sortBy='date';view()">${a(`s_by_date`)}</button>
          <button class="${sortBy===`title`?`on`:``}" onclick="sortBy='title';view()">${a(`s_by_title`)}</button>
        </div>
        ${o}
      </div>

    </div>`}function Ae(){let e=S(`#q`).value;k();let t=S(`#q`);t.value=e,t.focus()}var Y=``,je=()=>[...myPosts,..._];function Me(){let e=Y;Y=``;let t=[..._].sort((e,t)=>artSort===`date`?e.d-t.d:e.th.localeCompare(t.th)),n=[...myPosts,...t].map(e=>`
    <div class="res">
      <h3>${e.t} ${e.pending?`<span class="badge">${a(`a_pending`)}</span>`:``}</h3>
      ${e.th}, ${e.d}
      <div>${e.g.map(e=>`<span class="tag">${e}</span>`).join(``)}</div>
      <div class="bar"><button onclick="go('/article/${e.id}')">${a(`a_open`)}</button></div>
    </div>`).join(``);return`
    <h2>${a(`a_title`)}</h2>
    <p>${a(`a_intro`)}</p>
    ${e?`<p class="notice" role="status">${e}</p>`:``}
    <div class="bar">
      <button class="${artSort===`date`?`on`:``}" onclick="artSort='date';view()">${a(`a_by_date`)}</button>
      <button class="${artSort===`theme`?`on`:``}" onclick="artSort='theme';view()">${a(`a_by_theme`)}</button>
      <button class="write" onclick="go('/post')">${a(`a_write`)}</button>
    </div>
    <p class="muted small">${a(`a_open_note`)}</p>
    ${n}`}function Ne(e){artId=+e||artId;let t=je().find(e=>e.id===artId)||_[0],n=t.pending?w(t.b):t.b,r=comments[t.id]||[],i=`
    <div class="card">
      <p style="max-width:62ch">${n}</p>
      <p class="muted">${t.th}, ${t.d}. ${t.pending?a(`a_pending`)+`.`:a(`a_placeholder`)}</p>
    </div>`,o=`
    <div class="row">
      ${[1,2,3].map(e=>`<div class="ph" style="min-height:180px">${a(`a_image`,{n:e})}</div>`).join(``)}
    </div>`,s=`
    <section class="comments">
      <h3>${a(`cm_title`)}</h3>
      <p class="muted">${a(`cm_intro`)}</p>
      ${r.map(e=>`
        <div class="comment">
          <strong>${w(e.name)}</strong> <span class="badge">${a(`cm_pending`)}</span>
          <p>${w(e.text)}</p>
        </div>`).join(``)}
      <label>${a(`cm_name`)}<input id="cn" class="field" maxlength="40"></label>
      <label>${a(`cm_text`)}<textarea id="cc" class="field" rows="4" maxlength="1500"></textarea></label>
      <div class="err" id="cerr" role="alert"></div>
      <p class="muted small">${a(`cm_rules`)} <a href="#/page/rules">${a(`post_rules`)}</a></p>
      <button class="on" onclick="submitComment()">${a(`cm_send`)}</button>
    </section>`;return`
    <div class="crumb"><a onclick="go('/articles')">${a(`nav_articles`)}</a> / ${w(t.t)}</div>
    <h2>${w(t.t)}</h2>
    <div class="bar">
      <button class="${tab===`topic`?`on`:``}" onclick="tab='topic';view()">${a(`a_topic`)}</button>
      <button class="${tab===`gallery`?`on`:``}" onclick="tab='gallery';view()">${a(`a_gallery`)}</button>
    </div>
    ${tab===`topic`?i:o}
    ${s}
    <div class="bar" style="margin-top:1.5rem">
      <button class="alt" onclick="go('/articles')">${a(`a_back`)}</button>
    </div>`}function Pe(){let e=S(`#cc`).value.trim();if(!e){S(`#cerr`).textContent=a(`cm_error`);return}let t=S(`#cn`).value.trim()||a(`cm_anon`);(comments[artId]=comments[artId]||[]).push({name:t,text:e}),k(),S(`.comments`).scrollIntoView({block:`start`})}function Fe(){return`
    <h2>${a(`nav_sources`)}</h2>
    <p style="max-width:60ch">${a(`so_intro`)}</p>
    <div class="row">
      <div class="card">
        <h3>DAHR</h3>
        <p>${a(`so_dahr_text`)}</p>
        <a href="https://adp.library.ucsb.edu" target="_blank" rel="noopener"><button class="on">${a(`so_open_dahr`)}</button></a>
      </div>
      <div class="card">
        <h3>LCJBX</h3>
        <p>${a(`so_lcjbx_text`)}</p>
        <a href="https://www.loc.gov/jukebox/" target="_blank" rel="noopener"><button class="on">${a(`so_open_lcjbx`)}</button></a>
      </div>
    </div>`}function Ie(e){let t=(b||{})[e];if(!t)return`<h2>${a(`pg_nf`)}</h2><div class="bar"><button onclick="go('/')">${a(`pg_back`)}</button></div>`;let n=e===`terms`,r=e===`rules`;return`
    <article class="doc">
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      ${n?`<p><a href="#/page/rules">${a(`pg_read_rules`)}</a></p>`:``}
      ${r?`<p><a href="#/page/terms">${a(`pg_read_terms`)}</a></p>`:``}
      <div class="bar">
        ${n||r?`<button class="on" onclick="go('/post')">${a(`pg_to_post`)}</button>`:``}
        <button class="alt" onclick="go('/')">${a(`pg_back`)}</button>
      </div>
    </article>`}function Le(){if(!rulesOk)return`
      <article class="doc">
        <h2>${a(`post_gate_title`)}</h2>
        <p>${a(`post_gate_text`)}</p>
        <ul class="rule-links">
          <li><a href="#/page/terms">${a(`post_terms`)}</a></li>
          <li><a href="#/page/rules">${a(`post_rules`)}</a></li>
        </ul>
        <label class="check"><input type="checkbox" id="agree" onchange="document.getElementById('agree-btn').disabled=!this.checked"> ${a(`post_agree`)}</label>
        <div class="bar">
          <button id="agree-btn" class="on" disabled onclick="agreeRules()">${a(`post_continue`)}</button>
          <button class="alt" onclick="go('/articles')">${a(`post_cancel`)}</button>
        </div>
      </article>`;let e=a(`post_remind`,{terms:`<a href="#/page/terms">${a(`post_terms`)}</a>`,rules:`<a href="#/page/rules">${a(`post_rules`)}</a>`});return`
    <article class="doc">
      <h2>${a(`post_title`)}</h2>
      <p class="notice">${e}</p>
      <label>${a(`post_f_title`)}<input id="pt" class="field" maxlength="120"></label>
      <label>${a(`post_f_theme`)}<input id="pth" class="field" maxlength="60" placeholder="${a(`post_f_theme_ph`)}"></label>
      <label>${a(`post_f_body`)}<textarea id="pb" class="field" rows="9" maxlength="8000"></textarea></label>
      <label>${a(`post_f_file`)}<input id="pf" type="file" accept="image/*,audio/*" multiple class="field"></label>
      <p class="muted small">${a(`post_demo`)}</p>
      <div class="err" id="perr" role="alert"></div>
      <div class="bar">
        <button class="on" onclick="submitPost()">${a(`post_submit`)}</button>
        <button class="alt" onclick="go('/articles')">${a(`post_cancel`)}</button>
      </div>
    </article>`}function X(){rulesOk=!0,k()}function Re(){let e=S(`#pt`).value.trim(),t=S(`#pb`).value.trim();if(!e||!t){S(`#perr`).textContent=a(`post_err`);return}myPosts.unshift({id:1e3+myPosts.length,t:e,d:new Date().getFullYear(),th:S(`#pth`).value.trim()||`-`,g:[],b:t,pending:!0,by:user}),Y=a(`a_flash`),C(`/articles`)}function Z(){let t=lang===`es`?l(e,r):e;g=t.regions,_=t.articles,v=t.site,y=t.partners,b=t.pages,document.documentElement.lang=lang,ee(),document.querySelectorAll(`.lang button`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.lang===lang))),S(`#nav`).classList.contains(`open`)&&D()}function ze(e){e!==lang&&(lang=e,c(e),Z(),j=!0,k(),j=!1)}function Be(){let e=!1;try{e=!!sessionStorage.getItem(`veteraphone-splash`)}catch{}return![``,`#`,`#/`].includes(location.hash)||e?!1:(A=!0,document.body.insertAdjacentHTML(`beforeend`,`
    <div id="splash" class="splash intro" role="dialog" aria-modal="true" aria-label="${v.name}">
      <button class="splash-x" onclick="closeSplash()" aria-label="${a(`sp_close`)}">&#10005;</button>
      <div class="splash-card">
        ${P()}
        <button class="splash-go" onclick="closeSplash(true)">${a(`sp_welcome`)}</button>
      </div>
    </div>`),[`header`,`#app`,`footer`].forEach(e=>document.querySelector(e).setAttribute(`inert`,``)),document.body.style.overflow=`hidden`,!0)}function Q(e){let t=S(`#splash`);if(t){try{sessionStorage.setItem(`veteraphone-splash`,`1`)}catch{}[`header`,`#app`,`footer`].forEach(e=>document.querySelector(e).removeAttribute(`inert`)),document.body.style.overflow=``,t.classList.add(`out`),setTimeout(()=>t.remove(),900),$(),e&&C(`/map`)}}function $(){requestAnimationFrame(()=>requestAnimationFrame(()=>document.querySelector(`header`).classList.remove(`hold`)))}Object.assign(window,{go:C,menu:de,closeMenu:E,openLogin:pe,logout:me,auth:ge,view:k,pick:K,keepQ:Ae,syncMapUI:R,openPanel:Te,closePanel:q,mapOverview:Ee,openRecord:De,togglePlay:Se,seekTo:Ce,selectRecord:we,setLang:ze,agreeRules:X,submitPost:Re,submitComment:Pe,closeSplash:Q}),addEventListener(`hashchange`,k),N(),Z();var Ve=Be();k(),Ve||$(),oe(()=>document.body.dataset.page!==`map`&&!S(`#splash`));