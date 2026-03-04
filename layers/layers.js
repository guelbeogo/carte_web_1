var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Region_1 = new ol.format.GeoJSON();
var features_Region_1 = format_Region_1.readFeatures(json_Region_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_1.addFeatures(features_Region_1);
var lyr_Region_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_1, 
                style: style_Region_1,
                popuplayertitle: 'Region',
                interactive: true,
    title: 'Region<br />\
    <img src="styles/legend/Region_1_0.png" /> 788731 - 1237062<br />\
    <img src="styles/legend/Region_1_1.png" /> 1237062 - 1685392<br />\
    <img src="styles/legend/Region_1_2.png" /> 1685392 - 2133723<br />\
    <img src="styles/legend/Region_1_3.png" /> 2133723 - 2582053<br />\
    <img src="styles/legend/Region_1_4.png" /> 2582053 - 3030384<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_Region_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Region_1];
lyr_Region_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'pop_19_POP': 'pop_19_POP', });
lyr_Region_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'pop_19_POP': 'TextEdit', });
lyr_Region_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_1': 'inline label - always visible', 'pop_19_POP': 'inline label - always visible', });
lyr_Region_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});