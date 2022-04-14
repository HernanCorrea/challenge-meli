import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ItemInfo from '../../components/ItemInfo/ItemInfo';
import { CategoryI, ItemI } from '../../interfaces';
import httpService from '../../services/HttpRequest.service';
import ItemService from '../../services/Item.service';
import './Detail.scss';

export default function Detail() {
  const { id } = useParams();
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [item, setItem] = useState<ItemI | null>(null);

  useEffect(() => {
    getItemById(id || null);
  }, [id]);

  async function getItemById(id: string | null): Promise<void> {
    if (!id) return
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
