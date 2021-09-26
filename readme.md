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

## Comenzando 🚀

## Descripcion :notebook:

**Aprender Nodejs**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan nodejs y como crear proyectos en nodejs </p>

## Listado de Temas del Curso: 💯
    *   Curso de Node.js
---
#### **Metodos/Verbos de Peticiones HTTP**
* HTTP es un protocolo que se encuentra dentro de la capa de aplicacion, dicha capa se encuentra en el septimo nivel del modelo OSI y cuarto del modelo TCP.
  * FTP (File Transfer Protocol - Protocolo de transferencia de archivos) para transferencia de archivos.
  * DNS (Domain Name System - Sistema de nombres de dominio).
  * DHCP (Dynamic Host Configuration Protocol - Protocolo de configuración dinámica de anfitrión).
  * HTTP (HyperText Transfer Protocol) para acceso a páginas web.
  * HTTPS (Hypertext Transfer Protocol Secure) Protocolo seguro de transferencia de hipertexto.
  * POP (Post Office Protocol) para recuperación de [correo electrónico].
  * SMTP (Simple Mail Transport Protocol) para envío de correo electrónico.
  * SSH (Secure SHell)
  * TELNET para acceder a equipos remotos.

Existen diferentes protocolos dentro de esta capa:
Protocolos:
* En https://developer.mozilla.org/es/docs/Web/HTTP/Methods y https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto, Mozilla y Wikipedia señalan los metodos que pueden ser utilizados.

  * RFCs:
    * RFC 2518: https://tools.ietf.org/html/rfc2518
    * RFC 2616: https://tools.ietf.org/html/rfc2616
    * RFC 3253: https://tools.ietf.org/html/rfc3253
  * Se transcriben a continuacion: 
  * METODO/SIGNIFICADO VERBOS HTTP: 
    * GET
      * Solicita una representación de un recurso específico.
      *Las peticiones que usan el método GET sólo deben recuperar datos.
  
    * POST
      * RFC 2616
      * Envia una entidad a un recurso en específico
      * Se espera un cambio en el estado o efectos secundarios en el servidor
      * El tipo de dato se incluye en la cabecera Content-Type :application/x-www-form-urlencoded, multipart/form-data,text/plain, application/json, application/octet-stream, etc.
      * Los datos se incluyen en el cuerpo de la peticion
      
    * DELETE
      * RFC 2616
      * Borra un recurso en específico.
    
    * HEAD
      * RFC 2616.
      * Solicita una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta
      * Es útil para recuperar os metadatos de encabezados de respuesta, sin tener que recibir todo el contenido.
    
    * PUT
      * RFC 2616
      * Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición
    
    * CONNECT
      * RFC 2616
      * Establece un túnel hacia el servidor identificado por el recurso
      * Se utiliza para saber si se tiene acceso a un host (la petición no necesariamente llega al servidor)
    
    * OPTIONS
      * RFC 2616
      Devuelve los métodos HTTP que el servidor soporta para un URL específico.
    
    * TRACE
      * RFC 2616
      * Realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.       
    
    * PATCH
      * RFC 5789
      * Su función es la misma que PUT
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

####
