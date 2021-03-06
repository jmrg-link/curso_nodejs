<div align="center">
  <h1>Curso de Node.js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso de Nodejs (4H)</h3>
  <h5></h5>
</div>

## Requisitos :clipboard:

*   Clousures y Scope
*   Curso Fundamentos de Nodejs
*   Javascript Basico
*   Curso de nodejs y npm
*   Curso de ES6
*   Curso de prework en; OSX (Mac), Windows o Linux.

## Comenzando 馃殌

## Descripcion :notebook:

**Aprender Nodejs**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan nodejs y como crear proyectos en nodejs </p>

## Listado de Temas del Curso: 馃挴
    *   Curso de Node.js
---
#### **Metodos/Verbos de Peticiones HTTP**
* HTTP es un protocolo que se encuentra dentro de la capa de aplicacion, dicha capa se encuentra en el septimo nivel del modelo OSI y cuarto del modelo TCP.
  * FTP (File Transfer Protocol - Protocolo de transferencia de archivos) para transferencia de archivos.
  * DNS (Domain Name System - Sistema de nombres de dominio).
  * DHCP (Dynamic Host Configuration Protocol - Protocolo de configuraci贸n din谩mica de anfitri贸n).
  * HTTP (HyperText Transfer Protocol) para acceso a p谩ginas web.
  * HTTPS (Hypertext Transfer Protocol Secure) Protocolo seguro de transferencia de hipertexto.
  * POP (Post Office Protocol) para recuperaci贸n de [correo electr贸nico].
  * SMTP (Simple Mail Transport Protocol) para env铆o de correo electr贸nico.
  * SSH (Secure SHell)
  * TELNET para acceder a equipos remotos.

Existen diferentes protocolos dentro de esta capa:
Protocolos:
* En https://developer.mozilla.org/es/docs/Web/HTTP/Methods y https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto, Mozilla y Wikipedia se帽alan los metodos que pueden ser utilizados.

  * RFCs:
    * RFC 2518: https://tools.ietf.org/html/rfc2518
    * RFC 2616: https://tools.ietf.org/html/rfc2616
    * RFC 3253: https://tools.ietf.org/html/rfc3253
  * Se transcriben a continuacion: 
  * METODO/SIGNIFICADO VERBOS HTTP: 
    * GET
      * Solicita una representaci贸n de un recurso espec铆fico.
      *Las peticiones que usan el m茅todo GET s贸lo deben recuperar datos.
  
    * POST
      * RFC 2616
      * Envia una entidad a un recurso en espec铆fico
      * Se espera un cambio en el estado o efectos secundarios en el servidor
      * El tipo de dato se incluye en la cabecera Content-Type :application/x-www-form-urlencoded, multipart/form-data,text/plain, application/json, application/octet-stream, etc.
      * Los datos se incluyen en el cuerpo de la peticion
      
    * DELETE
      * RFC 2616
      * Borra un recurso en espec铆fico.
    
    * HEAD
      * RFC 2616.
      * Solicita una respuesta id茅ntica a la de una petici贸n GET, pero sin el cuerpo de la respuesta
      * Es 煤til para recuperar os metadatos de encabezados de respuesta, sin tener que recibir todo el contenido.
    
    * PUT
      * RFC 2616
      * Reemplaza todas las representaciones actuales del recurso de destino con la carga 煤til de la petici贸n
    
    * CONNECT
      * RFC 2616
      * Establece un t煤nel hacia el servidor identificado por el recurso
      * Se utiliza para saber si se tiene acceso a un host (la petici贸n no necesariamente llega al servidor)
    
    * OPTIONS
      * RFC 2616
      Devuelve los m茅todos HTTP que el servidor soporta para un URL espec铆fico.
    
    * TRACE
      * RFC 2616
      * Realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.       
    
    * PATCH
      * RFC 5789
      * Su funci贸n es la misma que PUT
      * Se utiliza para actualizar, de manera parcial una o varias partes.
    
    * MOVE
      * RFC 2518
    * MKCOL
      * RFC 2518
    * PROPFIND
      * RFC 2518
    * PROPPATCH
      * RFC 2518
    * MERGE
      * RFC 3253
    * UPDATE
      * RFC 3253
    * LABEL 
      * RFC 3253
  ---

#### HEADER - CABECERAS -> HTTP
 * Informaci贸n contextual de la petici贸n. "No es el que quiero hacer, sino c贸mo lo quiero hacer".
   * Request - **POST PUT PATCH**
     * **Autenticaci贸n** - Asegurarte de que puedes pedir cosas al servidor
     * **Cache** Almacenamiento temporal - Gestionar durante cu谩nto tiempo la respuesta ser谩 la misma
     * **Cors** 鈥淐ross Origin Resource Sharing鈥? - Manejar informaci贸n desde fuera de nuestro servicio
     * **Cookies** - Compartir informaci贸n entre peticiones
     * **Accept** - Define el contenido que acepta
     * 
---
     
#### ESTADOS

* N煤meros que indican lo que ha pasado con la petici贸n.
  * Todo ha ido bien **2XX**
    * 200: Ok
    * 201: Created
  * La petici贸n se ha redirigido **3XX**
    * 301 Moved permanently
    * 304 Not modified
  * Errores del cliente **4XX**
    * 400 Bad request
    * 401 Unauthorized
    * 403 Forbidden
    * 404 Not Found
  * Errores del servidor, ha habido un error al procesar la petici贸n **5XX**
    * 500 Internal server error

---

#### REQUEST - RESPONSE : CUERPO DE LA PETICION
* Es la informaci贸n en s铆 que queremos enviar, editar o que el servidor nos devuelva.
  * Los datos del usuario que quieras a帽adir
* El qu茅 contenga y como venga va a depender de las cabeceras.
  * Content-Type: Tipo de contenido.
  * Lista de Cabeceras:
    *   text/html
    *   text/css
    *   application/javascript
    *   image/jpeg
    *   application/json
    *   application/xml
  Content-Length: Que tan largo es el contenido
  * Los datos en crudo, pueden venir en dos formatos, JSON, o XML.
  JSON, tiene un formato muy parecido a los objetos en JavaScript
  
* <h4>Las Queries - Las Consultas</h4>
  * Van a permitirte a帽adir informaci贸n extra a los datos que queramos enviarle al servidor. O solicitar.

  * Orden en el que queramos que se devuelvan los datos.
  Par谩metros que queremos medir.
  * < Url >.com/person**?orderBy=name&age=25**
    * Aqui lo que hacemos es solicitar las personas de una API pero le estamos a帽adiendo que se ordene por nombre y que solo nos traiga las personas cuya edad sea 25 a帽os.
