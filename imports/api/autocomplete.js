import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';

const DATA_URL = "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={rows}&solrTerm={term}"

if (Meteor.isClient) {
  /**
   * Make a local collection available on the client
   */
  export const AutoComplete = new Mongo.Collection('autocomplete');
}

if (Meteor.isServer) {
  /**
   * On the server, create a publication that
   * requests data from the rentalcars.com endpoint.
   */
  Meteor.publish('autocomplete', function autocompletePublication(rows, term) {

    check(rows, Number); // Validate the number of rows
    check(term, String); // Validate the search term

    let url = DATA_URL.replace("{rows}", rows).replace("{term}", term);
    let result = HTTP.call('GET',  url);
    let items = JSON.parse(result.content).results.docs;
    for (let i = 0; i < Math.min(rows, items.length); ++i) {
      let item = items[i];
      let convertedItem = convert(item);
      convertedItem.id = i;
      this.added('autocomplete', i, convertedItem);
    }
    this.ready();
  });
}

/**
 * Convert the JSON returned from the end point into a
 * format ready for the client.
 */
function convert(i) {
  let c = {name: i.name}
  switch(i.placeType) {
    case "A":
    c.subtitle = getSubheader([i.city, i.country]);
    c.type = "Airport";
    break;
    case 'P':
    c.subtitle = getSubheader([i.country]);
    c.type = "Region";
    break;
    case 'C':
    c.subtitle = getSubheader([i.region, i.country]);
    c.type = "City";
    break;
    case 'D':
    c.subtitle = getSubheader([i.city, i.region, i.country]);
    c.type = "District";
    break;
    case 'T':
    c.subtitle = getSubheader([i.city, i.region, i.country]);
    c.type = "Station";
    break;
    case 'G':
    c.subtitle = "";
    c.type = "Place";
    break;
    default:
      c.subtitle = "";
      c.type = "notag";
  }

  return c;
}

/**
 * Generate a sub header based on an array of fields.
 */
function getSubheader(arr) {
  let sep = "";
  return arr.map(e => {
    if (e) {
      let v = sep + e;
      sep = ", ";
      return v;
    }
    return "";
  }).join("");
}
