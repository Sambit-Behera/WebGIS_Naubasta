var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ortho_naubasta_new_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "ortho_naubasta_new",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "ortho_naubasta_new",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ortho_naubasta_new_1, 1]);
var lyr_Buildings_Araji_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "buildings_araji",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Buildings_Araji",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buildings_Araji_2, 1]);
var lyr_Buildings_Features_271223_3_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "buildings_features_271223_3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Buildings_Features_271223_3",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buildings_Features_271223_3_3, 1]);
var lyr_Buildings_vector_4_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "buildings_vector_4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Buildings_vector_4",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Buildings_vector_4_4, 1]);
var lyr_Colony_road_271223_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "colony_road_271223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Colony_road_271223",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Colony_road_271223_5, 1]);
var lyr_Colony_road_281223_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "colony_road_281223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Colony_road_281223",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Colony_road_281223_6, 1]);
var lyr_Naubasta_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "colony_road_fixed_271223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Naubasta",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naubasta_7, 1]);
var lyr_Main_Road_271223_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "main_road_271223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Main_Road_271223",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Main_Road_271223_8, 1]);
var lyr_MainRoad_Araji_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "mainroad_araji",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MainRoad_Araji",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MainRoad_Araji_9, 1]);
var lyr_Naubasta_Araji_271223_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "naubasta_araji_271223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Naubasta_Araji_271223",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naubasta_Araji_271223_10, 1]);
var lyr_OpenField_Features_271223_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "openfield_features_271223",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OpenField_Features_271223",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenField_Features_271223_11, 1]);
var lyr_OpenSpace_Araji_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "openspace_araji",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "OpenSpace_Araji",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OpenSpace_Araji_12, 1]);
var lyr_Plotting_Features_271223_2_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "plotting_features_271223_2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plotting_Features_271223_2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Plotting_Features_271223_2_13, 1]);
var lyr_Plottings_Araji_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "plottings_araji",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plottings_Araji",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Plottings_Araji_14, 1]);
var lyr_Road_features_clipped_Shobhit1_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Naubasta_Mapping_Final/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "road_features_clipped_shobhit1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Road_features_clipped_Shobhit1",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Road_features_clipped_Shobhit1_15, 1]);

lyr_OpenStreetMap_0.setVisible(true);lyr_ortho_naubasta_new_1.setVisible(true);lyr_Buildings_Araji_2.setVisible(false);lyr_Buildings_Features_271223_3_3.setVisible(false);lyr_Buildings_vector_4_4.setVisible(false);lyr_Colony_road_271223_5.setVisible(false);lyr_Colony_road_281223_6.setVisible(false);lyr_Naubasta_7.setVisible(false);lyr_Main_Road_271223_8.setVisible(false);lyr_MainRoad_Araji_9.setVisible(false);lyr_Naubasta_Araji_271223_10.setVisible(false);lyr_OpenField_Features_271223_11.setVisible(false);lyr_OpenSpace_Araji_12.setVisible(false);lyr_Plotting_Features_271223_2_13.setVisible(false);lyr_Plottings_Araji_14.setVisible(false);lyr_Road_features_clipped_Shobhit1_15.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_ortho_naubasta_new_1,lyr_Buildings_Araji_2,lyr_Buildings_Features_271223_3_3,lyr_Buildings_vector_4_4,lyr_Colony_road_271223_5,lyr_Colony_road_281223_6,lyr_Naubasta_7,lyr_Main_Road_271223_8,lyr_MainRoad_Araji_9,lyr_Naubasta_Araji_271223_10,lyr_OpenField_Features_271223_11,lyr_OpenSpace_Araji_12,lyr_Plotting_Features_271223_2_13,lyr_Plottings_Araji_14,lyr_Road_features_clipped_Shobhit1_15];
