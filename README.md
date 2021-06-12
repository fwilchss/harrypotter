Evalución frontend

# Revisión de ambiente  
Se requiere tener instalado node.js, para esto abrimos una consola o termina y escrivimos el siguiente comando node --version, si este regresa error es por que no se tiene instalado node, entonces procedemos a descargrlo de la siguiente ruta https://nodejs.org/es/ y daremos click el boton que dice Actual.  

## Clonar proyecto  
Para clonar el proyecto debemos tener git instalado  
En caso de no tenerlo consultar la guia para hacerlo : http://rogerdudler.github.io/git-guide/index.es.html  
Ingresamos a la carpeta donde se clonara el  proyecto y abrimos la consola de git, "Git Bash Here"  
Ejecutamos el siguiente comando git clone https://github.com/fwilchss/harrypotter.git  
Entramos al proyecto con:  
cd harrypotter  

## Ambiente REACT  
Instalamos react:  
npm install -g create-react-app   
Actualizamos npm para que descarge node_module:   
npm update  
Se enciente el proyecto :  
npm start  

## Levantar api fake  
Verificar que estemos dentro de la carpeta harrypotter si no es asi entramos con:   
cd harrypotter  

En otra terminal levantarmos el servicio de json-server  
Instalamos Json Server:   
npm install -g json-server    

Se agrego un elemento objeto a cada archivo json, ya que no esta en el formato que lo requiere json server para poder ejecutarlo   
Ejemplo: {"staff": "Datos de Archivo"}  
Tambien se tiene que agregar el elemento id a los registros ya que al guardar con json server marca error si no lo tiene  
Nota: Esto ya no se tiene que hacer, ya que se corrigio al subir  

Ingresamos a la carperta rest la cual se coloco en la carpeta raiz: cd harrypotter\rest.  
Abrimos los archivos con json-server:   
json-server --watch .\hp-students.json  --port 4000,   
json-server --watch .\hp-staff.json  --port 4001

# Desarrollo del proyecto  
A continuación se explica como se creo el proyecto inicialmente.  

## Creacion del proyecto en ambiente local  
Vamos a crear un proyecto nuevo  : npx create-react-app harrypotter;   
Entramos a la carpeta que se creo, en este caso es harrypotter : cd harrypotter  
Se enciente el proyecto : npm start  
Una vez que se levanto el proyecto se empezo a codificar 

### Ambiente de estilos  
Se agrega bootstrap para react:  
npm i reactstrap,  
npm i bootstrap  

### Instalamos iconos :   
npm i --save @fortawesome/fontawesome-svg-core,  
npm install --save @fortawesome/react-fontawesome,   
npm install --save @fortawesome/free-solid-svg-icons,   
npm install --save @fortawesome/free-brands-svg-icons,     
npm install --save @fortawesome/free-regular-svg-icons   

### Instalamos SASS: npm install -g sass  
Para compilar por terminal agregamos el siguiente paquete : npm-install -g node-sass  
Para compilar y dejar un observador de cambios de Sass a css :  node-sass -w ./src/css -o ./src/css  
Se importa axios para las consultas de los servicios: npm install axios  

### Intalar redux  
npm i redux  
npm i react-redux

### Quitar vulnerabilidades 
npm audit fix  

  

