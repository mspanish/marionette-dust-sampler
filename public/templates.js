(function(){dust.register("main",body_0);function body_0(chk,ctx){return chk.write("<h1>Our Coolio Dust Single ItemView Template</h1><h3>").reference(ctx.get("title"),ctx,"h").write("</h3><p>").reference(ctx.get("content"),ctx,"h").write("</p>");}return body_0;})();;(function(){dust.register("people",body_0);function body_0(chk,ctx){return chk.write("<thead>        <tr><th>Full Name</th><th>Email</th><th>Description</th></tr></thead><tbody ></tbody>");}return body_0;})();;(function(){dust.register("person",body_0);function body_0(chk,ctx){return chk.write("<td><h1>").reference(ctx.get("firstname"),ctx,"h").write(" ").reference(ctx.get("lastname"),ctx,"h").write("</h1></td><td>\t<p>").reference(ctx.get("email"),ctx,"h").write("</p></td>\t<td><p>").reference(ctx.get("description"),ctx,"h").write("</p></td>\t");}return body_0;})();