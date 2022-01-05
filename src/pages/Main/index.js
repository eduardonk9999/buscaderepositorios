import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRepo: '',
    };
  }

  handleInputChance = e => {
    this.setState({ newRepo: e.targer.value })
  }
  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder='Adcionar repositório'
            value={newRepo}
            onChange={this.handleInputChance}
           />

          <SubmitButton disabled>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}


