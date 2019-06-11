import { OrderLoggingTreeViewComponent } from './order-logging-tree-view.component';
import { TreeViewNode, TreeViewNodeType } from '../models/tree-view-node';

function setup() {
  const orderLoggingServiceSpy = jasmine.createSpyObj(
    'OrderLoggingService',
     ['search', 'getCustomer', 'getOrder', 'clearOrder', 'getSample', 'clearSample']);
  const component = new OrderLoggingTreeViewComponent(orderLoggingServiceSpy);
  return { component, orderLoggingServiceSpy };
}

describe('OrderLoggingTreeViewComponent', () => {
  it('should create', () => {
    const { component, orderLoggingServiceSpy } = setup();
    expect(component).toBeTruthy();
  });

  it('when onClick is called with Customer node should call service GetCustomer', () => {
    const { component, orderLoggingServiceSpy } = setup();
    let node = new TreeViewNode();
    node.code = "TestCode";
    node.type = TreeViewNodeType.Customer;
    component.onClick(node);
    expect(orderLoggingServiceSpy.getCustomer.calls.count()).toBe(1);
    expect(orderLoggingServiceSpy.getCustomer).toHaveBeenCalledWith("TestCode");
  });

  it('when onClick is called with Order node should call service GetOrder and ClearSample', () => {
    const { component, orderLoggingServiceSpy } = setup();
    let node = new TreeViewNode();
    node.code = "TestCode";
    node.type = TreeViewNodeType.Order;
    component.onClick(node);
    expect(orderLoggingServiceSpy.clearSample.calls.count()).toBe(1);
    expect(orderLoggingServiceSpy.getOrder.calls.count()).toBe(1);
    expect(orderLoggingServiceSpy.getOrder).toHaveBeenCalledWith("TestCode");
  });

  it('when onClick is called with Sample node should call service GetSample and ClearOrder', () => {
    const { component, orderLoggingServiceSpy } = setup();
    let node = new TreeViewNode();
    node.code = "TestCode";
    node.type = TreeViewNodeType.Sample;
    component.onClick(node);
    expect(orderLoggingServiceSpy.clearOrder.calls.count()).toBe(1);
    expect(orderLoggingServiceSpy.getSample.calls.count()).toBe(1);
    expect(orderLoggingServiceSpy.getSample).toHaveBeenCalledWith("TestCode");
  });
});
