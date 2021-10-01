export interface Product {
  readonly id: number;
  title: string;
  price: number;
  imgUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Cheesecake',
    price: 120,
    imgUrl:
      'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-7.jpg',
  },
  {
    id: 2,
    title: 'Croissant',
    price: 60,
    imgUrl: 'https://medias.bridor.com/media/sys_master/images/h9e/hc2/8801945845790.png',
  },
  {
    id: 3,
    title: 'Tartlet',
    price: 200,
    imgUrl:
      'https://www.abakingjourney.com/wp-content/uploads/2019/11/Strawberry-Tartlets-feature.jpg',
  },
];
