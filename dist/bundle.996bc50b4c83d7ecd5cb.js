(()=>{"use strict";jQuery(document).ready((function(){jQuery("#wineInput").on("keyup",(function(){var e=jQuery(this).val().toLowerCase();jQuery("#wineMethods tr").filter((function(){var t=jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(e)>-1)[0].className;jQuery(this).toggle(t.toLowerCase().indexOf(e)>-1)}))}))}))})();