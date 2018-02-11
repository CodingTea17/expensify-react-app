import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should trigger remove expense action object', () => {
  const action = removeExpense({ id: '12345' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  });
});
