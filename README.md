<h1 align="center"> ¡TypeScript! </h1>

<p align="center">
  <img src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo-1024x576.png"/>
</p>


**TypeScript** es un superconjunto (superset) de JavaScript. Esto significa que es un lenguaje que usa como base a JavaScript, por lo que todo el codigo de JS es 100% compatible con TS, pero le agrega varias funcionalidades y características.

En el año 2012, un grupo de ingenieros de *Microsoft* desarrollaron **TypeScript** con el propósito de mejorar los puntos débiles de JavaScript, añadéndole nuevas funciones:

- Proporciona tipos a **JavaScript**.
- Convierte a **JS** en un lenguaje de *tipado estático*. Es decir, no podremos cambiar el tipo de las variables una vez inicializadas. 
- Convierte a **JS** en un lenguaje *fuertemente tipado*. En otras palabras, no podremos procesar datos de diferentes tipos. ¡SÍ! Ésto elimina la *coerción de tipos*.

Además del tipado estático opcional, **TypeScript** también ofrece algunas características adicionales que no están presentes en **JS**, como *clases*, *interfaces*, *enumeraciones* y un sistema de módulos más estructurado. Estas características hacen que sea más fácil **escribir y mantener código en proyectos grandes y complejos**.

:fire: Uno de los beneficios más importantes de **TypeScript** es que permite la *corrección del código mientras lo estamos escribiendo*, de forma estática. De otra forma tendríamos que esperar hasta el momento de ejecución del código (runtime) para ver los posibles errores.

<p align="center">
  <img src="https://learntypescript.dev/static/f5c65fe3cf6dbed670bc14754c33342b/6d494/ts-js.webp"/>
</p>

:boom: **VisualStudio Code** está desarrollado con **TypeScript**, así como **NodeJS**, **React**, **Angular**, **YouTube**, **Facebook**, **Instagram**, **Twitter**, ¡entre otros muchos otros!

<h2 align="center"> Anotación de tipos (type annotation) y afirmación de tipos (type assertion) </h2>

Hay distintas formas de **decirle al compilador** de TS el tipo de dato que queremos. Cuando necesitamos indicar el tipo de dato que una variable o constante tendrá a lo largo de su vida, usamos la **anotación de tipo**. Entonces, cuando alguien intente asignar un tipo que es incompatible al establecido, habrá error:

- `let age: number = 27;`
- `let name: string = 'Ada';`
- `age = name;` *ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.*

Cuando necesitamos convertir variables o constantes a un tipo en específico **(casting)** usamos las llamadas **afirmaciones de tipo**:

`type User = { name: string, age: number };`

`const userDataString = getUserDataFromExternalDataBase();`
`const userData = JSON.parse(userDataString) as User;`

<h2 align="center"> Dependencias a instalar </h2>

- `npm init -y`
- `npm install --save-dev typescript`
- `npm install --save-dev ts-node`

**ó**

- `npm i -D typescript ts-node`

<h2 align="center"> Configuraciones básicas </h2>

- En el package.json, están configurados los scripts "dev": "ts-node index" para ejecutar nuestro código usando ts-node, y "compile" para que el compilador de TS transpile el código a Vanilla JS, es decir, JS puro.
- En el archivo tsconfig.json están las configuraciones básicas necesarias para poder usar correctamente TS en nuestro programa:
    * El parámetro "target" permite configurar la versión ECMAScript en la que será transpilado el código TS.
    * Con el parámetro "module" seteamos el sistema de módulos a implementar por el programa. En nuestro caso, como desarrolladores Backend, en la mayoría de los casos usaremos "CommonJS" ya que estaremos trabajando con Node. Distrinto sería si trabajamos en el front.
    * El último parámetro "outDir" permite configurar la ruta de la carpeta en donde se guardarán todos los archivos TS transpilados a JS.

<h2 align="center"> TypeScript Compiler - tsc </h2>

Para poder traducir todo el código que escribimos en TypeScript, es necesario llevar a cabo un proceso de transpilación, en el que básicamente el compilador de TS se encarga de realizar varias comprobaciones de sintáxis, semántica, verificar coherencia de tipos y corregir errores. Finalmente, convierte todo el código de TS a JS puro, también conocido como Vanilla JavaScript.

En el package.json está configurado uno de los scripts como "compile", el cual ejecuta el archivo index.ts con el comando "tsc". Esto es para iniciar el proceso de transpilación.

- `npm run compile`

Luego de ejecutar este comando, se crearán los archivos JS con código TS transpilado, en la carpeta especificada en el parámetro `"outDir"` en el tsconfig.json. 

<h2 align="center"> Pero... ¿qué diferencia hay entre la *compilación* y la *transpilación*? </h2>

Cuando hablamos de traducir código entre dos lenguajes que están en el mismo nivel de abstracción, como en el caso de JavaScript y TypeScript, se trata de un caso de transpilación. En cambio, cuando traducimos código entre dos lenguajes que se encuentran en distinto nivel de abstracción, cómo en el caso de C++ que es compilado a lenguaje máquina.

<h2 align="center"> LINKS </h2>

- [TypeScript](https://www.typescriptlang.org/es/)
- [TSCOFIG.JSON - ¿Qué es cada parámetro?](https://www.typescriptlang.org/tsconfig)
- [¿X: number ó X as number?](https://medium.com/@bsalwiczek/type-annotation-vs-assertion-in-typescript-one-important-difference-4f4df715b5fe)
- [¡Encuesta StackOverflow 2023!](https://survey.stackoverflow.co/2023/#technology)