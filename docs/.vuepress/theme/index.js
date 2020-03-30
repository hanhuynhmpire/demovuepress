module.exports = (themeConfig, ctx) => {
    const config = {
        "plugins": [
            [
                '@vuepress/blog',
                {
                    "frontmatters": [{
                        "id": "tags",
                        "keys": ["tags"],
                        "path": "/tags/",
                        "layout": "TagPage",
                        "scopeLayout": "TagPage",
                        "pagination": {"lengthPerPage": 3, "layout": "TagPage"}
                    }, {
                        "id": "categories",
                        "keys": ["category"],
                        "path": "/categories/",
                        "layout": "TagPage",
                        "scopeLayout": "Level2PagiLayout",
                        "pagination": {"lengthPerPage": 3, "layout": "Level2PagiLayout"}
                    }, {
                        "id": "shorttermaccommodationactivitiestags",
                        "keys": ["shorttermaccommodationactivitiestags"],
                        "path": "/short-term-accommodation-activities/tags/",
                        "layout": "TagPage",
                        "scopeLayout": "Level1PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level1PagiLayout"}
                    }, {
                        "id": "campinggroundsrecreationalvehicleparksandtrailerparkstags",
                        "keys": ["campinggroundsrecreationalvehicleparksandtrailerparkstags"],
                        "path": "/camping-grounds-recreational-vehicle-parks-and-trailer-parks/tags/",
                        "layout": "TagPage",
                        "scopeLayout": "Level1PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level1PagiLayout"}
                    }, {
                        "id": "otheraccommodationtags",
                        "keys": ["otheraccommodationtags"],
                        "path": "/other-accommodation/tags/",
                        "layout": "TagPage",
                        "scopeLayout": "Level1PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level1PagiLayout"}
                    }], "directories": [{
                        "id": "accommodation",
                        "dirname": "_page/level1-accommodation",
                        "path": "/accommodation/",
                        "layout": "Level1PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level1PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "",
                            "previewFile": "",
                            "fullFile": "",
                            "meta": [{"content": "accommodation", "name": "description"}, {
                                "content": "alpine skiing facilities with accommodations (i.e.,ski resorts),alpine skiing facility with accommodations (i.e.,ski resort),auto courts,lodging,automobile courts,health spas (i.e.,physical fitness facilities) with accommodations,hotel management services (i.e.,providing management and operating staff to run hotel),hotels (except casino hotels),hotels (except casino hotels) with golf courses,tennis courts,and/or other health spa facilities (i.e.,resorts),and/or other health spa facility (i.e.,hotels,membership,resort,without casinos,seasonal,membership hotels,motels,motor courts,motor hotels without casinos,motor inns,motor lodges,resort hotels without casinos,seasonal hotels without casinos,ski lodges and resorts with accommodations,summer resort hotels without casinos,tourist lodges,cabins,housekeeping,cottages,guest houses,hostels,housekeeping cabins,housekeeping cottages,tourist courts,tourist homes,youth hostels,bed and breakfast inns,inns,bed and breakfast,casino hotels,casino,with casinos,resort hotels with casinos,campgrounds,campsites,recreational vehicle parks,rv (recreational vehicle) parks,travel trailer campsites,boys camps (except day,instructional),camps (except day,childrens camps (except day,dude ranches,fishing camps with accommodation facilities,girls camps (except day,guest ranches with accommodation facilities,hunting camps with accommodation facilities,nudist camps with accommodation facilities,outdoor adventure retreats with accommodation facilities,recreational camps with accommodation facilities (except campgrounds),recreational camps with accommodation facility (except campgrounds),summer camps (except day,trail riding camps with accommodation facilities,vacation camps (except campgrounds,day,wilderness camps,boarding houses,clubs,residential,corporate rooming and boarding houses,dormitories,off campus,fraternity houses,migrant workers camps,off campus dormitories,residence clubs,organizational,residential clubs,rooming and boarding houses,sorority houses,workers camps,workers dormitories,accommodation facilities,accommodation facility,accommodation reservation,accommodation site,accommodation sites,acoustical,adding machines,air conditioning room,apartment hotel,apartment hotel operation,apartments sales,auditoriums,backpacking equipment,bannisters,bathroom suites,bathtubs,bed canopies,bed sets,bedding bed,bedroom vanities,bicycleks,billiard rooms,bingo halls,boarding home,boarding house,boot camps,boxers,boys camps,boys day camps,breakfast inns,breakfast sets,burglary,bus hotel,business hotel,business trip,cabin camp,camp furniture,camper,camper parts,camper units,campers,campground management,camping cookware,camping equipment,camping ground,camping lights,camping management,camping site,camping tools,camping trailer merchant,camping trailers,campsite,campsite management,can keys,canming machines,caps in,capsule hotel,car pools,card rooms,casino hotel,casters,chair beds,chamber orchestras,chamfering machines,chartering,check room,cherimoyas,childrens camps,chlorine,classifieds,clocks,club room furniture,coffee machine,company housing,comparators,compilers,computer rooms,con luting,condensers internal,condominium,condominium time-share exchange,condominiums,conference room,contractors-single-family houses,convalescent homes,convertible bed,convertible beds,cooktops,cooperative apartment,coopered tubs,correction houses,correctional boot camps,corrugating machines,cottage,cottage sets,creamers,crematories,crullers,crystal assemblies,cubicles,dance halls,davenports,day camp,demagnetizers,designer condominium,detectors,disciplinary camps,dishwasher parts,dishwashers,display inn,divorce,dog houses,dollhouses,dome inn,dormitory,drinkware sets,duplex,dwellings,e.g. alphabets,é›» ç·šå·¥äº‹,e-healthcare,electrogastrograph,electromedical,ensembles,euphoniums,ex. agents,experience room,experiences,facility establishment,fame halls,fixers,frame house,fraternal lodges,fumigating chambers,gai lan,game rooms,gasmeters,girls camps,girls day camps,goods inn,guest house,guest ranches,guesthouse,gymnasium,hairpieces,hall security,hangars,health resort,health seminars,home centers,home doors,home networks,homes emotionally,homes the,honor camp,hospitality,hostel operation,hot tubs,hotel,hotel arrangement,hotel equipment,hotel furniture,hotel guest,hotel human,hotel management,hotel nen,hotel operation,hotel personnel,hotel reservation,hotel staffing,hotel tableware,house b,house condominium,house home,house numbers,house riff,house trailers,house yard,houseboats,household fans,houses,houseware,housing,housing components,housing exhibition,housing home,housing house,housing household,housing quality,housing reno,housing selling,hunting camp,hunting camps,hustle guards,ice machines,individual,individual hookup,indoor swimming pool,inn wholesales,inns management,inns operation,interlocking blocks,ion chambers,junior chamber,junior chambers,keyboard,kitchen islands,kitchenettes,laptops,law hotel,leisure hotel,leisure hotels,leisurewear,lodge costumes,lodging accommodation,lodging facilities,lodging facility,lodging house,lodging houses,lodging permit,lodging places,loopers,love hotel,machine or,made on premises,magneticming machines,mansion architecture,mansion development,mattress,mattress encasements,mattress springs,mattresses,mattresses from,meetings room,middies,midi controllers,mine sites,miniblinds,mobile home parks,mobile homes,mobility,more than 12,motel construction,motel management,motel reservation service,motherboards,motor homes,motor hotels,motor inn,multifamily housing,n centers,neutral spirit,nickle,nonclassifiable establishments,not operating hotel,not operating motel,not upholstered,nudist camp,nudist camps,on site,organization hotels,other card game,outdoor adventure retreats,pajama,pajamas,panelized housing,paperhanging,partitions,personal estates,personnel lifts,pet hotel,pilings,pool halls,pool parlors,pool rooms,portable toilets,portal site,precut housing,prison bed,private estates,pulpwood camp,radio rental,reading rooms,recreational camps,recreational day camps,refrigerator-freezer,refrigerator-freezer wholesales,relays,reservation site,reservation system,residence club,residence permit,residence status,resident guards,residential lessors,residential trailer parks,resorcinol,resort facilities,resort facility,resort hotel,resort hotels,resort membership,resorts,rest home,rest homes,retarders,retirement hotel rental,retreat houses,room air-conditioners,room concession,room coolers,room units,rooming,rooming houses,routers,ryotei inn,safety switches,sauna buckets,sauna heaters,sauna rooms,saunas,screeding machines,screw posts,seasonal hotels,selector switches,self-support home,sem,semi body,sextans,shelters,signboard inn,signing machines,similar assemblies,similar stands,single-family houses,ski lodge,ski lodges,ski poles,ski resort,ski resorts,ski suits,skiing facilities,sleeping bags,sleeping bedding,sleeping car,sleeping cars,sofa beds,speakers,special effects,special effects lighting,spirits,stairway,sterilizing chambers,stovepipes,strobotrons,student apartments,studios,subbituminous,subdividing,suits in,summer camp,summer camps,summer day camps,summer resort hotels,support inn,swimming pool filter,switches,tap rooms,temporary housing,temporary shelters,tent trailers,tent vestibules,tent wholesales,tents from,testing chambers,timeshare,time-share condominium construction,toddler beds,tourism,tourism area,tourism bureaus,tourist attractions,tourist camps,tourist guide,tourist resort,town house,trail riding camps,travel accommodations,travel reservation,travelers,trust facilities,turning machines,underwater camera housing,vacation,vacation camps,vacation home,vacation lodges,venetian,ventilators,virtual,viruses,viscosimeters,voting machines,waterbeds,webcams,weldments,welting,whirlpool baths,wireless,wireless lan,wireless routers,without accommodations,wood hotel,work villa,youth camps,Accommodation",
                                "name": "keywords"
                            }, {"content": "vietnam", "name": "geo.placename"}, {
                                "content": "vietnam",
                                "name": "geo.position"
                            }, {"content": "vietnam", "name": "geo.region"}, {
                                "content": "accommodation | Vietnam DB",
                                "property": "og:title"
                            }, {"content": "website", "property": "og:type"}, {
                                "content": "accommodation",
                                "property": "og:image:alt"
                            }, {
                                "content": "https://vietnam-db.com/accommodation/",
                                "property": "og:url"
                            }, {
                                "content": "accommodation",
                                "property": "og:description"
                            }, {"content": "https://vietnam-db.com", "property": "og:site_name"}]
                        }
                    }, {
                        "id": "shorttermaccommodationactivities",
                        "dirname": "_page/level2-short-term-accommodation-activities",
                        "path": "/accommodation/short-term-accommodation-activities/",
                        "layout": "Level2PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level2PagiLayout"},
                        "frontmatter": {
                            "tag": "shorttermaccommodationactivitiestags",
                            "dir": "accommodation/short-term-accommodation-activities",
                            "previewFile": "",
                            "fullFile": "",
                            "meta": [{
                                "content": "short-term-accommodation-activities",
                                "name": "description"
                            }, {
                                "content": "business hotel,guesthouse,hotel,hotel equipment,hotel guest,hotel reservation,hotels,leisure hotel,membership,on site,resort,resort hotels,tourism,travelers,vacation,Short Term Accommodation Activities",
                                "name": "keywords"
                            }, {"content": "vietnam", "name": "geo.placename"}, {
                                "content": "vietnam",
                                "name": "geo.position"
                            }, {
                                "content": "vietnam",
                                "name": "geo.region"
                            }, {
                                "content": "short-term-accommodation-activities | Vietnam DB",
                                "property": "og:title"
                            }, {
                                "content": "website",
                                "property": "og:type"
                            }, {
                                "content": "short-term-accommodation-activities",
                                "property": "og:image:alt"
                            }, {
                                "content": "https://vietnam-db.com/accommodation/short-term-accommodation-activities/",
                                "property": "og:url"
                            }, {
                                "content": "short-term-accommodation-activities",
                                "property": "og:description"
                            }, {"content": "https://vietnam-db.com", "property": "og:site_name"}]
                        }
                    }, {
                        "id": "vietnambusinesshotelcompanies",
                        "dirname": "_page/level3-vietnam-business-hotel-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-business-hotel-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-business-hotel-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-business-hotel-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-business-hotel-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamguesthousecompanies",
                        "dirname": "_page/level3-vietnam-guesthouse-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-guesthouse-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-guesthouse-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-guesthouse-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-guesthouse-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamhotelcompanies",
                        "dirname": "_page/level3-vietnam-hotel-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-hotel-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-hotel-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-hotel-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-hotel-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamhotelequipmentcompanies",
                        "dirname": "_page/level3-vietnam-hotel-equipment-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-hotel-equipment-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-hotel-equipment-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-hotel-equipment-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-hotel-equipment-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamhotelguestcompanies",
                        "dirname": "_page/level3-vietnam-hotel-guest-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-hotel-guest-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-hotel-guest-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-hotel-guest-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-hotel-guest-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamhotelreservationcompanies",
                        "dirname": "_page/level3-vietnam-hotel-reservation-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-hotel-reservation-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-hotel-reservation-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-hotel-reservation-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-hotel-reservation-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }, {
                        "id": "vietnamhotelscompanies",
                        "dirname": "_page/level3-vietnam-hotels-companies",
                        "path": "/accommodation/short-term-accommodation-activities/vietnam-hotels-companies/",
                        "layout": "Level3PagiLayout",
                        "pagination": {"lengthPerPage": 10, "layout": "Level3PagiLayout"},
                        "frontmatter": {
                            "tag": "",
                            "dir": "accommodation/short-term-accommodation-activities/vietnam-hotels-companies",
                            "previewFile": "https://vnbizhub.s3.ap-northeast-2.amazonaws.com/companies/vietnam-hotels-companies_preview.xlsx",
                            "fullFile": "https://payment.bizdirectasia.com/?code=default\u0026category=bizhub\u0026item=vietnam-hotels-companies\u0026redirect=https://vietnam-db.com",
                            "meta": null
                        }
                    }


                    ]
                }
            ],
        ]
    };

    config.extend = "@vuepress/theme-default";
    return config;
};
