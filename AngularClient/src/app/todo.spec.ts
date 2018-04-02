/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Todos} from './todos';

describe('Todos', () => {

  it('should create an instance', () => {
    expect(new Todos()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todos = new Todos({
      taskName: 'hello',
      taskStatus: 'Active'
    });
    expect(todos.taskName).toEqual('hello');
    expect(todos.complete).toEqual('Active');
  });

});
