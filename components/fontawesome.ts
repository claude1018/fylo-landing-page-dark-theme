import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';

const facebookLookup: IconLookup = { prefix: 'fab', iconName: 'facebook' };
const facebookIconDefinition: IconDefinition =
  findIconDefinition(facebookLookup);
const twitterLookup: IconLookup = { prefix: 'fab', iconName: 'twitter' };
const twitterIconDefinition: IconDefinition = findIconDefinition(twitterLookup);
const instagramLookup: IconLookup = { prefix: 'fab', iconName: 'instagram' };
const instagramIconDefinition: IconDefinition =
  findIconDefinition(instagramLookup);

const IconDefinitions = {
  facebook: facebookIconDefinition,
  twitter: twitterIconDefinition,
  instagram: instagramIconDefinition,
};

module.exports = IconDefinitions;
