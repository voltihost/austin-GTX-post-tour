
import { teamAvatars } from '@/config/assets';

export interface TeamMemberData {
  name: string;
  cashApp?: string;
  venmo?: string;
  zelle?: string;
  tripadvisor?: string;
  paypal?: string;
  imageUrl?: string;
}

export const teamMembersData: TeamMemberData[] = [
  {
    name: 'Alexandria',
    cashApp: 'https://cash.app/$AlexandriaValerio',
    venmo: 'https://venmo.com/u/Alexandria-Valerio',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html',
    imageUrl: teamAvatars.alexandria
  },
  {
    name: 'Andrea',
    imageUrl: teamAvatars.andrea
  },
  {
    name: 'Catherine',
    imageUrl: teamAvatars.catherine
  },
  {
    name: 'Coyote',
    imageUrl: teamAvatars.coyote
  },
  {
    name: 'Drew',
    imageUrl: teamAvatars.drew
  },
  {
    name: 'Dylan',
    imageUrl: teamAvatars.dylan
  },
  {
    name: 'Ellie',
    venmo: 'https://venmo.com/u/Ellie-nix-1',
    cashApp: 'https://cash.app/$EllieNix1',
    imageUrl: teamAvatars.ellie
  },
  {
    name: 'Harrison',
    venmo: 'https://venmo.com/u/hmagoutas',
    cashApp: 'https://cash.app/$HarrisonMagoutas',
    imageUrl: teamAvatars.harrison
  },
  {
    name: 'Joe',
    venmo: 'https://venmo.com/u/Joe-Gosch',
    imageUrl: teamAvatars.joe
  },
  {
    name: 'Matthew',
    imageUrl: teamAvatars.matthew
  },
  {
    name: 'Nelly (Niloofar)',
    venmo: 'https://venmo.com/u/Niloofar-Campos',
    cashApp: 'https://cash.app/$niloocamp',
    zelle: '832-955-4332',
    imageUrl: teamAvatars.nelly
  },
  {
    name: 'Peter',
    venmo: 'https://venmo.com/u/mrpeterha',
    imageUrl: teamAvatars.peter
  },
  {
    name: 'Samantha',
    venmo: 'https://venmo.com/u/Samantha93b',
    imageUrl: teamAvatars.samantha
  },
  {
    name: 'Satvik',
    zelle: '512-567-3166',
    imageUrl: teamAvatars.satvik
  },
  {
    name: 'Star',
    venmo: 'https://venmo.com/u/Vanastar',
    paypal: 'https://www.paypal.me/Vanastar',
    imageUrl: teamAvatars.star
  },
  {
    name: 'Tim',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html',
    imageUrl: teamAvatars.tim
  }
];
