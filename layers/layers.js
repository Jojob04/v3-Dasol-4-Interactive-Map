var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SlopeAnalysisDasol4_1 = new ol.format.GeoJSON();
var features_SlopeAnalysisDasol4_1 = format_SlopeAnalysisDasol4_1.readFeatures(json_SlopeAnalysisDasol4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SlopeAnalysisDasol4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SlopeAnalysisDasol4_1.addFeatures(features_SlopeAnalysisDasol4_1);
var lyr_SlopeAnalysisDasol4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SlopeAnalysisDasol4_1, 
                style: style_SlopeAnalysisDasol4_1,
                popuplayertitle: "Slope Analysis - Dasol 4",
                interactive: true,
    title: 'Slope Analysis - Dasol 4<br />\
    <img src="styles/legend/SlopeAnalysisDasol4_1_0.png" /> 1<br />\
    <img src="styles/legend/SlopeAnalysisDasol4_1_1.png" /> 2<br />\
    <img src="styles/legend/SlopeAnalysisDasol4_1_2.png" /> 3<br />\
    <img src="styles/legend/SlopeAnalysisDasol4_1_3.png" /> 4<br />\
    <img src="styles/legend/SlopeAnalysisDasol4_1_4.png" /> 5<br />'
        });
var format_EYAMOTMACDASOL4_2 = new ol.format.GeoJSON();
var features_EYAMOTMACDASOL4_2 = format_EYAMOTMACDASOL4_2.readFeatures(json_EYAMOTMACDASOL4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EYAMOTMACDASOL4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EYAMOTMACDASOL4_2.addFeatures(features_EYAMOTMACDASOL4_2);
var lyr_EYAMOTMACDASOL4_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EYAMOTMACDASOL4_2, 
                style: style_EYAMOTMACDASOL4_2,
                popuplayertitle: "EYA - MOTMAC DASOL 4",
                interactive: true,
    title: 'EYA - MOTMAC DASOL 4<br />\
    <img src="styles/legend/EYAMOTMACDASOL4_2_0.png" /> Substation<br />\
    <img src="styles/legend/EYAMOTMACDASOL4_2_1.png" /> Usable<br />'
        });
var format_FL_Pangasinan_3 = new ol.format.GeoJSON();
var features_FL_Pangasinan_3 = format_FL_Pangasinan_3.readFeatures(json_FL_Pangasinan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FL_Pangasinan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FL_Pangasinan_3.addFeatures(features_FL_Pangasinan_3);
var lyr_FL_Pangasinan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FL_Pangasinan_3, 
                style: style_FL_Pangasinan_3,
                popuplayertitle: "FL_Pangasinan",
                interactive: false,
                title: '<img src="styles/legend/FL_Pangasinan_3.png" /> FL_Pangasinan'
            });
var format_AD_Pangasinan_4 = new ol.format.GeoJSON();
var features_AD_Pangasinan_4 = format_AD_Pangasinan_4.readFeatures(json_AD_Pangasinan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AD_Pangasinan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AD_Pangasinan_4.addFeatures(features_AD_Pangasinan_4);
var lyr_AD_Pangasinan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AD_Pangasinan_4, 
                style: style_AD_Pangasinan_4,
                popuplayertitle: "A&D_Pangasinan",
                interactive: false,
                title: '<img src="styles/legend/AD_Pangasinan_4.png" /> A&D_Pangasinan'
            });
var format_LOTSUNDERLOTCLASSESDASOL4SPP_5 = new ol.format.GeoJSON();
var features_LOTSUNDERLOTCLASSESDASOL4SPP_5 = format_LOTSUNDERLOTCLASSESDASOL4SPP_5.readFeatures(json_LOTSUNDERLOTCLASSESDASOL4SPP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTSUNDERLOTCLASSESDASOL4SPP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTSUNDERLOTCLASSESDASOL4SPP_5.addFeatures(features_LOTSUNDERLOTCLASSESDASOL4SPP_5);
var lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTSUNDERLOTCLASSESDASOL4SPP_5, 
                style: style_LOTSUNDERLOTCLASSESDASOL4SPP_5,
                popuplayertitle: "LOTS UNDER LOT CLASSES - DASOL 4 SPP",
                interactive: true,
    title: 'LOTS UNDER LOT CLASSES - DASOL 4 SPP<br />\
    <img src="styles/legend/LOTSUNDERLOTCLASSESDASOL4SPP_5_0.png" /> FULL A&D<br />\
    <img src="styles/legend/LOTSUNDERLOTCLASSESDASOL4SPP_5_1.png" /> FULL FL<br />\
    <img src="styles/legend/LOTSUNDERLOTCLASSESDASOL4SPP_5_2.png" /> PARTIAL<br />'
        });
