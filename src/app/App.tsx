import React from 'react';

import * as S from '../assets/styles/globalStyle';

import Header from '../components/header';
import InputSearch from '../components/input';
import Button from '../components/button';
import TodoList from '../components/todo';

function App() {
  return (
    <S.Container>
      <Header>Todo List</Header>

      <S.Container>
        <InputSearch
          type="text"
          name="search"
          value="value"
          placeholder="enter your task"
          id="search"
        />
        <Button type="submit" variant="success" onClick={() => false}>
          +
        </Button>
      </S.Container>

      <S.Main>
        <TodoList />
      </S.Main>
    </S.Container>
  );
}

export default App;
