import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Item from '../../components/Item/Item';
import { CategoriesI, ItemI } from '../../interfaces';
import ItemService from '../../services/Item.service';
import httpService from "../../services/HttpRequest.service";
import './List.scss';

export default function List() {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState<CategoriesI>([]);
  const [items, setItems] = useState<ItemI[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    searchItems(searchParams.get('search') || '');
  }, [searchParams]);

  async function searchItems(search: string): Promise<void> {
    const itemService = new ItemService(httpService);
    const itemsResponse = await itemService.getItems(search)
    setCategories(itemsResponse.categories);
    setItems(itemsResponse.items);
  }

  const navigateToItem = ({ id }: ItemI) => navigate(`/items/${id}`);

  return (
    <>
      <Breadcrumb categories={categories}></Breadcrumb>
      <div
        className="container container__list"
        aria-label="Listado de items de la tienda"
        role="list"
      >
        {items.map((item: ItemI) => (
          <Item key={item.id} item={item} clickEvent={navigateToItem} />
        ))}
      </div>
    </>
  );
}
