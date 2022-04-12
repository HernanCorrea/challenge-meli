import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ItemInfo from '../../components/ItemInfo/ItemInfo';
import { CategoriesI, ItemI } from '../../interfaces';
import httpService from '../../services/HttpRequest.service';
import ItemService from '../../services/Item.service';
import './Detail.scss';

export default function Detail() {
  const { id } = useParams();
  const [categories, setCategories] = useState<CategoriesI>([]);
  const [item, setItem] = useState<ItemI | null>(null);

  useEffect(() => {
    getItemById(id || '');
  }, [id]);

  async function getItemById(id: string): Promise<void> {
    const itemService = new ItemService(httpService);
    const itemResponse = await itemService.getItemById(id);
    setItem(itemResponse.item);
    setCategories(itemResponse.categories);
  }

  return (
    <>
      <Breadcrumb categories={categories}></Breadcrumb>
      {item && <ItemInfo item={item} />}
    </>
  );
}
