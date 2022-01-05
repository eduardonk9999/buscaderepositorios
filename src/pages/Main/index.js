import React, {  } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import { Container, Form, SubmitButton } from './styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind()

    this.state = {
      newRepo: '',
    };
  }

  handleInputChange = e => {
    console.log(e.target.value)
    console.log(this)
    this.setState({ newRepo: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    console.log(this)

  }


  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder='Adcionar repositório'
            value={newRepo}
            onChange={this.handleInputChange}
           />

          <SubmitButton >
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    )
  }
}


