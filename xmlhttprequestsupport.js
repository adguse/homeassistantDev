function createXMLHttpRequest() { try { return new XMLHttpRequest } catch (a) { } try { return new ActiveXObject("MSXML2.XMLHTTP.6.0") } catch (a) { } try { return new ActiveXObject("MSXML2.XMLHTTP.3.0") } catch (a) { } return null }
function openXMLHttpRequest() { var a = createXMLHttpRequest(); a && (a.open("POST", "/request.cgi", !0), a.setRequestHeader("Pragma", "no-cache"), a.setRequestHeader("Cache-Control", "no-cache"), a.setRequestHeader("Cache-Control", "no-store"), a.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT"), a.setRequestHeader("Content-Type", "application/json")); var b = {}; b.xhr = a; return b };
