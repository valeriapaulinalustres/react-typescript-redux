Ejercicio 2:

2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por ejemplo autenticación, solicitud de clientes activos para el usuario y solicitud de casos por cliente)

Para implementar acciones del frontend utilizando Redux, se requiere:

a) Hay que instalar las dependencias react-redux y reduxjs/toolkit. A continuación, debemos configurar el store de Redux, para lo cual se crea un archivo store.ts. El store se configura en este archivo para combinar los diferentes reducers que gestionan partes del estado de la aplicación. Esto es necesario para que Redux sepa cómo manejar las actualizaciones de estado. Al tener el store centralizado, se puede proporcionar a toda la aplicación a través del Provider de React-Redux, lo que permite a cualquier componente acceder al estado global.
b) Luego hay que crear slices. Un slice representa una porción del estado global de la aplicación, y contiene la lógica necesaria para actualizar ese estado, incluyendo las acciones y el reducer.
c) A continuación se procede a utilizar hooks como useDispatch y useSelector para interactuar con el store de Redux desde los componentes de React.
Esta estructura permite una gestión centralizada del estado, facilita el manejo de la autenticación y la solicitud de datos, y asegura que la aplicación sea escalable y fácil de mantener.

En la aplicación de la prueba técnica se ha utilizado Redux con RTK, por lo cual puede verse allí ejemplificado.

2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?
El primer cambio sería modificarlo a typescript y luego incorporar en el render al componente App.tsx. Luego hay que instalar react-router-dom.
El actual index.tsx actúa como el punto de entrada principal de la aplicación React, montando el componente App en el DOM. La gestión de rutas se realiza dentro de App.tsx utilizando react-router-dom.
Para agregar una nueva ruta en App.tsx, simplemente creo un nuevo componente de página y luego añado una nueva entrada en las rutas dentro de App.tsx. Se importa el componente y se importan BrowserRouter, Route, Routes desde react-router-dom. Luego se anidan BrowserRouter, Routes y Route, en el cual se establece el path y el componente importado.
Ya no es necesario modificar index.tsx porque las rutas están centralizadas en App.tsx.
Esta estructura permite una fácil expansión de la aplicación y una gestión clara y centralizada de las rutas, lo que mejora la mantenibilidad y la escalabilidad del código.

La aplicación tiene implementado react-router-dom, por lo cual puede verse allí ejemplificado.