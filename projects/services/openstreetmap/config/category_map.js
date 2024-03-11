
/**
 default category mapping, openstreetmap features on the left
 correspond to the Pelias taxonomy on the right.

 you can modify this file to suit your specific use-case, or
 alternatively you can inject your own custom taxonomy mapping
 at runtime.

 A special key '*' is used to match any tag value for that key.
 eg. 'aerialway:*' would match 'aerialway:foo' and 'aerialway:bar'.

 Categories are cumulative, so if a document matches on many different
 mappings then it will inherit *all* of those categories.

 @see: http://wiki.openstreetmap.org/wiki/Map_Features
 @see: https://github.com/pelias/pelias/wiki/Taxonomy-v1
**/

const mapping = {

  'aerialway': {
    '*':                        ['transport'],
  },

  'aeroway': {
    '*':                        ['transport','transport:air'],
    'aerodrome':                ['transport','transport:air','transport:air:aerodrome'],
    'international':            ['transport','transport:air','transport:air:airport','airport']
  },

  'amenity': {

    'bbq':                      ['recreation'],
    'dojo':                     ['recreation'],
    'gym':                      ['recreation'],

    'place_of_worship':         ['religion'],

    'arts_centre':              ['education','entertainment'],
    'community_centre':         ['education','entertainment','community_centre'],
    'social_centre':            ['education','entertainment'],
    'library':                  ['education','entertainment','library'],
    'planetarium':              ['education','entertainment'],
    'theatre':                  ['education','entertainment','theatre'],
    'college':                  ['education'],
    'kindergarten':             ['education','kindergarten'],
    'school':                   ['education','school'],
    'university':               ['education'],

    'bar':                      ['nightlife','bar'],
    'biergarten':               ['nightlife','food'],
    'cinema':                   ['entertainment','nightlife','cinema'],
    'casino':                   ['nightlife'],
    'gambling':                 ['nightlife'],
    'nightclub':                ['nightlife'],
    'pub':                      ['nightlife'],

    'courthouse':               ['government'],
    'embassy':                  ['government'],
    'fire_station':             ['government','station','fire_station'],
    'police':                   ['government','police'],
    'post_office':              ['government','post_office','post_box'],
    'ranger_station':           ['government','recreation','station'],
    'register_office':          ['government'],
    'townhall':                 ['government'],

    'coworking_space':          ['professional'],

    'atm':                      ['finance'],
    'bank':                     ['finance','professional','bank'],
    'bureau_de_change':         ['finance','professional'],

    'clinic':                   ['health','health_other'],
    'dentist':                  ['health','health_dentist'],
    'doctors':                  ['health','health_doctors'],
    'hospital':                 ['health','hospital','health_hospital'],
    'nursing_home':             ['health','health_other'],
    'pharmacy':                 ['health','pharmacy','health_pharmacy'],
    'social_facility':          ['health','health_other'],
    'veterinary':               ['professional'],

    'cafe':                     ['food','retail'],
    'fast_food':                ['food','retail','fast_food'],
    'food_court':               ['food','retail'],
    'ice_cream':                ['food','retail'],
    'marketplace':              ['food','retail','marketplace'],
    'restaurant':               ['food','retail','nightlife','restaurant'],

    'bus_station':              ['transport','transport:public','transport:bus','station','bus_stop','bus_station','public_transport_station'],
    'taxi':                     ['transport','transport:taxi'],

    'car_rental':               ['transport','professional','shop_car'],
    'car_wash':                 ['professional','shop_car'],
    'charging_station':         ['transport','professional','station','charging_station'],
    'fuel':                     ['transport','professional','fuel'],

    'ferry_terminal':           ['transport','transport:sea']
  },

  'building': {
    'hotel':                    ['accommodation','hotel'],
    'commercial':               ['professional'],
    'retail':                   ['retail'],

    'chapel':                   ['religion'],
    'church':                   ['religion'],
    'mosque':                   ['religion'],
    'temple':                   ['religion'],
    'synagogue':                ['religion'],
    'shrine':                   ['religion'],

    'civic':                    ['government'],
    'hospital':                 ['health','hospital'],
    'school':                   ['education','school'],
    'stadium':                  ['entertainment','stadium'],
    'university':               ['education','university'],
    'public':                   ['government','administrative'],

    'farm':                     ['industry','industry:agriculture'],

    'train_station':            ['transport','transport:station','station'],
    'transportation':           ['transport','transport:station','station']
  },

  // experimental, import cuisines for food-related venues
  'cuisine': {
    '*':                        ['food'],

    // menu focus
    'bagel':                    ['food:bagel'],
    'barbecue':                 ['food:barbecue'],
    'bougatsa':                 ['food:bougatsa'],
    'burger':                   ['food_burger'],
    'burrito':                  ['food:burrito'],
    'cake':                     ['food:cake'],
    'casserole':                ['food:casserole'],
    'chicken':                  ['food:chicken'],
    'coffee_shop':              ['food:coffee_shop'],
    'crepe':                    ['food_crepe'],
    'couscous':                 ['food:couscous'],
    'curry':                    ['food:curry'],
    'dessert':                  ['food:dessert'],
    'donut':                    ['food:donut'],
    'doughnut':                 ['food:donut'],
    'empanada':                 ['food:empanada'],
    'fish':                     ['food:fish'],
    'fish_and_chips':           ['food:fish_and_chips'],
    'fried_food':               ['food:fried_food'],
    'friture':                  ['food:friture'],
    'gyro':                     ['food:gyro'],
    'ice_cream':                ['food:ice_cream','amenity_ice_cream'],
    'kebab':                    ['food_kebab'],
    'mediterranean':            ['food:mediterranean'],
    'noodle':                   ['food:noodle'],
    'pancake':                  ['food:pancake'],
    'pasta':                    ['food:pasta'],
    'pie':                      ['food:pie'],
    'pizza':                    ['food_pizza'],
    'regional':                 ['food:regional'],
    'sandwich':                 ['food_sandwich'],
    'sausage':                  ['food:sausage'],
    'savory_pancakes':          ['food:savory_pancakes'],
    'seafood':                  ['food:seafood','shop_seafood'],
    'steak_house':              ['food:steak'],
    'sub':                      ['food:sub'],
    'sushi':                    ['food:sushi'],
    'tapas':                    ['food:tapas'],
    'vegan':                    ['food:vegan'],
    'vegetarian':               ['food:vegetarian'],
    'wings':                    ['food:wings'],

    // regional/cultural focus
    'african':                  ['food:cuisine:african'],
    'american':                 ['food:cuisine:american'],
    'arab':                     ['food:cuisine:arab'],
    'argentinian':              ['food:cuisine:argentinian'],
    'asian':                    ['food_asian'],
    'australian':               ['food:cuisine:australian'],
    'baiana':                   ['food:cuisine:baiana'],
    'balkan':                   ['food:cuisine:balkan'],
    'basque':                   ['food:cuisine:basque'],
    'bavarian':                 ['food:cuisine:bavarian'],
    'belarusian':               ['food:cuisine:belarusian'],
    'brazilian':                ['food:cuisine:brazilian'],
    'cantonese':                ['food:cuisine:cantonese'],
    'capixaba':                 ['food:cuisine:capixaba'],
    'caribbean':                ['food:cuisine:caribbean'],
    'chinese':                  ['food_chinese'],
    'croatian':                 ['food:cuisine:croatian'],
    'czech':                    ['food:cuisine:czech'],
    'danish':                   ['food:cuisine:danish'],
    'french':                   ['food_french'],
    'gaucho':                   ['food:cuisine:gaucho'],
    'german':                   ['food:cuisine:german'],
    'greek':                    ['food:cuisine:greek'],
    'hunan':                    ['food:cuisine:hunan'],
    'hungarian':                ['food:cuisine:hungarian'],
    'indian':                   ['food:cuisine:indian'],
    'international':            ['food:cuisine:international'],
    'iranian':                  ['food:cuisine:iranian'],
    'italian':                  ['food_italian'],
    'japanese':                 ['food_japanese'],
    'korean':                   ['food_korean'],
    'kyo_ryouri':               ['food:cuisine:kyo_ryouri'],
    'latin_american':           ['food:cuisine:latin_american'],
    'lebanese':                 ['food_lebanese'],
    'malagasy':                 ['food:cuisine:malagasy'],
    'mexican':                  ['food:cuisine:mexican'],
    'mineira':                  ['food:cuisine:mineira'],
    'okinawa_ryori':            ['food:cuisine:okinawa_ryori'],
    'pakistani':                ['food:cuisine:pakistani'],
    'peruvian':                 ['food:cuisine:peruvian'],
    'polish':                   ['food:cuisine:polish'],
    'portuguese':               ['food:cuisine:portuguese'],
    'rhenish':                  ['food:cuisine:rhenish'],
    'russian':                  ['food:cuisine:russian'],
    'shandong':                 ['food:cuisine:shandong'],
    'sichuan':                  ['food:cuisine:sichuan'],
    'spanish':                  ['food:cuisine:spanish'],
    'thai':                     ['food_thai'],
    'turkish':                  ['food:cuisine:turkish'],
    'vietnamese':               ['food_vietnamese'],
    'westphalian':              ['food:cuisine:westphalian']
  },

  'craft': {
    '*':                        ['professional']
  },

  'emergency': {
    'ambulance_station':        ['health','government','station']
  },

  'historic': {
    'archaeological_site':      ['education','historic'],
    'monument':                 ['education','historic']
  },

  'leisure': {
    'adult_gaming_centre':      ['nightlife'],
    'amusement_arcade':         ['entertainment'],
    'beach_resort':             ['entertainment','recreation'],
    'bandstand':                ['entertainment'],
    'dance':                    ['nightlife'],

    'dog_park':                 ['recreation','park'],
    'fishing':                  ['recreation'],
    'garden':                   ['recreation'],
    'golf_course':              ['recreation','entertainment','sport_golf'],
    'ice_rink':                 ['entertainment'],
    'miniature_golf':           ['entertainment','sport_golf'],
    'nature_reserve':           ['recreation'],
    'park':                     ['recreation','park'],
    'pitch':                    ['recreation','entertainment','pitch'],
    'playground':               ['recreation','playground'],
    'sports_centre':            ['recreation','education','entertainment','sports_centre'],
    'stadium':                  ['entertainment','stadium'],
    'summer_camp':              ['recreation','education'],
    'swimming_pool':            ['recreation','swimming'],
    'track':                    ['recreation'],
    'water_park':               ['entertainment','park','place_water'],

    'hackerspace':              ['education','entertainment'],
  },

  'military': {
    '*':                        ['government:military','government'],
  },

  'natural': {
    'wood':                     ['natural','recreation'],
    'water':                    ['natural','natural:water','recreation'],
    'glacier':                  ['natural','recreation'],
    'beach':                    ['natural','recreation'],
  },

  'office': {
    '*':                        ['professional']
  },

  'public_transport': {
    '*':                        ['transport','transport:public'],
    'station':                  ['transport','transport:station','station','public_transport_station']
  },

  'railway': {
    'light_rail':               ['transport','transport:rail','public_transport_station'],
    'subway':                   ['transport','transport:rail','subway','public_transport_station'],
    'tram':                     ['transport','transport:rail','tram_stop','public_transport_station'],
    'station':                  ['transport','transport:rail','transport:station','station','public_transport_station']
  },

  'shop': {
    '*':                        ['retail'],
    'bakery':                   ['food','shop_bakery'],
    'butcher':                  ['food','shop_butcher'],
    'cheese':                   ['food'],
    'chocolate':                ['food'],
    'coffee':                   ['food'],
    'deli':                     ['food'],
    'greengrocer':              ['food','organic_store','shop_greengrocer'],
    'seafood':                  ['food','shop_seafood'],
    'supermarket':              ['food','supermarket','shop_supermarket'],

    'tailor':                   ['professional','shop_shoes'],
    'copyshop':                 ['professional'],
    'dry_cleaning':             ['professional'],

    'chemist':                  ['health'],
    'medical_supply':           ['health','shop_medical_supply'],
    'optician':                 ['health','optician']
  },

  'sport': {
    '*':                        ['recreation'],
    'american_football':        ['entertainment','football_pitch'],
    'australian_football':      ['entertainment','football_pitch'],
    'badminton':                ['entertainment','sport_badminton'],
    'baseball':                 ['entertainment','sport_baseball'],
    'basketball':               ['entertainment','basketball_pitch'],
    'beachvolleyball':          ['entertainment','sport_beach_volley_ball','sport_volleyball'],
    'billiards':                ['entertainment'],
    'canadian_football':        ['entertainment','football_pitch'],
    'chess':                    ['entertainment'],
    'cricket':                  ['entertainment'],
    'dog_racing':               ['entertainment'],
    'field_hockey':             ['entertainment'],
    'gaelic_games':             ['entertainment'],
    'horse_racing':             ['entertainment'],
    'ice_hockey':               ['entertainment'],
    'karting':                  ['entertainment','sport_karting'],
    'rc_car':                   ['entertainment','shop_car'],
    'rugby_league':             ['entertainment','rugby_pitch'],
    'rugby_union':              ['entertainment','rugby_pitch'],
    'safety_training':          ['education']
  },

  'tourism': {
    'hotel':                    ['accommodation','hotel'],
    'motel':                    ['accommodation'],
    'alpine_hut':               ['accommodation'],
    'apartment':                ['accommodation'],
    'guest_house':              ['accommodation'],
    'chalet':                   ['accommodation'],
    'caravan_site':             ['accommodation'],
    'camp_site':                ['accommodation','camp_site'],
    'wilderness_hut':           ['accommodation'],
    'information':              ['government'],
    'attraction':               ['entertainment','attraction'],
    'theme_park':               ['entertainment','park'],
    'viewpoint':                ['recreation','viewpoint'],
    'museum':                   ['education','entertainment','museum'],
    'gallery':                  ['education','entertainment'],
    'zoo':                      ['education','entertainment']
  }

};

module.exports = mapping;
