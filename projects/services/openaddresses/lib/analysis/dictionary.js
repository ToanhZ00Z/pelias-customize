const _ = require('lodash');
const fs = require('fs');
const path = require('path');

/**
  load a libpostal dictionary from disk
  eg: https://raw.githubusercontent.com/openvenues/libpostal/master/resources/dictionaries/en/street_types.txt

  libpostal format:
    The leftmost string is treated as the canonical/normalized version.
    Synonyms if any, are appended to the right, delimited by the pipe character.

  see: https://github.com/openvenues/libpostal/tree/master/resources/dictionaries

  output example:
  {
    'bruecke': 'bruecke',
    'brücke':  'bruecke',
    'brucke':  'bruecke',
    'br.':     'bruecke'
  }
 */

// regular expression to target removal of common punctuation
const PUNCTUATION_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;

module.exports = (opts) => {

  /**
   * options
   *
   * countryCode (string) -- country-code corresponding to a subdirectory in the the ./directories folder
   * filename (string) -- the name of the file to load inside the directory mentioed above
   * includeSelfReferences (bool) -- whether to also include the canonical synonym in the map
   * minLength (int) -- minimum valid length for a synonym in the dictionary
   */
  const options = _.defaults({}, opts, {
    includeSelfReferences: false,
    minLength: 0
  });

  try {
    const filepath = path.resolve(__dirname, 'dictionaries', options.countryCode, options.filename);
    const file = fs.readFileSync(filepath).toString();
    const lines = file.trim().split('\n');

    const map = lines.reduce((obj, line) => {
      var cols = line.trim().split('|');

      // remove multi-word synonyms from all but the first position
      cols = cols.filter((col, pos) => (pos === 0) || !/[\s]/.test(col));

      cols.forEach((col, pos) => {
        if (!options.includeSelfReferences && 0 === pos) { return; } // skip first column ( the expansion )
        if (col.replace(PUNCTUATION_REGEX).length < (options.minLength || 0)) { return; } // skip very short synonyms

        // warn user when duplicate terms are added to the map
        if (obj.hasOwnProperty(col)){
          console.warn(`[${options.filename}] trying to replace ${col}=>${obj[col]} with ${col}=>${cols[0]}`);
        }

        obj[col] = cols[0];
      });
      return obj;
    }, {});

    return map;
  }
  catch (e) {
    return {};
  }
};
