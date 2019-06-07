import { Component, OnInit } from '@angular/core';
import { TreeViewNode, TreeViewNodeType } from '../models/tree-view-node';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { OrderLoggingService } from '../services/order-logging.service';

interface FlatNode {
  expandable: boolean,
  code: string;
  name: string;
  description: string;
  type: TreeViewNodeType;
  level: number;
}

@Component({
  selector: 'jb-order-logging-tree-view',
  templateUrl: './order-logging-tree-view.component.html',
  styleUrls: ['./order-logging-tree-view.component.css']
})

export class OrderLoggingTreeViewComponent implements OnInit {
  
  private _transformer = (node: TreeViewNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      code: node.code,
      name: node.name,
      description: node.description,
      type: node.type,
      level: level,
    }
  }

  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;
 
  constructor(private orderLoggingService: OrderLoggingService) { 
  }

  ngOnInit(): void {
    this.orderLoggingService.postCustomerSearchResult.subscribe(data => this.onSearchDataPosted(data));
  }

  onSearchDataPosted(data: TreeViewNode[]) {
    if (!data) {
      return;
    }

    this.dataSource.data = data;
    this.loadCustomer(data[0].code);
  }

  onClick(node: TreeViewNode) {
    switch (node.type) {
      case TreeViewNodeType.Customer: {
        this.loadCustomer(node.code);
        break;
      }
      case TreeViewNodeType.Order: {
        this.loadOrder(node.code);
        break;
      }
      case TreeViewNodeType.Sample: {
        this.loadSample(node.code);
        break;
      }
    }
  }

  private loadCustomer(customerCode: string) {
    this.orderLoggingService.getCustomer(customerCode);
  }

  private loadOrder(orderCode: string) {
    this.orderLoggingService.clearSample();
    this.orderLoggingService.getOrder(orderCode);
  }

  private loadSample(sampleCode: string) {
    this.orderLoggingService.clearOrder();
    this.orderLoggingService.getSample(sampleCode);
  }
}
