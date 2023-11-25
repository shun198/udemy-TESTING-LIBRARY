import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/react'
import Options from '../Options'


describe('pages/entry/Options.jsx', () => {
    test('APIから取得した画像を表示', async() => {
      render(<Options optionType="scoops"/>);
      const scoopImages = await screen.findAllByRole("img");
      expect(scoopImages).toHaveLength(2);
      const altText = scoopImages.map((element)=>element.alt)
      // 配列にはtoEqualを使用する
      expect(altText).toEqual(["Chocolate scoop","Vanilla scoop"])
    });
})