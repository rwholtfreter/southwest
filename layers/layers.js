var wms_layers = [];

var lyr_southwest_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'southwest<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/southwest_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20211397.158636, 6657265.839900, -15233493.340664, 9305971.973200]
        })
    });

lyr_southwest_0.setVisible(true);
var layersList = [lyr_southwest_0];
