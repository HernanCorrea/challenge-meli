import React from 'react';
import './Item.scss';
import FreeShiping from '../../../assets/images/ic_shipping.png';
import { ItemI } from '../../interfaces';
// TODO: INTERFACE
type clickFunction = (item: ItemI) => void;
type props = {
  item: ItemI;
  clickEvent: clickFunction;
};
// TODO: COMPONENT
export default function Item({ item, clickEvent }: props) {
  function dispatchDetail(e: any) {
    (e.key === 'Enter' || e.type === 'click') && clickEvent(item);
  }
  return (
    <div
      className="item__card"
      role="link"
      tabIndex={0}
      onClick={dispatchDetail}
      onKeyPress={dispatchDetail}
    >
      <div className="section__thumbnail">
        <img src={item.picture} alt={item.title} />
      </div>
      <div className="section__content">
        <div className="detail__item">
          <div className="title__container">
            <h2 className="price__item">{item.price.amount}</h2>
            {item.free_shipping && (
              <img
                className="free__item"
                alt="free shipping"
                src={FreeShiping}
                aria-hidden="true"
              />
            )}
          </div>
          <p className="description__item" aria-hidden="true">
            {item.title}
          </p>
          <span
            className="status__item"
            aria-label={'Condición ' + item.condition}
          >
            {item.condition}
          </span>
        </div>
        <div className="location__item">
          <span aria-label={'Ubicado en ' + item.location}>
            {item.location}
          </span>
        </div>
      </div>
    </div>
  );
}