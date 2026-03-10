import { test} from '@playwright/test';

test('Keyboard Actions', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByPlaceholder('Enter your name').focus();
  await page.keyboard.type('Sonakshi');

  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');

  await page.keyboard.down('Control');
  await page.keyboard.press('C');
  await page.keyboard.up('Control');

  await page.keyboard.press('Tab');
  await page.keyboard.insertText('sona@gmail.com');

  await page.keyboard.press('Tab');

  await page.keyboard.down('Control');
  await page.keyboard.press('V');
  await page.keyboard.up('Control');

  await page.keyboard.press('Enter');
});