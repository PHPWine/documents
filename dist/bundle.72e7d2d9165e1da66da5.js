(()=>{"use strict";jQuery(document).ready((function(){jQuery("#wineInput").on("keyup",(function(){var e=jQuery(this).val().toLowerCase();jQuery("#wineMethods tr").filter((function(){var t=jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(e)>-1)[0].className;jQuery(this).toggle(t.toLowerCase().indexOf(e)>-1)}))}))})),jQuery((()=>{const e=function(e={}){this.target=e};e.prototype.getContainer=function(e,t){let n=jQuery(e);jQuery(n).children().map((function(e,o){e!==t?jQuery(this).fadeOut("fast"):jQuery(n.children()[t]).fadeIn()}))},e.prototype.getSelected=function(t,n){jQuery(t).map((function(t,o){jQuery(o).click((function(o){o.preventDefault(),e.prototype.getContainer(n,t)}))}))},e.prototype.moveToContent=function(e){jQuery(e).map((function(e,t){jQuery(t).click((function(e){e.preventDefault(),jQuery("html, body").animate({scrollTop:jQuery(this).offset().top-50},1500)}))}))},e.prototype.init=function(){var e=this.target.selected,t=this.target.getContent;jQuery(t).children().hide(),this.getSelected(e,t),this.moveToContent(e)};new e({selected:".w-self",getContent:".w-self-container"}).init()}))})();