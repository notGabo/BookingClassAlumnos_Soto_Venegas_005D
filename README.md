# BcAlumnos_Soto_Venegas_005D (Booking Class)

Este es el examen del trabajo que estamos realizando con mi compañero <a href="https://github.com/je4n83">Jean Venegas</a> para el ramo de 
Programacion de aplicaciones moviles instruido por la profesora Vivivana Poblete.

## Avisos

### Disclaimer

Es probable de que este proyecto no se pueda ejecutar de la manera adecuadada si esta corriendo la ultima version de angular, por lo que se pide encarecidamente que por favor, se ejecute la version v14 de este con NodeJS v16.

En cuanto al uso de la api y la programacion de esta, esto lo hicimos en un servidor externo para aliviar un poco el peso del proyecto. El link de la api es este: 

<a href='http://144.22.58.218:3300/clases'>```http://144.22.58.218:3300/clases```</a>

Esta siendo hosteado en una maquina virtual CLOUD de Oracle corriendo linux. 
<img src='https://cdn.discordapp.com/attachments/902952023874494505/1050213531087274045/image.png'></img>
<img src='https://cdn.discordapp.com/attachments/902952023874494505/1050213623366164500/image.png'></img>

### Booking Class Docentes

Este repositorio solo constituye una parte de la prueba, ya que en si esta aplicacion esta constituida por dos partes, la de los alumnos y la de los profesores.
Si deseas ver el repositorio de los profesores, solo debes acceder a este <a href='https://github.com/notGabo/BookingClassDocentes_Soto_Venegas_005D'>link!<a>

## APK

El link del apk se encuentra aqui

``` ```

## Instalacion del proyecto


Antes de empezar, se debe tener en cuenta que este proyecto esta hecho bajo el framework de Ionic y NodeJs, por lo que se debe tener instalado este framework. 
Puedes descargar NodeJs desde este <a href='https://nodejs.org/en/download/'>link!</a>. Una vez tengas NodeJs instalado, deberas instalar el framework de ionic. Para 
instalarlo solo debes abrir tu terminal preferida y ejecutar el siguiente comando:

  ```npm i -g @ionic/cli```
  
A lo que se haya instalado ionic, deberas generar el proyecto con:

  ```ionic start {{nombre del proyecto}} blank```
  
Se te abrira un menu en el que deberas seleccionar la opcion de 'Angular', Y luego te preguntara si deseas enviar tus datos de manera anonima a Google.

Luego debes entrar a la carpeta que se haya generado con el nombre que pusiste para despues clonar este repositorio con:
con:

  ```git clone https://github.com/notGabo/BookingClassAlumnos_Soto_Venegas_005D.git```
  
Una vez hecho esto, deberas eliminar la carpeta llamada 'src' y reemplazar el nombre de la carpeta 'BookingClassAlumnos_Soto_Venegas_005D' por 'src'.

Luego de todo ese procedimiento, se necesitaran instalar los siguientes modulos para el debido funcionamiento de la aplicacion

```npm install --save @ionic/storage```

```npm install --save @ionic/storage-angular```

```npm install --save @capacitor-community/barcode-scanner```


Existe la posibilidad de que la Api de los feriados no cargue como se deba. Por lo que se debe implementar una extension que habilite el protocolo CORS en el header.
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
Una vez instalada, solo se debe activar desde el panel de extensiones.

Ya hecho esto, es posible emular la aplicacion mediante el browser preferido. Para poder hacerlo solo debemos ejecutar en la terminal:

```ionic serve --lab```

Se debera aceptar la instalacion del modulo lab para que este ambiente de emulacion se ejecute de manera adecuada
