$(document).ready(function() {
      /*
       * Replace all SVG images with inline SVG
       * source: https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement
     */

    $('img.redSVG').each(function(){
      var MYimg = $(this);
      var imgID = MYimg.attr('id');
      var imgClass = MYimg.attr('class');
      var imgStyle = MYimg.attr('style');
      var imgURL = MYimg.attr('src');

      $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var MYsvg = $(data).find('svg');

        // Add replaced image's ID, classes and style to the new SVG
        if(typeof imgID !== 'undefined') {
          MYsvg = MYsvg.attr('id', imgID);
        }
        if(typeof imgClass !== 'undefined') {
          MYsvg = MYsvg.attr('class', imgClass+' replaced-svg');
        }
        if(typeof imgStyle !== 'undefined') {
          MYsvg = MYsvg.attr('style', imgStyle);
        }

        // Remove any invalid XML tags as per https://validator.w3.org
        MYsvg = MYsvg.removeAttr('xmlns:a');

        // Replace image with new SVG
        MYimg.replaceWith(MYsvg);

      }, 'xml');
    });
});