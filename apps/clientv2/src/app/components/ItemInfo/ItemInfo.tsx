import React, { useState } from 'react';
import formatPrice from '../../helpers/helpers';
import { ItemI } from '../../interfaces';
import ImageMagnifier from '../ImageMagnifier/ImageMagnifier';
import { MagnifierEventI } from '../ImageMagnifier/ImageMagnifier.interface';
import PreviewMagnifier from '../PreviewMagnifier/PreviewMagnifier';

interface ItemInfoProps {
  item: ItemI;
}

export default function ItemInfo({ item }: ItemInfoProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifier, setMagnifier] = useState<MagnifierEventI>(
    {} as MagnifierEventI
  );
  return (
    <div className="container container__detail">
      <div className="wrapper">
        <div className="header__item">
          <div className="info__item">
            <div className="title__content">
              <span className="sells__item">
                {item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
                {item.sold_quantity} vendidos
              </span>
              <h2 className="title__item">{item.title}</h2>
            </div>
            <div className="price__content">
              <h1 className="price__item">{formatPrice(item.price.amount)}</h1>
            </div>
            <button
              id="buy_button"
              className="defult__button buy__item"
              tabIndex={1}
              aria-label="Comprar item"
            >
              Comprar
            </button>
            {showMagnifier && <PreviewMagnifier {...magnifier} />}
          </div>
          <div id="detail_content" className="content__item">
            <div className="image__item">
              <ImageMagnifier
                width={'100%'}
                height={'auto'}
                lensWidth={150}
                lensHeight={170}
                src={item.picture}
                show={setShowMagnifier}
                eventCallBack={setMagnifier}
              />
            </div>
            <div
              className="detail__content"
              tabIndex={0}
              aria-flowto="buy_button"
            >
              <h2 className="description__title">Descripción del Producto</h2>
              <p className="description__paragraph">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
