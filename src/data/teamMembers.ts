
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
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Alexandria from uploaded image
  },
  {
    name: 'Catherine'
  },
  {
    name: 'Drew',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Drew from uploaded image
  },
  {
    name: 'Dylan'
  },
  {
    name: 'Ellie',
    venmo: 'https://venmo.com/u/Ellie-nix-1',
    cashApp: 'https://cash.app/$EllieNix1'
  },
  {
    name: 'Harrison',
    venmo: 'https://venmo.com/u/hmagoutas',
    cashApp: 'https://cash.app/$HarrisonMagoutas'
  },
  {
    name: 'Joe',
    venmo: 'https://venmo.com/u/Joe-Gosch'
  },
  {
    name: 'Matthew'
  },
  {
    name: 'Nelly (Niloofar)',
    venmo: 'https://venmo.com/u/Niloofar-Campos',
    cashApp: 'https://cash.app/$niloocamp',
    zelle: '832-955-4332',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Niloofar from uploaded image
  },
  {
    name: 'Peter',
    venmo: 'https://venmo.com/u/mrpeterha',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Peter from uploaded image
  },
  {
    name: 'Samantha',
    venmo: 'https://venmo.com/u/Samantha93b',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Samantha from uploaded image
  },
  {
    name: 'Satvik',
    zelle: '512-567-3166',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Satvik from uploaded image
  },
  {
    name: 'Star',
    venmo: 'https://venmo.com/u/Vanastar',
    paypal: 'https://www.paypal.me/Vanastar'
  },
  {
    name: 'Tim',
    tripadvisor: 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html',
    imageUrl: '/lovable-uploads/917d59fa-ffaf-44aa-aa28-a8c2e6ecb836.png' // Timothy from uploaded image
  }
];
