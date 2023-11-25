// import { logRoles } from '@testing-library/dom';
import { test, describe } from 'vitest';
import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

describe('color button app', () => {
  test('ボタンを押す前と後の色とラベルが変わる', () => {
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
    const checkBoxElement = screen.getByRole('checkbox')
    expect(checkBoxElement).toBeEnabled();
    expect(checkBoxElement).not.toBeChecked();
  });
  test('チェックボックスがチェックされていたらボタンが有効化/無効化されるテスト', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button')
    const checkBoxElement = screen.getByRole('checkbox')
    expect(buttonElement).toBeEnabled();
    expect(checkBoxElement).not.toBeChecked();
    // チェックボックスを押下にボタンを無効化
    fireEvent.click(checkBoxElement)
    expect(buttonElement).toBeDisabled();
    expect(checkBoxElement).toBeChecked();
    // チェックボックスを押下にボタンを有効化
    fireEvent.click(checkBoxElement)
    expect(buttonElement).toBeEnabled();
    expect(checkBoxElement).not.toBeChecked();
  });
  test('チェックボックスがチェックされていたらボタンの色がgrayになるテスト', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button')
    const checkBoxElement = screen.getByRole('checkbox')
    expect(buttonElement).toHaveClass("red")
    expect(checkBoxElement).not.toBeChecked();
    // チェックボックスを押下にボタンを無効化
    fireEvent.click(checkBoxElement)
    fireEvent.click(buttonElement)
    expect(checkBoxElement).toBeChecked();
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("gray")
  });
});

