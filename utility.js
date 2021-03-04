    // heading function will append the text as heading in the passed id. 
         //  cid=container Id, objid= Created Object Id
         function divobj(cid,objid)
         {
             var x=document.createElement("div");
             x.setAttribute("id",objid);
             document.getElementById(cid).appendChild(x);
         }
         //text=text to be written as a heading inside the h3 tag.
         function heading(cid,id,text)
         {
             var x=document.createElement("h3");
             x.setAttribute("id",id);
             var y=document.createTextNode(text);
             x.appendChild(y);
             document.getElementById(cid).appendChild(x);
 
         }
         //This function will create an image and append it to the div having particular id.
         //imgid= Id of the image object being created.
         //alt=Alternate text for the image.
         //src=source of the file.
                             
         function imageobj(cid,imgid,alt,src)
         {
             var x=document.createElement("img");
             x.setAttribute("src",src);
             x.setAttribute("alt",alt);
             x.setAttribute("class","asanaimage");
             x.setAttribute("id",imgid);
             document.getElementById(cid).appendChild(x);
         }
         //Function creating and appending list items 
         //item=Text to be written as a list item within the li tag.
         function listitem(cid,item)
         {
             var x=document.createElement('LI');
             var y=document.createTextNode(item);
             x.appendChild(y);
             document.getElementById(cid).appendChild(x);
         }