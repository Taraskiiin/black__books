import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export class MenuComponent extends Component {
    render() {
        return (
            <Menu>
            <Menu.Item
              name="browse"
              onClick={this.handleItemClick}
            >
              Магазин книг
            </Menu.Item>
  
            <Menu.Menu position="right">
              <Menu.Item
                name="signup"
                //  active={activeItem === 'signup'}
                onClick={this.handleItemClick}
              >
                Итого: &nbsp; <b>0</b> руб.
              </Menu.Item>
  
              <Menu.Item
                name="help"
                //  active={activeItem === 'help'}
                onClick={this.handleItemClick}
              >
                Корзина
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        )
    }
}

export default MenuComponent;
