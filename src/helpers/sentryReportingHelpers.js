/**
 * Regular Expression to match entity/:id pattern in url
 * @type {RegExp}
 */
const entityIdRegExp = RegExp(/(\w+)\/(\d+)/, 'g');

/**
 * Finds pairs entity/id
 * @param url
 */
export const matchUrlEntityIdPairs = url => url.match(entityIdRegExp);

/**
 * Takes matched patterns of route and makes an object from it
 * @param matches
 * @returns {{}}
 */
export const extractRouteParams = matches => {
  let content = {};
  matches &&
    matches.forEach(match => {
      let [entity, id] = match.split('/');
      Object.assign(content, {
        [entity]: parseInt(id),
      });
    });
  return content;
};

/**
 * Makes nic url pattern
 * @param url
 */
export const makeUrlPattern = url =>
  url.replace(entityIdRegExp, (match, entity) => `${entity}/{id}`);

/**
 *
 * @param url
 * @param response
 * @returns {string}
 */
export const makeErrorTitle = ({ url, response }) =>
  `${response.status} - ${makeUrlPattern(url)}`;

/**
 * Removes vulnerable data that shouldn't go to Sentry when system crashes
 * @param payloadBody
 * @returns {*}
 */
export const truncateVulnerableData = payloadBody => {
  payloadBody.subject && delete payloadBody.subject;
  payloadBody.body && delete payloadBody.body;
  payloadBody.to && delete payloadBody.to;
  payloadBody.attachments &&
    payloadBody.attachments.label &&
    delete payloadBody.attachments.label;
  return payloadBody;
};
