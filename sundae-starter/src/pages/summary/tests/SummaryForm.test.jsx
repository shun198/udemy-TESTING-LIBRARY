import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SummaryForm from '../SummaryForm';

describe('pages/summary/SummaryForm.jsx', () => {
  test('利用規約に同意するとボタンが有効化される', async() => {
    const user = 
    userEvent.setup();
    render(<SummaryForm />);
    const button = screen.getByRole('button');
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
    expect(button).toBeDisabled();
    // チェックボックスを押下してボタンを有効化
    // awaitを使ってuserEventを実行させてからテストを実行するようにする
    await user.click(checkBox);
    expect(checkBox).toBeChecked();
    expect(button).toBeEnabled();
  });
  test('ボタン上マウスをホバーさせればポップアップが表示される', async() => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    // マウスをボタン上にホバーさせなければポップアップが表示されないことを確認
    const nullPopOver = screen.queryByText("一度購入したものは返金できません");
    expect(nullPopOver).not.toBeInTheDocument();
    const termsAndConditions = screen.getByText("利用規約");
    await user.hover(termsAndConditions);
    // マウスをボタン上にホバーさせればポップアップが表示されることを確認
    const popOver = screen.getByText("一度購入したものは返金できません");
    expect(popOver).toBeInTheDocument();
    // マウスをボタン上に再びホバーさせなければポップアップが表示されないことを確認
    await user.unhover(termsAndConditions);
    expect(nullPopOver).not.toBeInTheDocument();
  });
});

