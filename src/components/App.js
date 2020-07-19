import React, { Component } from "react";
import axios from "axios";
import Menu from "./Menu";
import { Container, CardGroup } from "semantic-ui-react";
import BookCard from "./BookCard";
import Filter from "../containers/Filter";

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get(`/books.json`).then(({ data }) => {
      setBooks(data);
    });
  }
  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <CardGroup itemsPerRow={4}>
          {!isReady
            ? `loading...`
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </CardGroup>
      </Container>
    );
  }
}
export default App;
