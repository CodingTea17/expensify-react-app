import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should trigger remove expense action object', () => {
  const action = removeExpense({ id: '12345' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  });
});

test('should trigger edit expense action object', () => {
  const action = editExpense( '12345' , { note: 'truckload of bananas' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: { note: 'truckload of bananas' }
  });
});

test('should trigger the add expense action object', () => {
  const newExpense = {
    description: 'Chocolate',
    note: 'It was worth it.',
    amount: 1000,
    createdAt: 90000
  };
  const action = addExpense(newExpense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...newExpense, id: expect.any(String) }
  })
});

test('should trigger the add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
