import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <Menu>
        <Menu.Item
          active={filterBy === "all"}
          onClick={setFilter.bind(this, "all")}
        >
          Все
        </Menu.Item>
        <Menu.Item
          active={filterBy === "price_hight"}
          onClick={setFilter.bind(this, "price_hight")}
        >
          Цена (дорогие)
        </Menu.Item>
        <Menu.Item
          active={filterBy === "price_low"}
          onClick={setFilter.bind(this, "price_low")}
        >
          Цена (дешевые)
        </Menu.Item>{" "}
        <Menu.Item
          active={filterBy === "author"}
          onClick={setFilter.bind(this, "author")}
        >
          Автор
        </Menu.Item>
        <Menu.Item>
          <Input onChange={e => setSearchQuery(e.target.value)} icon="search" value={searchQuery} placeholer="Search"></Input>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Filter;
