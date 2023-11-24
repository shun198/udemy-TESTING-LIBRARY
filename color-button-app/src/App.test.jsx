// import { logRoles } from '@testing-library/dom';
import { test, describe } from 'vitest';
import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

describe('color button app', () => {
  test('ボタンを押す前と後の色とラベルが期待通り', () => {
    // デバッグ用
    // const { container } = render(<App />);
    // logRoles
    // Appコンポーネントをレンダリング
    render(<App />);
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent("blue")
    expect(buttonElement).toHaveClass('red');
    // ボタンを押下
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent("red")
    expect(buttonElement).toHaveClass('blue');
  });
  test('ボタンを押す前と後の色とラベルが期待通り', () => {
    // デバッグ用
    // const { container } = render(<App />);
    // logRoles
    // Appコンポーネントをレンダリング
    render(<App />);
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent("blue")
    expect(buttonElement).toHaveClass('red');
    // ボタンを押下
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent("red")
    expect(buttonElement).toHaveClass('blue');
  });
  test('チェックボックス用のテスト', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent("blue")
    expect(buttonElement).toHaveClass('red');
    // ボタンを押下
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent("red")
    expect(buttonElement).toHaveClass('blue');
  });
});

