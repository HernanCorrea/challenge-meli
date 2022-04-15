import React, { useReducer } from 'react';
import {
  listInitialState,
  ListReducer,
  ListReducerTypes,
} from './List.reducer';
import { useEffect, } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Item from '../../components/Item/Item';
import { ItemI } from '../../interfaces';
import ItemService from '../../services/Item.service';
import httpService from '../../services/HttpRequest.service';
import './List.scss';
import NoData from '../../components/NoData/NoData';

export default function List() {
  const [state, dispatch] = useReducer(ListReducer, listInitialState);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    searchItems(searchParams.get('search') || '');
  }, [searchParams]);

  async function searchItems(search: string): Promise<void> {
    try {
      const itemService = new ItemService(httpService);
      const { categories, items } = await itemService.getItems(search);
      dispatch({
        type: ListReducerTypes.SET_PARAMS,
        payload: { items, categories, hasData: !!items.length },
      });
    } catch (err) {
      console.log(err);
    }
  }

  const navigateToItem = ({ id }: ItemI) => navigate(`/items/${id}`);

  return (
    <>
      {!state.hasData ? (
        <NoData />
      ) : (
        <Breadcrumb categories={state.categories}></Breadcrumb>
      )}
      <div
        className="container container__list"
        aria-label="Listado de items de la tienda"
        role="list"
      >
        {state.items.map((item: ItemI) => (
          <Item key={item.id} item={item} clickEvent={navigateToItem} />
        ))}
      </div>
    </>
  );
}
