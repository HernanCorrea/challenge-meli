import { Request, Response } from 'express';
import { authorObject } from '../../environments/environment';
import { HttpRequestI, ItemI } from '../interfaces';
import { CategoryService, ItemService } from '../services';

export class ItemController {
  private author = authorObject;
  private itemService: ItemService;
  private categoryService: CategoryService;

  constructor(httpRequest: HttpRequestI) {
    this.itemService = new ItemService(httpRequest);
    this.categoryService = new CategoryService(httpRequest);
  }

  /**
   * Search all Items
   * @param req
   * @param res
   */
  get = async (req: Request, res: Response) => {
    try {
      const query = req.query?.q as string;
      const itemRes = await this.itemService.get({ query });
      const items = itemRes.results.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 0,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: item.address.state_name,
      }));
      const categories = await this.categoryService.formatCategory(itemRes);
      res.json({
        author: this.author,
        items,
        categories,
      });
    } catch (err) {
      res.status(err.status).json(err);
    }
  };

  /**
   * Get Item Details by Id
   * @param req
   * @param res
   */
  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const itemDetailRes = await Promise.all([
        this.itemService.getById(id),
        this.itemService.getByIdDescription(id),
      ]);
      const itemDetail: ItemI = itemDetailRes[0];
      const item = {
        id: itemDetail.id,
        title: itemDetail.title,
        price: {
          currency: itemDetail.currency_id,
          amount: itemDetail.price,
          decimals: 0,
        },
        picture: itemDetail.pictures[0].secure_url,
        condition: itemDetail.condition,
        free_shipping: itemDetail.shipping.free_shipping,
        sold_quantity: itemDetail.sold_quantity,
        description: itemDetailRes[1].plain_text,
      };
      const categories = await this.categoryService.getFormatById(
        itemDetail.category_id
      );
      res.json({
        author: this.author,
        item,
        categories,
      });
    } catch (err) {
      res.status(err.status).json(err);
    }
  };
}
