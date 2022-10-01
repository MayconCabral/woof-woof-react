import React from 'react';
import {cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const app = () => render(<App />)


describe('Check the elements on the page', () => {    
  afterEach(() => cleanup())

  test('there is input select', () => {  
    app() 
    const input = screen.getByRole('button');

    expect(input).toBeInTheDocument()
  });

  test('there is a word written "Breed" in the input select', () => {
    app()
    const label = screen.getByLabelText('Breed')
   
    expect(label).toBeInTheDocument()
  })

})
