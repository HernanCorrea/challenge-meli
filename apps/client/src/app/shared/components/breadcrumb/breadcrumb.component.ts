import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CategoriesI } from '../../../core/interfaces';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() categories!: CategoriesI[] | null;
}
