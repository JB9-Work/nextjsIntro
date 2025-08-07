import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Log in' }).click();

  const header = page.getByRole('heading', { name: 'Dashboard' })
  await expect(header).toBeVisible();
});