var format_LOTSTATUSDASOL4SPP_6 = new ol.format.GeoJSON();
var features_LOTSTATUSDASOL4SPP_6 = format_LOTSTATUSDASOL4SPP_6.readFeatures(json_LOTSTATUSDASOL4SPP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTSTATUSDASOL4SPP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTSTATUSDASOL4SPP_6.addFeatures(features_LOTSTATUSDASOL4SPP_6);
var lyr_LOTSTATUSDASOL4SPP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTSTATUSDASOL4SPP_6, 
                style: style_LOTSTATUSDASOL4SPP_6,
                popuplayertitle: "LOT STATUS - DASOL 4 SPP",
                interactive: true,
                title: '<img src="styles/legend/LOTSTATUSDASOL4SPP_6.png" /> LOT STATUS - DASOL 4 SPP'
            });
var group_LOTSTATUS = new ol.layer.Group({
                                layers: [lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5,lyr_LOTSTATUSDASOL4SPP_6,],
                                fold: "open",
                                title: "LOT STATUS"});
var group_LANDCLASS = new ol.layer.Group({
                                layers: [lyr_FL_Pangasinan_3,lyr_AD_Pangasinan_4,],
                                fold: "open",
                                title: "LAND CLASS"});
var group_EYA = new ol.layer.Group({
                                layers: [lyr_EYAMOTMACDASOL4_2,],
                                fold: "open",
                                title: "EYA"});
var group_SLOPEANALYSIS = new ol.layer.Group({
                                layers: [lyr_SlopeAnalysisDasol4_1,],
                                fold: "open",
                                title: "SLOPE ANALYSIS"});

