import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductProductInfo extends Schema.Component {
  collectionName: 'components_product_product_infos';
  info: {
    displayName: 'product_info';
    description: '';
  };
  attributes: {
    sort: Attribute.Relation<
      'product.product-info',
      'oneToOne',
      'api::sorts.sorts'
    >;
    availability: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    packing: Attribute.Relation<
      'product.product-info',
      'oneToOne',
      'api::packings.packings'
    >;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.Text;
    weight: Attribute.Enumeration<
      ['\u0433', '\u043A\u0433', '\u0446', '\u0442']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.product-info': ProductProductInfo;
    }
  }
}
