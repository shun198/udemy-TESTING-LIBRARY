// import { logRoles } from '@testing-library/dom';
import { test, describe } from 'vitest';
import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

describe('src/App.jsx', () => {
  test('ボタンを押す前と後の色とラベルが変わる', () => {
    // デバッグ用
    // const { container } = render(<App />);
    // logRoles
    // Appコンポーネントをレンダリング
    render(<App />);
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent("blue")
    expect(button).toHaveClass('red');
    // ボタンを押下
    fireEvent.click(button)
    expect(button).toHaveTextContent("red")
    expect(button).toHaveClass('blue');
  });
  test('チェックボックス用のテスト', () => {
    render(<App />);
    const checkBox = screen.getByRole('checkbox')
    expect(checkBox).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });
  test('チェックボックスがチェックされていたらボタンが有効化/無効化されるテスト', () => {
    render(<App />);
    const button = screen.getByRole('button')
    const checkBox = screen.getByRole('checkbox')
    expect(button).toBeEnabled();
    expect(checkBox).not.toBeChecked();
    // チェックボックスを押下してボタンを無効化
    fireEvent.click(checkBox)
    expect(button).toBeDisabled();
    expect(checkBox).toBeChecked();
    // チェックボックスを押下してボタンを有効化
    fireEvent.click(checkBox)
    expect(button).toBeEnabled();
    expect(checkBox).not.toBeChecked();
  });
  test('チェックボックスがチェックされていたらボタンの色がgrayになるテスト', () => {
    render(<App />);
    const button = screen.getByRole('button')
    const checkBox = screen.getByRole('checkbox')
    expect(button).toHaveClass("red")
    expect(checkBox).not.toBeChecked();
    // チェックボックスを押下してボタンを無効化
    fireEvent.click(checkBox)
    fireEvent.click(button)
    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();
    expect(button).toHaveClass("gray")
  });
});