lyr_GoogleSatellite_0.setVisible(true);lyr_SlopeAnalysisDasol4_1.setVisible(true);lyr_EYAMOTMACDASOL4_2.setVisible(true);lyr_FL_Pangasinan_3.setVisible(true);lyr_AD_Pangasinan_4.setVisible(true);lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5.setVisible(true);lyr_LOTSTATUSDASOL4SPP_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_SLOPEANALYSIS,group_EYA,group_LANDCLASS,group_LOTSTATUS];
lyr_SlopeAnalysisDasol4_1.set('fieldAliases', {'DN': 'DN', 'Area': 'Area', });
lyr_EYAMOTMACDASOL4_2.set('fieldAliases', {'ID': 'ID', });
lyr_FL_Pangasinan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'PROVINCE': 'PROVINCE', 'MUNICIPALI': 'MUNICIPALI', 'CLASSIFICA': 'CLASSIFICA', 'MAP_NO_': 'MAP_NO_', 'PROJECT_NO': 'PROJECT_NO', 'BLOCK_NO_': 'BLOCK_NO_', 'AREA_ON_MA': 'AREA_ON_MA', 'REMARKS': 'REMARKS', 'HECTARES': 'HECTARES', 'STATUS_ID': 'STATUS_ID', 'LCMAP_DATE': 'LCMAP_DATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AD_Pangasinan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'PROVINCE': 'PROVINCE', 'MUNICIPALI': 'MUNICIPALI', 'CLASSIFICA': 'CLASSIFICA', 'MAP_NO_': 'MAP_NO_', 'PROJECT_NO': 'PROJECT_NO', 'BLOCK_NO_': 'BLOCK_NO_', 'AREA_ON_MA': 'AREA_ON_MA', 'REMARKS': 'REMARKS', 'HECTARES': 'HECTARES', 'STATUS_ID': 'STATUS_ID', 'LCMAP_DATE': 'LCMAP_DATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5.set('fieldAliases', {'Lot Number': 'Lot Number', 'Usable(MM)': 'Usable(MM)', 'LC': 'LC', 'MOA': 'MOA', 'PHASE': 'PHASE', 'Area': 'Area', });
lyr_LOTSTATUSDASOL4SPP_6.set('fieldAliases', {'Lot Number': 'Lot Number', 'Usable(MM)': 'Usable(MM)', 'LC': 'LC', 'MOA': 'MOA', 'PHASE': 'PHASE', 'Area': 'Area', 'Lot Owner': 'Lot Owner', 'Typo Error': 'Typo Error', 'TCT Number': 'TCT Number', 'Tax Dec No.': 'Tax Dec No.', 'Certified True Copy of Title': 'Certified True Copy of Title', 'Remarks': 'Remarks', 'Excel': 'Excel', });
lyr_SlopeAnalysisDasol4_1.set('fieldImages', {'DN': 'Range', 'Area': 'TextEdit', });
lyr_EYAMOTMACDASOL4_2.set('fieldImages', {'ID': 'TextEdit', });
lyr_FL_Pangasinan_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'MAP_NO_': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'BLOCK_NO_': 'TextEdit', 'AREA_ON_MA': 'TextEdit', 'REMARKS': 'TextEdit', 'HECTARES': 'TextEdit', 'STATUS_ID': 'TextEdit', 'LCMAP_DATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AD_Pangasinan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'MAP_NO_': 'TextEdit', 'PROJECT_NO': 'TextEdit', 'BLOCK_NO_': 'TextEdit', 'AREA_ON_MA': 'TextEdit', 'REMARKS': 'TextEdit', 'HECTARES': 'TextEdit', 'STATUS_ID': 'TextEdit', 'LCMAP_DATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5.set('fieldImages', {'Lot Number': 'TextEdit', 'Usable(MM)': 'TextEdit', 'LC': 'TextEdit', 'MOA': 'TextEdit', 'PHASE': 'TextEdit', 'Area': 'TextEdit', });
lyr_LOTSTATUSDASOL4SPP_6.set('fieldImages', {'Lot Number': 'TextEdit', 'Usable(MM)': 'TextEdit', 'LC': 'TextEdit', 'MOA': 'TextEdit', 'PHASE': 'TextEdit', 'Area': 'TextEdit', 'Lot Owner': 'TextEdit', 'Typo Error': 'TextEdit', 'TCT Number': 'TextEdit', 'Tax Dec No.': 'TextEdit', 'Certified True Copy of Title': 'TextEdit', 'Remarks': 'TextEdit', 'Excel': 'TextEdit', });
lyr_SlopeAnalysisDasol4_1.set('fieldLabels', {'DN': 'header label - always visible', 'Area': 'header label - always visible', });
lyr_EYAMOTMACDASOL4_2.set('fieldLabels', {'ID': 'header label - visible with data', });
lyr_FL_Pangasinan_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'PROVINCE': 'no label', 'MUNICIPALI': 'no label', 'CLASSIFICA': 'no label', 'MAP_NO_': 'no label', 'PROJECT_NO': 'no label', 'BLOCK_NO_': 'no label', 'AREA_ON_MA': 'no label', 'REMARKS': 'no label', 'HECTARES': 'no label', 'STATUS_ID': 'no label', 'LCMAP_DATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AD_Pangasinan_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'PROVINCE': 'hidden field', 'MUNICIPALI': 'hidden field', 'CLASSIFICA': 'hidden field', 'MAP_NO_': 'hidden field', 'PROJECT_NO': 'hidden field', 'BLOCK_NO_': 'hidden field', 'AREA_ON_MA': 'hidden field', 'REMARKS': 'hidden field', 'HECTARES': 'hidden field', 'STATUS_ID': 'hidden field', 'LCMAP_DATE': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LOTSUNDERLOTCLASSESDASOL4SPP_5.set('fieldLabels', {'Lot Number': 'hidden field', 'Usable(MM)': 'hidden field', 'LC': 'header label - visible with data', 'MOA': 'hidden field', 'PHASE': 'hidden field', 'Area': 'hidden field', });
lyr_LOTSTATUSDASOL4SPP_6.set('fieldLabels', {'Lot Number': 'header label - always visible', 'Usable(MM)': 'header label - always visible', 'LC': 'header label - visible with data', 'MOA': 'header label - always visible', 'PHASE': 'header label - always visible', 'Area': 'header label - visible with data', 'Lot Owner': 'header label - visible with data', 'Typo Error': 'header label - visible with data', 'TCT Number': 'header label - visible with data', 'Tax Dec No.': 'header label - always visible', 'Certified True Copy of Title': 'header label - visible with data', 'Remarks': 'header label - visible with data', 'Excel': 'header label - visible with data', });
lyr_LOTSTATUSDASOL4SPP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});