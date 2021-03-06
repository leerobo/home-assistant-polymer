import { LovelaceConfig } from "../../../../src/data/lovelace";

export const demoLovelaceTeachingbirds: () => LovelaceConfig = () => ({
  title: "Home",
  resources: [
    // {
    //   url: "/local/lovelace/mini-media-player.js?v=0.6",
    //   type: "module",
    // },
    // {
    //   url: "/local/lovelace/slider-entity-row.js?v=d6da75",
    //   type: "js",
    // },
    // {
    //   url: "/local/lovelace/monster-card.js?v=0.2.3",
    //   type: "js",
    // },
    // {
    //   url: "/local/lovelace/tracker-card.js?v=0.1.5",
    //   type: "js",
    // },
    // {
    //   url: "/local/lovelace/home-setter.js?v=0.0.1",
    //   type: "js",
    // },
  ],
  views: [
    {
      cards: [
        { type: "custom:ha-demo-card" },
        {
          cards: [
            {
              cards: [
                {
                  image: "/assets/teachingbirds/isa_square.jpg",
                  type: "picture-entity",
                  show_name: false,
                  tap_action: {
                    action: "more-info",
                  },
                  entity: "sensor.presence_isa",
                },
                {
                  image: "/assets/teachingbirds/Stefan_square.jpg",
                  type: "picture-entity",
                  show_name: false,
                  tap_action: {
                    action: "more-info",
                  },
                  entity: "sensor.presence_stefan",
                },
                {
                  image: "/assets/teachingbirds/background_square.png",
                  elements: [
                    {
                      state_image: {
                        on: "/assets/teachingbirds/radiator_on.jpg",
                        off: "/assets/teachingbirds/radiator_off.jpg",
                      },
                      type: "image",
                      style: {
                        width: "100%",
                        top: "50%",
                        left: "50%",
                      },
                      tap_action: {
                        action: "more-info",
                      },
                      entity: "switch.stefan_radiator_3",
                    },
                    {
                      style: {
                        top: "90%",
                        left: "50%",
                      },
                      type: "state-label",
                      entity: "sensor.temperature_stefan",
                    },
                  ],
                  type: "picture-elements",
                },
                {
                  image: "/assets/teachingbirds/background_square.png",
                  elements: [
                    {
                      style: {
                        "--iron-icon-width": "100px",
                        "--iron-icon-height": "100px",
                        top: "50%",
                        left: "50%",
                      },
                      type: "icon",
                      tap_action: {
                        action: "navigate",
                        navigation_path: "/lovelace/traffic",
                      },
                      icon: "mdi:car",
                    },
                  ],
                  type: "picture-elements",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  show_name: false,
                  type: "picture-entity",
                  name: "Alarm",
                  image: "/assets/teachingbirds/House_square.jpg",
                  entity: "alarm_control_panel.house",
                },
                {
                  name: "Roomba",
                  image: "/assets/teachingbirds/roomba_square.jpg",
                  show_name: false,
                  type: "picture-entity",
                  state_image: {
                    "Not Today": "/assets/teachingbirds/roomba_bw_square.jpg",
                  },
                  entity: "input_select.roomba_mode",
                },
                {
                  show_name: false,
                  type: "picture-entity",
                  state_image: {
                    Mail: "/assets/teachingbirds/mailbox_square.jpg",
                    "Package and mail":
                      "/assets/teachingbirds/mailbox_square.jpg",
                    Empty: "/assets/teachingbirds/mailbox_bw_square.jpg",
                    Package: "/assets/teachingbirds/mailbox_square.jpg",
                  },
                  entity: "sensor.mailbox",
                },
                {
                  show_name: false,
                  state_image: {
                    "Put out": "/assets/teachingbirds/trash_square.jpg",
                    "Take in": "/assets/teachingbirds/trash_square.jpg",
                  },
                  type: "picture-entity",
                  image: "/assets/teachingbirds/trash_bear_bw_square.jpg",
                  entity: "sensor.trash_status",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  state_image: {
                    Idle: "/assets/teachingbirds/washer_square.jpg",
                    Running: "/assets/teachingbirds/laundry_running_square.jpg",
                    Clean: "/assets/teachingbirds/laundry_clean_2_square.jpg",
                  },
                  entity: "input_select.washing_machine_status",
                  type: "picture-entity",
                  show_name: false,
                  name: "Washer",
                },
                {
                  state_image: {
                    Idle: "/assets/teachingbirds/dryer_square.jpg",
                    Running: "/assets/teachingbirds/clothes_drying_square.jpg",
                    Clean: "/assets/teachingbirds/folded_clothes_square.jpg",
                  },
                  entity: "input_select.dryer_status",
                  type: "picture-entity",
                  show_name: false,
                  name: "Dryer",
                },
                {
                  image: "/assets/teachingbirds/guests_square.jpg",
                  type: "picture-entity",
                  show_name: false,
                  tap_action: {
                    action: "toggle",
                  },
                  entity: "input_boolean.guest_mode",
                },
                {
                  image: "/assets/teachingbirds/cleaning_square.jpg",
                  type: "picture-entity",
                  show_name: false,
                  tap_action: {
                    action: "toggle",
                  },
                  entity: "input_boolean.cleaning_day",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  graph: "line",
                  type: "sensor",
                  entity: "sensor.temperature_bedroom",
                },
                {
                  graph: "line",
                  type: "sensor",
                  name: "S's room",
                  entity: "sensor.temperature_stefan",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  graph: "line",
                  type: "sensor",
                  entity: "sensor.temperature_passage",
                },
                {
                  graph: "line",
                  type: "sensor",
                  name: "Laundry",
                  entity: "sensor.temperature_downstairs_bathroom",
                },
              ],
              type: "horizontal-stack",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              cards: [
                // {
                //   entities: [
                //     {
                //       name: "Front door lock",
                //       entity: "sensor.front_door_lock",
                //     },
                //     {
                //       name: "Yard door lock",
                //       entity: "sensor.yard_door_lock",
                //     },
                //     "sensor.front_door",
                //     "sensor.back_door",
                //     "sensor.backyard_door",
                //     "sensor.balcony_door",
                //     "sensor.yard_door",
                //     {
                //       name: "Dining area",
                //       entity: "sensor.dining_area_window",
                //     },
                //     {
                //       name: "Bedroom",
                //       entity: "sensor.bedroom_window",
                //     },
                //     {
                //       name: "Ring motion",
                //       entity: "sensor.front_door_outdoor_movement",
                //     },
                //     "sensor.hallway_movement",
                //     "sensor.passage_movement",
                //     "sensor.upstairs_hallway_movement",
                //     "sensor.living_room_movement",
                //     "sensor.back_door_camera_movement",
                //     {
                //       name: "Storage door",
                //       entity: "sensor.yard_storage_door",
                //     },
                //     "sensor.water_heater",
                //     "sensor.kitchen_sink",
                //     "binary_sensor.smoke_sensor_158d0001d37bdd",
                //     "binary_sensor.smoke_sensor_158d0001d37be5",
                //     "binary_sensor.smoke_sensor_158d0001d37c82",
                //   ],
                //   show_empty: false,
                //   type: "entity-filter",
                //   card: {
                //     type: "glance",
                //     show_state: false,
                //   },
                //   state_filter: [
                //     "Open",
                //     "Movement detected",
                //     "Leaking",
                //     "Unlocked",
                //     "on",
                //   ],
                // },
                {
                  entities: [
                    "light.outdoor_lights",
                    {
                      name: "Yard net",
                      entity: "light.outdoor_yard_light_net",
                    },
                    "light.bedroom_ceiling_light",
                    "light.bedside_lamp",
                    "light.dining_area_ceiling_light_level",
                    "light.kitchen_ceiling_spotlights_level",
                    "light.floorlamp_reading_light",
                    "light.floorlamp_uplight",
                    "light.hallway_window_light",
                    "light.isa_ceiling_light",
                    "light.living_room_ceiling_light_level",
                    "light.living_room_spotlights_level",
                    "light.passage_ceiling_spotlights_level",
                    "light.stairs_lights_lights",
                    "light.walk_in_closet_lights",
                    "light.upstairs_hallway_ceiling_light_level",
                    "light.gateway_light_34ce008bfc4b",
                  ],
                  show_empty: false,
                  type: "entity-filter",
                  card: {
                    type: "glance",
                    show_state: false,
                  },
                  state_filter: ["on"],
                },
              ],
              type: "vertical-stack",
            },
            {
              type: "shopping-list",
            },
            {
              entities: [
                {
                  entity: "switch.livingroom_tv",
                  name: "Tv",
                  icon: "mdi:television-classic",
                },
                // {
                //   hide_power: true,
                //   group: true,
                //   icon: "mdi:television-classic",
                //   artwork_border: true,
                //   type: "custom:mini-media-player",
                //   entity: "media_player.livingroom_tv",
                // },
                {
                  entity: "switch.livingroom_movie_system",
                  name: "Movie system",
                  icon: "mdi:movie",
                },
                // {
                //   hide_power: true,
                //   group: true,
                //   name: "Movie system",
                //   icon: "mdi:movie",
                //   artwork_border: true,
                //   type: "custom:mini-media-player",
                //   entity: "media_player.livingroom_movie_system",
                // },
                // {
                //   hide_power: true,
                //   type: "custom:mini-media-player",
                //   entity: "media_player.shield",
                //   group: true,
                //   icon: "mdi:cast",
                // },
                // {
                //   group: true,
                //   icon: "mdi:speaker-wireless",
                //   power_color: true,
                //   artwork_border: true,
                //   type: "custom:mini-media-player",
                //   entity: "media_player.sonos",
                // },
                // {
                //   group: true,
                //   name: "Chromecast Bedroom",
                //   icon: "mdi:cast",
                //   artwork_border: true,
                //   type: "custom:mini-media-player",
                //   entity: "media_player.sovrum",
                // },
              ],
              type: "entities",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              image: "/assets/teachingbirds/plants.png",
              elements: [
                {
                  style: {
                    top: "30%",
                    "--ha-label-badge-font-size": "1em",
                    left: "10%",
                  },
                  type: "state-badge",
                  entity: "sensor.small_chili_moisture",
                },
                {
                  style: {
                    top: "30%",
                    "--ha-label-badge-font-size": "1em",
                    left: "25%",
                  },
                  type: "state-badge",
                  entity: "sensor.big_chili_moisture",
                },
                {
                  style: {
                    top: "30%",
                    "--ha-label-badge-font-size": "1em",
                    left: "40%",
                  },
                  type: "state-badge",
                  entity: "sensor.herbs_moisture",
                },
                {
                  style: {
                    top: "12%",
                    "--ha-label-badge-font-size": "1em",
                    left: "92%",
                  },
                  type: "state-label",
                  entity: "sensor.greenhouse_temperature",
                },
              ],
              type: "picture-elements",
            },
            {
              // show_name: false,
              // entity: "camera.stockholm_meteogram",
              // type: "picture-entity",
              // show_state: false,
              type: "picture",
              image: "/assets/teachingbirds/meteogram.png",
            },
            {
              cards: [
                {
                  type: "gauge",
                  severity: {
                    green: 0,
                    yellow: 2,
                    red: 3,
                  },
                  min: 0,
                  max: 6,
                  title: "Downstairs",
                  measurement: "visits",
                  entity: "counter.litterbox_downstairs_visits",
                },
                {
                  type: "gauge",
                  severity: {
                    green: 0,
                    yellow: 2,
                    red: 3,
                  },
                  min: 0,
                  max: 6,
                  title: "Upstairs",
                  measurement: "visits",
                  entity: "counter.litterbox_upstairs_visits",
                },
              ],
              type: "horizontal-stack",
            },
          ],
          type: "vertical-stack",
        },
      ],
      path: "home",
      title: "Home",
      icon: "mdi:information-outline",
    },
    {
      cards: [
        {
          cards: [
            {
              cards: [
                {
                  entity: "script.air_cleaner_quiet",
                  type: "entity-button",
                  name: "AC bed",
                  tap_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "script.air_cleaner_quiet",
                    },
                    service: "script.turn_on",
                  },
                  icon: "mdi:fan-off",
                },
                {
                  entity: "script.air_cleaner_auto",
                  type: "entity-button",
                  name: "AC bed",
                  tap_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "script.air_cleaner_auto",
                    },
                    service: "script.turn_on",
                  },
                  icon: "mdi:fan",
                },
                {
                  entity: "script.air_cleaner_turbo",
                  type: "entity-button",
                  name: "AC bed",
                  tap_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "script.air_cleaner_turbo",
                    },
                    service: "script.turn_on",
                  },
                  icon: "mdi:run-fast",
                },
                {
                  entity: "script.ac_off",
                  type: "entity-button",
                  name: "AC",
                  tap_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "script.ac_off",
                    },
                    service: "script.turn_on",
                  },
                  icon: "mdi:fan-off",
                },
                {
                  entity: "script.ac_on",
                  type: "entity-button",
                  name: "AC",
                  tap_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "script.ac_on",
                    },
                    service: "script.turn_on",
                  },
                  icon: "mdi:fan",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  graph: "line",
                  type: "sensor",
                  entity: "sensor.temperature_bedroom",
                },
                {
                  graph: "line",
                  type: "sensor",
                  name: "S's room",
                  entity: "sensor.temperature_stefan",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  graph: "line",
                  type: "sensor",
                  entity: "sensor.temperature_passage",
                },
                {
                  graph: "line",
                  type: "sensor",
                  name: "S's room",
                  entity: "sensor.temperature_downstairs_bathroom",
                },
              ],
              type: "horizontal-stack",
            },
            {
              cards: [
                {
                  graph: "line",
                  type: "sensor",
                  entity: "sensor.temperature_storage",
                },
                {
                  graph: "line",
                  type: "sensor",
                  name: "S's room",
                  entity: "sensor.refrigerator",
                },
              ],
              type: "horizontal-stack",
            },
            {
              entities: [
                {
                  name: "Vacation",
                  entity: "input_boolean.vacation_mode",
                },
                "input_boolean.cleaning_day",
                "input_boolean.guest_mode",
                {
                  name: "Isa Mode",
                  tap_action: {
                    action: "toggle",
                  },
                  entity: "input_boolean.isa_mode",
                },
              ],
              show_header_toggle: false,
              type: "glance",
            },
            {
              entities: [
                "sensor.pollen_bjork",
                "sensor.pollen_gras",
                "sensor.pollen_grabo",
              ],
              type: "glance",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              states: ["arm_home", "arm_away", "arm_night"],
              type: "alarm-panel",
              entity: "alarm_control_panel.house",
            },
            {
              entities: [
                {
                  entity: "sensor.front_door",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.back_door",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.yard_door",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.balcony_door",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.dining_area_window",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.bedroom_window",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.passage_movement",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.upstairs_hallway_movement",
                  secondary_info: "last-changed",
                },
                {
                  entity: "binary_sensor.stefans_room_motion",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.ring_front_door_last_motion",
                  secondary_info: "last-changed",
                },
              ],
              type: "entities",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              hours_to_show: 48,
              entities: [
                "sensor.temperature_bedroom",
                "sensor.temperature_passage",
                "sensor.temperature_downstairs_bathroom",
                "sensor.temperature_stefan",
              ],
              type: "history-graph",
              title: "Temperatures 48h",
            },
            {
              hours_to_show: 168,
              entities: [
                "sensor.temperature_bedroom",
                "sensor.temperature_passage",
                "sensor.temperature_downstairs_bathroom",
                "sensor.temperature_stefan",
              ],
              type: "history-graph",
              title: "Temperatures 7 Days",
            },
            {
              hours_to_show: 24,
              entities: [
                "sensor.passage_pir_luminance",
                "sensor.upstairs_hallway_pir_luminance",
              ],
              type: "history-graph",
              title: "Light 24 Hours",
            },
          ],
          type: "vertical-stack",
        },
      ],
      title: "Home info",
      path: "home_info",
      icon: "mdi:home-heart",
    },
    {
      cards: [
        {
          cards: [
            {
              cards: [
                {
                  entity: "scene.morning_lights",
                  hold_action: {
                    action: "call-service",
                    service: "script.goodnight",
                  },
                  type: "entity-button",
                  tap_action: {
                    action: "none",
                  },
                  icon: "mdi:weather-night",
                },
                {
                  entity: "scene.morning_lights",
                  hold_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "scene.morning_lights",
                    },
                    service: "scene.turn_on",
                  },
                  type: "entity-button",
                  tap_action: {
                    action: "none",
                  },
                  icon: "mdi:coffee-outline",
                },
                {
                  entity: "scene.movie_time",
                  hold_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "scene.movie_time",
                    },
                    service: "scene.turn_on",
                  },
                  type: "entity-button",
                  tap_action: {
                    action: "none",
                  },
                  icon: "mdi:television-classic",
                },
              ],
              type: "horizontal-stack",
            },
            {
              entities: [
                {
                  type: "section",
                  label: "Front",
                },
                // {
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Wall",
                //   entity: "light.outdoor_front_light",
                // },
                {
                  name: "Chain lights",
                  entity: "light.outdoor_front_hanging_lights",
                },
                {
                  type: "section",
                  label: "Yard",
                },
                // {
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Wall",
                //   entity: "light.outdoor_yard_light",
                // },
                {
                  name: "Chain lights",
                  entity: "light.outdoor_hanging_lights",
                },
                {
                  name: "Light net",
                  entity: "light.outdoor_yard_light_net",
                },
              ],
              show_header_toggle: false,
              type: "entities",
              title: "Outdoor",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              cards: [
                {
                  entity: "light.downstairs_lights",
                  hold_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "light.downstairs_lights",
                    },
                    service: "light.turn_off",
                  },
                  type: "entity-button",
                  tap_action: {
                    action: "none",
                  },
                  icon: "mdi:page-layout-footer",
                },
                {
                  entity: "light.upstairs_lights",
                  hold_action: {
                    action: "call-service",
                    service_data: {
                      entity_id: "light.upstairs_lights",
                    },
                    service: "light.turn_off",
                  },
                  type: "entity-button",
                  tap_action: {
                    action: "none",
                  },
                  icon: "mdi:page-layout-header",
                },
              ],
              type: "horizontal-stack",
            },
            {
              entities: [
                {
                  name: "Kitchen",
                  entity: "light.kitchen_ceiling_spotlights_level",
                },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Dining area",
                //   entity: "light.dining_area_ceiling_light_level",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Floorlamp",
                //   entity: "light.floorlamp_uplight",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Floorlamp reading",
                //   entity: "light.floorlamp_reading_light",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Livingroom",
                //   entity: "light.living_room_ceiling_light_level",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Livingroom spots",
                //   entity: "light.living_room_spotlights_level",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Passage",
                //   entity: "light.passage_ceiling_spotlights_level",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Hallway window",
                //   entity: "light.hallway_window_light",
                // },
                // {
                //   hide_when_off: true,
                //   toggle: true,
                //   type: "custom:slider-entity-row",
                //   name: "Stairs",
                //   entity: "light.stairs_lights",
                // },
              ],
              show_header_toggle: false,
              type: "entities",
              title: "Downstairs",
            },
          ],
          type: "vertical-stack",
        },
        // {
        //   cards: [
        //     {
        //       entities: [
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Bedside",
        //           entity: "light.bedside_lamp",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Bedroom",
        //           entity: "light.bedroom_ceiling_light",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Isa",
        //           entity: "light.isa_ceiling_light",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Upstairs hallway",
        //           entity: "light.upstairs_hallway_ceiling_light_level",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Nightlight",
        //           entity: "light.gateway_light_34ce008bfc4b",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: true,
        //           type: "custom:slider-entity-row",
        //           name: "Walk in closet",
        //           entity: "light.walk_in_closet_lights",
        //         },
        //         {
        //           hide_when_off: true,
        //           toggle: false,
        //           type: "custom:slider-entity-row",
        //           name: "Stefan",
        //           entity: "light.stefan_lightstrip",
        //         },
        //       ],
        //       show_header_toggle: false,
        //       type: "entities",
        //       title: "Upstairs",
        //     },
        //   ],
        //   type: "vertical-stack",
        // },
      ],
      path: "lights",
      title: "Lights",
      icon: "mdi:lightbulb-on",
    },
    {
      cards: [
        {
          cards: [
            {
              cards: [
                {
                  type: "gauge",
                  entity: "sensor.processor_use",
                },
                {
                  type: "gauge",
                  entity: "sensor.disk_use_percent_",
                },
                {
                  type: "gauge",
                  entity: "sensor.memory_use_percent",
                },
              ],
              type: "horizontal-stack",
            },
            {
              entities: ["sensor.last_boot"],
              type: "entities",
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              entities: [
                "sensor.system_printer",
                "sensor.system_nas",
                "sensor.system_ipad",
                {
                  name: "Sannce",
                  entity: "sensor.system_ip_camera",
                },
                {
                  entity: "sensor.system_dafang",
                  name: "Dafang",
                  icon: "mdi:webcam",
                },
                {
                  name: "IR Hallway",
                  entity: "sensor.system_ir_blaster",
                },
                {
                  name: "IR Bedroom",
                  entity: "sensor.system_ir_blaster_bedroom",
                },
                {
                  name: "IR Livingroom",
                  entity: "sensor.system_ir_blaster_living_room",
                },
                "sensor.system_milight_hub",
                {
                  name: "Xiaomi",
                  entity: "sensor.system_xiaomi_gateway",
                },
                "sensor.system_ring_doorbell",
                "sensor.system_ring_chime_pro",
                "sensor.system_ring_chime",
              ],
              type: "glance",
              columns: 5,
              show_state: false,
            },
            {
              entities: [
                {
                  name: "Isa",
                  entity: "sensor.system_isa_computer",
                },
                {
                  name: "Isa work laptop",
                  entity: "sensor.system_isa_dell_xps",
                },
                {
                  name: "Isa laptop",
                  entity: "sensor.system_isa_laptop",
                },
                {
                  name: "Stefan",
                  entity: "sensor.system_stefan_computer",
                },
                {
                  name: "Stefan work laptop",
                  entity: "sensor.system_stefan_laptop",
                },
              ],
              type: "glance",
              columns: 3,
              show_state: false,
            },
            {
              entities: [
                {
                  name: "TV",
                  entity: "sensor.system_samsung65",
                },
                {
                  name: "Movie System",
                  entity: "sensor.system_movie_system",
                },
                {
                  name: "Shield",
                  entity: "sensor.system_shield",
                },
                {
                  entity: "sensor.system_sonos",
                  name: "Sonos",
                  icon: "mdi:speaker-wireless",
                },
                {
                  name: "Bed TV",
                  entity: "sensor.system_samsung49",
                },
                {
                  name: "Bed CC",
                  entity: "sensor.system_chromecast_bedroom",
                },
              ],
              type: "glance",
              columns: 3,
              show_state: false,
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              entities: [
                {
                  name: "Asus",
                  entity: "sensor.system_asus_router",
                },
                {
                  name: "Netgear",
                  entity: "sensor.system_netgear_router",
                },
                {
                  name: "Ping",
                  entity: "sensor.speedtest_ping",
                },
                {
                  name: "Download",
                  entity: "sensor.speedtest_download",
                },
                {
                  name: "Upload",
                  entity: "sensor.speedtest_upload",
                },
              ],
              type: "glance",
            },
            {
              entities: [
                "sensor.speedtest_download",
                "sensor.speedtest_ping",
                "sensor.speedtest_upload",
              ],
              type: "history-graph",
            },
            {
              entities: [
                {
                  name: "Hass RPi",
                  entity: "sensor.system_hass_rpi",
                },
                {
                  name: "Dashboard RPi",
                  entity: "sensor.system_magic_mirror_rpi",
                },
                {
                  name: '7" Dashboard RPi',
                  entity: "sensor.system_dashboard_rpi",
                },
                {
                  name: "RPi Zero",
                  entity: "sensor.system_rpi_zero",
                },
              ],
              type: "glance",
              columns: 4,
            },
          ],
          type: "vertical-stack",
        },
        {
          cards: [
            {
              entities: [
                {
                  entity: "sensor.presence_isa",
                  icon: "mdi:map-marker-circle",
                  name: "Isa presence",
                  secondary_info: "last-changed",
                },
                {
                  entity: "device_tracker.isabellas_iphone_x",
                  secondary_info: "last-changed",
                  name: "Isa ios",
                  icon: "mdi:apple",
                },
                {
                  entity: "device_tracker.isabellas_iphone_x_wifi",
                  secondary_info: "last-changed",
                  name: "Isa Wifi",
                  icon: "mdi:wifi",
                },
                {
                  entity: "sensor.isabellas_iphone_x_bt",
                  secondary_info: "last-changed",
                  name: "Isa bt",
                  icon: "mdi:bluetooth",
                },
                {
                  name: "Proximity to home",
                  entity: "proximity.home_isa",
                },
              ],
              type: "entities",
            },
            {
              entities: [
                {
                  entity: "sensor.presence_stefan",
                  secondary_info: "last-changed",
                  name: "Stefan presence",
                  icon: "mdi:map-marker-circle",
                },
                {
                  entity: "device_tracker.stefan_iphone_7",
                  secondary_info: "last-changed",
                  name: "Stefan ios",
                  icon: "mdi:apple",
                },
                {
                  entity: "device_tracker.stefan_iphone_7_wifi",
                  secondary_info: "last-changed",
                  name: "Stefan Wifi",
                  icon: "mdi:wifi",
                },
                {
                  entity: "sensor.stefan_iphone_7_bt",
                  secondary_info: "last-changed",
                  name: "Stefan bt",
                  icon: "mdi:bluetooth",
                },
                {
                  name: "Proximity to home",
                  entity: "proximity.home_stefan",
                },
              ],
              type: "entities",
            },
            {
              entities: [
                {
                  entity: "sensor.unlocked_by",
                  name: "Front door last unlocked by",
                  secondary_info: "last-changed",
                },
                {
                  entity: "sensor.monitor",
                  name: "Monitor status",
                  secondary_info: "last-changed",
                },
              ],
              type: "entities",
            },
          ],
          type: "vertical-stack",
        },
      ],
      path: "info",
      title: "Info",
      icon: "mdi:lan",
    },
    // {
    //   cards: [
    //     {
    //       cards: [
    //         {
    //           entities: [
    //             "switch.dafang_night_mode",
    //             "light.isa_ceiling_light",
    //             "switch.dafang_h264_rtsp_server",
    //           ],
    //           camera_image: "camera.upstairs",
    //           type: "picture-glance",
    //           title: "Upstairs",
    //         },
    //         {
    //           entities: [
    //             {
    //               tap_action: {
    //                 action: "call-service",
    //                 service: "script.dafang_down",
    //               },
    //               entity: "script.dafang_down",
    //             },
    //             {
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               entity: "script.dafang_up",
    //             },
    //             {
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               entity: "script.dafang_left",
    //             },
    //             {
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               entity: "script.dafang_right",
    //             },
    //             {
    //               entity: "script.dafang_calibrate",
    //               hold_action: {
    //                 action: "toggle",
    //               },
    //               tap_action: {
    //                 action: "none",
    //               },
    //               icon: "mdi:reload",
    //             },
    //           ],
    //           show_name: false,
    //           type: "glance",
    //           show_state: false,
    //         },
    //         {
    //           type: "picture-entity",
    //           entity: "camera.motion_dafang",
    //         },
    //       ],
    //       type: "vertical-stack",
    //     },
    //     {
    //       cards: [
    //         {
    //           entities: [
    //             "light.living_room_ceiling_light_level",
    //             "light.living_room_spotlights_level",
    //           ],
    //           camera_image: "camera.back_door",
    //           type: "picture-glance",
    //           title: "Back door",
    //         },
    //         {
    //           entities: [
    //             {
    //               entity: "script.sannce_down",
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               icon: "mdi:chevron-down",
    //             },
    //             {
    //               entity: "script.sannce_up",
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               icon: "mdi:chevron-up",
    //             },
    //             {
    //               entity: "script.sannce_left",
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               icon: "mdi:chevron-left",
    //             },
    //             {
    //               entity: "script.sannce_right",
    //               tap_action: {
    //                 action: "toggle",
    //               },
    //               icon: "mdi:chevron-right",
    //             },
    //             {
    //               entity: "script.sannce_calibrate",
    //               hold_action: {
    //                 action: "toggle",
    //               },
    //               tap_action: {
    //                 action: "none",
    //               },
    //               icon: "mdi:reload",
    //             },
    //           ],
    //           show_name: false,
    //           type: "glance",
    //           show_state: false,
    //         },
    //         {
    //           type: "picture-entity",
    //           entity: "camera.motion_sannce",
    //         },
    //       ],
    //       type: "vertical-stack",
    //     },
    //     {
    //       cards: [
    //         {
    //           entities: ["sensor.ring_front_door_battery"],
    //           camera_image: "camera.front_door",
    //           title: "Latest Motion Front Door",
    //           show_state: false,
    //           type: "picture-glance",
    //           entity: "camera.front_door",
    //         },
    //       ],
    //       type: "vertical-stack",
    //     },
    //   ],
    //   path: "cameras",
    //   title: "Cameras",
    //   icon: "mdi:cctv",
    // },
    // {
    //   cards: [
    //     {
    //       cards: [
    //         {
    //           entities: [
    //             {
    //               name: "Road temp",
    //               entity: "sensor.trafikverket_alta_road_temperature",
    //             },
    //             {
    //               entity: "sensor.homesolna_travel_time",
    //               name: "Solna",
    //               icon: "mdi:car",
    //             },
    //             {
    //               entity: "sensor.homec9_travel_time",
    //               name: "C9",
    //               icon: "mdi:car",
    //             },
    //           ],
    //           type: "glance",
    //         },
    //         {
    //           cards: [
    //             {
    //               entity: "camera.tpl_skvaltan",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //             {
    //               entity: "camera.tpl_nacka",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //           ],
    //           type: "horizontal-stack",
    //         },
    //         {
    //           cards: [
    //             {
    //               entity: "camera.vikdalen",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //             {
    //               entity: "camera.tpl_kvarnholmen",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //           ],
    //           type: "horizontal-stack",
    //         },
    //         {
    //           cards: [
    //             {
    //               entity: "camera.marinstaden",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //             {
    //               entity: "camera.svindersvik",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //           ],
    //           type: "horizontal-stack",
    //         },
    //         {
    //           cards: [
    //             {
    //               entity: "camera.sicklatunneln",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //             {
    //               entity: "camera.tpl_grondal",
    //               type: "picture-entity",
    //               show_state: false,
    //             },
    //           ],
    //           type: "horizontal-stack",
    //         },
    //       ],
    //       type: "vertical-stack",
    //     },
    //   ],
    //   path: "traffic",
    //   title: "Traffic info",
    //   icon: "mdi:car",
    // },
    // {
    //   cards: [
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "input_boolean.ad_*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Appdaemon Apps",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.cats*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Cats",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.house*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "House",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.lights*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Lights",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.presence*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Presence",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.security*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Security",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.system*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "System",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.temperature*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Temperature",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "automation.tts*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "TTS",
    //       },
    //       show_empty: false,
    //     },
    //     {
    //       filter: {
    //         include: [
    //           {
    //             entity_id: "alert.*",
    //           },
    //         ],
    //       },
    //       type: "custom:monster-card",
    //       card: {
    //         show_header_toggle: false,
    //         type: "entities",
    //         title: "Alerts",
    //       },
    //       show_empty: false,
    //     },
    //   ],
    //   path: "automations",
    //   title: "Automations",
    //   icon: "mdi:flash-auto",
    // },
    {
      cards: [
        {
          cards: [
            {
              entities: [
                {
                  url: "https://www.home-assistant.io/",
                  type: "weblink",
                  name: "Home Assistant",
                  icon: "mdi:home-assistant",
                },
                {
                  url: "https://rc--home-assistant-docs.netlify.com/",
                  type: "weblink",
                  name: "Home Assistant Beta",
                  icon: "mdi:home-assistant",
                },
                {
                  url:
                    "https://github.com/home-assistant/home-assistant-polymer/releases",
                  type: "weblink",
                  name: "Lovelace release notes",
                  icon: "mdi:home-heart",
                },
                {
                  url: "https://s3.amazonaws.com/hassio-version/stable.json",
                  type: "weblink",
                  name: "Hassio build",
                  icon: "mdi:home-assistant",
                },
                {
                  url:
                    "https://github.com/dresden-elektronik/deconz-rest-plugin/releases",
                  type: "weblink",
                  name: "Deconz release notes",
                  icon: "mdi:home-assistant",
                },
              ],
              show_header_toggle: false,
              type: "entities",
              title: "Links",
            },
          ],
          type: "vertical-stack",
        },
        // {
        //   cards: [
        //     {
        //       type: "custom:home-setter",
        //       pages: [
        //         {
        //           path: "lovelace/home",
        //           name: "Default",
        //         },
        //         {
        //           path: "lovelace/dashboard",
        //           name: "Dashboard",
        //         },
        //       ],
        //     },
        //     {
        //       title: null,
        //       type: "custom:tracker-card",
        //       trackers: [
        //         "sensor.custom_card_tracker",
        //         "sensor.custom_component_tracker",
        //       ],
        //     },
        //   ],
        //   type: "vertical-stack",
        // },
      ],
      path: "settings",
      title: "Settings",
      icon: "mdi:cogs",
    },
  ],
});
