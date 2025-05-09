var siteConfig = {
  "version": 3,
  "pages": [
      {
          "id": "occurrenceSearch"
      }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [],
  "dataHeader": {
      "enableApiPopup": false,
      "enableInfoPopup": false
  },
  "theme": {
      "fontFamily": "Lato, Arial, Helvetica, sans-serif",
      "primary": "#e6b120",
      "borderRadius": 0,
      "stickyOffset": "0px"
  },
  "maps": {
      "mapStyles": {
          "defaultProjection": "MERCATOR",
          "defaultMapStyle": "BRIGHT",
          "options": {
              "MERCATOR": [
                  "BRIGHT",
                  "NATURAL"
              ]
          }
      }
  },
  "languages": [
      {
          "code": "en",
          "localeCode": "en",
          "label": "English",
          "default": true,
          "textDirection": "ltr",
          "iso3LetterCode": "eng",
          "cmsLocale": "en-GB",
          "gbifOrgLocalePrefix": "",
          "mapTileLocale": "en"
      },
      {
          "code": "fr",
          "localeCode": "en",
          "label": "English",
          "default": false,
          "textDirection": "ltr",
          "iso3LetterCode": "eng",
          "cmsLocale": "en-GB",
          "gbifOrgLocalePrefix": "",
          "mapTileLocale": "en"
      },
      {
          "code": "pt",
          "localeCode": "en",
          "label": "English",
          "default": false,
          "textDirection": "ltr",
          "iso3LetterCode": "eng",
          "cmsLocale": "en-GB",
          "gbifOrgLocalePrefix": "",
          "mapTileLocale": "en"
      }
  ],
  "messages": {},
  "occurrenceSearch": {
      "scope": {
          "type": "and",
          "predicates": [
              {
                  "type": "equals",
                  "key": "taxonKey",
                  "value": "3065"
              },
              {
                  "type": "equals",
                  "key": "hasGeospatialIssue",
                  "value": "false"
              }
          ]
      },
      "highlightedFilters": [
          "taxonKey",
          "recordedBy",
          "country",
          "stateProvince",
          "gadmGid",
          "datasetKey",
          "basisOfRecord",
          "isInCluster",
          "issue"
      ],
      "tabs": [
          "table",
          "map",
          "gallery",
          "datasets",
          "clusters",
          "download"
      ]
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
};
