(function(){var h={default:!0};window.MirrorFrame=function(a,b,c,f,e){CodeMirror.I18N=CodeMirror.I18N||{getMessage:e};e=document.createElement("div");var g=document.createElement("div");g.setAttribute("class","CodeMirror-menu");e.setAttribute("class","CodeMirror-editor");e.setAttribute("style","font-size:"+((b.fontSize||100)/100).toFixed(2)+"em;");a.appendChild&&a.insertBefore&&a.firstChild?(a.insertBefore(g,a.firstChild),a.appendChild(e)):a.appendChild?(a.appendChild(g),a.appendChild(e)):a(g);var l=
{nextTheme:function(){if(b.themeOptions){var a=b.themeOptions.all,c=a.indexOf(b.theme||"default")||0;++c>=a.length&&(c=0);a=b.theme=a[c];k(a);d.setOption("theme",a);if(b.themeOptions.onChange)b.themeOptions.onChange(a)}}};a=function(a,b){var c=document.createElement("input");c.type="button";c.value=a;g.appendChild(c);c.onclick=function(){d.execCommand(b)}};var k=function(a){a&&!h[a]&&(h[a]=!0,$("head").append($('<link rel="stylesheet" type="text/css" />').attr("href","vendor/cm/theme/"+a.replace(/[^a-zA-Z0-9\.-]/g,
"")+".css")))};b.theme&&k(b.theme);if(!b.noButtons){var m=!b.mode||/(application|text)\/(?:x-)?(?:java|ecma)script/.test(b.mode);a(CodeMirror.I18N.getMessage("Search"),"find");a(CodeMirror.I18N.getMessage("Replace"),"replace");a(CodeMirror.I18N.getMessage("Jump_to_line"),"jump");m&&(a(CodeMirror.I18N.getMessage("Insert_constructor"),"macro"),a(CodeMirror.I18N.getMessage("Auto_Indent_all"),"reindentall"))}var d=new CodeMirror(e,b);this.mirror=d;Object.keys(l).forEach(function(a){d.setCommand(a,l[a])});
c&&Object.keys(c).forEach(function(a){d.setCommand(a,c[a])});f&&Object.keys(f).forEach(function(a){d.on(a,f[a])});this.refresh=function(){d.refresh.call(d)}};var f={jump:function(a){var b=prompt(CodeMirror.I18N.getMessage("Jump_to_line"),"");b&&!isNaN(Number(b-1))&&a.setCursor(Number(b-1));a.focus()},macro:function(a){var b=prompt(CodeMirror.I18N.getMessage("Insert_constructor")+":","");b&&a.replaceSelection("function "+b+"() {\n  \n}\n\n"+b+".prototype = {\n  \n};\n")},reindentall:function(a){for(var b=
0;b<=a.lineCount();b++)a.indentLine(b,"smart")}},c;for(c in f)f.hasOwnProperty(c)&&(CodeMirror.commands[c]=f[c])})();